import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import SingleUser from "../pages/SingleUser";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

const handleRequest = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const limit = url.searchParams.get("limit") || 3;
  const offset = url.searchParams.get("offset") || 0;
  const search = url.searchParams.get("search") || "";

  const { data } = await axios(
    `/api/users/all?limit=${limit}&offset=${offset}&search=${search}`
  );
  return data;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: handleRequest,
      },
      {
        path: "/single-user/:id",
        element: <SingleUser />,
        loader: ({ params }) =>
          axios(`/api/users/single/${params.id}`).then(({ data }) => data),
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

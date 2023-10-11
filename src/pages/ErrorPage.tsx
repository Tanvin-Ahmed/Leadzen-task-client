import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as Error;
  if (isRouteErrorResponse(error)) {
    return (
      <div
        style={{ height: "100vh" }}
        className="w-full d-flex flex-column justify-content-center align-items-center"
      >
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return (
      <div
        style={{ height: "100vh" }}
        className="w-full d-flex flex-column justify-content-center align-items-center"
      >
        <h1>Oops!</h1>
        <p>{error.message}</p>
      </div>
    );
  }
};

export default ErrorPage;

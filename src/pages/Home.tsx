import Container from "react-bootstrap/Container";
import UserCard from "../components/UserCard";
import { useLoaderData, useNavigation } from "react-router-dom";
import { UserType, UsersAPIResponse } from "../types";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import Search from "../components/Search";
import CustomDropdown from "../components/CustomDropdown";
import { sortingDropdownData } from "../utils/dropdownData";
import React, { useEffect, useState } from "react";

const Home = () => {
  const { state } = useNavigation();
  const { hasNext, hasPrevious, totalPages, users, contentCount } =
    useLoaderData() as UsersAPIResponse;

  const [usersData, setUsersData] = useState<UserType[] | []>([]);
  const [sort, setSort] = useState<string>("asc");

  useEffect(() => {
    const data = sort === "asc" ? users : [...users].reverse();
    setUsersData([...data]);
  }, [users, sort]);

  const handleSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  return (
    <Container>
      <h1 className="text-center py-5">User List</h1>
      <Search />
      <div className="d-flex justify-content-between align-items-center mt-5 mb-3">
        <strong>Total user: {contentCount}</strong>

        <div>
          <CustomDropdown
            title={"Sort user"}
            options={sortingDropdownData}
            onChange={handleSorting}
          />
        </div>
      </div>
      {state === "loading" ? (
        <Loader />
      ) : (
        usersData.map((user: UserType) => (
          <UserCard key={user.id} data={user} />
        ))
      )}
      <Pagination
        totalPages={totalPages}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
      />
    </Container>
  );
};

export default Home;

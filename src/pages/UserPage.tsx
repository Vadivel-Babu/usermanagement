import Usertable from "../components/Usertable";
import Filteruser from "../components/Filteruser";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
//import { User } from "../types/user";
import { useEffect, useState } from "react";

import { Button, Spinner } from "@nextui-org/react";
import { deleteUser, fetchUsers } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user";

const UserPage = () => {
  const { userList, isLoading } = useSelector((state: RootState) => state);
  const [filter, setFilter] = useState("all"); // State to store the current filter
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const filteredUsers = userList
    .filter((user: User) => {
      if (filter === "all") return true;
      if (filter === "active") return user.status === true;
      if (filter === "inactive") return user.status === false;
    })
    .filter((user: User) => {
      return (
        //@ts-ignore
        user?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        //@ts-ignore
        user?.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchUsers());
  }, []);
  function handleDelete(id: string) {
    dispatch(deleteUser(id));
  }

  return (
    <div className="container-lg mx-auto md:my-auto space-y-2 p-3">
      <Filteruser handleFilter={setFilter} handleQuery={setSearchQuery} />
      <Button
        onPress={() => navigate("/user/create")}
        className="max-w mx-auto text-white"
        color="primary"
      >
        Add New User
      </Button>
      {isLoading ? (
        <div className="w-full mx-auto my-auto text-center mt-5">
          <Spinner />
          <p className="font-bold text-xl text-primary">Loading...</p>
        </div>
      ) : filteredUsers.length === 0 ? (
        <p className="font-bold text-2xl text-primary text-center mt-5">
          No User Found
        </p>
      ) : (
        <Usertable data={filteredUsers} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default UserPage;

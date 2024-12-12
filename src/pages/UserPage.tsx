import Usertable from "../components/Usertable";
import Filteruser from "../components/Filteruser";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
//import { User } from "../types/user";
import { useEffect } from "react";

import { Spinner } from "@nextui-org/react";
import { toast } from "react-toastify";
import { fetchUsers } from "../actions/userActions";

const UserPage = () => {
  const { userList, isLoading, error } = useSelector(
    (state: RootState) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchUsers());
    if (error) {
      toast.error(error);
    }
  }, []);

  return (
    <div className="container-lg mx-auto md:my-auto space-y-2 p-3">
      <Filteruser />
      {isLoading ? (
        <div className="w-full mx-auto my-auto text-center mt-5">
          <Spinner />
          <p className="font-bold text-xl text-primary">Loading...</p>
        </div>
      ) : userList.length === 0 ? (
        <p className="font-bold text-2xl text-primary text-center mt-5">
          No User Found
        </p>
      ) : (
        <Usertable data={userList} />
      )}
    </div>
  );
};

export default UserPage;

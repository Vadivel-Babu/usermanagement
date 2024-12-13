import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Chip } from "@nextui-org/react";

const SingleUser = () => {
  const { user } = useSelector((state: RootState) => state);

  return (
    <div className="space-y-2">
      <p className="font-semibold ">Name: {user?.name}</p>
      <p className="font-semibold ">Email: {user?.email}</p>
      <p className="font-semibold ">Region: {user?.region}</p>
      <div className="font-semibold ">
        Status:{" "}
        <Chip
          className="text-white"
          color={user?.status ? "success" : "danger"}
        >
          {user?.status ? "Active" : "Inactive"}
        </Chip>
      </div>
    </div>
  );
};

export default SingleUser;

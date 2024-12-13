import { useDispatch, useSelector } from "react-redux";
import ChartBar from "../components/ChartBar";
import ChartLine from "../components/ChartLine";
import ChartPie from "../components/ChartPie";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { fetchUsers } from "../actions/userActions";

const DashboardPage = () => {
  const { userList, deletedUser } = useSelector((state: RootState) => state);
  const activeUser = userList.filter((user) => user.status === true);
  const inActiveUser = userList.filter((user) => user.status === false);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchUsers());
  }, []);
  return (
    <div className="p-2 container-lg">
      <div className="flex flex-wrap gap-2">
        <div className="rounded-lg shadow-md border-l-4 border-primary p-5">
          <h1 className="font-semibold text-lg md:text-xl">
            Total Users:{" "}
            <span className="font-bold text-xl md:text-3xl text-primary">
              {userList.length}
            </span>{" "}
          </h1>
        </div>
        <div className="rounded-lg shadow-md border-l-4 border-green-500 p-5">
          <h1 className="font-semibold text-lg md:text-xl">
            Active Users:{" "}
            <span className="font-bold text-xl md:text-3xl text-green-500">
              {activeUser.length}
            </span>{" "}
          </h1>
        </div>
        <div className="rounded-lg shadow-md border-l-4 border-red-500 p-5">
          <h1 className="font-semibold text-lg md:text-xl">
            InActive Users:{" "}
            <span className="font-bold text-xl md:text-3xl text-red-500">
              {inActiveUser.length}
            </span>{" "}
          </h1>
        </div>
        <div className="rounded-lg shadow-md border-l-4 border-yellow-500 p-5">
          <h1 className="font-semibold text-lg md:text-xl">
            Deleted Users:{" "}
            <span className="font-bold text-xl md:text-3xl text-yellow-500">
              {deletedUser}
            </span>{" "}
          </h1>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        <ChartBar />
        <ChartLine />
        <ChartPie />
      </div>
    </div>
  );
};

export default DashboardPage;

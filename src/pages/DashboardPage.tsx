import ChartBar from "../components/ChartBar";
import ChartLine from "../components/ChartLine";
import ChartPie from "../components/ChartPie";

const DashboardPage = () => {
  return (
    <div className="p-2 container-lg">
      <div className="flex flex-wrap gap-2">
        <div className="rounded-lg shadow-md border-l-4 border-primary p-5">
          <h1 className="font-semibold text-lg md:text-xl">
            Total Users:{" "}
            <span className="font-bold text-xl md:text-3xl text-primary">
              100
            </span>{" "}
          </h1>
        </div>
        <div className="rounded-lg shadow-md border-l-4 border-green-500 p-5">
          <h1 className="font-semibold text-lg md:text-xl">
            Active Users:{" "}
            <span className="font-bold text-xl md:text-3xl text-green-500">
              100
            </span>{" "}
          </h1>
        </div>
        <div className="rounded-lg shadow-md border-l-4 border-red-500 p-5">
          <h1 className="font-semibold text-lg md:text-xl">
            InActive Users:{" "}
            <span className="font-bold text-xl md:text-3xl text-red-500">
              100
            </span>{" "}
          </h1>
        </div>
        <div className="rounded-lg shadow-md border-l-4 border-yellow-500 p-5">
          <h1 className="font-semibold text-lg md:text-xl">
            Deleted Users:{" "}
            <span className="font-bold text-xl md:text-3xl text-yellow-500">
              100
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

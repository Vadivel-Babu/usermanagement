import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { calculateUserRegistrations } from "../utils/calculate";
import { useMemo } from "react";

const ChartLine = () => {
  const { userList } = useSelector((state: RootState) => state);
  //@ts-ignore
  const getTrend = useMemo(
    () => calculateUserRegistrations(userList),
    [userList]
  );

  return (
    <div className="w-[300px] h-[250px] md:w-[400px] md:h-[350px] md:mt-2">
      <p className="font-bold text-primary text-center">
        No of user register last 6 months.
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={getTrend}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartLine;

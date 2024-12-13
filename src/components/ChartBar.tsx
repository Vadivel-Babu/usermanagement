import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { RootState } from "../store";

const ChartBar = () => {
  const { userList } = useSelector((state: RootState) => state);

  const africa = userList.filter((user) => user.region === "africa").length;
  const america = userList.filter((user) => user.region === "america").length;
  const asia = userList.filter((user) => user.region === "asia").length;
  const europe = userList.filter((user) => user.region === "europe").length;
  const data = [
    {
      name: "Region",
      africa: africa,
      america: america,
      asia: asia,
      europe,
    },
  ];
  return (
    <div className="w-[300px] h-[250px] md:mt-2">
      <p className="font-bold text-primary text-center">
        Users Based on Region
      </p>
      <ResponsiveContainer width="100%" height={"100%"}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="africa"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="america"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
          <Bar
            dataKey="asia"
            fill="red"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
          <Bar
            dataKey="europe"
            fill="#9534eb"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartBar;

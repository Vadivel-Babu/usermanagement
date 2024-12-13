import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const ChartPie = () => {
  const { userList } = useSelector((state: RootState) => state);

  const activeUser = userList.filter((user) => user.status === true).length;
  const inActiveUser = userList.filter((user) => user.status === false).length;
  const data01 = [
    { name: "Active", value: activeUser },
    { name: "In Active", value: inActiveUser },
  ];

  return (
    <div className="w-[300px] h-[250px] md:w-[400px] md:h-[350px] md:mt-2">
      <p className="font-bold text-primary text-center">
        Active and In active users
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartPie;

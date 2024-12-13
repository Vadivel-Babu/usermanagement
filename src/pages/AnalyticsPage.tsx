import ChartBar from "../components/ChartBar";
import ChartLine from "../components/ChartLine";
import ChartPie from "../components/ChartPie";

const AnalyticsPage = () => {
  return (
    <div className="container-lg p-2">
      <div className="flex gap-2 flex-wrap">
        <ChartBar />
        <ChartLine />
        <ChartPie />
      </div>
    </div>
  );
};

export default AnalyticsPage;

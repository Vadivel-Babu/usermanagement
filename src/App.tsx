import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Button } from "@nextui-org/react";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardPage from "./pages/DashboardPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="md:flex gap-3">
        <Navbar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/task/edit/:id" element={"<EditTaskPage />"} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/user/:id" element={"<TaskPage />"} />
          <Route path="/analytic" element={<AnalyticsPage />} />
          <Route
            path="*"
            element={
              <div className="text-center font-bold text-3xl w-full h-full mt-10">
                <p>Page Not Found</p>
                <Button>
                  <Link to={"/"}>Back To Home</Link>
                </Button>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

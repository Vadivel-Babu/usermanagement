import { Link, Route, Routes } from "react-router-dom";
import { Button } from "@nextui-org/react";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardPage from "./pages/DashboardPage";

import UserPage from "./pages/UserPage";
import CreateuserPage from "./pages/CreateuserPage";
import EdituserPage from "./pages/EdituserPage";
import LoginForm from "./components/LoginForm";
import AuthUser from "./Authuser";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { user } = useContext(AppContext);
  return (
    <>
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
        {user ? <Navbar /> : null}
        {/* <AuthUser>
          <Navbar />
        </AuthUser> */}

        <Routes>
          <Route
            path="/"
            element={
              <AuthUser>
                {" "}
                <DashboardPage />
              </AuthUser>
            }
          />
          <Route
            path="/user/edit/:id"
            element={
              <AuthUser>
                {" "}
                <EdituserPage />{" "}
              </AuthUser>
            }
          />
          <Route
            path="/users"
            element={
              <AuthUser>
                <UserPage />{" "}
              </AuthUser>
            }
          />
          <Route
            path="/user/create"
            element={
              <AuthUser>
                <CreateuserPage />{" "}
              </AuthUser>
            }
          />

          <Route
            path="/login"
            element={
              <AuthUser>
                <LoginForm />{" "}
              </AuthUser>
            }
          />
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
    </>
  );
}

export default App;

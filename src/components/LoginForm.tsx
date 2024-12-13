//@ts-nocheck
import { Input } from "@nextui-org/react";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const LoginForm = () => {
  const [data, setData] = useState({ name: "", password: "" });
  const { login } = useContext(AppContext);

  return (
    <form className="p-3 shadow-xl rounded-xl space-y-3 mx-auto mt-[50px]">
      <h1 className="font-bold text-2xl text-center">Login</h1>
      <Input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <Input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          if (
            data.name.trim().length === 0 ||
            data.password.trim().length === 0
          ) {
            toast.error("Enter valid name and password");
            return;
          }
          login(data);
        }}
        className="text-white bg-primary px-3 py-1 rounded-lg"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;

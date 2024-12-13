//@ts-nocheck
import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext<User | null>(null);

const getUserFromLocalStorage = () => {
  //@ts-ignore
  return JSON.parse(localStorage.getItem("admin")) || null;
};

const Appcontext = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(getUserFromLocalStorage());
  const navigate = useNavigate();

  function login(user: User) {
    setUser(user);
    localStorage.setItem("admin", JSON.stringify(user));
    navigate("/");
  }
  function logout() {
    setUser(null);
    localStorage.removeItem("admin");
    navigate("/login");
  }

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default Appcontext;

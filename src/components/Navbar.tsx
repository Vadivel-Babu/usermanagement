import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Button, useDisclosure } from "@nextui-org/react";
import { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Menu from "./Menu";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const location = useLocation();
  const [minmize, setMinimize] = useState<boolean>(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  //@ts-ignore
  const { logout } = useContext(AppContext);

  return (
    <div className="bg-primary md:h-screen text-white md:w-max transition md:rounded-r-xl">
      <div className="flex md:flex-col justify-between h-full">
        <div className="flex md:flex-col items-center gap-6 md:items-start md:justify-center">
          <NavLink to="/">
            <p
              className={`text-secondary text-xl p-6 font-semibold tracking-wider  ${
                minmize ? "md:text-xl" : "md:text-4xl"
              }`}
            >
              U&A
            </p>
          </NavLink>
          <div className="hidden sm:flex sm:gap-5 md:gap-3 md:flex-col  md:w-full md:justify-center md:items-center">
            <NavLink
              to="/"
              className={`hover:text-secondary w-full md:text-2xl md:px-3 md:py-1  flex ${
                minmize && "justify-center"
              } gap-2 md:mt-5 ${
                location.pathname === "/"
                  ? "md:bg-gradient text-secondary md:border-r-3 md:border-secondary"
                  : ""
              }`}
            >
              <span>
                <Icon icon="weui:home-filled" fontSize={25} />
              </span>

              <p className={` ${minmize ? "md:hidden" : "md:inline-block"}`}>
                Dashboard
              </p>
            </NavLink>
            <NavLink
              to="/users"
              className={`hover:text-secondary w-full md:text-2xl md:px-3 md:py-1 flex ${
                minmize && "justify-center"
              } gap-2 ${
                location.pathname.includes("user")
                  ? "bg-mobile-gradient md:bg-gradient text-secondary   md:border-r-3 border-secondary"
                  : ""
              }`}
            >
              <span>
                <Icon icon="material-symbols:user-attributes" fontSize={25} />
              </span>
              <p className={`${minmize ? "md:hidden" : "md:inline-block"}`}>
                Users
              </p>
            </NavLink>
          </div>
        </div>
        <div className="flex gap-2 p-6 md:block md:space-y-2">
          <div className="flex items-center gap-2">
            <Avatar style={{ backgroundColor: "#fde3cf", color: "#f56a00" }} />

            {!minmize && (
              <p className="uppercase font-semibold text-xl hidden md:inline-block">
                Admin
              </p>
            )}
          </div>
          <Button
            isIconOnly={minmize}
            disableRipple
            className="bg-my-gradient sm:text-sm"
            onPress={logout}
          >
            {minmize ? (
              <Icon icon={"material-symbols:logout"} fontSize={20} />
            ) : (
              "Logout"
            )}
          </Button>
          <div
            onClick={() => setMinimize(!minmize)}
            className="hidden md:flex items-center gap-2 text-xl cursor-pointer hover:text-hover-green"
          >
            <Icon
              icon={
                minmize
                  ? "material-symbols-light:arrow-circle-right"
                  : "material-symbols-light:arrow-circle-left-rounded"
              }
              fontSize={35}
            />
            {!minmize && <p className="text-lg">minimize</p>}
          </div>
          <Button
            onPress={onOpen}
            isIconOnly
            color="secondary"
            className="text-black sm:hidden"
          >
            <Icon icon={"mdi:hamburger-menu-back"} fontSize={20} />
          </Button>
        </div>
      </div>
      <Menu isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default Navbar;

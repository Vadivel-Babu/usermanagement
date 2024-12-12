import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
};

const Menu = ({ isOpen, onOpenChange }: Props) => {
  return (
    <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-primary">
        {(onClose) => (
          <>
            <DrawerHeader className="flex flex-col gap-1 text-secondary  font-semibold text-lg">
              Menu
            </DrawerHeader>
            <DrawerBody>
              <NavLink
                to={"/"}
                className={"text-secondary hover:text-light-secondary"}
                onClick={onClose}
              >
                Dashboard
              </NavLink>
              <NavLink
                to={"/"}
                className={"text-secondary hover:text-light-secondary"}
                onClick={onClose}
              >
                Dashboard
              </NavLink>
              <NavLink
                to={"/"}
                className={"text-secondary hover:text-light-secondary"}
                onClick={onClose}
              >
                Dashboard
              </NavLink>
            </DrawerBody>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default Menu;

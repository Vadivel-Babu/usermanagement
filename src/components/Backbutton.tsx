import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const Backbutton = () => {
  const navigate = useNavigate();
  return (
    <Button
      onPress={() => navigate(-1)}
      isIconOnly
      color="primary"
      className="text-white"
    >
      <Icon icon={"material-symbols-light:arrow-left-alt"} fontSize={20} />
    </Button>
  );
};

export default Backbutton;

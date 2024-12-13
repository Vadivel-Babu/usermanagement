import { useParams } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import FormUser from "../components/FormUser";

const EdituserPage = () => {
  const { id } = useParams();
  return (
    <div className="p-2 w-full">
      <Backbutton />
      <div className="container-lg mx-auto w-max my-auto">
        <h1 className="font-bold text-xl text-center my-3 md:text-4xl text-primary">
          Edit User
        </h1>
        <FormUser type="edit" id={id} />
      </div>
    </div>
  );
};

export default EdituserPage;

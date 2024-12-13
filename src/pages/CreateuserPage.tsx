import Backbutton from "../components/Backbutton";
import FormUser from "../components/FormUser";

const CreateuserPage = () => {
  return (
    <div className="p-2 w-full">
      <Backbutton />
      <div className="container-lg mx-auto w-max my-auto">
        <h1 className="font-bold text-xl text-center my-3 md:text-4xl text-primary">
          Add User
        </h1>
        <FormUser type="create" />
      </div>
    </div>
  );
};

export default CreateuserPage;

import {
  Button,
  DateInput,
  Input,
  Select,
  SelectItem,
  Spinner,
  Switch,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { User } from "../types/user";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../actions/userActions";
import { AppDispatch, RootState } from "../store";
import { useNavigate, useParams } from "react-router-dom";

type Props = {
  type: "edit" | "create";
  id?: string;
};

const FormUser = ({ type }: Props) => {
  const { id: userid } = useParams();
  const [data, setData] = useState<User>({
    name: "",
    email: "",
    region: "",
    status: false,
    date: "",
  });
  const { isLoading, userList } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const statuses = [
    { key: "asia", label: "Asia" },
    { key: "africa", label: "Africa" },
    { key: "america", label: "America" },
    { key: "europe", label: "Europe" },
  ];

  //handle user input
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  //dispatch new user
  function handleAddUser(e: { preventDefault: () => void }) {
    e.preventDefault();

    const user = data;
    //@ts-ignore
    dispatch(addUser(user));
    navigate(-1);
    setData({
      name: "",
      email: "",
      region: "",
      status: false,
      date: "",
    });
  }

  function handleUpdateUser(e: { preventDefault: () => void }) {
    e.preventDefault();

    const user = { id: userid, ...data };
    //@ts-ignore
    dispatch(updateUser(user));
    navigate(-1);
    setData({
      name: "",
      email: "",
      region: "",
      status: false,
      date: "",
    });
  }
  useEffect(() => {
    const user = userList.find((user: User) => user.id === userid);
    if (type === "edit") {
      setData({
        name: user?.name,
        email: user?.email,
        region: user?.region,
        status: user?.status,
        date: user?.date,
      });
      console.log(user);
    }
  }, []);
  return (
    <form className="p-3 space-y-2 shadow-xl rounded-lg w-[300px] sm:w-[400px]">
      <Input
        type="text"
        name="name"
        value={data?.name || ""}
        onChange={handleChange}
        placeholder="Enter the user name"
      />
      <Input
        type="email"
        onChange={handleChange}
        name="email"
        placeholder="Enter the user email"
        value={data?.email || ""}
      />
      {type === "edit" && <p>Selected Region: {data.region}</p>}
      <Select
        onSelectionChange={(e) => setData({ ...data, region: e.currentKey })}
        className="w-[200px]"
        label="select region"
        name="region"
      >
        {statuses.map((status) => (
          <SelectItem key={status.key}>{status.label}</SelectItem>
        ))}
      </Select>
      {type === "edit" && <p>Date: {data.date}</p>}
      <DateInput
        label="Registered date"
        labelPlacement={"inside"}
        //placeholderValue={new CalendarDate(1995, 11, 6)}
        //value={data?.date}
        onChange={(e) =>
          setData({
            ...data,
            date: `${e?.day}/${e?.month}/${e?.year}`,
          })
        }
      />
      <Switch
        isSelected={data?.status}
        onValueChange={(s: boolean) => setData({ ...data, status: s })}
      >
        user status
      </Switch>
      <div className="w-full flex justify-between">
        <Button onPress={() => navigate(-1)} color="danger">
          Cancel
        </Button>
        <button
          onClick={type === "edit" ? handleUpdateUser : handleAddUser}
          className="bg-primary text-white rounded-lg px-3 py-1"
        >
          {isLoading ? (
            <Spinner color="secondary" />
          ) : type === "edit" ? (
            "Update User"
          ) : (
            "Add User"
          )}
        </button>
      </div>
    </form>
  );
};

export default FormUser;

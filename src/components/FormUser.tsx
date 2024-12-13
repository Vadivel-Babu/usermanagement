import {
  Button,
  DateInput,
  Input,
  Select,
  SelectItem,
  Switch,
} from "@nextui-org/react";
import { CalendarDate } from "@internationalized/date";
import { useState } from "react";
import { User } from "../types/user";
import { toast } from "react-toastify";

const FormUser = () => {
  const [data, setData] = useState<User | null>(null);
  const statuses = [
    { key: "all", label: "All" },
    { key: "asia", label: "Asia" },
    { key: "africa", label: "Africa" },
    { key: "america", label: "America" },
    { key: "europe", label: "Europe" },
  ];

  //handle user input
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  //validate the data
  function validate() {
    if (data?.name?.trim().length === 0) {
      toast.error("Enter the name");
      return false;
    }
  }

  //dispatch new user
  function handleAddUser(e: { preventDefault: () => void }) {
    e.preventDefault();
    console.log("hi");

    const user = data;
    console.log(user);
  }
  return (
    <form
      action=""
      className="p-3 space-y-2 shadow-xl rounded-lg w-[300px] sm:w-[400px]"
    >
      <Input
        type="text"
        name="Name"
        value={data?.name}
        onChange={handleChange}
        placeholder="Enter the user name"
      />
      <Input
        type="email"
        onChange={handleChange}
        name="Email"
        placeholder="Enter the user email"
      />
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
        <Button color="danger">Cancel</Button>
        <button
          onClick={handleAddUser}
          className="bg-primary text-white rounded-lg px-3 py-1"
        >
          Add User
        </button>
      </div>
    </form>
  );
};

export default FormUser;

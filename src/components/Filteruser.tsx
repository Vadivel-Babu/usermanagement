import { Input, Select, SelectItem } from "@nextui-org/react";

type Props = {
  handleFilter: (e: any) => void;
  handleQuery: (e: any) => void;
};

const Filteruser = ({ handleFilter, handleQuery }: Props) => {
  const statuses = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "inactive", label: "Inactive" },
  ];
  return (
    <div className="flex flex-wrap w-full justify-center md:flex-wrap gap-3">
      <div className="flex gap-2 flex-wrap justify-center w-full">
        <Input
          label="search"
          type="email"
          className="w-[200px]"
          placeholder="Search by name"
          onChange={(e) => handleQuery(e.target.value)}
        />
        <Select
          onSelectionChange={(e) => handleFilter(e.currentKey)}
          className="w-[200px]"
          label="Filter By user status"
        >
          {statuses.map((status) => (
            <SelectItem key={status.key}>{status.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default Filteruser;

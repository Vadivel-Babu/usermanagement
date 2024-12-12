import { Input, Select, SelectItem } from "@nextui-org/react";

export const regions = [
  { key: "all", label: "All" },
  { key: "asia", label: "Asia" },
  { key: "africa", label: "Africa" },
  { key: "europe", label: "Europe" },
];

export const statuses = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "inactive", label: "Inactive" },
];

const Filteruser = () => {
  return (
    <div className="flex flex-wrap w-full justify-center md:flex-wrap gap-3">
      <div className="flex gap-2 flex-wrap justify-center w-full">
        <Input
          label="search"
          type="email"
          className="w-[200px]"
          placeholder="Search by name"
        />
        <Select className="w-[200px]" label="Filter By Region">
          {regions.map((region) => (
            <SelectItem key={region.key}>{region.label}</SelectItem>
          ))}
        </Select>
      </div>
      <Select className="max-w-[400px] md:w-xs" label="Filter By user status">
        {statuses.map((status) => (
          <SelectItem key={status.key}>{status.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default Filteruser;

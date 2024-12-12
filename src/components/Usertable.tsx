import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Button, Chip, Pagination } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const columns: any[] = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "Region",
    label: "REGION",
  },
  {
    key: "status",
    label: "STATUS",
  },
  {
    key: "action",
    label: "Action",
  },
];

const Usertable = ({ data: users }: { data: any }) => {
  const [current, setCurrent] = useState(1);
  return (
    <div className="max-w-[500px] mx-auto">
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {users.slice((current - 1) * 5, current * 5).map((user: any) => (
            <TableRow key={user.id}>
              <TableCell>{user?.name}</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>
                <Chip color="success" className="text-white" size="sm">
                  active
                </Chip>
              </TableCell>
              <TableCell className="space-x-1">
                <Button size="sm" isIconOnly color="danger">
                  <Icon icon={"mdi:trash-can-empty"} />
                </Button>
                <Button size="sm" isIconOnly color="warning">
                  <Icon icon={"mdi:edit"} />
                </Button>
                <Button size="sm" isIconOnly color="primary">
                  <Icon icon={"mdi:eye-circle"} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        className="mt-3"
        color={"primary"}
        page={current}
        total={Math.floor(users?.length / 5)}
        onChange={(p: number) => setCurrent(p)}
      />
    </div>
  );
};

export default Usertable;

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import {
  Chip,
  Pagination,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { User } from "../types/user";
import { handleUser } from "../slices/userSlice";
import SingleUser from "./SingleUser";

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

type Props = {
  data: User[];
  handleDelete: (id: string) => void;
};

const Usertable = ({ data: users, handleDelete }: Props) => {
  const [current, setCurrent] = useState(1);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
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
            <TableRow key={user?.id}>
              <TableCell>{user?.name}</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>
                <Chip
                  color={user?.status ? "success" : "danger"}
                  className="text-white"
                  size="sm"
                >
                  {user?.status ? "Active" : "Inactive"}
                </Chip>
              </TableCell>
              <TableCell className="space-x-1">
                <Button
                  size="sm"
                  isIconOnly
                  color="danger"
                  onPress={() => handleDelete(user?.id)}
                >
                  <Icon icon={"mdi:trash-can-empty"} />
                </Button>
                <Button
                  onPress={() => navigate(`/user/edit/${user?.id}`)}
                  size="sm"
                  isIconOnly
                  color="warning"
                >
                  <Icon icon={"mdi:edit"} />
                </Button>
                <Button
                  onPress={() => {
                    dispatch(handleUser(user));
                    onOpen();
                  }}
                  size={"sm"}
                  isIconOnly
                  color="primary"
                >
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
        total={Math.ceil(users?.length / 5)}
        onChange={(p: number) => setCurrent(p)}
      />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">User Detail</ModalHeader>
          <ModalBody>
            <SingleUser />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Usertable;

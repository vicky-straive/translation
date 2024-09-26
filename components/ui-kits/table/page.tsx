import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { useRecoilValue } from "recoil";
import { selectedItemsState } from "@/recoil/atoms";

const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
];

export default function App() {
  const selectedKeys = useRecoilValue(selectedItemsState);

  const columns = React.useMemo(() => {
    if (selectedKeys.size === 0) {
      return [{ key: "default", label: "Select items from dropdown" }];
    }
    return Array.from(selectedKeys).map((key) => ({
      key: key.toString(),

      label: key.toString(),
    }));
  }, [selectedKeys]);
  return (
    <>
      {columns.length > 0 && (
        <Table aria-label="Dynamic content based on dropdown selection">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>
                    {getKeyValue(item, columnKey.toString())}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </>
  );
}

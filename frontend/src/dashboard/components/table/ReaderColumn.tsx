import { ColumnDef } from "@tanstack/react-table";
import { Reader } from "@/dashboard/interfaces/reader";
import { ReaderActions } from "../actions/ReaderActions";

export const readerColumns: ColumnDef<Reader>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "lastname",
    header: "Apellido",
  },
  {
    accessorKey: "dni",
    header: "Dni",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Teléfono",
  },
  {
    accessorKey: "address",
    header: "Dirección",
  },
  {
    id: "actions",
    cell: ({ row }) => <ReaderActions author={row.original} />,
  },
];

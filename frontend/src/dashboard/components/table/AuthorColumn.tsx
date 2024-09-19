import { ColumnDef } from "@tanstack/react-table";
import { Author } from "@/dashboard/interfaces/author";
import { AuthorActions } from "../actions/AuthorActions";

export const authorColumns: ColumnDef<Author>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "books",
    header: "Cantidad de libros",
  },
  {
    id: "actions",
    cell: ({ row }) => <AuthorActions author={row.original} />,
  },
];

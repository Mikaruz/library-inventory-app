import { ColumnDef } from "@tanstack/react-table";
import { CategoryActions } from "../actions/CategoryActions";
import { Author } from "@/dashboard/interfaces/author";

export const authorColumns: ColumnDef<Author>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "books",
    header: "Cantidad de libros",
  },
  /*   {
    id: "actions",
    cell: ({ row }) => <CategoryActions category={row.original} />,
  }, */
];

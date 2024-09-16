import { Category } from "@/dashboard/interfaces/category";
import { ColumnDef } from "@tanstack/react-table";
import { CategoryActions } from "../actions/CategoryActions";

export const columns: ColumnDef<Category>[] = [
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
    cell: ({ row }) => <CategoryActions category={row.original} />,
  },
];

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { Category } from "@/dashboard/interfaces/category";
import { useDeleteCategoryMutation } from "@/dashboard/hooks/category/useDeleteCategoryMutation";

export const CategoryActions: React.FC<{ category: Category }> = ({
  category,
}) => {
  const deleteCategoryMutation = useDeleteCategoryMutation();

  const handleCopyId = () => {
    navigator.clipboard.writeText(category.id);
    toast("ID de la categoría copiado en el portapapeles", {
      position: "top-right",
    });
  };

  const handleDelete = () => {
    console.log(category.id);
    deleteCategoryMutation.mutate(category.id);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <DropdownMenuItem onClick={handleCopyId}>Copiar ID</DropdownMenuItem>
        <DropdownMenuItem onClick={handleDelete}>Eliminar</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

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

import { useCategory } from "@/dashboard/hooks/category/useCategory";
import { useQueryCategory } from "@/dashboard/hooks/category/useQueryCategory";
import { useParams } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const CategoryPage = () => {
  const params = useParams();
  const { deleteCategory } = useCategory();
  const categoryId = params.id ?? "0";

  const { isLoading, category } = useQueryCategory(categoryId);

  if (isLoading) {
    return <div>Cargando</div>;
  }

  return (
    <main className="h-full w-full p-4 xl:ml-64 xl:w-[calc(100%-256px)] xl:p-7">
      <div className="flex w-max gap-2">
        <button className="flex w-max items-center rounded-md bg-gray-800 px-4 py-2 text-gray-200">
          Editar categoría
        </button>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="flex w-max items-center rounded-md bg-gray-800 px-4 py-2 text-gray-200">
              Eliminar categoría
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  deleteCategory(categoryId);
                  console.log("Category deleted");
                }}
              >
                Eliminar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      {/* //TODO: Agregar tabla de categoría */}
      {category?.name}
    </main>
  );
};

import { Link } from "react-router-dom";
import { columns } from "../../components/category/CategoryColumn";
import { DataTable } from "../../components/category/CategoryTable";
import { useQueryCategories } from "../../hooks/category/useQueryCategories";

export const CategoriesPage = () => {
  const { isLoading, categories } = useQueryCategories();

  return (
    <main className="h-full w-full p-4 xl:ml-64 xl:w-[calc(100%-256px)] xl:px-7">
      <Link
        className="flex w-max items-center rounded-md bg-gray-800 px-4 py-2 text-gray-200"
        to="/dashboard/categories/create"
      >
        Crear categoría
      </Link>

      {/* //TODO: Agregar el Spinner */}
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <div className="py-4">
          <DataTable columns={columns} data={categories} />
        </div>
      )}
    </main>
  );
};

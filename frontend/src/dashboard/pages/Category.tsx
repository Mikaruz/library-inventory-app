import { Link } from "react-router-dom";
import { CategoryCard } from "../components/category/CategoryCard";

export const Category = () => {
  return (
    <main className="h-screen w-full p-4 xl:ml-64 xl:w-[calc(100%-256px)] xl:p-7">
      <Link
        className="flex w-max items-center rounded-md bg-gray-800 px-4 py-2 text-gray-200"
        to="/categories/create"
      >
        Crear categoría
      </Link>
    </main>
  );
};

import { Link } from "react-router-dom";
import { Category, columns } from "../components/category/CategoryColumn";
import { DataTable } from "../components/category/CategoryTable";

async function getData(): Promise<Category[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "Category 1",
      amount: 100,
    },
  ];
}
const data = await getData();

export const CategoryPage = () => {
  return (
    <main className="h-full w-full p-4 xl:ml-64 xl:w-[calc(100%-256px)] xl:px-7">
      <Link
        className="flex w-max items-center rounded-md bg-gray-800 px-4 py-2 text-gray-200"
        to="/categories/create"
      >
        Crear categoría
      </Link>
      <div className="py-5">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
};

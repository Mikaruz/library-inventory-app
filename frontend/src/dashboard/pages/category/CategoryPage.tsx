import { useCategory } from "@/dashboard/hooks/useCategory";
import { useParams } from "react-router-dom";

export const CategoryPage = () => {
  const params = useParams();
  const categoryId = params.id ?? "0";

  const { isLoading, category } = useCategory(categoryId);

  if (isLoading) {
    return <div>Cargando</div>;
  }

  return (
    <main className="h-screen w-full p-4 xl:ml-64 xl:w-[calc(100%-256px)] xl:p-7">
      {category?.name}
    </main>
  );
};

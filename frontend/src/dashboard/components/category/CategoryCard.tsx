import { Link } from "react-router-dom";

interface CategoryCardProps {
  id: string;
  name: string;
}

export const CategoryCard = ({ id, name }: CategoryCardProps) => {
  return (
    <Link
      to={`/category/${id}`}
      className="flex h-14 w-max items-center rounded-md bg-gray-800 p-4 text-gray-200"
    >
      <h5>{name}</h5>
    </Link>
  );
};

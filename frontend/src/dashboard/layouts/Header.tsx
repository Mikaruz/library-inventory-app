import { useAuth } from "@/auth/hooks/useAuth";

interface Props {
  currentRoute: string;
}

export const Header = ({ currentRoute }: Props) => {
  const { user } = useAuth();

  const initials = `${user?.name.charAt(0)}${user?.lastName.charAt(0)}`;

  return (
    <div className="flex w-full items-center justify-between px-4 py-4 xl:ml-64 xl:w-[calc(100%-256px)] xl:px-7">
      <h2 className="text-2xl font-semibold">{getTitle(currentRoute)}</h2>
      <div className="flex items-center justify-between gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-xs font-semibold text-white">
          {initials}
        </div>
        <p className="font-medium">{`${user?.name} ${user?.lastName}`}</p>
      </div>
    </div>
  );
};

const getTitle = (currentRoute: string) => {
  if (currentRoute.includes("/dashboard/categories")) {
    return "Categorías";
  }

  switch (currentRoute) {
    case "/dashboard/home":
      return "Inicio";
    case "/dashboard/loans":
      return "Préstamos";
    case "/dashboard/books":
      return "Libros";
    case "/dashboard/readers":
      return "Lectores";
    default:
      return "Not found";
  }
};

interface HeaderProps {
  name: string;
  lastName: string;
  currentRoute: string;
}

export const Header = ({ name, lastName, currentRoute }: HeaderProps) => {
  const initials = `${name.charAt(0)}${lastName.charAt(0)}`;

  return (
    <div className="flex h-20 w-full items-center justify-between px-4 xl:ml-64 xl:w-[calc(100%-256px)] xl:px-7">
      <h2 className="text-2xl font-semibold">{getTitle(currentRoute)}</h2>
      <div className="flex items-center justify-between gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-xs font-semibold text-white">
          {initials}
        </div>
        <p className="font-medium">{`${name} ${lastName}`}</p>
      </div>
    </div>
  );
};

const getTitle = (currentRoute: string) => {
  switch (currentRoute) {
    case "/":
      return "Inicio";
    case "/loans":
      return "Préstamos";
    case "/books":
      return "Libros";
    case "/categories":
      return "Categorías";
    case "/readers":
      return "Lectores";
    default:
      return "Not found";
  }
};

interface HeaderProps {
  name: string;
  lastName: string;
  currentRoute: string;
}

export const Header = ({ name, lastName, currentRoute }: HeaderProps) => {
  const initials = `${name.charAt(0)}${lastName.charAt(0)}`;

  return (
    <div className="h-10 flex w-full xl:w-[calc(100%-256px)] xl:ml-64 justify-between items-center px-2">
      <h2 className="text-md xl:text-xl font-semibold">
        {getTitle(currentRoute)}
      </h2>
      <div className="flex justify-between items-center gap-2">
        <div className="bg-gray-800 text-white font-semibold text-xs w-7 h-7 rounded-full flex items-center justify-center">
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

import { useState } from "react";
import { SideBarLinks } from "../components/SideBarLinks";
import {
  Home,
  LayoutGrid,
  Book,
  BookCopy,
  BookMarked,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export const SideBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div
        className={`fixed top-0 z-50 flex h-full w-3/4 flex-col justify-between overflow-y-auto bg-gray-100 p-8 shadow-2xl transition-all dark:bg-black md:w-64 xl:left-0 ${
          showMenu ? "left-0" : "-left-full"
        } `}
      >
        <div>
          <div>
            <h1 className="text-xl font-bold uppercase">College A</h1>
            <h2 className="text-md">Biblioteca</h2>
          </div>

          <div className="my-4 border-t border-gray-300"></div>

          <div className="mt-6 flex flex-col gap-2">
            <SideBarLinks to="/" text="Inicio" icon={Home} />
            <SideBarLinks to="/loans" text="Préstamos" icon={BookCopy} />
            <SideBarLinks to="/books" text="Libros" icon={Book} />
            <SideBarLinks
              to="/categories"
              text="Categorías"
              icon={LayoutGrid}
            />
            <SideBarLinks to="/readers" text="Lectores" icon={BookMarked} />
          </div>
        </div>
        <div>
          <div className="my-4 border-t border-gray-300"></div>
          <div className="flex items-center gap-3">
            <LogOut />
            <h5>Cerrar sesión</h5>
          </div>
        </div>
      </div>
      <button
        onClick={toggleMenu}
        className="fixed bottom-6 right-6 rounded-full bg-gray-100 p-4 dark:bg-black xl:hidden"
      >
        {showMenu ? <X /> : <Menu />}
      </button>
    </>
  );
};

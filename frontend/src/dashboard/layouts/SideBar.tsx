import { useState } from "react";
import {
  RiCloseLine,
  RiHomeFill,
  RiLogoutBoxLine,
  RiMenu3Fill,
} from "react-icons/ri";
import { SideBarLinks } from "../components/SideBarLinks";
import { PiBookFill, PiBookOpenUserFill } from "react-icons/pi";
import { FaBookReader } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";

export const SideBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div
        className={`fixed top-0 w-3/4 xl:left-0 md:w-64 h-full shadow-2xl bg-gray-100 p-8 flex flex-col justify-between z-50 transition-all dark:bg-black ${
          showMenu ? "left-0" : "-left-full"
        } `}
      >
        <div>
          <div>
            <h1 className="text-xl uppercase font-bold">College A</h1>
            <h2 className="text-md">Biblioteca</h2>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          <div className="flex gap-2 flex-col mt-6">
            <SideBarLinks to="/" text="Inicio" icon={RiHomeFill} />
            <SideBarLinks
              to="/loans"
              text="Préstamos"
              icon={PiBookOpenUserFill}
            />
            <SideBarLinks to="/books" text="Libros" icon={PiBookFill} />
            <SideBarLinks
              to="/categories"
              text="Categorías"
              icon={TbCategoryFilled}
            />
            <SideBarLinks to="/readers" text="Lectores" icon={FaBookReader} />
          </div>
        </div>
        <div>
          <div className="border-t border-gray-300 my-4"></div>
          <div className="flex items-center gap-3">
            <RiLogoutBoxLine />
            <h5>Cerrar sesión</h5>
          </div>
        </div>

        {/*   <nav>
          <h1>Soy un sidebar</h1>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/loans">Prestamos</NavLink>
          <NavLink to="/books">Libros</NavLink>
          <NavLink to="/categories">Categorías</NavLink>
          <NavLink to="/readers">Lectores</NavLink>
        </nav> */}
      </div>
      <button
        onClick={toggleMenu}
        className="xl:hidden fixed bottom-6 right-6 bg-gray-100 p-4 rounded-full dark:bg-black"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </>
  );
};

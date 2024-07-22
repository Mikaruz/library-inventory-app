import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Biblioteca</h1>
      <p>¡Bienvenido a la biblioteca!</p>
      <p>Por favor, inicia sesión para continuar.</p>
      <Link to="/login">Ingresar</Link>
    </div>
  );
};

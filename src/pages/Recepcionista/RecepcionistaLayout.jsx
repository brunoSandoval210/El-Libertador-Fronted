import { NavLink, Outlet } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

export default function RecepcionistaLayout() {
  return (
    <div className="contenedor-recepcionista">
      <div className="header">
        <div className="logo-header">
          <h1 className="nombre">RECEPCIONISTA</h1>
          <h1>HOTEL LIBERTADOR</h1>
        </div>
        <ul className="navbar">
          <li>
            <NavLink to={"reservas"}>
              Reservas<IoIosArrowUp className="icono" />
            </NavLink>
          </li>
          <li>
            <NavLink to={"habitaciones"}>
              Habitaciones<IoIosArrowUp className="icono" />
            </NavLink>
          </li>
          <li>
            <NavLink to={"servicios"}>
              Servicios<IoIosArrowUp className="icono" />
            </NavLink>
          </li>
          <li>
            <NavLink to={"."}>Log Out</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
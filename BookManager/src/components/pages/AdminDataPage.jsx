import { TableSection } from "../elements/TableSection";
import { SucursalProvider } from "../../context/SucursalContext";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export function AdminDataPage() {
  const headers = ["Nombre", "Sucursal", "Fecha ingreso", "Cargo", "Telefono"];

  const [empleado, setEmpleado] = useState([]);

  const loadEmpleado = async () => {
    const response = await fetch("http://localhost:4000/empleado");
    const data = await response.json();
    // a = data;
    // console.log(data);
    setEmpleado(data);
  };

  useEffect(() => {
    loadEmpleado();
  }, []);

  return (
    <SucursalProvider>
      <Link to={"/general-menu"}>
        {" "}
        <IoChevronBackCircleOutline
          size={40}
          className="absolute left-6 top-4"
        />{" "}
      </Link>
      <TableSection
        title="Consultar empleados"
        filters="true"
        headers={headers}
        data={empleado}
        color="light-blue"
      />
    </SucursalProvider>
  );
}

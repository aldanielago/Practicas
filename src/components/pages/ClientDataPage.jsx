import { TableSection } from "../elements/TableSection";
import { SucursalProvider } from "../../context/SucursalContext";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export function ClientDataPage() {
  const [cliente, setCliente] = useState([]);

  const loadCliente = async () => {
    const response = await fetch("http://localhost:4000/cliente");
    const data = await response.json();
    setCliente(data);
  };

  useEffect(() => {
    loadCliente();
  }, []);

  const headers = ["Nombre", "Sucursal", "Fecha inscripción", "Teléfono"];

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
        title="Consultar clientes"
        filters="true"
        headers={headers}
        data={cliente}
        color={"light-pink"}
      />
    </SucursalProvider>
  );
}

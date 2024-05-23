import { TableSection } from "../elements/TableSection";
import { SucursalProvider } from "../../context/SucursalContext";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export function BookDataPage() {
  const headers = [
    "Titulo",
    "Editorial",
    "Autor",
    "Cantidad disponible",
    "Precio",
    "Cantidad vendida",
    "Ventas totales",
  ];

  const [libro, setLibro] = useState([]);

  const loadLibro = async () => {
    const response = await fetch("http://localhost:4000/libro");
    const data = await response.json();
    // a = data;
    // console.log(data);
    setLibro(data);
  };

  useEffect(() => {
    loadLibro();
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
        title="Consultar libro"
        headers={headers}
        data={libro}
        color="menta"
      />
    </SucursalProvider>
  );
}

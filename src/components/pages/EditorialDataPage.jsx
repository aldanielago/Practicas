import { TableSection } from "../elements/TableSection";
import { SucursalProvider } from "../../context/SucursalContext";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export function EditorialDataPage() {
  const [editorial, setEditorial] = useState([]);

  const loadEditorial = async () => {
    const response = await fetch("http://localhost:4000/EDitorial");
    const data = await response.json();
    setEditorial(data);
  };

  useEffect(() => {
    loadEditorial();
  }, []);

  const headers = ["Nombre editorial", "Cantidad libros", "Total de ventas"];
  // const arrayEditoriales = [
  //   ["Alfaguara", 1, 500.0],
  //   ["Editorial XYZ", 1, 225.0],
  //   ["Penguin Books", 1, 360.0],
  //   ["Salamandra", 1, 750.0],
  //   ["Planeta", 1, 220.0],
  //   ["Harper Lee", 1, 288.0],
  //   ["Debate", 1, 750.0],
  //   ["Minotauro", 1, 420.0],
  //   ["Plaza & Janés", 1, 288.0],
  //   ["Penguin Classics", 1, 370.0],
  // ];

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
        title="Consultar editorial"
        headers={headers}
        data={editorial}
        color={"menta"}
      />
    </SucursalProvider>
  );
}

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

  // const arrayBooks = [
  //   ["El Juego de Ender", "Alfaguara", "Orson Scott Card", 50, 20.0, 25, 500.0],
  //   [
  //     "Cien Años de Soledad",
  //     "Editorial XYZ",
  //     "Gabriel García Márquez",
  //     30,
  //     15.0,
  //     15,
  //     225.0,
  //   ],
  //   ["1984", "Penguin Books", "George Orwell", 40, 18.0, 20, 360.0],
  //   [
  //     "Harry Potter y la Piedra Filosofal",
  //     "Salamandra",
  //     "J.K. Rowling",
  //     60,
  //     25.0,
  //     30,
  //     750.0,
  //   ],
  //   [
  //     "La Sombra del Viento",
  //     "Planeta",
  //     "Carlos Ruiz Zafón",
  //     25,
  //     22.0,
  //     10,
  //     220.0,
  //   ],
  //   ["Matar a un Ruiseñor", "Harper Lee", "Harper Lee", 35, 16.0, 18, 288.0],
  //   [
  //     "Sapiens: De Animales a Dioses",
  //     "Debate",
  //     "Yuval Noah Harari",
  //     45,
  //     30.0,
  //     25,
  //     750.0,
  //   ],
  //   ["El Hobbit", "Minotauro", "J.R.R. Tolkien", 55, 28.0, 15, 420.0],
  //   [
  //     "Los Pilares de la Tierra",
  //     "Plaza & Janés",
  //     "Ken Follett",
  //     20,
  //     24.0,
  //     12,
  //     288.0,
  //   ],
  //   [
  //     "Orgullo y Prejuicio",
  //     "Penguin Classics",
  //     "Jane Austen",
  //     30,
  //     18.5,
  //     20,
  //     370.0,
  //   ],
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
        title="Consultar libro"
        headers={headers}
        data={libro}
        color="menta"
      />
    </SucursalProvider>
  );
}

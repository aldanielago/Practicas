import { TableSection } from "../elements/TableSection";
import { SucursalProvider } from "../../context/SucursalContext";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export function BookDataPage() {
  const headers = ['Titulo', 'Editorial', 'Autor', 'Cantidad disponible', 'Precio', 'Cantidad vendida', 'Ventas totales']

  const arrayBooks = [
    ["El Juego de Ender", "Alfaguara", "Orson Scott Card", 50, 20.00, 25, 500.00],
    ["Cien Años de Soledad", "Editorial XYZ", "Gabriel García Márquez", 30, 15.00, 15, 225.00],
    ["1984", "Penguin Books", "George Orwell", 40, 18.00, 20, 360.00],
    ["Harry Potter y la Piedra Filosofal", "Salamandra", "J.K. Rowling", 60, 25.00, 30, 750.00],
    ["La Sombra del Viento", "Planeta", "Carlos Ruiz Zafón", 25, 22.00, 10, 220.00],
    ["Matar a un Ruiseñor", "Harper Lee", "Harper Lee", 35, 16.00, 18, 288.00],
    ["Sapiens: De Animales a Dioses", "Debate", "Yuval Noah Harari", 45, 30.00, 25, 750.00],
    ["El Hobbit", "Minotauro", "J.R.R. Tolkien", 55, 28.00, 15, 420.00],
    ["Los Pilares de la Tierra", "Plaza & Janés", "Ken Follett", 20, 24.00, 12, 288.00],
    ["Orgullo y Prejuicio", "Penguin Classics", "Jane Austen", 30, 18.50, 20, 370.00]
  ];

  return (
    <SucursalProvider>
      <Link to={"/general-menu"}> <IoChevronBackCircleOutline size={40} className='absolute left-6 top-4'/> </Link>
      <TableSection title="Consultar libro" headers={ headers}  data={ arrayBooks } color="menta"/>
    </SucursalProvider>
  );
}
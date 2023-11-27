import { TableSection } from "../elements/TableSection";
import { SucursalProvider } from "../../context/SucursalContext";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export function EditorialDataPage() {
  const headers = ['Nombre editorial', 'Cantidad libros', 'Total de ventas'];
  const arrayEditoriales = [
    ["Alfaguara", 1, 500.00],
    ["Editorial XYZ", 1, 225.00],
    ["Penguin Books", 1, 360.00],
    ["Salamandra", 1, 750.00],
    ["Planeta", 1, 220.00],
    ["Harper Lee", 1, 288.00],
    ["Debate", 1, 750.00],
    ["Minotauro", 1, 420.00],
    ["Plaza & Janés", 1, 288.00],
    ["Penguin Classics", 1, 370.00]
  ];

  return (
    <SucursalProvider>
      <Link to={"/general-menu"}> <IoChevronBackCircleOutline size={40} className='absolute left-6 top-4'/> </Link>
      <TableSection title="Consultar editorial" headers={headers} data={arrayEditoriales} color={'menta'}/>
    </SucursalProvider>
  );
}
import { useContext } from "react";
import { TableSection } from "../elements/TableSection";
import { BookContext } from "../../context/BookContext";

export function BookDataPage() {
  const headers = ['Titulo', 'Editorial', 'Autor', 'Cantidad disponible', 'Precio', 'Cantidad vendida', 'Ventas totales']
  const { arrayBooks } = useContext(BookContext);

  return (
    <TableSection title="Consultar libro" headers={ headers}  data={ arrayBooks }/>
  );
}
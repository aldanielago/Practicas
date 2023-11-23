import { useContext } from "react";
import { TableSection } from "../elements/TableSection";
import { BookContext } from "../../context/BookContext";

export function EditorialDataPage() {
  const headers = [ 'Nombre editorial', 'Cantidad libros', 'Total de ventas'];
  const { arrayEditoriales } = useContext(BookContext);

  return (
    <TableSection title="Consultar editorial" headers={headers} data={arrayEditoriales}/>
  );
}
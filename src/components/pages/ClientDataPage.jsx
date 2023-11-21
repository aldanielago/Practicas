import { useContext } from 'react';
import { TableSection } from "../elements/TableSection";
import { ClientContext } from "../../context/ClientContext";

export function ClientDataPage() {
  const headers = ['Nombre', 'Sucursal', 'Fecha inscripción', 'Teléfono'];
  const { arrayClients } = useContext(ClientContext);

  return (
    <TableSection title="Consultar clientes" filters="true" headers={headers} data={arrayClients}/>
  )
}
import { useContext } from 'react';
import { TableSection } from '../elements/TableSection';
import { EmpleadosContext } from '../../context/EmpleadosContext';

export function AdminDataPage() {
  const headers = ['Nombre', 'Cargo', 'Sucursal', 'Teléfono', 'Fecha de ingreso'];
  const { arrayEmpleados } = useContext(EmpleadosContext);

  return (
    <TableSection title="Consultar empleados" filters="true" headers={headers} data={arrayEmpleados}/>
  )
}
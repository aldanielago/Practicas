import { TableSection } from '../elements/TableSection';

export function ClientDataPage() {
  const headers = ['Nombre', 'Cargo', 'Sucursal', 'Teléfono', 'Fecha de ingreso'];

  const data = [
    ['Juan', 'Gerente', 'Sucursal 1', '12345678', '01/01/2021'],
    ['Juan', 'Gerente', 'Sucursal 1', '12345678', '01/01/2021'],
    ['Juan', 'Gerente', 'Sucursal 1', '12345678', '01/01/2021'],
    ['Juan', 'Gerente', 'Sucursal 1', '12345678', '01/01/2021'],
    ['Juan', 'Gerente', 'Sucursal 1', '12345678', '01/01/2021'],
    ['Juan', 'Gerente', 'Sucursal 1', '12345678', '01/01/2021'],
    ['Juan', 'Gerente', 'Sucursal 1', '12345678', '01/01/2021'],
    ['Juan', 'Gerente', 'Sucursal 1', '12345678', '01/01/2021'],
  ]

  return (
    <TableSection title="Consultar empleados" filters="true" headers={headers} data={data}/>
  )
}
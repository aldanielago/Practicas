import { TableSection } from '../elements/TableSection';
import { SucursalProvider } from '../../context/SucursalContext';
import { Link } from 'react-router-dom';
import { IoChevronBackCircleOutline } from "react-icons/io5";

export function AdminDataPage() {
  const headers = ['Nombre', 'Sucursal', 'Fecha ingreso', 'Cargo', 'Telefono'];

  const arrayEmpleados = [
    [ 'Juan', 'Bogotá', '01/01/2021', 'Administrador', '12345678'],
    [ 'Gabriel', 'Cali', '01/01/2021', 'Administrador', '12345678' ],
    [ 'Oscar', 'Medellín', '01/01/2021', 'Administrador', '12345678' ],
    [ 'Alexandra', 'Bogotá', '01/01/2021', 'Administrador', '12345678' ],
    [ 'Fabio', 'Medellín', '01/01/2021', 'Administrador', '12345678' ],
  ];

  return (
    <SucursalProvider>
      <Link to={"/general-menu"}> <IoChevronBackCircleOutline size={40} className='absolute left-6 top-4'/> </Link>
      <TableSection title="Consultar empleados" filters="true" headers={headers} data={arrayEmpleados} color="light-blue" />
    </SucursalProvider>
  )
}
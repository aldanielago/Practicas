import { TableSection } from "../elements/TableSection";
import { SucursalProvider } from '../../context/SucursalContext';
import { Link } from 'react-router-dom';
import { IoChevronBackCircleOutline } from 'react-icons/io5';

export function ClientDataPage() {
  const headers = ['Nombre', 'Sucursal', 'Fecha inscripción', 'Teléfono'];
  const arrayClients = [
    ["Juan", "Bogotá", "01/01/2021", "12345678" ],
    ["Gabriel", "Cali", "01/01/2021", "12345678" ],
    ["Oscar", "Medellín", "01/01/2021", "12345678" ],
    ["Alexandra", "Bogotá", "01/01/2021", "12345678" ],
    ["Fabio", "Medellín", "01/01/2021", "12345678" ],
    ["Andres", "Santa Marta", "01/01/2021", "12345678" ],
    ["Andrea", "Barranquilla", "01/01/2021", "12345678" ],
    ["Felipe", "Riohacha", "01/01/2021", "12345678" ],
    ["Laura", "Cartagena", "01/01/2021", "12345678" ],
  ];

  return (
    <SucursalProvider>
      <Link to={"/general-menu"}> <IoChevronBackCircleOutline size={40} className='absolute left-6 top-4'/> </Link>
      <TableSection title="Consultar clientes" filters="true" headers={headers} data={arrayClients} color={'light-pink'}/>
    </SucursalProvider>
  )
}
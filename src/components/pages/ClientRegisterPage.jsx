import { useContext, useState } from 'react';
import { Form } from "../elements/Form";
import { Link } from 'react-router-dom';
import { FormInput } from "../elements/FormInput";
import { PrimaryButton } from '../buttons/PrimaryButton';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { SucursalContext, SucursalProvider } from '../../context/SucursalContext';

export function ClientRegisterPage() {
  const { arraySucursales } = useContext(SucursalContext);

  const [ cliente, setCliente ] = useState({
    nombre: '',
    cedula: '',
    telefono: '',
    id_sucursal: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  const handleRegistrar = async () => {
    try {
      const response = await fetch('http://localhost:4000/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cliente),
      });

      if (response.ok) {
        console.log('Cliente registrado con éxito');
      } else {
        console.error('Error al registrar el cliente');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }

  return (
    <SucursalProvider>
      <Link to={"/general-menu"}> <IoChevronBackCircleOutline size={40} className='absolute left-6 top-4'/> </Link>
      <Form text="Registrar cliente" color={'light-pink'}>
        <FormInput text="Nombre" type="text" placeholder="nombre apellido" onChange={handleChange} name="nombre"/>
        <FormInput text="Cédula" type="number" placeholder="sin espacios ni comas" onChange={handleChange} name="cedula"/>
        <FormInput text="Teléfono" type="number" placeholder="sin espacios ni comas" onChange={handleChange} name="telefono"/>
        <FormInput text={'Ciudad'} type={'select'} onChange={handleChange} name="telefono">
          { arraySucursales.map(sucursal => (
            <option className="font-quicksand" key={sucursal.id} value={sucursal.id}> {sucursal.nombre} </option>
            )
          )}
        </FormInput>
        <PrimaryButton text="Registrar" onClick={handleRegistrar}/>
      </Form>
    </SucursalProvider>
  )
}
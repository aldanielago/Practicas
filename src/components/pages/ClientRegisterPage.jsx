import { useContext } from 'react';
import { Form } from "../elements/Form";
import { FormInput } from "../elements/FormInput";
import { SucursalContext, SucursalProvider } from '../../context/SucursalContext';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { Link } from 'react-router-dom';
import { IoChevronBackCircleOutline } from 'react-icons/io5';

export function ClientRegisterPage() {
  const { arraySucursales } = useContext(SucursalContext);

  return (
    <SucursalProvider>
      <Link to={"/general-menu"}> <IoChevronBackCircleOutline size={40} className='absolute left-6 top-4'/> </Link>
      <Form text="Registrar cliente" color={'light-pink'}>
        <FormInput text="Nombre" type="text" placeholder="nombre apellido" />
        <FormInput text="Cédula" type="number" placeholder="sin espacios ni comas"/>
        <FormInput text="Teléfono" type="number" placeholder="sin espacios ni comas"/>
        <FormInput text={'Ciudad'} type={'select'}>
          { arraySucursales.map(sucursal => (
            <option className="font-quicksand" key={sucursal.id} value={sucursal.id}> {sucursal.nombre} </option>
            )
          )}
        </FormInput>
        <PrimaryButton text="Registrar" />
      </Form>
    </SucursalProvider>
  )
}
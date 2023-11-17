import { useContext } from 'react';
import { Form } from "../elements/Form";
import { FormInput } from "../elements/FormInput";
import { SucursalContext } from '../../context/SucursalContext';
import { PrimaryButton } from '../buttons/PrimaryButton';

export function ClientRegisterPage() {
  const { arraySucursales } = useContext(SucursalContext);

  return (
    <Form text="Registrar cliente">
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
  )
}
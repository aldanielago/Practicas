import { useContext } from 'react'
import { Form } from '../elements/Form'
import { FormInput } from '../elements/FormInput'
import { PrimaryButton } from '../buttons/PrimaryButton'
import { SucursalContext } from '../../context/SucursalContext'

export function AdminRegisterPage() {
  const { arraySucursales } = useContext(SucursalContext);

  return (
    <Form text={'Registrar administrador'} >
      <FormInput text={'Nombre'} type={'text'} placeholder={'username'}/>
      <FormInput text={'Cedula'} type={'number'} placeholder={'sin puntos ni espacios'}/>
      <FormInput text={'Teléfono'} type={'number'} placeholder={'sin puntos ni espacios'}/>
      <FormInput text={'Fecha de nacimiento'} type={'date'}/>
      <FormInput text={'Sucursal'} type={'select'}>
        { arraySucursales.map(sucursal => (
          <option className="font-quicksand" key={sucursal.id} value={sucursal.id}> {sucursal.nombre} </option>
          )
        )}
      </FormInput>
      <PrimaryButton text='Registrar' />
    </Form>
  )
}
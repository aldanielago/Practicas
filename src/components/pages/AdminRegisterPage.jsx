import { useContext } from 'react'
import { Form } from '../elements/Form'
import { FormInput } from '../elements/FormInput'
import { PrimaryButton } from '../buttons/PrimaryButton'
import { SucursalContext } from '../../context/SucursalContext'
import { Link } from 'react-router-dom'
import { IoChevronBackCircleOutline } from "react-icons/io5";

export function AdminRegisterPage() {
  const { arraySucursales } = useContext(SucursalContext);

  return (
    <>
      <Link to={"/general-menu"}> <IoChevronBackCircleOutline size={40} className='absolute left-6 top-4'/> </Link>
      <Form text={'Registrar administrador'} color={'light-blue'}>
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
        <PrimaryButton text='Registrar' color={'light-blue'}/>
      </Form>
    </>
  )
}
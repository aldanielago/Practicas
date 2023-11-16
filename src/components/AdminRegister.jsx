import { useContext } from 'react'
import { SucursalContext } from '../context/SucursalContext'
import { PrimaryButton } from './buttons/PrimaryButton'
import { FormInput } from './elements/FormInput'

export function AdminRegister() {
  const { arraySucursales } = useContext(SucursalContext)
  return (
    <section className='center border border-dark-text-gray p-8 rounded-md'>
      <h1 className='font-quicksand font-bold mb-4 text-xl'>Registrar administrador</h1>
      <form className="flex flex-col w-96">
        <label className='flex flex-col gap-2 mb-4'>
          <span className="font-quicksand ">Nombre</span>
          <FormInput type={'text'} placeholder={'username'}/>
        </label>
        <label className='flex flex-col gap-2 mb-4'>
          <span className="font-quicksand ">Cedula</span>
          <FormInput type={'number'} placeholder={'sin puntos ni espacios'}/>
        </label>
        <label className='flex flex-col gap-2 mb-4'>
          <span className="font-quicksand ">Teléfono</span>
          <FormInput type={'number'} placeholder={'sin puntos ni espacios'}/>
        </label>
        <label className='flex flex-col gap-2 mb-4'>
          <span className="font-quicksand ">Fecha de nacimiento</span>
          <FormInput type={'date'}/>
        </label>
        <label className='flex flex-col gap-2 mb-4'>
          <span className="font-quicksand">Sucursal</span>
          <select name="sucursal" id="sucursal" className='rounded-md font-quicksand border-dark-text-gray border p-2 box-border'>
            { arraySucursales.map(sucursal => (
              <option className="font-quicksand " key={sucursal.id} value={sucursal.id}>{sucursal.nombre}</option>
              )
            )}
          </select>
        </label>
        <PrimaryButton text='Registrar' />
      </form>
    </section>
  )
}
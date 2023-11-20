import { useState, useContext } from 'react'
import { CiCalendarDate } from "react-icons/ci";
import { SucursalContext } from '../../context/SucursalContext';
import { EmpleadosContext } from '../../context/EmpleadosContext';

export function ClientDataPage() {
  const { arrayEmpleados } = useContext(EmpleadosContext);
  const { arraySucursales } = useContext(SucursalContext);
  const [ date, setDate ] = useState('');

  function filterByDate() {
    const filteredArray = arrayEmpleados.filter(empleado => empleado.fechaIngreso === date);
    console.log(filteredArray);
  }

  return (
    <section className='center my-8 p-8 rounded-md w-full'>
      <h1 className='font-quicksand font-bold mb-4 text-xl text-primary-blue'>Consultar empleados</h1>
      <div className='flex w-full justify-end gap-4 text-dark-text-gray pb-2'>
        <select className='font-quicksan p-2'>
          <option value="">Sucursal</option>
          { arraySucursales.map(sucursal => (
            <option className="font-quicksand" key={sucursal.id} value={sucursal.id}> {sucursal.nombre} </option>
            )
          )}
        </select>
        <span className="relative flex items-center">
          <input
            type="date"
            className="block outline-none rounded-md focus:ring-0 h-10 w-4 pl-10 text-transparent content-none z-10 bg-transparent focus:bg-transparent hover:cursor-pointer"
            onChange={(e) => setDate(e.target.value)}
            onClick={filterByDate}
          />
          <CiCalendarDate size={40} className="text-zinc-400 hover:cursor-pointer absolute right-0"/>
        </span>
      </div>
      <table className='w-full border border-dark-text-gray'>
        <thead>
          <tr className='border'>
            <th className='text-start font-quicksand p-4'>Nombre</th>
            <th className='text-start font-quicksand p-4'>Cargo</th>
            <th className='text-start font-quicksand p-4'>Sucursal</th>
            <th className='text-start font-quicksand p-4'>Teléfono</th>
            <th className='text-start font-quicksand p-4'>Fecha de ingreso</th>
          </tr>
        </thead>
        <tbody className='border'>
          {arrayEmpleados.map((empleado, index) => (
            <tr key={index} className='border-y w-full'>
              <td className='font-quicksand p-4'>{empleado.nombre}</td>
              <td className='font-quicksand p-4'>{empleado.cargo}</td>
              <td className='font-quicksand p-4'>{empleado.sucursal}</td>
              <td className='font-quicksand p-4'>{empleado.telefono}</td>
              <td className='font-quicksand p-4'>{empleado.fechaIngreso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
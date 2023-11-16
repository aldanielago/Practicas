import { useContext } from 'react'
import { SucursalContext } from '../context/SucursalContext'

export function AdminRegister() {
  const { arraySucursales } = useContext(SucursalContext)
  return (
    <section className='border border-black'>
      <h1>Registrar administrador</h1>
      <form className="flex flex-col w-96 h-96 ali">
        <label htmlFor="username">Nombre</label>
        <input type="text" id="username" placeholder="username"/>
        <label htmlFor="cedula">Cedula</label>
        <input type="number" id="cedula" placeholder="Sin puntos ni espacios"/>
        <label htmlFor="telefono">Telefono</label>
        <input type="number" id="telefono"/>
        <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
        <input type="date" id="fechaNacimiento"/>
        <label htmlFor="username">Sucursal</label>
        <select name="sucursal" id="sucursal">
          { arraySucursales.map(sucursal => (
            <option key={sucursal.id} value={sucursal.id}>{sucursal.nombre}</option>
            )
          )}
        </select>
        <button type="button">Login</button>
      </form>
    </section>
  )
}
import { createContext } from "react";

const EmpleadosContext = createContext();

function EmpleadosProvider({ children }) {
  // array de 5 empleados diferentes
  const arrayEmpleados = [
    { nombre: "Juan", cargo: 'Administrador', sucursal: 'Bogotá', telefono: '1234567890', fechaIngreso: '2021-01-01', salario: 1000000, estado: 'Activo' },
    { nombre: "Pedro", cargo: 'Administrador', sucursal: 'Bogotá', telefono: '1234567890', fechaIngreso: '2021-01-01', salario: 1000000, estado: 'Activo' },
    { nombre: "Pablo", cargo: 'Administrador', sucursal: 'Bogotá', telefono: '1234567890', fechaIngreso: '2021-01-01', salario: 1000000, estado: 'Activo' },
    { nombre: "Andrés", cargo: 'Administrador', sucursal: 'Bogotá', telefono: '1234567890', fechaIngreso: '2021-01-01', salario: 1000000, estado: 'Activo' },
    { nombre: "Jorge", cargo: 'Administrador', sucursal: 'Bogotá', telefono: '1234567890', fechaIngreso: '2021-01-01', salario: 1000000, estado: 'Activo' },
  ]

  return <EmpleadosContext.Provider value={{ arrayEmpleados }}> {children} </EmpleadosContext.Provider>
}

export { EmpleadosContext, EmpleadosProvider };
import { createContext } from "react";

const EmpleadosContext = createContext();

function EmpleadosProvider({ children }) {
  const arrayEmpleados = [
    [ 'Juan', 'Bogotá', '01/01/2021', 'Administrador', '12345678'],
    [ 'Gabriel', 'Cali', '01/01/2021', 'Administrador', '12345678' ],
    [ 'Oscar', 'Medellín', '01/01/2021', 'Administrador', '12345678' ],
    [ 'Alexandra', 'Bogotá', '01/01/2021', 'Administrador', '12345678' ],
    [ 'Fabio', 'Medellín', '01/01/2021', 'Administrador', '12345678' ],
  ]

  return <EmpleadosContext.Provider value={{ arrayEmpleados }}> {children} </EmpleadosContext.Provider>
}

export { EmpleadosContext, EmpleadosProvider };
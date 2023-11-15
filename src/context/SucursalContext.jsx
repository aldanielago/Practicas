import { createContext } from "react";

const SucursalContext = createContext()

function SucursalProvider({ children }) {
  const arraySucursales = [
    { id: 1, nombre: "Bogotá"},
    { id: 2, nombre: "Medellín"},
    { id: 3, nombre: "Cali"},
    { id: 4, nombre: "Pasto"},
    { id: 5, nombre: "Santa Marta"},
    { id: 6, nombre: "Brranquilla"},
    { id: 7, nombre: "Riohacha"},
    { id: 8, nombre: "Cartagena"},
  ]
  return <SucursalContext.Provider value={
    arraySucursales
  }>
    {children}
  </SucursalContext.Provider>;
}

export { SucursalContext, SucursalProvider };
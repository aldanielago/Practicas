import { createContext } from "react";

const SucursalContext = createContext();

function SucursalProvider({ children }) {
  const arraySucursales = [
    { id: 0, nombre: "Bogotá" },
    { id: 1, nombre: "Medellín" },
    { id: 2, nombre: "Cali" },
    { id: 3, nombre: "Pasto" },
    { id: 4, nombre: "Santa Marta" },
    { id: 5, nombre: "Barranquilla" },
    { id: 6, nombre: "Riohacha" },
    { id: 7, nombre: "Cartagena" },
  ];

  return (
    <SucursalContext.Provider value={{ arraySucursales }}>
      {" "}
      {children}{" "}
    </SucursalContext.Provider>
  );
}

export { SucursalContext, SucursalProvider };

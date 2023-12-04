import { createContext } from "react";
import { useEffect, useState } from "react";

const SucursalContext = createContext();
// const [sucursal, setSucursal] = useState([]);
// const loadSucursales = async () => {
//   const response = await fetch("http://localhost:4000/sucursal");
//   const data = await response.json();
//   setSucursal(data);
// };
// useEffect(() => {
//   loadSucursales();
// }, []);
function SucursalProvider({ children }) {
  // console.log(sucursal);
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

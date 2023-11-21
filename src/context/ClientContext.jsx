import { createContext } from "react";

const ClientContext = createContext();

function ClientProvider({ children }){
  const arrayClients = [
    ["Juan", "Bogotá", "01/01/2021", "12345678" ],
    ["Gabriel", "Cali", "01/01/2021", "12345678" ],
    ["Oscar", "Medellín", "01/01/2021", "12345678" ],
    ["Alexandra", "Bogotá", "01/01/2021", "12345678" ],
    ["Fabio", "Medellín", "01/01/2021", "12345678" ],
    ["Andres", "Santa Marta", "01/01/2021", "12345678" ],
    ["Andrea", "Barranquilla", "01/01/2021", "12345678" ],
    ["Felipe", "Riohacha", "01/01/2021", "12345678" ],
    ["Laura", "Cartagena", "01/01/2021", "12345678" ],
  ]

  return <ClientContext.Provider value={{ arrayClients }}> {children} </ClientContext.Provider>
}

export { ClientContext, ClientProvider };
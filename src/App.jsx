import { SucursalProvider } from './context/SucursalContext';
// import { EmpleadosProvider } from './context/EmpleadosContext';
// import { AdminDataPage } from './components/pages/AdminDataPage';
import { ClientProvider } from './context/ClientContext';
import { ClientDataPage } from './components/pages/ClientDataPage';
// import { AdminLoginPage } from './components/pages/AdminLoginPage'
// import { AdminRegister } from './components/pages/AdminRegisterPage'
// import { BookRegisterPage } from "./components/pages/BookRegisterPage";
// import { ClientRegisterPage } from "./components/pages/ClientRegisterPage";


function App() {

  return (
    <>
      {/* <SucursalProvider> */}
        {/* <BookRegisterPage /> */}
        {/* <ClientRegisterPage /> */}
        {/* <AdminLoginPage /> */}
        {/* <AdminRegister /> */}
      {/* </SucursalProvider> */}
      {/* <SucursalProvider> */}
        {/* <EmpleadosProvider> */}
          {/* <AdminDataPage/> */}
        {/* </EmpleadosProvider> */}
      {/* </SucursalProvider> */}
      <SucursalProvider>
        <ClientProvider>
          <ClientDataPage />
        </ClientProvider>
      </SucursalProvider>
    </>
  )
}

export default App;

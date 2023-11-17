import { SucursalProvider } from './context/SucursalContext';
// import { AdminLoginPage } from './components/pages/AdminLoginPage'
// import { AdminRegister } from './components/pages/AdminRegisterPage'
// import { ClientRegisterPage } from "./components/pages/ClientRegisterPage";

import { BookRegisterPage } from "./components/pages/BookRegisterPage";

function App() {

  return (
    <>
      <SucursalProvider>
        <BookRegisterPage />
      </SucursalProvider>
      {/* <SucursalProvider>
        <ClientRegisterPage />
      </SucursalProvider> */}
      {/* <AdminLoginPage /> */}
      {/* <SucursalProvider>
        <AdminRegister />
      </SucursalProvider> */}
    </>
  )
}

export default App;

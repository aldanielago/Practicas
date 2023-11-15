import { Login } from './components/Login'
import { AdminRegister } from './components/AdminRegister'
import { SucursalProvider } from './context/SucursalContext';

function App() {

  return (
    <>
      <Login />
      <SucursalProvider>
        <AdminRegister />
      </SucursalProvider>
    </>
  )
}

export default App;

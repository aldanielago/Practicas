import { Routes, Route } from "react-router-dom";
import { GeneralMenu } from './components/pages/GeneralMenu.jsx'
import { BookDataPage } from './components/pages/BookDataPage.jsx'
import { AdminLoginPage } from './components/pages/AdminLoginPage'
import { AdminDataPage } from './components/pages/AdminDataPage.jsx'
import { ClientDataPage } from './components/pages/ClientDataPage.jsx'
import { AdminRegisterPage } from './components/pages/AdminRegisterPage'
import { BookRegisterPage } from "./components/pages/BookRegisterPage.jsx";
import { EditorialDataPage } from './components/pages/EditorialDataPage.jsx'
import { ClientRegisterPage } from "./components/pages/ClientRegisterPage.jsx";
import { SucursalProvider } from "./context/SucursalContext.jsx";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLoginPage />} />
      <Route path="/register-admin" element={<SucursalProvider><AdminRegisterPage /></SucursalProvider>} />
      <Route path="/data-admin" element={<AdminDataPage />} />
      <Route path="/data-book" element={<BookDataPage />} />
      <Route path="/register-book" element={<SucursalProvider><BookRegisterPage /></SucursalProvider> } />
      <Route path="/data-client" element={<ClientDataPage />} />
      <Route path="/register-client" element={<SucursalProvider><ClientRegisterPage /></SucursalProvider>} />
      <Route path="/data-editorial" element={<EditorialDataPage />} />
      <Route path="/general-menu" element={<GeneralMenu />} />
    </Routes>
  );
}
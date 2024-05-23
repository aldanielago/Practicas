import { Form } from "../elements/Form"
import { FormInput } from "../elements/FormInput"
import { PrimaryButton } from "../buttons/PrimaryButton"
import { SucursalProvider } from "../../context/SucursalContext"
import { Link } from "react-router-dom"

export function AdminLoginPage() {
  return (
    <SucursalProvider>
      <Form text={'Bienvenido de nuevo!'}>
        <FormInput type={'text'} placeholder={'escribe tu nombre'}/>
        <Link to={"/general-menu"}>
          <PrimaryButton text="Entrar"/>
        </Link>
      </Form>
    </SucursalProvider>
  )
}
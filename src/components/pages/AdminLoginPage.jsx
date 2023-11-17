import { Form } from "../elements/Form"
import { FormInput } from "../elements/FormInput"
import { PrimaryButton } from "../buttons/PrimaryButton"

export function AdminLoginPage() {
  return (
    <Form text={'Welcome back'}>
      <FormInput type={'text'} placeholder={'escribe tu nombre'}/>
      <PrimaryButton text="Entrar"/>
    </Form>
  )
}
import { PrimaryButton } from "./buttons/PrimaryButton"
import { FormInput } from "./elements/FormInput"

export function Login() {
  return (
    <section className="center flex flex-col items-center justify-evenly p-6 border w-96 border-dark-text rounded-md box-border h-96">
      <h1 className="font-quicksand font-bold text-2xl">Welcome back</h1>
      <form className="flex flex-col items-center justify-evenly  h-4/5 w-72">

        <label htmlFor="username" className="w-full">
          <span className="font-quicksand">Nombre</span>
          <FormInput type={'text'} placeholder={'escribe tu nombre'}/>
        </label>
        <PrimaryButton text="Login"/>
      </form>
    </section>
  )
}
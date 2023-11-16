import { PrimaryButton } from "./buttons/PrimaryButton"

export function Login() {
  return (
    <section className="center flex flex-col items-center justify-evenly p-6 border w-96 border-dark-text rounded-md box-border h-96">
      <h1 className="font-quicksand font-bold text-2xl">Welcome back</h1>
      <form className="flex flex-col items-center justify-evenly  h-4/5 w-72">

        <label htmlFor="username" className="w-full">
          <span className="font-quicksand">Nombre</span>
          <input type="text" id="username" placeholder="Escribe tu nombre" className="w-full mt-2 border border-dark-text-gray p-4 box-border h-3 font-quicksand rounded-md"/>
        </label>
        <PrimaryButton text="Login"/>
      </form>
    </section>
  )
}
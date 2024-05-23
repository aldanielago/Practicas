import { Link } from "react-router-dom";

export function GeneralMenu() {
  return (
    <section className="center my-8 p-8 rounded-md w-full">
      <h1 className='font-quicksand font-bold mb-4 text-xl text-primary-blue'>Bienvenido!</h1>
      <p className="font-quicksand">Indica la opción que deseas hacer</p>
      <div className="w-full flex justify-around mt-10 gap-12 max-w-7xl">
        <div className="bg-very-light-blue border-light-blue border-2 p-12 rounded-md flex flex-col w-full gap-8 shadow-xl">
          <h2 className="font-quicksand font-bold text-center text-lg">Empleados</h2>
          <Link to={"/register-admin"} className="font-quicksand border border-light-blue p-4 rounded-lg hover:bg-light-blue transition-colors duration-500 ease-in-out"> Registrar empleados</Link>
          <Link to={"/data-admin"} className="font-quicksand border border-light-blue p-4 rounded-lg hover:bg-light-blue transition-colors duration-500 ease-in-out"> Consultar empleados</Link>
        </div>
        <div className="bg-very-light-pink border-light-pink border-2 p-12 rounded-md flex flex-col w-full gap-8 shadow-xl">
          <h2 className="font-quicksand font-bold text-center text-lg">Clientes</h2>
          <Link to={"/register-client"} className="font-quicksand border-light-pink border rounded-lg p-4 hover:bg-light-pink transition-colors duration-500 ease-in-out"> Registrar clientes</Link>
          <Link to={"/data-client"} className="font-quicksand border-light-pink border rounded-lg p-4 hover:bg-light-pink transition-colors duration-500 ease-in-out"> Consultar clientes</Link>
        </div>
        <div className="border-menta bg-light-menta border-2 p-12 rounded-md flex flex-col w-full gap-8 shadow-xl">
          <h2 className="font-quicksand font-bold text-center text-lg">Libros</h2>
          <Link to={"/register-book"} className="font-quicksand border-menta border rounded-lg p-4 hover:bg-menta transition-colors duration-500 ease-in-out"> Registrar libros</Link>
          <Link to={"/data-book"} className="font-quicksand border-menta border rounded-lg p-4 hover:bg-menta transition-colors duration-500 ease-in-out"> Consultar libros</Link>
          <Link to={"/data-editorial"} className="font-quicksand border-menta border rounded-lg p-4 hover:bg-menta transition-colors duration-500 ease-in-out"> Consultar editorial</Link>
        </div>
      </div>
    </section>
  )
}
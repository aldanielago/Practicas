import { useContext } from "react";
import { Form } from "../elements/Form";
import { FormInput } from "../elements/FormInput";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SucursalContext, SucursalProvider } from "../../context/SucursalContext";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export function BookRegisterPage() {
  const { arraySucursales } = useContext(SucursalContext);

  return (
    <SucursalProvider>
      <Link to={"/general-menu"}> <IoChevronBackCircleOutline size={40} className='absolute left-6 top-4'/> </Link>
      <Form text="Registrar libro">
        <FormInput text="Titulo" type="text" placeholder="Cien años de soledad" />
        <FormInput text="Autor" type="text" placeholder="Gabriel García Márquez" />
        <FormInput text="Editorial" type="text" placeholder="Editorial Norma" />
        <FormInput text="Cantidad de páginas" type="number" placeholder="1900" />
        <FormInput text="Código ISBM" type="number" placeholder="9783161484100" />
        <FormInput text="Cantidad disponible" type="number" placeholder="100" />
        <FormInput text="Precio" type="number" placeholder="20000" />
        <FormInput text={'Sucursal'} type={'select'}>
          { arraySucursales.map(sucursal => (
            <option className="font-quicksand" key={sucursal.id} value={sucursal.id}> {sucursal.nombre} </option>
            )
          )}
        </FormInput>
        <PrimaryButton text="Registrar libro" />
      </Form>
    </SucursalProvider>
  )
}
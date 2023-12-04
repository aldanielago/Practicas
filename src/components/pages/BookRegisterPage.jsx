import { useContext, useState } from "react";
import { Form } from "../elements/Form";
import { FormInput } from "../elements/FormInput";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SucursalContext, SucursalProvider } from "../../context/SucursalContext";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export function BookRegisterPage() {
  const { arraySucursales } = useContext(SucursalContext);

  const [ libro, setLibro ] = useState({
    titulo: '',
    autor: '',
    editorial: '',
    cantidad_paginas: '',
    codigo_isbm: '',
    cantidad_disponible: '',
    precio: '',
    id_sucursal: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLibro((prevEmpleado) => ({
      ...prevEmpleado,
      [name]: value,
    }));
  };

  const handleRegistrar = async () => {
    try {
      const response = await fetch('http://localhost:4000/sucursal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(libro),
      });

      if (response.ok) {
        console.log('Libro registrado con éxito');
      } else {
        console.error('Error al registrar el libro');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <SucursalProvider>
      <Link to={"/general-menu"}> <IoChevronBackCircleOutline size={40} className='absolute left-6 top-4'/> </Link>
      <Form text="Registrar libro">
        <FormInput text="Titulo" type="text" placeholder="Cien años de soledad" onChange={handleChange} name="titulo"/>
        <FormInput text="Autor" type="text" placeholder="Gabriel García Márquez" onChange={handleChange} name="autor"/>
        <FormInput text="Editorial" type="text" placeholder="Editorial Norma" onChange={handleChange} name="editorial"/>
        <FormInput text="Cantidad de páginas" type="number" placeholder="1900" onChange={handleChange} name="cantidad_paginas"/>
        <FormInput text="Código ISBM" type="number" placeholder="9783161484100" onChange={handleChange} name="codigo_isbm"/>
        <FormInput text="Cantidad disponible" type="number" placeholder="100" onChange={handleChange} name="cantidad_disponible"/>
        <FormInput text="Precio" type="number" placeholder="20000" onChange={handleChange} name="precio"/>
        <FormInput text={'Sucursal'} type={'select'} onChange={handleChange} name="id_sucursal">
          { arraySucursales.map(sucursal => (
            <option className="font-quicksand" key={sucursal.id} value={sucursal.id}> {sucursal.nombre} </option>
            )
          )}
        </FormInput>
        <PrimaryButton text="Registrar libro" onClick={handleRegistrar}/>
      </Form>
    </SucursalProvider>
  )
}
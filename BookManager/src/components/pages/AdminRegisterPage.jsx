import { useContext } from "react";
import { Form } from "../elements/Form";
import { FormInput } from "../elements/FormInput";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SucursalContext } from "../../context/SucursalContext";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useState } from "react";

export function AdminRegisterPage() {
  const { arraySucursales } = useContext(SucursalContext);

  const [empleado, setEmpleado] = useState({
    nombre: '',
    cedula: '',
    telefono: '',
    fecha_nacimiento: '',
    id_sucursal: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpleado((prevEmpleado) => ({
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
        body: JSON.stringify(empleado),
      });

      if (response.ok) {
        console.log('Empleado registrado con éxito');
      } else {
        console.error('Error al registrar el empleado');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <>
      <Link to={"/general-menu"}> <IoChevronBackCircleOutline size={40} className='absolute left-6 top-4'/> </Link>
      <Form text={'Registrar administrador'} color={'light-blue'}>
        <FormInput text={'Nombre'} type={'text'} placeholder={'username'} name="nombre" onChange={handleChange} />
        <FormInput text={'Cedula'} type={'number'} placeholder={'sin puntos ni espacios'} name="cedula" onChange={handleChange}/>
        <FormInput text={'Teléfono'} type={'number'} placeholder={'sin puntos ni espacios'} name="telefono" onChange={handleChange}/>
        <FormInput text={'Fecha de nacimiento'} type={'date'} name="fecha_nacimiento" onChange={handleChange}/>
        <FormInput text={'Sucursal'} type={'select'} onChange={handleChange}>
          { arraySucursales.map(sucursal => (
            <option className="font-quicksand" key={sucursal.id} value={sucursal.id}> {sucursal.nombre} </option>
            )
          )}
        </FormInput>
        <PrimaryButton text='Registrar' color={'light-blue'} onClick={handleRegistrar}/>
      </Form>
    </>
  );
}

import { useContext } from "react";
import { Form } from "../elements/Form";
import { FormInput } from "../elements/FormInput";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SucursalContext } from "../../context/SucursalContext";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

export function AdminRegisterPage() {
  // const { arraySucursales } = useContext(SucursalContext);
  const [sucursales, setSucursales] = useState([]);
  const [empleado, setEmpleado] = useState({
    nombre: "",
    cedula: "",
    telefono: "",
    fecha_nto: "",
    id_sucursal: "",
  });
  const loadSucursales = async () => {
    const response = await fetch("http://localhost:4000/sucursal");
    const dat = await response.json();
    setSucursales(dat);
  };
  useEffect(() => {
    loadSucursales();
  }, []);
  // console.log(sucursales);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <Link to={"/general-menu"}>
        {" "}
        <IoChevronBackCircleOutline
          size={40}
          className="absolute left-6 top-4"
        />{" "}
      </Link>
      <Form
        onSubmit={handleSubmit}
        ontext={"Registrar administrador"}
        color={"light-blue"}
      >
        <FormInput text={"Nombre"} type={"text"} placeholder={"username"} />
        <FormInput
          text={"Cedula"}
          type={"number"}
          placeholder={"sin puntos ni espacios"}
        />
        <FormInput
          text={"Teléfono"}
          type={"number"}
          placeholder={"sin puntos ni espacios"}
        />
        <FormInput text={"Fecha de nacimiento"} type={"date"} />
        <FormInput text={"Sucursal"} type={"select"}>
          {sucursales.map((sucursal) => (
            <option
              className="font-quicksand"
              key={sucursal.id_sucursal}
              value={sucursal.id_sucursal}
            >
              {" "}
              {sucursal.nombre}{" "}
            </option>
          ))}
        </FormInput>
        <PrimaryButton text="Registrar" color={"light-blue"} />
      </Form>
    </>
  );
}

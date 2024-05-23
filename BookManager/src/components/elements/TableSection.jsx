import { CiCalendarDate } from "react-icons/ci";
import { SucursalContext } from "../../context/SucursalContext";
import { useState, useContext, useEffect } from "react";

export function TableSection({ title, filters, headers, data, color }) {
  const [date, setDate] = useState("");
  const [sucursal, setSucursal] = useState("");
  const [info, setInfo] = useState(data);
  // const { arraySucursales } = useContext(SucursalContext);

  const [sucursales, setSucursales] = useState([]);
  const loadSucursales = async () => {
    const response = await fetch("http://localhost:4000/sucursal");
    const dat = await response.json();
    setSucursales(dat);
  };
  // useEffect(() => {
  //   loadSucursales();
  // }, []);

  // console.log(sucursal);
  useEffect(() => {
    loadSucursales();
    const applyFilters = () => {
      const filteredData = data.filter((item) => {
        let cad = item.fecha_ingreso;
        // let a = cad.substr(0, 10);
        // console.log(a);
        // console.log("suc" + item.sucursal + "fe" + item.fecha_ingreso);
        if (sucursal && date) {
          return item.sucursal == sucursal && cad == date;
        } else if (sucursal) {
          // console.log("1");
          return item.sucursal == sucursal;
        } else if (date) {
          return cad == date;
        } else {
          return item;
        }
      });
      setInfo(filteredData);
    };

    applyFilters();
  }, [sucursal, date, data]);

  const filter = (
    <div className="flex w-full justify-end gap-4 text-dark-text-gray pb-2 max-w-7xl">
      <select
        className="font-quicksan p-2"
        onChange={(e) => setSucursal(e.target.value)}
      >
        {sucursales.map((sucursal) => (
          <option
            className="font-quicksand"
            key={sucursal.id_sucursal}
            value={sucursal.nombre}
          >
            {" "}
            {sucursal.nombre}{" "}
          </option>
        ))}
      </select>
      <span className="relative flex items-center">
        <input
          type="date"
          className="block outline-none rounded-md focus:ring-0 h-10 w-4 pl-10 text-transparent content-none z-10 bg-transparent focus:bg-transparent hover:cursor-pointer"
          onChange={(e) => setDate(e.target.value)}
        />
        <CiCalendarDate
          size={40}
          className="text-zinc-400 hover:cursor-pointer absolute right-0"
        />
      </span>
    </div>
  );

  return (
    <section className="center my-8 p-8 rounded-md w-full">
      <h1 className={`font-quicksand font-bold mb-4 text-xl`}>{title}</h1>
      {filters && filter}
      <table className={`w-full border-${color} border-2 max-w-7xl`}>
        <thead>
          <tr className={`border border-${color}`}>
            {headers.map((header, index) => (
              <th key={index} className={`text-start font-quicksand p-4`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="border">
          {info.map((item, index) => (
            <tr key={index} className={`border-y w-full border-${color}`}>
              {Object.values(item).map((data, index) => (
                <td key={index} className="font-quicksand p-4">
                  {data}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

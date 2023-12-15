import React from "react";
import Title from "../atoms/Title";
import { Formik, Form } from "formik";
import WrapperInput from "../molecules/wrapperInput";
import { useState } from "react";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import FormExperiencia_1  from "./FormExperiencia_1";
import FormExperiencia_2 from "./FormExperiencia_2";

function FormExperienciaL() {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

    const initialInvestigador = {
        desempeno:"Investigador",
                institucion: "",
                inicio: "",
                fin: "",
                logros: "",
                puesto: "",
                area: "",
                campo: "",
                disciplina: "",
                subdisciplina: ""
    }

    const initialOtro = {
        desempeno:"Otro",
                institucion: "",
                inicio: "",
                fin: "",
                logros: "",
                puesto: "",
                area: "",
                campo: "",
                disciplina: "",
                subdisciplina: ""
    }




        const renderFormulario = () => {
            switch (opcionSeleccionada) {
                case 'op1':
                  return(<FormExperiencia_2/>);
                case 'op2':
                  return(<FormExperiencia_1 des={initialInvestigador}/>);
                case 'op3':
                    return(<FormExperiencia_1 des={initialOtro}/>);
                default:
                  return null;
              }

            
        }
  return (
    <>
        <div className="flex items-center justify-center flex-col mt-[80px]">
                <Title level={"h4"} text={"En este puesto se desempeñó como"} />
                <header>
                    <nav className="mt-30">
                        <ul className="flex flex-row gap-5 item-center justify-center top-">
                        <li className="cursor-pointer" onClick={() => setOpcionSeleccionada('op1')}>Catedrático CONACYT</li>
                        <li className="cursor-pointer" onClick={() => setOpcionSeleccionada('op2')}>Investigador</li>
                        <li className="cursor-pointer" onClick={() => setOpcionSeleccionada('op3')}>Otro</li>              
                        </ul>
                    </nav>
                    </header>
        </div>
        {renderFormulario()}
        <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                  <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                    <thead className=" w-full h-10 p-30">
                    <tr className=" rounded-lg">
                        <th className="p-3"><Title level="h3" text="Experiencia Laboral" /> </th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <thead>
                      <tr className=" bg-[#667DA3] text-white">
                        <th className="py-2 px-4 border-b text-left">Puesto desempeño</th>
                        <th className="py-2 px-4 border-b text-left">Institución</th>
                        <th className="py-2 px-4 border-b text-left">Fecha inicio</th>
                        <th className="py-2 px-4 border-b text-left">Fecha fin</th>
                        <th className="py-2 px-4 border-b text-left">Empleo actual</th>
                        <th className="py-2 px-4 border-b text-left">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">1</td>
                        <td className="py-2 px-4 border-b">John Doe</td>
                        <td className="py-2 px-4 border-b">john@example.com</td>
                        <td className="py-2 px-4 border-b">john@example.com</td>
                        <td className="py-2 px-4 border-b">si</td>
                        <td className="py-2 px-4 border-b">
                        <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                          <span className="material-icons-sharp">
                            edit
                            </span>
                          </button>
                          <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
                          <span className="material-symbols-outlined">
                           delete
                           </span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">1</td>
                        <td className="py-2 px-4 border-b">John Doe</td>
                        <td className="py-2 px-4 border-b">john@example.com</td>
                        <td className="py-2 px-4 border-b">john@example.com</td>
                        <td className="py-2 px-4 border-b">No</td>
                        <td className="py-2 px-4 border-b">
                        <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                          <span className="material-icons-sharp">
                            edit
                            </span>
                          </button>
                          <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2  hover:bg-red-600  ">
                          <span className="material-symbols-outlined">
                           delete
                           </span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

    </>
  );
}

export default FormExperienciaL;

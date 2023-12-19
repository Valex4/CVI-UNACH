import { useState } from "react";
import { Formik, Form } from "formik";
import  html2pdf  from "html2pdf.js";
import Swal from "sweetalert2";
import Select from 'react-select'
import WrapperInput from "../../molecules/wrapperInput";
import WrapperTable from "../../molecules/WrapperTable";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";



function FormGeneralData () {
  
  const Sexo = [
    { value: 'femenino', label: 'Femenino' },
    { value: 'masculino', label: 'Masculino' }
  ]
  
  const Estado = [
    { value: 'casado', label: 'Casado(a)' },
    { value: 'divorciado', label: 'Divorciado(a)' },
    { value: 'separado', label: 'Separado(a)' },
    { value: 'soltero', label: 'Soltero(a)' },
    { value: 'unionLibre', label: 'Unión Libre' },
    { value: 'viudo', label: 'Viudo(a)' },
    { value: 'contratoDeConvivencia', label: 'Contrato de convivnecia' }
  ]

  const handlerClickAgregar = () =>{
    Swal.fire("SweetAlert2 is working!");
  }

  const handlerClickImprimir = async () =>{
    Swal.fire("Imprimiendo JAJAJASJ!");

    const content = document.getElementById('content-to-pdf');

    const options = {
      margin: 10,
      filename: 'datos_personales.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    try {
      const pdf = await html2pdf().set(options).from(content).save();
    } catch (error) {
      console.error('Error al generar el PDF:', error);
    }

  }
    return ( 
    <>
             <Formik
            initialValues={{
                curp: "",
                nombre: "",
                papellido: "",
                sapellido: "",
                fecha: "",
                sexo: "",
                pais: "",
                entidad: "",
                rfc: "",
                estado: "",
                nacionalidad: "",
                numero: "",
                tipo: "",
                orc: "",
                idthomsom: "",
                idauthor: "",
                pubidauthor: "",
                openid: ""

            }}

            onSubmit={async(values, actions) =>{
                try{
                    Swal.fire({
                        icon: "success",
                        title: "Guardado con exíto",
                        showConfirmButton: true,
                        timer: 1500,
                      });
                      console.table(values);
                }catch(error){
                    console.log(error);
                }
            }} 
        
        >
            {({values, errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting, setFieldValue}) => (
                <Form onSubmit={handleSubmit} className="space-y-2 mt-[10px] py-8 pl-8 pr-8">
                  <div id="content-to-pdf">
                    <div className=" flex justify justify-center mb-5">
                    <Title level={"h1"} text={"Datos generales"} />
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <WrapperInput onchange={handleChange} name={"curp"} type="text" mensaje="CURP" />
                        <WrapperInput onchange={handleChange} name={"nombre"} type="text" mensaje="Nombre" />
                        <WrapperInput onchange={handleChange} name={"papellido"} type="text" mensaje="Primer apellido" />
                        <WrapperInput onchange={handleChange} name={"sapellido"} type="text" mensaje="Segundo apellido" />
                        <WrapperInput onchange={handleChange} name={"fecha"} type="date" mensaje="Fecha de nacimiento"  />
                        <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Sexo</label>
                        <Select name='sexo' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`sexo`, selectedOption.value)} options={Sexo}/>
                        </div>
                        <WrapperInput onchange={handleChange} name={"pais"} type="text" mensaje="País de nacimiento" />
                        <WrapperInput onchange={handleChange} name={"entidad"} type="text" mensaje="Entidad federativa"  />
                        <WrapperInput onchange={handleChange} name={"rfc"} type="text" mensaje="RFC"  />
                        <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Estado conyugal</label>
                        <Select name='estado' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`estado`, selectedOption.value)} options={Estado}/>
                        </div>
                        <WrapperInput onchange={handleChange} name={"nacionalidad"} type="text" mensaje="Nacionalidad" />
                        <WrapperInput onchange={handleChange} name={"numero"} type="text" mensaje="N° de CVU"  />
                        <WrapperInput onchange={handleChange} name={"tipo"} type="text" mensaje="Tipo de beneficio"  />
                    </div>
                    

            <div>
                <div className="mt-12 w-full h-[38px] bg-[#758AAC] rounded flex items-center justify-between ">
                    <h4 className="px-2 text-white font-bold text-sm">Identificador de autor</h4>
                    <p className="pr-2 text-white font-bold text-sm">ID</p>
                </div>
                <WrapperTable onchange={handleChange} name={"orc"} className="bg-[#18386B]" mensaje="ORC ID" />
                <WrapperTable onchange={handleChange} name={"idthomsom"} className="bg-[#758AAC]" mensaje="Researcher ID Thomson" />
                <WrapperTable onchange={handleChange} name={"idauthor"} className="bg-[#18386B]" mensaje="arXiv Author ID" />
                <WrapperTable onchange={handleChange} name={"pubidauthor"} className="bg-[#758AAC]" mensaje="PubMed Author ID" />
                <WrapperTable onchange={handleChange} name={"openid"} className="bg-[#18386B]" mensaje="Open ID" />
          </div>
                <div className="flex justify-end w-full gap-4">
                <Button type={"button"} mensaje="Imprimir" onclick={handlerClickImprimir} className=" bg-white text-[#828282] mt-3" />
                <Button type={"submit"} mensaje="Guardar" className=" bg-[#18386B] text-white mt-3" />
                </div>
            </div>
            <div>
                <div className="mx-auto mt-8 mb-8">
                  <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                    <thead className=" w-full h-10 p-30">
                    <tr className=" rounded-lg">
                        <th className="p-3"><Title level="h3" text="Medios de contacto" /> </th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="p-3"><Button type={"button"} onClick={handlerClickAgregar} mensaje="Agregar" className="w-full bg-[#18386B] text-white" /> {/* cambiar boton */}</th>
                    </tr>
                    </thead>
                    <thead>
                      <tr className=" bg-[#667DA3] text-white">
                        <th className="py-2 px-4 border-b text-left">Medio</th>
                        <th className="py-2 px-4 border-b text-left">Categoría</th>
                        <th className="py-2 px-4 border-b text-left">Correo/Telefono</th>
                        <th className="py-2 px-4 border-b text-left">Principal</th>
                        <th className="py-2 px-4 border-b text-left">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">1</td>
                        <td className="py-2 px-4 border-b">John Doe</td>
                        <td className="py-2 px-4 border-b">john@example.com</td>
                        <td className="py-2 px-4 border-b">john@example.com</td>
                        <td className="py-2 px-4 border-b">
                          <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                          <span className="material-icons-sharp">
                            edit
                            </span>
                          </button>
                          <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2  hover:bg-red-600 ">
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
                        <td className="py-2 px-4 border-b">
                        <button type="button" className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                          <span className="material-icons-sharp">
                            edit
                            </span>
                          </button>
                          <button type="button" className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2  hover:bg-red-600 ">
                          <span className="material-symbols-outlined">
                           delete
                           </span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </Form>
            )}
        </Formik>

    </> );
}

export default FormGeneralData;
import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import  html2pdf  from "html2pdf.js";
import Swal from "sweetalert2";
import Select from 'react-select'
import WrapperInput from "../../molecules/wrapperInput";
import WrapperTable from "../../molecules/WrapperTable";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import { getUser } from "../../../api/Routes";
import Cookies from 'js-cookie';



function FormGeneralData () {
  const [Datos, setDatos] = useState([])
  useEffect(() => {
    const getData = async() =>{
      const token = Cookies.get('token');
      console.log(token);
      try{
        const response = await getUser(token);
        console.log("Estamos obteniendo la data el usuario")
        console.table(response.data)
        setDatos(response.data)
      }catch(err){
        console.log(err)
      }
    }
    getData();
  }, [])
  
  
  const Sexo = [
    { value: 'FEMENINO', label: 'FEMENINO' },
    { value: 'MASCULINO', label: 'MASCULINO' },
    { value: 'SIN ESPECIFICAR', label: 'SIN ESPECIFICAR' },
  ]
  
  const Estado = [
    { value: 'CASADO', label: 'CASADO' },
    { value: 'DIVORCIADO', label: 'DIVORCIADO' },
    { value: 'SEPARADO', label: 'SEPARADO' },
    { value: 'SOLTERO', label: 'SOLTERO' },
    { value: 'UNION LIBRE', label: 'UNION LIBRE' },
    { value: 'VIUDO', label: 'VIUDO' },
    { value: 'CONTRATOS DE CONVIVENCIA', label: 'CONTRATOS DE CONVIVENCIA' }
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

  const indexEstadoConyugal = Estado.findIndex((option) => option.value === Datos.estado_conyugal);

  console.log('Índice de estado conyugal:', indexEstadoConyugal);

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
                estado:"",
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
                        <WrapperInput onchange={handleChange} name={"curp"} type="text" mensaje="CURP" dato={Datos.curp} activo="true"/>
                        <WrapperInput onchange={handleChange} name={"nombre"} type="text" mensaje="Nombre" dato={Datos.nombre} activo="true"/>
                        <WrapperInput onchange={handleChange} name={"papellido"} type="text" mensaje="Primer apellido" dato={Datos.primer_apellido} activo="true"/>
                        <WrapperInput onchange={handleChange} name={"sapellido"} type="text" mensaje="Segundo apellido" dato={Datos.segundo_apellido}  activo="true"/>
                        <WrapperInput onchange={handleChange} name={"fecha"} type="date" mensaje="Fecha de nacimiento" dato={Datos.fecha_de_nacimiento}  activo="true"/>
                        <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Sexo</label>
                        <Select name='sexo' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`sexo`, selectedOption.value)} options={Sexo} value={Sexo.filter(option => option.label === `${Datos.sexo}`)} isDisabled="true"/>
                        </div>
                        <WrapperInput onchange={handleChange} name={"pais"} type="text" mensaje="País de nacimiento" dato={Datos.pais}   activo="true"/>
                        <WrapperInput onchange={handleChange} name={"entidad"} type="text" mensaje="Entidad federativa" dato={Datos.entidad}  activo="true"/>
                        <WrapperInput onchange={handleChange} name={"rfc"} type="text" mensaje="RFC" dato={Datos.rfc}   />
                        <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Estado conyugal</label>
                        <Select name='estado' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`estado`, selectedOption.value || '')} defaultValue={Estado[indexEstadoConyugal]} options={Estado}/>
                        </div>
                        <WrapperInput onchange={handleChange} name={"nacionalidad"} type="text" mensaje="Nacionalidad" dato={Datos.nacionalidad}  activo="true"/>
                        <WrapperInput onchange={handleChange} name={"numero"} type="text" mensaje="N° de CVU" dato={Datos.cvi}   activo="true"/>
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
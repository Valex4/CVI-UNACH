import { useState, useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import  html2pdf  from "html2pdf.js";
import Swal from "sweetalert2";
import Select from 'react-select'
import WrapperInput from "../../molecules/wrapperInput";
import WrapperTable from "../../molecules/WrapperTable";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import { getUser, updateUser } from "../../../api/DatosGenerales/Routes";
import * as Yup from 'yup';

function FormGeneralData () {
  const [Datos, setDatos] = useState([])
  const [Fecha, setFecha] = useState()
  useEffect(() => {
    const getData = async() =>{
      try{
        const response = await getUser();
        console.log(response.data);
        const fechaObj = new Date(response.data.fecha_de_nacimiento);
        const fechaFormateada = fechaObj.toISOString().split('T')[0];
        setFecha(fechaFormateada)
        setDatos(response.data)
      }catch(err){
        console.log(err)
      }
    }
    getData();
  }, [])
  
  const validationSchema = Yup.object({
    rfc: Yup.string()
      .notRequired()
      .test('rfc-length', 'El RFC debe contener exactamente 13 caracteres', function (value) {
        // Validar la longitud solo si se ha ingresado un RFC
        return !value || (value && value.length === 13);
      }),
  });

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

  const handlerClickImprimir = async () =>{

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
             validationSchema={validationSchema}
             enableReinitialize
            initialValues={{
                rfc: Datos.rfc,
                estado_conyugal: Datos.estado_conyugal,
                tipo_beneficios: Datos.tipo_beneficios,
            }}
            onSubmit={async(values, actions) =>{
              try {
                console.table(values)
                const response = await updateUser(values, Datos.id);
                if(response.status === 200) {
                  Swal.fire({
                    icon: "success",
                    title: "Guardado con exíto",
                    showConfirmButton: true,
                    timer: 1500,
                  });
                  console.table(values);
                }
              } catch (error) {
                Swal.fire({
                  icon: "error",
                  title: "Error...",
                  text: "Intente de nuevo",
                  footer: 'Si el problema persiste intentelo mas tarde'
                });
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
                        <WrapperInput onchange={handleChange}  type="text" mensaje="CURP" dato={Datos.curp} activo="true"/>
                        <WrapperInput onchange={handleChange}  type="text" mensaje="Nombre" dato={Datos.nombre} activo="true"/>
                        <WrapperInput onchange={handleChange}  type="text" mensaje="Primer apellido" dato={Datos.primer_apellido} activo="true"/>
                        <WrapperInput onchange={handleChange}  type="text" mensaje="Segundo apellido" dato={Datos.segundo_apellido}  activo="true"/>
                        <WrapperInput onchange={handleChange}  type="date" mensaje="Fecha de nacimiento" dato={Fecha}  activo="true"/>
                        <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Sexo</label>
                        <Select name='sexo' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`sexo`, selectedOption.value)} options={Sexo} value={Sexo.filter(option => option.label === `${Datos.sexo}`)} isDisabled="true"/>
                        </div>
                        <WrapperInput onchange={handleChange}  type="text" mensaje="País de nacimiento" dato={Datos.pais}   activo="true"/>
                        <WrapperInput onchange={handleChange}  type="text" mensaje="Entidad federativa" dato={Datos.entidad}  activo="true"/>
                        <div>
                          <WrapperInput onchange={handleChange} name={"rfc"} type="text" mensaje="RFC" dato={values.rfc}/>
                          <ErrorMessage name="rfc" className='text-red-500' component="div" />
                        </div>
                        <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Estado conyugal: {Datos.estado_conyugal}</label>
                        <Select name='estado_conyugal' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`estado_conyugal`, selectedOption.value)}  options={Estado}/>
                        </div>
                        <WrapperInput onchange={handleChange}  type="text" mensaje="Nacionalidad" dato={Datos.nacionalidad}  activo="true"/>
                        <WrapperInput onchange={handleChange}  type="text" mensaje="N° de CVU" dato={Datos.cvi}   activo="true"/>
                        <WrapperInput onchange={handleChange}  name={"tipo_beneficios"} type="text" dato={values.tipo_beneficios} mensaje={`Tipo de beneficio:`}  />
                    </div>
                    

            <div>
                <div className="mt-12 w-full h-[38px] bg-[#758AAC] rounded flex items-center justify-between ">
                    <h4 className="px-2 text-white font-bold text-sm">Identificador de autor</h4>
                    <p className="pr-2 text-white font-bold text-sm">ID</p>
                </div>
                <WrapperTable onchange={handleChange} className="bg-[#18386B]" mensaje="ORC ID" />
                <WrapperTable onchange={handleChange} className="bg-[#758AAC]" mensaje="Researcher ID Thomson" />
                <WrapperTable onchange={handleChange} className="bg-[#18386B]" mensaje="arXiv Author ID" />
                <WrapperTable onchange={handleChange} className="bg-[#758AAC]" mensaje="PubMed Author ID" />
                <WrapperTable onchange={handleChange} className="bg-[#18386B]" mensaje="Open ID" />
          </div>
                <div className="flex justify-end w-full gap-4">
                <Button type={"button"} mensaje="Imprimir" onclick={handlerClickImprimir} className=" bg-white text-[#828282] mt-3" />
                <button type="submit" className="rounded-md bg-[#30599b] text-white mt-3 border-2 border-[#18386B] px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:text-white hover:bg-[#30599b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{isSubmitting ? "Guardando..." : "Guardar"}</button>
                </div>
            </div>

            </Form>
            )}
        </Formik>

    </> );
}

export default FormGeneralData;
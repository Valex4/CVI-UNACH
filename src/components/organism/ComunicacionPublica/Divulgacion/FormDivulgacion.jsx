import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import Title from '../../../atoms/Title'
import Swal from 'sweetalert2'
import Select from 'react-select'
import WrapperInput from '../../../molecules/wrapperInput'
import { createDivulgacion } from '../../../../api/ComunicacionPublica/Routes'
import * as Yup from 'yup';

function FormDivulgacion() {
  const dirigidos = [
    {value:"Otro", label:"Otro"},
    {value:"Público adulto", label:"Público adulto"},
    {value:"Público en general", label:"Público en general"},
    {value:"Público infantil", label:"Público infantil"},
    {value:"Público juvenil", label:"Público juvenil"},
    {value:"Sector empresarial", label:"Sector empresarial"},
    {value:"Sector estudiantil", label:"Sector estudiantil"},
    {value:"Sector gobierno", label:"Sector gobierno"},
    {value:"Sector industrial", label:"Sector industrial"},
    {value:"Sector judicial", label:"Sector judicial"},
    {value:"Sector legislativo", label:"Sector legislativo"},
  ]

  const tiposDivulgaciones = [
    {value:"Internacional", label:"Internacional"},
    {value:"Nacional", label:"Nacional"},
  ]

  const medios = [
    {value:"Internet", label:"Internet"},
    {value:"Museo o centro interactivo de ciencia", label:"Museo o centro interactivo de ciencia"},
    {value:"Otro", label:"Otro"},
    {value:"Planetario", label:"Planetario"},
    {value:"Prensa", label:"Prensa"},
    {value:"Radio", label:"Radio"},
    {value:"Revista", label:"Revista"},
    {value:"Televisión", label:"Televisión"},
  ]

  const validationSchema = Yup.object().shape({
    titulo_trabajo: Yup.string().required('Campo obligatorio'),
    tipo_participacion: Yup.string().required('Campo obligatorio'),
    tipo_evento: Yup.string().required('Campo obligatorio'),
    institucion_organizadora: Yup.string().required('Campo obligatorio'),
    dirigido_a: Yup.string().required('Campo obligatorio'),
    fecha: Yup.string().required('Campo obligatorio'),
    tipo_divulgacion: Yup.string().required('Campo obligatorio'),
    tipo_medio: Yup.string().required('Campo obligatorio'),
    palabra_clave1: Yup.string().required('Campo obligatorio'),
    palabra_clave2: Yup.string().required('Campo obligatorio'),
    palabra_clave3: Yup.string().required('Campo obligatorio'),
    producto_obtenido: Yup.string().required('Campo obligatorio'),
    notas: Yup.string().required('Campo obligatorio'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        titulo_trabajo:"",
        tipo_participacion:"",
        tipo_evento:"",
        institucion_organizadora:"",
        dirigido_a:"",
        fecha:"",
        tipo_divulgacion:"",
        tipo_medio:"",
        palabra_clave1:"",
        palabra_clave2:"",
        palabra_clave3:"",
        producto_obtenido:"",
        notas:""
      }}
      onSubmit={async (values, actions) => {
        try {
          const response = await createDivulgacion(values);
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
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        isSubmitting,
        setFieldValue
      }) => (
        <Form
          onSubmit={handleSubmit}
          className="space-y-2 mt-[10px] py-8 pl-8 pr-8"
        >
          <div id="padre" className="flex flex-col gap-8">
            <Title level={"h1"} text={"Divulgación"} />
            <div>
            <WrapperInput mensaje={"Título del trabajo: "} type={"text"} name={"titulo_trabajo"} onchange={handleChange} />
            <ErrorMessage name="titulo_trabajo" className='text-red-500' component="div" />
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <div>
              <WrapperInput mensaje={"Tipo de participación: "} type={"text"} name={"tipo_participacion"} onchange={handleChange} />
              <ErrorMessage name="tipo_participacion" className='text-red-500' component="div" />
              </div>
              <div>
              <WrapperInput mensaje={"Tipo de evento: "} type={"text"} name={"tipo_evento"} onchange={handleChange} />
              <ErrorMessage name="tipo_evento" className='text-red-500' component="div" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className='col-span-2'>
                <WrapperInput mensaje={"Institución organizadora: "} type={"text"} name={"institucion_organizadora"} onchange={handleChange} />
                <ErrorMessage name="institucion_organizadora" className='text-red-500' component="div" />
              </div>
                <section className='mt-1 flex flex-col gap-2'>
                  <label className="block text-sm font-medium  text-gray-900 first-letter:">Dirigido a:</label>
                  <Select name='dirigido_a' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`dirigido_a`, selectedOption.value)} options={dirigidos} />
                  <ErrorMessage name="dirigido_a" className='text-red-500' component="section" />
                </section>
                <div>
                <WrapperInput mensaje={"Fecha: "} type={"date"} name={"fecha"} onchange={handleChange} />
                <ErrorMessage name="fecha" className='text-red-500' component="div" />
                </div>
                <section className='mt-1 flex flex-col gap-2'>
                  <label className="block text-sm font-medium  text-gray-900 first-letter:">Tipo de divulgación y difusión:</label>
                  <Select name='tipo_divulgacion' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`tipo_divulgacion`, selectedOption.value)} options={tiposDivulgaciones} />
                  <ErrorMessage name="tipo_divulgacion" className='text-red-500' component="section" />
                </section>
                <section className='mt-1 flex flex-col gap-2'>
                  <label className="block text-sm font-medium  text-gray-900 first-letter:">Tipo medio:</label>
                  <Select name='tipo_medio' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`tipo_medio`, selectedOption.value)} options={medios} />
                  <ErrorMessage name="tipo_medio" className='text-red-500' component="section" />
                </section>
                <div>
                <WrapperInput mensaje={"Palabra clave 1: "} type={"text"} name={"palabra_clave1"} onchange={handleChange} />
                <ErrorMessage name="palabra_clave1" className='text-red-500' component="div" />
                </div>
                <div>
                <WrapperInput mensaje={"Palabra clave 2: "} type={"text"} name={"palabra_clave2"} onchange={handleChange} />
                <ErrorMessage name="palabra_clave2" className='text-red-500' component="div" />
                </div>
                <div>
                <WrapperInput mensaje={"Palabra clave 3: "} type={"text"} name={"palabra_clave3"} onchange={handleChange} /> 
                <ErrorMessage name="palabra_clave3" className='text-red-500' component="div" />
                </div>
            </div>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Notas periodísticas:</label>
                <textarea name="notas" placeholder='Notas periodísticas' cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
                <ErrorMessage name="notas" className='text-red-500' component="section" />
              </section>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Producto obtenido:</label>
                <textarea name="producto_obtenido" placeholder='Escriba uno o más productos obtenidos' cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
                <ErrorMessage name="producto_obtenido" className='text-red-500' component="section" />
              </section>
            <div className="mt-3">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#18386B] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#30599b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isSubmitting ? "Guardando..." : "Guardar"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormDivulgacion
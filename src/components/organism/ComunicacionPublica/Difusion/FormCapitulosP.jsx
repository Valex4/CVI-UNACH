import React from 'react'
import WrapperInput from "../../../molecules/wrapperInput";
import Swal from "sweetalert2";
import Select from "react-select";
import Title from "../../../atoms/Title";
import { Form, Formik, ErrorMessage } from "formik";
import { createCapitulosPublicados } from '../../../../api/ComunicacionPublica/Routes';
import * as Yup from 'yup';

function FormCapitulosP() {


  const decisions = [
    { value: true, label: "Si" },
    { value: false, label: "No" },
  ];

  const areas = [
    { value: "Biología y química", label: "Biología y química" },
    { value: "Ciencias Sociales", label: "Ciencias Sociales" },
    {
      value: "Ciencias agropecuarias y biotecnología",
      label: "Ciencias agropecuarias y biotecnología",
    },
    {
      value: "Ciencias físico matemáticas y ciencias de la tierra",
      label: "Ciencias físico matemáticas y ciencias de la tierra",
    },
    {
      value: "Humanidades y ciencias de la conducta",
      label: "Humanidades y ciencias de la conducta",
    },
    { value: "Ingeniería y tecnología", label: "Ingeniería y tecnología" },
    {
      value: "Medicina y ciencias de la salud",
      label: "Medicina y ciencias de la salud",
    },
  ];

  const validationSchema = Yup.object().shape({
    ISBN: Yup.string().required('Campo obligatorio'),
    titulo_libro: Yup.string().required('Campo obligatorio'),
    editorial: Yup.string().required('Campo obligatorio'),
    numero_edicion: Yup.string().required('Campo obligatorio'),
    year_publicacion: Yup.string()
      .matches(/^\d{4}$/, 'El año debe contener exactamente 4 números.')
      .required('Campo obligatorio'),
    titulo_capitulo: Yup.string().required('Campo obligatorio'),
    numero_capitulo: Yup.string().required('Campo obligatorio'),
    de_pagina: Yup.string().required('Campo obligatorio'),
    a_pagina: Yup.string().required('Campo obligatorio'),
    resumen: Yup.string().required('Campo obligatorio'),
    area: Yup.string().required('Campo obligatorio'),
    campo: Yup.string().required('Campo obligatorio'),
    disciplina: Yup.string().required('Campo obligatorio'),
    subdisciplina: Yup.string().required('Campo obligatorio'),
    apoyo_CONACYT: Yup.string().required('Campo obligatorio'),
  });

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          ISBN: "",
          titulo_libro: "",
          editorial: "",
          numero_edicion: "",
          year_publicacion: "",
          titulo_capitulo: "",
          numero_capitulo: "",
          de_pagina: "",
          a_pagina: "",
          resumen: "",
          apoyo_CONACYT: "",
          fondo: "",
          area: "",
          campo: "",
          disciplina: "",
          subdisciplina: "",
        }}
        onSubmit={async (values, actions) => {
          try {
            const response = await createCapitulosPublicados(values);
            if (response.status === 200) {
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
          handleBlur,
          isSubmitting,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit} className="space-y-2 mt-[10px] py-8 pl-8 pr-8">
            <div className='flex flex-col gap-5'>
              <Title level="h1" text="Capítulos publicados" />
              <div className='grid grid-cols-2 gap-5'>
                <div>
                <WrapperInput onchange={handleChange} name="ISBN" mensaje="ISBN:" type="text" />
                <ErrorMessage name="ISBN" className='text-red-500' component="div" />
                </div>
                <div>
                <WrapperInput onchange={handleChange} name="titulo_libro" mensaje="Título del libro:" type="text" />
                <ErrorMessage name="titulo_libro" className='text-red-500' component="div" />
                </div>
              </div>
              <div className='grid grid-cols-3 gap-5'>
                <div>
                 <WrapperInput onchange={handleChange} name="editorial" mensaje="Editorial:" type="text" /> 
                <ErrorMessage name="editorial" className='text-red-500' component="div" />
                </div>
                <div>
                <WrapperInput onchange={handleChange} name="numero_edicion" mensaje="Número de edición:" type="number" />
                <ErrorMessage name="numero_edicion" className='text-red-500' component="div" />
                </div>
                <div>
                <WrapperInput onchange={handleChange} name="year_publicacion" mensaje="Año de publicación:" type="text" />  
                <ErrorMessage name="year_publicacion" className='text-red-500' component="div" />
                </div>
              </div>
              <div>
                <WrapperInput onchange={handleChange} name="titulo_capitulo" mensaje="Título del capítulo:" type="text" />  
                <ErrorMessage name="titulo_capitulo" className='text-red-500' component="div" />
                </div>
              <div className='grid grid-cols-3 gap-5'>
                <div>
                <WrapperInput onchange={handleChange} name="numero_capitulo" mensaje="No. del capítulo:" type="number" />  
                <ErrorMessage name="numero_capitulo" className='text-red-500' component="div" />
                </div>
                <div>
                <WrapperInput onchange={handleChange} name="de_pagina" mensaje="Páginas de:" type="number" />  
                <ErrorMessage name="de_pagina" className='text-red-500' component="div" />
                </div>
                <div>
                <WrapperInput onchange={handleChange} name="a_pagina" mensaje="Pagina a:" type="number" />  
                <ErrorMessage name="a_pagina" className='text-red-500' component="div" />
                </div>
              </div>

              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Resumen:</label>
                <textarea name="resumen" cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
                <ErrorMessage name="resumen" className='text-red-500' component="section" />
              </section>
              <div className="flex flex-col gap-5">
                <Title level="h4" text="Área de conocimiento" />
                <div className="grid grid-cols-3 gap-5">
                  <div className="mt-2">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Área</label>
                    <Select name="area" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`area`, selectedOption.value)} options={areas}/>
                    <ErrorMessage name="area" className='text-red-500' component="div" />
                  </div>
                <div>
                <WrapperInput onchange={handleChange} name="campo" mensaje="Campo" type="text" /> 
                <ErrorMessage name="campo" className='text-red-500' component="div" />
                </div>
                <div>
                <WrapperInput onchange={handleChange} name="disciplina" mensaje="Disciplina" type="text" />  
                <ErrorMessage name="disciplina" className='text-red-500' component="div" />
                </div>
                <div>
                <WrapperInput onchange={handleChange} name="subdisciplina" mensaje="Subdisciplina" type="text" />  
                <ErrorMessage name="subdisciplina" className='text-red-500' component="div" />
                </div> 
                </div>
                <div className="grid grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-900"> ¿Recibicio apoyo del CONACYT?:</label>
                    <Select name="apoyo_CONACYT" placeholder={"Seleccione una opción"} style="display: none;" onChange={(selectedOption, _) => setFieldValue(`apoyo_CONACYT`, selectedOption.value)} options={decisions} />
                    <ErrorMessage name="apoyo_CONACYT" className='text-red-500' component="div" />
                  </div>
                  {values.apoyo_CONACYT === true && (
                    <WrapperInput mensaje={"Fondo/programa: "} type={"text"} name={"fondo"} onchange={handleChange} />
                  )}
                </div>
              </div>
              <div>
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
    </>
  )
}

export default FormCapitulosP
import React from "react";
import WrapperInput from "../../../molecules/wrapperInput";
import Title from "../../../atoms/Title";
import Swal from "sweetalert2";
import Select from "react-select";
import { createPublicacionArticulos } from "../../../../api/ComunicacionPublica/Routes";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

function FormPArticulos() {
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

  const decisions = [
    { value: true, label: "Si" },
    { value: false, label: "No" },
  ];

  const validationSchema = Yup.object().shape({
    ISSN_impreso: Yup.string().required('Campo obligatorio'),
    ISSN_electronico: Yup.string().required('Campo obligatorio'),
    DOI: Yup.string().required('Campo obligatorio'),
    nombre_revista: Yup.string().required('Campo obligatorio'),
    titulo_articulo: Yup.string().required('Campo obligatorio'),
    num_revista: Yup.string().required('Campo obligatorio'),
    vol_revista: Yup.string().required('Campo obligatorio'),
    year_publicacion: Yup.string()
      .matches(/^\d{4}$/, 'El año debe contener exactamente 4 números.')
      .required('Campo obligatorio'),
    de_pagina: Yup.string().required('Campo obligatorio'),
    a_pagina: Yup.string().required('Campo obligatorio'),
    palabra_clave1: Yup.string().required('Campo obligatorio'),
    palabra_clave2: Yup.string().required('Campo obligatorio'),
    palabra_clave3: Yup.string().required('Campo obligatorio'),
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
          ISSN_impreso: "",
          ISSN_electronico: "",
          DOI: "",
          nombre_revista: "",
          titulo_articulo: "",
          num_revista: "",
          vol_revista: "",
          year_publicacion: "",
          de_pagina: "",
          a_pagina: "",
          palabra_clave1: "",
          palabra_clave2: "",
          palabra_clave3: "",
          area: "",
          campo: "",
          disciplina: "",
          subdisciplina: "",
          apoyo_CONACYT: "",
          fondo: "",
        }}
        onSubmit={async (values, actions) => {
          try {
            const response = await createPublicacionArticulos(values);
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
          <Form
            onSubmit={handleSubmit}
            className="space-y-2 mt-[10px] py-8 pl-8 pr-8"
          >
            <div className="flex flex-col gap-6">
              <Title level="h1" text="Publicación de artículos" />
              <div className="grid grid-cols-3 gap-5">
                <div>
                  <WrapperInput onchange={handleChange} name="ISSN_impreso" mensaje="ISSN impreso:" type="text" />
                  <ErrorMessage name="ISSN_impreso" className='text-red-500' component="div" />
                </div>
                <div>
                  <WrapperInput onchange={handleChange} name="ISSN_electronico" mensaje="ISSN electrónico:" type="text" />
                  <ErrorMessage name="ISSN_electronico" className='text-red-500' component="div" />
                </div>
                <div>
                  <WrapperInput onchange={handleChange} name="DOI" mensaje="DOI:" type="text" />
                  <ErrorMessage name="DOI" className='text-red-500' component="div" />
                </div>
              </div>
              <div>
                <WrapperInput onchange={handleChange} name="nombre_revista" mensaje="Nombre de la revista:" type="text" />
                <ErrorMessage name="nombre_revista" className='text-red-500' component="div" />
              </div>
              <div>
                <WrapperInput onchange={handleChange} name="titulo_articulo" mensaje="Título del artículo:" type="text" />
                <ErrorMessage name="titulo_articulo" className='text-red-500' component="div" />
              </div>
              <div className="grid grid-cols-3 gap-5">
                <div>
                  <WrapperInput onchange={handleChange} name="num_revista" mensaje="Número de la revista:" type="number" />
                  <ErrorMessage name="num_revista" className='text-red-500' component="div" />
                </div>
                <div>
                  <WrapperInput onchange={handleChange} name="vol_revista" mensaje="Volumen de la revista:" type="number" />
                  <ErrorMessage name="vol_revista" className='text-red-500' component="div" />
                </div>
                <div>
                  <WrapperInput onchange={handleChange} name="year_publicacion" mensaje="Año de la publicación:" type="text" />
                  <ErrorMessage name="year_publicacion" className='text-red-500' component="div" />
                </div>
                <div>
                  <WrapperInput onchange={handleChange} name="de_pagina" mensaje="Páginas de:" type="numbres" />
                  <ErrorMessage name="de_pagina" className='text-red-500' component="div" />
                </div>
                <div>
                  <WrapperInput onchange={handleChange} name="a_pagina" mensaje="a:" type="number" />
                  <ErrorMessage name="a_pagina" className='text-red-500' component="div" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5">
                <div>
                  <WrapperInput onchange={handleChange} name="palabra_clave1" mensaje="Palabra clave 1:" type="text" />
                  <ErrorMessage name="palabra_clave1" className='text-red-500' component="div" />
                </div>
                <div>
                  <WrapperInput onchange={handleChange} name="palabra_clave2" mensaje="Palabra clave 2:" type="text" />
                  <ErrorMessage name="palabra_clave2" className='text-red-500' component="div" />
                </div>
                <div>
                  <WrapperInput onchange={handleChange} name="palabra_clave3" mensaje="Palabra clave 3:" type="text" />
                  <ErrorMessage name="palabra_clave3" className='text-red-500' component="div" />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <Title level="h4" text="Área de conocimiento" />
                <div className="grid grid-cols-3 gap-5">
                  <div className="mt-2">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Área</label>
                    <Select name="area" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`area`, selectedOption.value)} options={areas} />
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
                    <label className="block text-sm font-medium mb-3 text-gray-900"> ¿Recibicio apoyo del CONACYT?: </label>
                    <Select name="apoyo_CONACYT" placeholder={"Seleccione una opción"} style="display: none;" onChange={(selectedOption, _) => setFieldValue(`apoyo_CONACYT`, selectedOption.value)} options={decisions} />
                    <ErrorMessage name="apoyo_CONACYT" className='text-red-500' component="div" />
                  </div>
                  {values.apoyo_CONACYT === true && (
                    <>
                      <div>
                        <WrapperInput mensaje={"Fondo/programa: "} type={"text"} name={"fondo"} onchange={handleChange} />
                        <ErrorMessage name="fondo" className='text-red-500' component="div" />
                      </div>
                    </>
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
  );
}

export default FormPArticulos;

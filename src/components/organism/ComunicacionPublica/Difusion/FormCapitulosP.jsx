import React from 'react'
import WrapperInput from "../../../molecules/wrapperInput";
import Swal from "sweetalert2";
import Select from "react-select";
import Title from "../../../atoms/Title";
import { Form, Formik } from "formik";

function FormCapitulosP() {


  const decisions = [
    { value: "si", label: "Si" },
    { value: "no", label: "No" },
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

  return (
    <>
      <Formik
        initialValues={{
          isbn: "",
          tituloLibro: "",
          editorial: "",
          numeroEdicion: "",
          yearPublicacion: "",
          tituloCapitulo: "",
          numeroCapitulo: "",
          paginasDe: "",
          paginaA: "",
          resumen: "",
          apoyoConacyt: "",
          fondo: "",
          area: "",
          campo: "",
          disciplina: "",
          subdisciplina: "",
        }}
        onSubmit={async (values, actions) => {
          try {
            Swal.fire({
              icon: "success",
              title: "Guardado con exíto",
              showConfirmButton: true,
              timer: 1500,
            });
            console.table(values);
          } catch (error) {
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
            <div className='flex flex-col gap-5'>
              <Title level="h1" text="Capítulos publicados" />
              <div className='grid grid-cols-2 gap-5'>
                <WrapperInput onchange={handleChange} name="isbn" mensaje="ISBN:" type="text" />
                <WrapperInput onchange={handleChange} name="tituloLibro" mensaje="Título del libro:" type="text" />
              </div>
              <div className='grid grid-cols-3 gap-5'>
                <WrapperInput onchange={handleChange} name="editorial" mensaje="Editorial:" type="text" />
                <WrapperInput onchange={handleChange} name="numeroEdicion" mensaje="Número de edición:" type="number" />
                <WrapperInput onchange={handleChange} name="yearPublicacion" mensaje="Año de publicación:" type="number" />
              </div>
              <WrapperInput onchange={handleChange} name="tituloCapitulo" mensaje="Título del capítulo:" type="number" />
              <div className='grid grid-cols-3 gap-5'>
                <WrapperInput onchange={handleChange} name="numeroCapitulo" mensaje="No. del capítulo:" type="text" />
                <WrapperInput onchange={handleChange} name="paginasDe" mensaje="Páginas de:" type="number" />
                <WrapperInput onchange={handleChange} name="paginaA" mensaje="Pagina a:" type="number" />
              </div>

              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Resumen:</label>
                <textarea name="resumen" cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
              </section>

              <div className="flex flex-col gap-5">
                <Title level="h4" text="Área de conocimiento" />
                <div className="grid grid-cols-3 gap-5">
                  <div className="mt-2">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Área
                    </label>
                    <Select
                      name="area"
                      placeholder={"Seleccione una opción"}
                      onChange={(selectedOption, _) =>
                        setFieldValue(`area`, selectedOption.value)
                      }
                      options={areas}
                    />
                  </div>
                  <WrapperInput onchange={handleChange} name="campo" mensaje="Campo" type="text" />
                  <WrapperInput onchange={handleChange} name="disciplina" mensaje="Disciplina" type="text" />
                  <WrapperInput onchange={handleChange} name="subdisciplina" mensaje="Subdisciplina" type="text" />
                </div>
                <div className="grid grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-900">
                    ¿Recibicio apoyo del CONACYT?:
                  </label>
                  <Select
                    name="apoyoConacyt"
                    placeholder={"Seleccione una opción"}
                    style="display: none;"
                    onChange={(selectedOption, _) =>
                      setFieldValue(`apoyoConacyt`, selectedOption.value)
                    }
                    options={decisions}
                  />
                </div>
                {values.apoyoConacyt === "si" && (
                  <WrapperInput
                    mensaje={"Fondo/programa: "}
                    type={"text"}
                    name={"fondo"}
                    onchange={handleChange}
                  />
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
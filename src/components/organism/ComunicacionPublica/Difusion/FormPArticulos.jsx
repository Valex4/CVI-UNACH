import React from "react";
import WrapperInput from "../../../molecules/wrapperInput";
import Title from "../../../atoms/Title";
import Swal from "sweetalert2";
import Select from "react-select";

import { Formik, Form } from "formik";

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
    { value: "si", label: "Si" },
    { value: "no", label: "No" },
  ];

  return (
    <>
      <Formik
        initialValues={{
          issnimpreso: "",
          issnelectronico: "",
          doi: "",
          nombredelarevista: "",
          tituloArticulo: "",
          numeroRevista: "",
          volumenRevista: "",
          yearPublicacion: "",
          paginaDe: "",
          paginaA: "",
          palabraClave1: "",
          palabraClave2: "",
          palabraClave3: "",
          area: "",
          campo: "",
          disciplina: "",
          subdisciplina: "",
          apoyoConacyt: "",
          fondo: "",
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
            <div className="flex flex-col gap-6">
              <Title level="h1" text="Publicación de artículos" />
              <div className="grid grid-cols-3 gap-5">
                <WrapperInput onchange={handleChange} name="issnimpreso" mensaje="ISSN impreso:" type="text" />
                <WrapperInput onchange={handleChange} name="issnelectronico" mensaje="ISSN electrónico:" type="text" />
                <WrapperInput onchange={handleChange} name="doi" mensaje="DOI:" type="text" />
              </div>
              <WrapperInput onchange={handleChange} name="nombredelarevista" mensaje="Nombre de la revista:" type="text" />
              <WrapperInput onchange={handleChange} name="tituloArticulo" mensaje="Título del artículo:" type="text" />
              <div className="grid grid-cols-3 gap-5">
                <WrapperInput onchange={handleChange} name="numeroRevista" mensaje="Número de la revista:" type="text" />
                <WrapperInput onchange={handleChange} name="volumenRevista" mensaje="Volumen de la revista:" type="text" />
                <WrapperInput onchange={handleChange} name="yearPublicacion" mensaje="Año de la publicación:" type="text" />
                <WrapperInput onchange={handleChange} name="paginaDe" mensaje="Páginas de:" type="text" />
                <WrapperInput onchange={handleChange} name="paginaA" mensaje="a:" type="text" />
              </div>
              <div className="grid grid-cols-3 gap-5">
                <WrapperInput onchange={handleChange} name="palabraClave1" mensaje="Palabra clave 1:" type="text" />
                <WrapperInput onchange={handleChange} name="palabraClave2" mensaje="Palabra clave 2:" type="text" />
                <WrapperInput onchange={handleChange} name="palabraClave3" mensaje="Palabra clave 3:" type="text" />
              </div>
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
  );
}

export default FormPArticulos;

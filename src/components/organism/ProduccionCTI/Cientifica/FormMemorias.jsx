import React from 'react'
import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Select from 'react-select';
import { createMemories } from "../../../../api/ProduccionCTI/Routes";
import Title from "../../../atoms/Title";
import WrapperInput from "../../../molecules/wrapperInput";

function FormMemorias() {

  const areas = [
    { value: "Biología y química", label: "Biología y química" },
    { value: "Ciencias Sociales", label: "Ciencias Sociales" },
    { value: "Ciencias agropecuarias y Biotecnología", label: "Ciencias agropecuarias y Biotecnología" },
    { value: "Ciencias físico matemático y ciencias de la tierra", label: "Ciencias físico matemático y ciencias de la tierra" },
    { value: "Humanidades y ciencias de la conducta", label: "Humanidades y ciencias de la conducta" },
    { value: "Ingeniería y tecnología", label: "Ingeniería y tecnología" },
    { value: "Mediciona y ciencias de la salud", label: "Mediciona y ciencias de la salud" }
  ]

  const decisions = [
    { value: true, label: "Si" },
    { value: false, label: "No" }
  ];

  return (
    <>
      <Formik
        initialValues={{
          titulo_memorias: "",
          nombre: "",
          primer_apellido: "",
          segundo_apellido: "",
          titulo_publicacion: "",
          de_pagina: "",
          a_pagina: "",
          year_publicacion: "",
          pais: "",
          palabra_clave1: "",
          palabra_clave2: "",
          palabra_clave3: "",
          area: "",
          campo: "",
          disciplina: "",
          subdisciplina: "",
          apoyo_CONACYT: "",
          fondo: ""
        }}
        onSubmit={async (values, actions) => {
          try {
            //Descomentar lo siguiente cuando este lo del axios y funcione el back
            console.table(values);
            const response = await createMemories(values);
            if (response.status === 200) {
              Swal.fire({
                icon: "success",
                title: "Bienvenido",
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Error...",
                text: "Intente de nuevo",
                footer: 'Si el problema persiste intentelo mas tarde'
              });
              console.log(error);
            }
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
          isSubmitting,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit} className="space-y-2 mt-[10px] py-8 pl-8 pr-8">
            <div id="padre" className="flex flex-col gap-8">
              <Title level={"h1"} text={"Memorias"} />
              <WrapperInput
                mensaje={"Título de la memoria:"}
                type={"text"}
                name={"titulo_memorias"}
                onchange={handleChange}
              />

              <div id="fechas" className="grid grid-cols-3 gap-5">
                <WrapperInput
                  mensaje={"Nombre:"}
                  type={"text"}
                  name={"nombre"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Primer apellido:"}
                  type={"text"}
                  name={"primer_apellido"}
                  onchange={handleChange}
                />

                <WrapperInput
                  mensaje={"Segundo apellido:"}
                  type={"text"}
                  name={"segundo_apellido"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Título de la publicación:"}
                  type={"text"}
                  name={"titulo_publicacion"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Páginas de:"}
                  type={"number"}
                  name={"de_pagina"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"a:"}
                  type={"number"}
                  name={"a_pagina"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Año de la publicación:"}
                  type={"number"}
                  name={"year_publicacion"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"País:"}
                  type={"text"}
                  name={"pais"}
                  onchange={handleChange}
                />
              </div>

              <div className="grid grid-cols-3 gap-5">
                <WrapperInput
                  mensaje={"Palabra clave 1:"}
                  type={"text"}
                  name={"palabra_clave1"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Palabra clave 2:"}
                  type={"text"}
                  name={"palabra_clave2"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Palabra clave 3:"}
                  type={"text"}
                  name={"palabra_clave3"}
                  onchange={handleChange}
                />
              </div>

              <Title level={"h4"} text={"Área de conocimiento"} />
              <div className="grid grid-cols-3 gap-5">
                <section className='mt-1 flex flex-col gap-2'>
                  <label className="block text-sm font-medium  text-gray-900 first-letter:">Área:</label>
                  <Select name='area' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`area`, selectedOption.value)} options={areas} />
                </section>
                <WrapperInput
                  mensaje={"Campo:"}
                  type={"text"}
                  name={"campo"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Disciplina:"}
                  type={"text"}
                  name={"disciplina"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Subdisciplina:"}
                  type={"text"}
                  name={"subdisciplina"}
                  onchange={handleChange}
                />
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-900">
                    ¿Recibicio apoyo del CONACYT?
                  </label>
                  <Select
                    name="apoyo_CONACYT"
                    placeholder={"Seleccione una opción"}
                    onChange={(selectedOption, _) =>
                      setFieldValue(`apoyo_CONACYT`, selectedOption.value)
                    }
                    options={decisions}
                  />
                </div>
                {values.apoyo_CONACYT == true && (
                  <WrapperInput
                    mensaje={"Fondo/programa: "}
                    type={"text"}
                    name={"fondo"}
                    onchange={handleChange}
                  />
                )}
              </div>

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
    </>
  )
}

export default FormMemorias
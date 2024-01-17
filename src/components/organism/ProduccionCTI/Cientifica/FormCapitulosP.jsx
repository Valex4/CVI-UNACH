import React from 'react'
import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { createPublishedChapters } from "../../../../api/ProduccionCTI/Routes";
import Select from 'react-select';
import Title from "../../../atoms/Title";
import WrapperInput from "../../../molecules/wrapperInput";

function FormCapitulosP() {
  const rol = [
    { value: "Co-autor (a)", label: "Co-autor (a)" },
    { value: "Autor (a) único (a)", label: "Autor (a) único (a)" }
  ];

  const estatus = [
    { value: "Aceptado para su publicación", label: "Aceptado para su publicación"},
    { value: "Publicado", label:"Publicado"}
  ]

  const objetivo = [
    { value: "Investigación", label: "Investigación" },
    { value: "Libros de docencia", label: "Libros de docencia" },
    { value: "Trabajos de difusión", label: "Trabajos de difusión" }
  ];

  const areas = [
    {value: "Biología y química", label:"Biología y química"},
    {value:"Ciencias Sociales", label:"Ciencias Sociales"},
    {value:"Ciencias agropecuarias y Biotecnología", label:"Ciencias agropecuarias y Biotecnología"},
    {value:"Ciencias físico matemático y ciencias de la tierra", label:"Ciencias físico matemático y ciencias de la tierra"},
    {value:"Humanidades y ciencias de la conducta", label:"Humanidades y ciencias de la conducta"},
    {value:"Ingeniería y tecnología", label:"Ingeniería y tecnología"},
    {value:"Mediciona y ciencias de la salud", label:"Mediciona y ciencias de la salud"}
]

  const decisions = [
    { value: true, label: "Si" },
    { value: false, label: "No" }
  ];

  const dictaminado = [
    { value: true, label: "Si" },
    { value: false, label: "No" }
  ]

  return (
    <>
      <Formik
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
          DOI: "",
          resumen: "",
          area: "",
          campo:"",
          disciplina:"",
          subdisciplina:"",
          apoyo_CONACYT: "",
          fondo: "",
          rol_participacion: "",
          estatus_publicacion: "",
          objetivo: "",
          dictaminado: "",
          url_cita: "",
          cita_a: "",
          cita_b: "",
          total_citas:""
        }}
        onSubmit={async (values, actions) => {
          try {
            //Descomentar lo siguiente cuando este lo del axios y funcione el back

            console.table(values);
            const response = await createPublishedChapters(values);

                    if(response.status === 200){
                      Swal.fire({
                        icon: "success",
                        title: "Bienvenido",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }else{
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
          <Form
            onSubmit={handleSubmit}
            className="space-y-2 mt-[10px] py-8 pl-8 pr-8"
          >
            <div id="padre" className="flex flex-col gap-8">
              <Title level={"h1"} text={"Capítulos publicados"} />
              
              <div className='grid grid-cols-2 gap-5'>
                <WrapperInput
                  mensaje={"ISBN:"}
                  type={"text"}
                  name={"ISBN"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Titulo del libro:"}
                  type={"text"}
                  name={"titulo_libro"}
                  onchange={handleChange}
                />
              </div>

              <div className="grid grid-cols-3 gap-5">
                <WrapperInput
                  mensaje={"Editorial:"}
                  type={"text"}
                  name={"editorial"}
                  onchange={handleChange}
                />

              <WrapperInput
                mensaje={"Número de edición:"}
                type={"number"}
                name={"numero_edicion"}
                onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Año de la publicación:"}
                  type={"number"}
                  name={"year_publicacion"}
                  onchange={handleChange}
                />
                </div>

                <WrapperInput
                  mensaje={"Título del capítulo:"}
                  type={"text"}
                  name={"titulo_capitulo"}
                  onchange={handleChange}
                />
                <div className='grid grid-cols-3 gap-5'>
                <WrapperInput
                  mensaje={"No. del capítulo:"}
                  type={"number"}
                  name={"numero_capitulo"}
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
                  mensaje={"DOI:"}
                  type={"number"}
                  name={"DOI"}
                  onchange={handleChange}
                />
              </div>

              <section className="mt-1 flex flex-col gap-2">
                <label className="block text-sm font-medium  text-gray-900 first-letter:">
                  Resumen:
                </label>
                <textarea
                  name="resumen"
                  cols="10"
                  onChange={handleChange}
                  rows="3"
                  className="textareaStyle"
                ></textarea>
              </section>

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
                    ¿Recibió apoyo del CONACYT?
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
                
              <div className="grid grid-cols-3 gap-5">
                <div className='flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900">Rol de participación:</label>
                <Select className='w-[98%]' name='rol_participacion' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`rol_participacion`, selectedOption.value)} options={rol} />
                </div>
                  
                <div className='flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900">Estatus de la publicación:</label>
                <Select className='w-[98%]' name='estatus_publicacion' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`estatus_publicacion`, selectedOption.value)} options={estatus} />
                </div>

                <div className='flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900">Objetivo:</label>
                <Select className='w-[98%]' name='objetivo' placeholder={"Objetivo"} onChange={(selectedOption, _) => setFieldValue(`objetivo`, selectedOption.value)} options={objetivo} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-5">
              <section className='mt-1 flex flex-col gap-2'>
                    <label className="block text-sm font-medium  text-gray-900 first-letter:">¿Está dictaminado?</label>
                    <Select name='dictaminado' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`dictaminado`, selectedOption.value)} options={dictaminado} />
                </section> 
                <WrapperInput
                  mensaje={"Url de la cita"}
                  type={"url"}
                  name={"url_cita"}
                  onchange={handleChange}
                />
                </div>
                <div className="grid grid-cols-3 gap-5">
                <WrapperInput
                  mensaje={"Cita A:"}
                  type={"text"}
                  name={"cita_a"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Cita B:"}
                  type={"text"}
                  name={"cita_b"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Total de Cita:"}
                  type={"text"}
                  name={"total_citas"}
                  placeholder={"Total de cita:"}
                  // activo={"activo"}
                  onchange={handleChange}
                />
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

export default FormCapitulosP
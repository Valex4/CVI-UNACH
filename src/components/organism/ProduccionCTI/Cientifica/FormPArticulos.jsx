import React from 'react'
import Title from "../../../atoms/Title";
import { Formik, Form } from "formik";
import WrapperInput from "../../../molecules/wrapperInput";
import { useState } from "react";
import Swal from "sweetalert2";
import Select from 'react-select';

function FormPArticulos() {

  const rol = [
    { value: "Co-autor (a)", label: "Co-autor (a)" },
    { value: "Estudiante es el autor (a) principal", label: "Estudiante es el autor (a) principal" },
    { value: "Autor (a) único (a)", label: "Autor (a) único (a)" },
    { value: "Autor (a) principal", label: "Autor (a) principal" },
    { value: "Autor (a) para correspondencia", label: "Autor (a) para correspondencia" },
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
    {value:"Mediciona y ciencias de la salud", label:"Mediciona y ciencias de la salud"},
]

  const decisions = [
    { value: "si", label: "Si" },
    { value: "no", label: "No" },
  ];
  return (
    <>
      <Formik
        initialValues={{
          issnImpreso: "",
          issnElectronico: "",
          doi: "",
          nombreRevista: "",
          tituloArticulo: "",
          numeroRevista: "",
          volumenRevista: "",
          yearPublicacion: "",
          paginaDe: "",
          paginaA: "",
          clave1: "",
          clave2: "",
          clave3: "",
          area: "",
          campo:"",
          disciplina:"",
          subdisciplina:"",
          apoyoConacyt: "",
          fondo: "",
          rolParticipacion: "",
          estatusPublicacion: "",
          objetivo: "",
          url: "",
          citaA: "",
          citaB: "",
          totalCita:""
        }}
        onSubmit={async (values, actions) => {
          try {
            //Descomentar lo siguiente cuando este lo del axios y funcione el back

            /* const response = await loginUser(values);

                    if(response.status === 200){


                    }else{
                        Swal.fire({
                            icon: "error",
                            title: "Error...",
                            text: "Intente de nuevo",
                            footer: 'Si el problema persiste intentelo mas tarde'
                          });
                          console.log(error);
                    } */
            Swal.fire({
              icon: "success",
              title: "Bienvenido",
              showConfirmButton: false,
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
          isSubmitting,
          setFieldValue,
        }) => (
          <Form
            onSubmit={handleSubmit}
            className="space-y-2 mt-[10px] py-8 pl-8 pr-8"
          >
            <div id="padre" className="flex flex-col gap-8">
              <Title level={"h1"} text={"Publicación de artículos"} />
              
              <div id="fechas" className="grid grid-cols-3 gap-5">
                <WrapperInput
                  mensaje={"ISSN impreso:"}
                  type={"text"}
                  name={"issnImpreso"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"ISSN electrónico:"}
                  type={"text"}
                  name={"issnElectronico"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"DOI:"}
                  type={"number"}
                  name={"doi"}
                  onchange={handleChange}
                />
              </div>
              <WrapperInput
                mensaje={"Nombre de la revista:"}
                type={"text"}
                name={"nombreRevista"}
                onchange={handleChange}
              />
              <WrapperInput
                mensaje={"Título del artículo:"}
                type={"text"}
                name={"tituloArticulo"}
                onchange={handleChange}
              />
              <div className="grid grid-cols-3 gap-5">
                <WrapperInput
                  mensaje={"Número de la revista:"}
                  type={"number"}
                  name={"numeroRevista"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Volumen de la revista:"}
                  type={"number"}
                  name={"volumenRevista"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Año de la publicación:"}
                  type={"number"}
                  name={"yearPublicacion"}
                  onchange={handleChange}
                />
              </div>
              <div className="grid grid-cols-3 gap-5">
                <WrapperInput
                  mensaje={"Páginas de:"}
                  type={"number"}
                  name={"paginaDe"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"a:"}
                  type={"number"}
                  name={"paginaA"}
                  onchange={handleChange}
                />
              </div>
              <div className="grid grid-cols-3 gap-5">
                <WrapperInput
                  mensaje={"Palabra clave 1:"}
                  type={"text"}
                  name={"clave1"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Palabra clave 2:"}
                  type={"text"}
                  name={"clave2"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Palabra clave 3:"}
                  type={"text"}
                  name={"clave3"}
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
                </div>

              <section className="grid grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-900">
                    ¿Recibicio apoyo del CONACYT?
                  </label>
                  <Select
                    name="apoyoConacyt"
                    placeholder={"Seleccione una opción"}
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
              </section>
                
              <div className="grid grid-cols-3 gap-5">
                <div className='flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900">Rol de participación:</label>
                <Select className='w-[98%]' name='rolParticipacion' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`rolParticipacion`, selectedOption.value)} options={rol} />
                </div>
                  
                <div className='flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900">Estatus de la publicación:</label>
                <Select className='w-[98%]' name='estatusPublicacion' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`estatusPublicacion`, selectedOption.value)} options={estatus} />
                </div>

                <div className='flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900">Objetivo:</label>
                <Select className='w-[98%]' name='escolaridad' placeholder={"objetivo"} onChange={(selectedOption, _) => setFieldValue(`objetivo`, selectedOption.value)} options={objetivo} />
                </div>
              </div>

              <WrapperInput
                  mensaje={"Url de la cita:"}
                  type={"url"}
                  name={"url"}
                  onchange={handleChange}
                />

              <div className="grid grid-cols-3 gap-5">
                <WrapperInput
                  mensaje={"Cita A:"}
                  type={"text"}
                  name={"citaA"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Cita B:"}
                  type={"text"}
                  name={"citaB"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Total de Cita:"}
                  type={"text"}
                  name={"totalCita"}
                  placeholder={"Total de cita"}
                  activo={"activo"}
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
  );
}

export default FormPArticulos;

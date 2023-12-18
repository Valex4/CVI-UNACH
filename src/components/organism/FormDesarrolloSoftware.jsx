import React from "react";
import { Form, Formik } from "formik";
import Swal from "sweetalert2";
import WrapperInput from "../molecules/wrapperInput";
import Title from "../atoms/Title";
import Select from "react-select";

function FormDesarrolloSoftware() {
  const autor = [
    { value: "si", label: "Si" },
    { value: "no", label: "No" },
  ];

  const rolParticipacion = [
    { value: "colaborador", label: "Colaborador" },
    { value: "lider", label: "Líder" },
    { value: "tecnico", label: "Técnico" },
  ];

  const decisions = [
    { value: "si", label: "Si" },
    { value: "no", label: "No" },
  ];

  const tiposDesarrollo = [
    {value: "Software basado en web", label: "Software basado en web"},
    {value: "Software de computadoras personales", label: "Software de computadoras personales"},
    {value: "Software de gestión", label: "Software de gestión"},
    {value: "Software ingeniería y científico", label: "Software ingeniería y científico"},
    {value: "Software de inteligencia artificial", label: "Software de inteligencia artificial"},
    {value: "Software de sistemas", label: "Software de sistemas"},
    {value: "Software de tiempo real", label: "Software de tiempo real"},
    {value: "Software de videojuegos", label: "Software de videojuegos"},
    {value: "Software empotrado", label: "Software empotrado"},
  ]

  return (
    <>
      <Formik
        initialValues={{
          titulo: "",
          tipoDesarrollo: "",
          derechosDeAutor: "",
          rolDeParticipacion: "",
          pais: "",
          hora: "",
          inicio: "",
          fin: "",
          costo: "",
          beneficiario: "",
          objetivo: "",
          resumen: "",
          contribucion: "",
          generaciondevalor: "",
          formacionderecursos: "",
          apoyoConacyt: "",
          fondo: "",
          logros: "",
          generacionyaplicacion: "",
          identificacion: "",
          problemaqueresuelve: "",
          analisisdepertinencia: "",
          laneadeinvestigacion: "",
        }}
        // validate={(values) => {
        //   const errors = {};

        //
        //   if (!values.titulo) {
        //     errors.titulo = 'Este campo es obligatorio';
        //   }

        //   if (!values.tipoDesarrollo) {
        //     errors.tipoDesarrollo = 'Este campo es obligatorio';
        //   }

        //   return errors;
        // }}
        onSubmit={async (values, actions) => {
          try {
            // const isEmptyField = Object.values(values).some((value) => value === '');

            // if (isEmptyField) {
            //   Swal.fire({
            //     icon: 'error',
            //     title: 'Campos vacíos',
            //     text: 'Por favor, complete todos los campos antes de guardar.',
            //   });
            //   return;
            // }

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
          } catch (error) {}
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          setFieldValue,
          isSubmitting,
        }) => (
          <Form
            onSubmit={handleSubmit}
            className="space-y-2 pl-8 pr-8 mt-[10px] p-5"
          >
            <div className="flex flex-col gap-5">
              <Title text="Desarrollo de software" level="h1" />
              <WrapperInput
                onchange={handleChange}
                name="titulo"
                mensaje="Título"
                type="text"
              />
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Tipo de desarrollo</label>
                  <Select
                    name="tipoDesarrollo"
                    className="z-40"
                    style="display: none;"
                    placeholder={"Seleccione una opción"}
                    onChange={(selectedOption, _) =>
                      setFieldValue(`tipoDesarrollo`, selectedOption.value)
                    }
                    options={tiposDesarrollo}
                  />
                </div>
                {/* aqui */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="">¿Cuenta con derechos de autor?</label>
                  <Select
                    name="derechosDeAutor"
                    className="z-40"
                    style="display: none;"
                    placeholder={"Seleccione una opción"}
                    onChange={(selectedOption, _) =>
                      setFieldValue(`derechosDeAutor`, selectedOption.value)
                    }
                    options={autor}
                  />
                </div>
                <WrapperInput
                  onchange={handleChange}
                  name="pais"
                  mensaje="País"
                  type="text"
                />
                <WrapperInput
                  onchange={handleChange}
                  name="hora"
                  mensaje="Horas hombre del proyecto"
                  type="number"
                />
                <WrapperInput
                  onchange={handleChange}
                  name="inicio"
                  mensaje="Fecha inicio"
                  type="date"
                />
                <WrapperInput
                  onchange={handleChange}
                  name="fin"
                  mensaje="Fecha fin"
                  type="date"
                />
                <WrapperInput
                  onchange={handleChange}
                  name="costo"
                  mensaje="Costo"
                  type="text"
                />
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Rol de participación</label>
                  <Select
                    name="rolDeParticipacion"
                    className="z-40"
                    placeholder={"Seleccione una opción"}
                    style="display: none;"
                    onChange={(selectedOption, _) =>
                      setFieldValue(`rolDeParticipacion`, selectedOption.value)
                    }
                    options={rolParticipacion}
                  />
                </div>
              </div>
              <WrapperInput
                onchange={handleChange}
                name="beneficiario"
                mensaje="Beneficiario"
                type="text"
              />
              <section className="mt-1 flex flex-col gap-2">
                <label className="block text-sm font-medium  text-gray-900 first-letter:">
                  Objetivo:
                </label>
                <textarea
                  name="objetivo"
                  cols="10"
                  onChange={handleChange}
                  rows="3"
                  className="textareaStyle"
                ></textarea>
              </section>

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

              <section className="mt-1 flex flex-col gap-2">
                <label className="block text-sm font-medium  text-gray-900 first-letter:">
                  Contribución:
                </label>
                <textarea
                  name="contribucion"
                  cols="10"
                  onChange={handleChange}
                  rows="3"
                  className="textareaStyle"
                ></textarea>
              </section>

              <section className="mt-1 flex flex-col gap-2">
                <label className="block text-sm font-medium  text-gray-900 first-letter:">
                  Generación de valor y/o impacto para el beneficiario
                </label>
                <textarea
                  name="generaciondevalor"
                  cols="10"
                  onChange={handleChange}
                  rows="3"
                  className="textareaStyle"
                ></textarea>
              </section>

              <section className="mt-1 flex flex-col gap-2">
                <label className="block text-sm font-medium  text-gray-900 first-letter:">
                  Formación de recursos humanos u otros resultados (si aplica)
                </label>
                <textarea
                  name="formacionderecursos"
                  cols="10"
                  onChange={handleChange}
                  rows="3"
                  className="textareaStyle"
                ></textarea>
              </section>
              {/* este es */}
              <div className="grid grid-cols-2 gap-5">
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

              <section className="mt-1 flex flex-col gap-2">
                <label className="block text-sm font-medium  text-gray-900 first-letter:">
                  Logros
                </label>
                <textarea
                  name="logros"
                  cols="10"
                  onChange={handleChange}
                  rows="3"
                  className="textareaStyle"
                ></textarea>
              </section>

              <section className="mt-1 flex flex-col gap-2">
                <label className="block text-sm font-medium  text-gray-900 first-letter:">
                  Generación y aplicación del conocimiento teórico-práctico
                  original
                </label>
                <textarea
                  name="generacionyaplicacion"
                  cols="10"
                  onChange={handleChange}
                  rows="3"
                  className="textareaStyle"
                ></textarea>
              </section>

              <section className="mt-1 flex flex-col gap-2">
                <label className="block text-sm font-medium  text-gray-900 first-letter:">
                  Identificación de innovación implementada
                </label>
                <textarea
                  name="identificacion"
                  cols="10"
                  onChange={handleChange}
                  rows="3"
                  className="textareaStyle"
                ></textarea>
              </section>

              <section className="mt-1 flex flex-col gap-2">
                <label className="block text-sm font-medium  text-gray-900 first-letter:">
                  Problema que resuelve
                </label>
                <textarea
                  name="problemaqueresuelve"
                  cols="10"
                  onChange={handleChange}
                  rows="3"
                  className="textareaStyle"
                ></textarea>
              </section>

              <section className="mt-1 flex flex-col gap-2">
                <label className="block text-sm font-medium  text-gray-900 first-letter:">
                  Análisis de pertinencia (contexto económico de región,
                  disponibilidad y acceso a la tecnología, infraestructura de la
                  institución o empresa)
                </label>
                <textarea
                  name="analisisdepertinencia"
                  cols="10"
                  onChange={handleChange}
                  rows="3"
                  className="textareaStyle"
                ></textarea>
              </section>

              <section className="mt-1 flex flex-col gap-2">
                <label className="block text-sm font-medium  text-gray-900 first-letter:">
                  Linea de investigación
                </label>
                <textarea
                  name="laneadeinvestigacion"
                  cols="10"
                  onChange={handleChange}
                  rows="3"
                  className="textareaStyle"
                ></textarea>
              </section>

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

export default FormDesarrolloSoftware;

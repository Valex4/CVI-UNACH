import React from "react";
import WrapperInput from "../../../molecules/wrapperInput";
import Swal from "sweetalert2";
import Select from "react-select";
import Title from "../../../atoms/Title";
import { Form, Formik } from "formik";
import { useState, useEffect } from "react";
import LanguagesFile from '../../../../assets/json/languages.json'

function FormPLibros() {
  const [languagesJson, setLanguagesJson] = useState([]);

  useEffect(() => {
    // Función asincrónica para cargar el archivo JSON
    const fetchLanguages = async () => {
      try {
        // Procesa los datos y forma el array languages
        const processedLanguages = LanguagesFile.map(language => ({
          value: language.name,
          label: language.name
        }));

        // Establece el array languages en el estado
        setLanguagesJson(processedLanguages);
      } catch (error) {
        console.error('Error al cargar y procesar el archivo JSON:', error.message);
      }
    };

    // Llama a la función para cargar el archivo JSON al montar el componente
    fetchLanguages();
  }, []);

  

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
          paisPublicacion: "",
          idioma: "",
          yearPublicacion: "",
          volumen: "",
          tomo: "",
          numeroPaginas: "",
          palabraClave1: "",
          palabraClave2: "",
          palabraClave3: "",
          editorial: "",
          numeroEdicion: "",
          disciplina: "",
          yearEdicion: "",
          isbnTraducido: "",
          tituloTraducido: "",
          idiomaTraducido: "",
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
            <div className="flex flex-col gap-6">
              <Title level="h1" text="Publicación de libros" />
              <div className="grid grid-cols-2 gap-5">
                <WrapperInput onchange={handleChange} name="isbn" mensaje="ISBN:" type="text" />
                <WrapperInput
                  onchange={handleChange}
                  name="tituloLibro"
                  mensaje="Título del libro:"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <WrapperInput
                  onchange={handleChange}
                  name="paisPublicacion"
                  mensaje="País de publicación:"
                  type="text"
                />
               <section className='mt-1 flex flex-col gap-2'>
                  <label className="block text-sm font-medium  text-gray-900 first-letter:">Idioma:</label>
                  <Select name='idioma' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`idioma`, selectedOption.value)} options={languagesJson} />
              </section>
              </div>
              <div className="grid grid-cols-3 gap-5">
                <WrapperInput
                  onchange={handleChange}
                  name="yearPublicacion"
                  mensaje="Año de la publicación:"
                  type="text"
                />
                <WrapperInput onchange={handleChange} name="volumen" mensaje="Volumen:" type="number" />
                <WrapperInput onchange={handleChange} name="tomo" mensaje="Tomo:" type="text" />
                <WrapperInput onchange={handleChange} name="tiraje" mensaje="Tiraje:" type="text" />
                <WrapperInput 
                  onchange={handleChange}
                  name="numeroPaginas"
                  mensaje="Número de páginas:"
                  type="number"
                />
              </div>
              <div className="grid grid-cols-3 gap-5">
                <WrapperInput
                  onchange={handleChange}
                  name="palabraClave1"
                  mensaje="Palabra clave 1:"
                  type="text"
                />
                <WrapperInput
                  onchange={handleChange}
                  name="palabraClave2"
                  mensaje="Palabra clave 2:"
                  type="text"
                />
                <WrapperInput
                  onchange={handleChange}
                  name="palabraClave3"
                  mensaje="Palabra clave 3:"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <WrapperInput
                  onchange={handleChange}
                  name="editorial"
                  mensaje="Editorial:"
                  type="text"
                />
                <WrapperInput
                  onchange={handleChange}
                  name="numeroEdicion"
                  mensaje="Número de edición:"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-3 gap-5">
                <WrapperInput
                  onchange={handleChange}
                  name="yearEdicion"
                  mensaje="Año de edición:"
                  type="text"
                />
                <WrapperInput
                  onchange={handleChange}
                  name="isbnTraducido"
                  mensaje="ISBN traducido:"
                  type="text"
                />
                <WrapperInput
                  onchange={handleChange}
                  name="tituloTraducido"
                  mensaje="Título traducido:"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-3">
              <section className='mt-1 flex flex-col gap-2'>
                  <label className="block text-sm font-medium  text-gray-900 first-letter:">Idioma traducido:</label>
                  <Select name='idiomaTraducido' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`idiomaTraducido`, selectedOption.value)} options={languagesJson} />
              </section>
              </div>

              <div className="grid grid-cols-3 gap-5">
                <section className='mt-1 flex flex-col gap-2'>
                  <label className="block text-sm font-medium  text-gray-900 first-letter:">
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
                </section>
                {values.apoyoConacyt === "si" && (
                  <WrapperInput
                    mensaje={"Fondo/programa: "}
                    type={"text"}
                    name={"fondo"}
                    onchange={handleChange}
                  />
                )}
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
                  <WrapperInput
                    onchange={handleChange}
                    name="campo"
                    mensaje="Campo"
                    type="text"
                  />
                  <WrapperInput
                    onchange={handleChange}
                    name="disciplina"
                    mensaje="Disciplina"
                    type="text"
                  />
                  <WrapperInput
                    onchange={handleChange}
                    name="subdisciplina"
                    mensaje="Subdisciplina"
                    type="text"
                  />
                </div>

                <Title level="h4" text="Para poder agregar Autor(es), es necesario guardar la información del formulario" />
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

export default FormPLibros;

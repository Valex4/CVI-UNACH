import React from 'react'
import { Formik, Form } from 'formik'
import Title from '../../atoms/Title';
import Swal from 'sweetalert2';
import Select from 'react-select';
import WrapperInput from '../../molecules/wrapperInput';
import { useState, useEffect } from 'react';
import LanguagesFile from '../../../assets/json/languages.json'


function FormIdiomas() {
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
  

  const levels = [
    {value:"Básico", label:"Básico"},
    {value:"Intermedio", label:"Intermedio"},
    {value:"Avanzado", label:"Avanzado"},
    {value:"Nivel universitario", label:"Nivel universitario"},
    {value:"Nivel de negocios", label:"Nivel de negocios"},
    {value:"Lengua materna", label:"Lengua materna"},
]
  const decision = [
    {value:"Si", label:"Si"},
    {value:"No", label:"No"},
]

  


  return (
    <Formik
    initialValues={{
        institucion:"",
        idioma:"",
        gradoDominio:"",
        nivelConversacion:"",
        nivelLectura:"",
        nivelEscritura:"",
        calificacion:"",
        Fevaluacion:"",
        Aprobatorio:"",
        vigencia_de:"",
        vigencia_a:"",
        Puntos:"",
        NivelConferido:"",
        
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
      setFieldValue
    }) => (
      <Form
        onSubmit={handleSubmit}
        className="space-y-2 mt-[10px] py-8 pl-8 pr-8"
      >
        <div id="padre" className="flex flex-col gap-8">
          <Title level={"h1"} text={"Idiomas"} />
          <div className='grid grid-cols-2 gap-5'>
              <WrapperInput
              mensaje={"Institución que otorgó certificado:"}
              type={"text"}
              name={"institucion"}
              onchange={handleChange}
            />
            <section className='mt-1 flex flex-col gap-2'>
                  <label className="block text-sm font-medium  text-gray-900 first-letter:">Idioma:</label>
                  <Select name='idioma' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`idioma`, selectedOption.value)} options={languagesJson} />
            </section>
          </div>
        
            <div id="fechas" className="grid grid-cols-3 gap-5">
            <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Grado de dominio:</label>
                <Select name='gradoDominio' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`gradoDominio`, selectedOption.value)} options={levels} />
            </section>
            <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Nivel de conversación:</label>
                <Select name='nivelConversacion' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`nivelConversacion`, selectedOption.value)} options={levels} />
            </section>
            <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Nivel de lectura:</label>
                <Select name='nivelLectura' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`nivelLectura`, selectedOption.value)} options={levels} />
            </section>
            <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Nivel de escritura:</label>
                <Select name='nivelEscritura' style="display: none;"  placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`nivelEscritura`, selectedOption.value)} options={levels} />
            </section>
            <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">¿Cuenta con certificación?:</label>
                <Select name='calificacion' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`calificacion`, selectedOption.value)} options={decision} />
            </section>
            <WrapperInput
            mensaje={"Fecha de evaluación: "}
            type={"date"}
            name={"Fevaluacion"}
            onchange={handleChange}
          />
          <WrapperInput
            mensaje={"Documento aprobatorio: "}
            type={"text"}
            name={"Aprobatorio"}
            onchange={handleChange}
          />
          <WrapperInput
            mensaje={"Vigencia de: "}
            type={"date"}
            name={"vigencia_de"}
            onchange={handleChange}
          />
          <WrapperInput
            mensaje={"Vigencia a: "}
            type={"date"}
            name={"vigencia_a"}
            onchange={handleChange}
          />
          <WrapperInput
            mensaje={"Puntos / porcentaje: "}
            type={"number"}
            name={"Puntos"}
            onchange={handleChange}
          />
          <WrapperInput
            mensaje={"Nivel conferido: "}
            type={"text"}
            name={"NivelConferido"}
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
  )
}

export default FormIdiomas
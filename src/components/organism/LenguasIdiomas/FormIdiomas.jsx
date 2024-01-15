import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import Title from '../../atoms/Title';
import Swal from 'sweetalert2';
import Select from 'react-select';
import WrapperInput from '../../molecules/wrapperInput';
import { useState, useEffect } from 'react';
import LanguagesFile from '../../../assets/json/languages.json'
import { createLanguage } from '../../../api/LenguasIdiomas/Routes';
import * as Yup from 'yup';


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
    { value: "Básico", label: "Básico" },
    { value: "Intermedio", label: "Intermedio" },
    { value: "Avanzado", label: "Avanzado" },
    { value: "Nivel universitario", label: "Nivel universitario" },
    { value: "Nivel de negocios", label: "Nivel de negocios" },
    { value: "Lengua materna", label: "Lengua materna" },
  ]
  const decision = [
    { value: true, label: "Si" },
    { value: false, label: "No" },
  ]

  const validationSchema = Yup.object().shape({
    institucion: Yup.string().required('Campo obligatorio'),
    idioma: Yup.string().required('Campo obligatorio'),
    fecha_evaluacion: Yup.string().required('Campo obligatorio'),
    vigencia_de: Yup.string().required('Campo obligatorio'),
    vigencia_a: Yup.string()
      .required('Campo obligatorio')
      .test(
        'fecha-valida',
        'La Vigencia a debe ser mayor o igual a la Vigencia de',
        function (value) {
          const vigenciaDe = this.resolve(Yup.ref('vigencia_de'));
          const vigenciaA = this.resolve(Yup.ref('vigencia_a'));

          if (!vigenciaDe || !vigenciaA) {
            return true;
          }
          return new Date(vigenciaA) >= new Date(vigenciaDe);
        }
      ),
    grado_dominio: Yup.string().required('Campo obligatorio'),
    nivel_conversacion: Yup.string().required('Campo obligatorio'),
    nivel_lectura: Yup.string().required('Campo obligatorio'),
    nivel_escritura: Yup.string().required('Campo obligatorio'),
    certificacion: Yup.string().required('Campo obligatorio'),
    documento_probatorio: Yup.string().required('Campo obligatorio'),
    puntos: Yup.string().required('Campo obligatorio'),
    nivel: Yup.string().required('Campo obligatorio'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        institucion: "",
        idioma: "",
        grado_dominio: "",
        nivel_conversacion: "",
        nivel_lectura: "",
        nivel_escritura: "",
        certificacion: "",
        fecha_evaluacion: "",
        documento_probatorio: "",
        vigencia_de: "",
        vigencia_a: "",
        puntos: "",
        nivel: "",

      }}
      onSubmit={async (values, actions) => {
        try {
          //Descomentar lo siguiente cuando este lo del axios y funcione el back
          const response = await createLanguage(values);

          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Guardado con éxito",
              showConfirmButton: false,
              timer: 1500,
            });
            console.table(values);
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
          Swal.fire({
            icon: "error",
            title: "Error...",
            text: "Intente de nuevo",
            footer: 'Si el problema persiste intentelo mas tarde'
          });
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
              <div>
                <WrapperInput mensaje={"Institución que otorgó certificado:"} type={"text"} name={"institucion"} onchange={handleChange} />
                <ErrorMessage name="institucion" className='text-red-500' component="div" />
              </div>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Idioma:</label>
                <Select name='idioma' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`idioma`, selectedOption.value)} options={languagesJson} />
                <ErrorMessage name="idioma" className='text-red-500' component="section" />
              </section>
            </div>
            <div id="fechas" className="grid grid-cols-3 gap-5">
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Grado de dominio:</label>
                <Select name='grado_dominio' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`grado_dominio`, selectedOption.value)} options={levels} />
                <ErrorMessage name="grado_dominio" className='text-red-500' component="section" />
              </section>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Nivel de conversación:</label>
                <Select name='nivel_conversacion' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`nivel_conversacion`, selectedOption.value)} options={levels} />
                <ErrorMessage name="nivel_conversacion" className='text-red-500' component="section" />
              </section>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Nivel de lectura:</label>
                <Select name='nivel_lectura' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`nivel_lectura`, selectedOption.value)} options={levels} />
                <ErrorMessage name="nivel_lectura" className='text-red-500' component="section" />
              </section>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Nivel de escritura:</label>
                <Select name='nivel_escritura' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`nivel_escritura`, selectedOption.value)} options={levels} />
                <ErrorMessage name="nivel_escritura" className='text-red-500' component="section" />
              </section>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">¿Cuenta con certificación?:</label>
                <Select name='certificacion' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`certificacion`, selectedOption.value)} options={decision} />
                <ErrorMessage name="certificacion" className='text-red-500' component="section" />
              </section>
              <div>
                <WrapperInput mensaje={"Fecha de evaluación: "} type={"date"} name={"fecha_evaluacion"} onchange={handleChange} />
                <ErrorMessage name="fecha_evaluacion" className='text-red-500' component="div" />
              </div>
              <div>
                <WrapperInput mensaje={"Documento aprobatorio: "} type={"text"} name={"documento_probatorio"} onchange={handleChange} />
                <ErrorMessage name="documento_probatorio" className='text-red-500' component="div" />
              </div>
              <div>
                <WrapperInput mensaje={"Vigencia de: "} type={"date"} name={"vigencia_de"} onchange={handleChange} />
                <ErrorMessage name="vigencia_de" className='text-red-500' component="div" />
              </div>
              <div>
                <WrapperInput mensaje={"Vigencia a: "} type={"date"} name={"vigencia_a"} onchange={handleChange} />
                <ErrorMessage name="vigencia_a" className='text-red-500' component="div" />
              </div>
              <div>
                <WrapperInput mensaje={"Puntos / porcentaje: "} type={"number"} name={"puntos"} onchange={handleChange} />
                <ErrorMessage name="puntos" className='text-red-500' component="div" />
              </div>
              <div>
                <WrapperInput mensaje={"Nivel conferido: "} type={"text"} name={"nivel"} onchange={handleChange} />
                <ErrorMessage name="nivel" className='text-red-500' component="div" />
              </div>
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
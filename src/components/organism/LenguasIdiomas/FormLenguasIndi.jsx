import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import Title from '../../atoms/Title'
import Swal from 'sweetalert2'
import Select from 'react-select'
import WrapperInput from '../../molecules/wrapperInput'
import { createIndigenousLanguage } from '../../../api/LenguasIdiomas/Routes'
import * as Yup from 'yup';

function FormLenguasIndi() {
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
    lengua: Yup.string().required('Campo obligatorio'),
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
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        lengua: "",
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

      }}
      onSubmit={async (values, actions) => {
        try {
          //Descomentar lo siguiente cuando este lo del axios y funcione el back

          const response = await createIndigenousLanguage(values);

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
            <Title level={"h1"} text={"Lenguas indígenas"} />
            <div id="fechas" className="grid grid-cols-3 gap-5">
              <div>
              <WrapperInput mensaje={"Lengua: "} type={"text"} name={"lengua"} onchange={handleChange} />
              <ErrorMessage name="lengua" className='text-red-500' component="div" />
              </div>
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

export default FormLenguasIndi
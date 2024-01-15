import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import Swal from 'sweetalert2'
import Select from 'react-select'
import WrapperInput from '../../molecules/wrapperInput'
import Title from '../../atoms/Title'
import { createDistincionConacyt } from '../../../api/PremiosDistinciones/Routes'
import * as Yup from 'yup';

function FormDistincionesConacyt() {
  const validationSchema = Yup.object().shape({
    nombre_distincion: Yup.string().required('Campo obligatorio'),
    year: Yup.string()
      .matches(/^\d{4}$/, 'El año debe contener exactamente 4 números.')
      .required('Campo obligatorio'),
  });

  const levels = [
    { value: "Candidato", label: "Candidato" },
    { value: "SNI 1", label: "SNI 1" },
    { value: "SNI 2", label: "SNI 2" },
    { value: "SNI 3", label: "SNI 3" },
    { value: "Emérito", label: "Emérito" },
    { value: "Beca CONACYT", label: "Beca CONACYT" },
    { value: "RCEA (No pertenece a SNI)", label: "RCEA (No pertenece a SNI)" },
  ]

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        nombre_distincion: "",
        year: ""
      }}
      onSubmit={async (values, actions) => {
        try {
          const response = await createDistincionConacyt(values);
          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Guardado exitosamente",
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
            <Title level={"h1"} text={"Distinciones CONACYT"} />
            <div id="fechas" className="grid grid-cols-3 gap-5">
              <div className='col-span-2'>
                <section className='mt-1 flex flex-col gap-2'>
                  <label className="block text-sm font-medium  text-gray-900 first-letter:">Nombre de la distinción:</label>
                  <Select name='nombre_distincion' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`nombre_distincion`, selectedOption.value)} options={levels} />
                  <ErrorMessage name="nombre_distincion" className='text-red-500' component="div" />
                </section>
              </div>
              <div>
                <WrapperInput mensaje={"Año: "} type={"text"} name={"year"} onchange={handleChange} />
                <ErrorMessage name="year" className='text-red-500' component="div" />
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

export default FormDistincionesConacyt
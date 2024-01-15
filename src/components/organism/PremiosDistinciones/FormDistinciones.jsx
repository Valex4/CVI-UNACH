import React from 'react'
import Title from "../../atoms/Title";
import { Formik, Form, ErrorMessage } from "formik";
import WrapperInput from "../../molecules/wrapperInput";
import Swal from "sweetalert2";
import { createDistincionNoConacyt } from '../../../api/PremiosDistinciones/Routes';
import * as Yup from 'yup';

function FormDistinciones() {

  const validationSchema = Yup.object().shape({
    nombre_distincion: Yup.string().required('Campo obligatorio'),
    institucion: Yup.string().required('Campo obligatorio'),
    pais: Yup.string().required('Campo obligatorio'),
    descripcion_distincion: Yup.string().required('Campo obligatorio'),
    year: Yup.string()
      .matches(/^\d{4}$/, 'El año debe contener exactamente 4 números.')
      .required('Campo obligatorio'),
  });
  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          nombre_distincion: "",
          institucion: "",
          pais: "",
          year: "",
          descripcion_distincion: ""
        }}
        onSubmit={async (values, actions) => {
          try {
            const response = await createDistincionNoConacyt(values);
            if (response.status === 200) {
              Swal.fire({
                icon: "success",
                title: "Guardado exitosamente...",
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
        }) => (
          <Form
            onSubmit={handleSubmit}
            className="space-y-2 mt-[10px] py-8 pl-8 pr-8"
          >
            <div id="padre" className="flex flex-col gap-8">
              <Title level={"h1"} text={"Distinciones no CONACYT"} />
              <div className='grid grid-cols-1 gap-5'>
                <div>
                <WrapperInput mensaje={"Nombre de la distinción: "} type={"text"} name={"nombre_distincion"} onchange={handleChange}/>
                <ErrorMessage name="nombre_distincion" className='text-red-500' component="div" />
                </div>
                <div>
                <WrapperInput mensaje={"Institución que otorgó el premio o la distinción: "} type={"text"} name={"institucion"} onchange={handleChange}/>
                <ErrorMessage name="institucion" className='text-red-500' component="div" />
                </div>
                <div id="fechas" className="grid grid-cols-2 gap-5">
                  <div>
                  <WrapperInput mensaje={"País: "} type={"text"} name={"pais"} onchange={handleChange}/>
                  <ErrorMessage name="pais" className='text-red-500' component="div" />
                  </div>
                  <div>
                    <WrapperInput mensaje={"Año: "} type={"text"} name={"year"} onchange={handleChange}/>
                    <ErrorMessage name="year" className='text-red-500' component="div" />
                  </div>
                </div>
                <section className='mt-1 flex flex-col gap-2'>
                  <label className="block text-sm font-medium  text-gray-900 first-letter:">Descripción premio distinción:</label>
                  <textarea name="descripcion_distincion" placeholder='Descripción' cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
                  <ErrorMessage name="descripcion_distincion" className='text-red-500' component="section" />
                </section>
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

export default FormDistinciones
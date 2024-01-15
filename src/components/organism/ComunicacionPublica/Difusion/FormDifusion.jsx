import React from 'react'
import Title from "../../../atoms/Title";
import { Formik, Form, ErrorMessage } from "formik";
import WrapperInput from "../../../molecules/wrapperInput";
import Swal from "sweetalert2";
import Select from 'react-select';
import { createParticipacionCongresos } from '../../../../api/ComunicacionPublica/Routes';
import * as Yup from 'yup';

function FormDifusion() {
  const participacion = [
    { value: "conferencia", label: "Conferencia Magistral" },
    { value: "moderador", label: "Moderador" },
    { value: "organizador", label: "Organizador del evento" },
    { value: "participante", label: "Participante en mesa redonda" },
    { value: "ponencia", label: "Ponencia" },
    { value: "poster", label: "Póster" },
    { value: "presentacion", label: "Presentación de artículo en extenso" },
    { value: "folder", label: "Folder" },
  ]

  const validationSchema = Yup.object({
    nombre_congreso: Yup.string().required('Campo obligatorio'),
    titulo_trabajo: Yup.string().required('Campo obligatorio'),
    participacion_congreso: Yup.string().required('Campo obligatorio'),
    pais: Yup.string().required('Campo obligatorio'),
    fecha: Yup.date().required('Campo obligatorio'),
    palabra_clave1: Yup.string().required('Campo obligatorio'),
    palabra_clave2: Yup.string().required('Campo obligatorio'),
    palabra_clave3: Yup.string().required('Campo obligatorio'),
  });

  return (
    <>
      <Formik
        initialValues={{
          nombre_congreso: "",
          titulo_trabajo: "",
          participacion_congreso: "",
          pais: "",
          fecha: "",
          palabra_clave1: "",
          palabra_clave2: "",
          palabra_clave3: ""
        }}
        onSubmit={async (values, actions) => {
          try {
            const response = await createParticipacionCongresos(values);
            if (response.status === 200) {
              Swal.fire({
                icon: "success",
                title: "Guardado con exíto",
                showConfirmButton: true,
                timer: 1500,
              });
            }
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Error...",
              text: "Intente de nuevo",
              footer: 'Si el problema persiste intentelo mas tarde'
            });
            console.log(error);
          }
        }}
        validationSchema={validationSchema}
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
              <Title level={"h1"} text={"Participación en congresos"} />
              <div className='grid grid-cols-2 gap-5'>
                <div>
                  <WrapperInput mensaje={"Nombre del congreso"} type={"text"} name={"nombre_congreso"} onchange={handleChange} />
                  <ErrorMessage name="nombre_congreso" className='text-red-500' component="div" />
                </div>
                <div>
                  <WrapperInput mensaje={"Título del trabajo"} type={"text"} name={"titulo_trabajo"} onchange={handleChange} />
                  <ErrorMessage name="titulo_trabajo" className='text-red-500' component="div" />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className="block text-sm font-medium  text-gray-900">Tipo de participación en congreso</label>
                  <Select className='w-[98%]' name='participacion_congreso' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`participacion_congreso`, selectedOption.value)} options={participacion} />
                  <ErrorMessage name="participacion_congreso" className='text-red-500' component="div" />
                </div>
                <div>
                  <WrapperInput mensaje={"País"} type={"text"} name={"pais"} onchange={handleChange} />
                  <ErrorMessage name="pais" className='text-red-500' component="div" />
                </div>
              </div>
              <div id="fechas" className="grid grid-cols-3 gap-5">
                <div>
                  <WrapperInput mensaje={"Fecha"} type={"date"} name={"fecha"} onchange={handleChange} />
                  <ErrorMessage name="fecha" className='text-red-500' component="div" />
                </div>
                <div>
                  <div><WrapperInput mensaje={"Palabra clave 1"} type={"text"} name={"palabra_clave1"} onchange={handleChange} /></div>
                  <ErrorMessage name="palabra_clave1" className='text-red-500' component="div" />
                </div>
                <div>
                  <WrapperInput mensaje={"Palabra clave 2"} type={"text"} name={"palabra_clave2"} onchange={handleChange} />
                  <ErrorMessage name="palabra_clave2" className='text-red-500' component="div" />
                </div>
                <div>
                  <WrapperInput mensaje={"Palabra clave 3"} type={"text"} name={"palabra_clave3"} onchange={handleChange} />
                  <ErrorMessage name="palabra_clave3" className='text-red-500' component="div" />
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
    </>
  )
}

export default FormDifusion
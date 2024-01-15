import React from 'react'
import WrapperInput from '../../molecules/wrapperInput';
import Title from '../../atoms/Title';
import Swal from "sweetalert2";
import { Formik, Form, ErrorMessage} from 'formik';
import { createRedesTematicas } from '../../../api/Vinculacion/Routes';
import * as Yup from 'yup';
function FormRedesTematicas() {

  const validationSchema = Yup.object().shape({
    red_tematica: Yup.string().required('Campo obligatorio'),
    fecha_ingreso: Yup.string().required('Campo obligatorio'),
    
  });

  return (
    <>
       <Formik
        validationSchema={validationSchema}
        initialValues={{
          red_tematica: "",
          fecha_ingreso: "",
        }}
        onSubmit={async (values, actions) => {
          try {
            const response = await createRedesTematicas(values);
            if(response.status === 200) {
              Swal.fire({
                icon: "success",
                title: "Guardado con exíto",
                showConfirmButton: true,
                timer: 1500,
              });
              console.table(values);
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
            <div className='flex flex-col gap-5'>
              <Title level="h1" text="Redes Temáticas CONACYT" />
              <div className='grid grid-cols-2 gap-5'>
                <div>
                <WrapperInput onchange={handleChange} name="red_tematica" mensaje="Red temática CONACYT:" type="text" />
                <ErrorMessage name="red_tematica" component="div" className="text-red-500" />
                </div>
                <div>
                <WrapperInput onchange={handleChange} name="fecha_ingreso" mensaje="Fecha de ingreso:" type="date" />
                <ErrorMessage name="fecha_ingreso" component="div" className="text-red-500" />
                </div>
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
  )
}

export default FormRedesTematicas
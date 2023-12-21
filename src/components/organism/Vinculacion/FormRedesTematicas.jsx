import React from 'react'
import WrapperInput from '../../molecules/wrapperInput';
import Title from '../../atoms/Title';
import Swal from "sweetalert2";
import { Formik, Form } from 'formik';

function FormRedesTematicas() {
  return (
    <>
       <Formik
        initialValues={{
          redTematica: "",
          fechaIngreso: "",
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
            <div className='flex flex-col gap-5'>
              <Title level="h1" text="Redes Temáticas CONACYT" />
              <div className='grid grid-cols-2 gap-5'>
                <WrapperInput onchange={handleChange} name="redTematica" mensaje="Red temática CONACYT:" type="text" />
                <WrapperInput onchange={handleChange} name="fechaIngreso" mensaje="Fecha de ingreso:" type="date" />
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
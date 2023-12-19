import React from 'react'
import Title from "../../atoms/Title";
import { Formik, Form } from "formik";
import WrapperInput from "../../molecules/wrapperInput";
import Swal from "sweetalert2";

function FormDistinciones() {

  return (
    <>
    <Formik
        initialValues={{
          nombreDistincion:"",
          institucion:"",
          pais:"",
          fecha:"",
          descripcion:""
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
        }) => (
          <Form
            onSubmit={handleSubmit}
            className="space-y-2 mt-[10px] py-8 pl-8 pr-8"
          >
            <div id="padre" className="flex flex-col gap-8">
              <Title level={"h1"} text={"Distinciones no CONACYT"} />

              <div className='grid grid-cols-1 gap-5'>
              <WrapperInput
                mensaje={"Nombre de la distinción"}
                type={"text"}
                name={"nombreDistincion"}
                onchange={handleChange}
                />
              <WrapperInput
                mensaje={"Institución que otorgó el premio o la distinción"}
                type={"text"}
                name={"institucion"}
                onchange={handleChange}
                />

                


              <div id="fechas" className="grid grid-cols-2 gap-5">
              <WrapperInput
                mensaje={"País"}
                type={"text"}
                name={"pais"}
                onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Fecha"}
                  type={"date"}
                  name={"fecha"}
                  onchange={handleChange}
                  />
                </div>

              <WrapperInput
                  mensaje={"Descripción premio distinción"}
                  type={"text"}
                  name={"descripcion"}
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
    </>
  )
}

export default FormDistinciones
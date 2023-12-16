import React from 'react'
import Title from "../atoms/Title";
import { Formik, Form } from "formik";
import WrapperInput from "../molecules/wrapperInput";
import Swal from "sweetalert2";
import Select from 'react-select';

function FormDifusion() {
  const participacion = [
    { value: "conferencia", label: "Conferencia Magistral"},
    { value: "moderador", label: "Moderador"},
    { value: "organizador", label: "Organizador del evento"},
    { value: "participante", label: "Participante en mesa redonda"},
    { value: "ponencia", label: "Ponencia"},
    { value: "poster", label: "Póster"},
    { value: "presentacion", label: "Presentación de artículo en extenso"},
    { value: "folder", label: "Folder"},
  ]

  return (
    <>
    <Formik
        initialValues={{
          nombreCongreso:"",
          titulo:"",
          tipo:"",
          pais:"",
          fecha:"",
          palabraUno:"",
          palabraDos:"",
          palabraTres:""
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
              <Title level={"h1"} text={"Participación en congresos"} />

              <div className='grid grid-cols-2 gap-5'>
              <WrapperInput
                mensaje={"Nombre del congreso"}
                type={"text"}
                name={"nombreCongreso"}
                onchange={handleChange}
                />
              <WrapperInput
                mensaje={"Título del trabajo"}
                type={"text"}
                name={"titulo"}
                onchange={handleChange}
                />

               <div className='flex flex-col gap-2'>
              <label className="block text-sm font-medium  text-gray-900">Tipo de participación en congreso</label>
              <Select className='w-[98%]' name='tipo' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`tipo`, selectedOption.value)} options={participacion} />
                </div>

              <WrapperInput
                mensaje={"País"}
                type={"text"}
                name={"pais"}
                onchange={handleChange}
                />
                </div>


              <div id="fechas" className="grid grid-cols-3 gap-5">
                <WrapperInput
                  mensaje={"Fecha"}
                  type={"date"}
                  name={"fecha"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Palabra clave 1"}
                  type={"text"}
                  name={"palabraUno"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Palabra clave 2"}
                  type={"text"}
                  name={"palabraDos"}
                  onchange={handleChange}
                />
              </div>
              <div className='grid grid-cols-3 w-[96%]'>
              <WrapperInput
                  mensaje={"Palabra clave 3"}
                  type={"text"}
                  name={"palabraTres"}
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

export default FormDifusion
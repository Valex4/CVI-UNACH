import React from 'react'
import { Formik, Form } from "formik";
import Swal from "sweetalert2";
import Select from 'react-select';
import { createReportsTech } from "../../../../api/ProduccionCTI/Routes";
import Title from "../../../atoms/Title";
import WrapperInput from "../../../molecules/wrapperInput";

function FormReportesTecnicos() {
  const origins = [
    { value: "Actividad académica", label: "Actividad académica"},
    { value: "Actividad de consultoria", label: "Actividad de consultoria"},
    { value: "Actividad de difusión", label: "Actividad de difusión"},
    { value: "Actividad de innovación", label: "Actividad de innovación"},
    { value: "Actividad tecnológica", label: "Actividad tecnológica"},
  ]

  const decisions = [
    { value: true, label: "Si" },
    { value: false, label: "No" },
  ]

  return (
   <>
      <Formik
        initialValues={{
          titulo:"",
          institucion:"",
          fecha_entrega:"",
          fecha_publicacion:"",
          numero_paginas:"",
          origen:"",
          descripcion:"",
          objetivos:"",
          palabra_clave1:"",
          palabra_clave2:"",
          palabra_clave3:"",
          apoyo_CONACYT:"",
          fondo:""
        }}
        onSubmit={async (values, actions) => {
          try {
            //Descomentar lo siguiente cuando este lo del axios y funcione el back

          console.table(values)
           const response = await createReportsTech(values);
            
           if(response.status === 200){
             Swal.fire({
                        icon: "success",
                        title: "Bienvenido",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }else{
                        Swal.fire({
                            icon: "error",
                            title: "Error...",
                            text: "Intente de nuevo",
                            footer: 'Si el problema persiste intentelo mas tarde'
                          });
                          console.log(error);
                        } 
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
              <Title level={"h1"} text={"Reportes Técnicos"} />
              <WrapperInput
                mensaje={"Titulo: "}
                type={"text"}
                name={"titulo"}
                onchange={handleChange}
              />
              <WrapperInput
                mensaje={"Institución a la que presenta el reporte: "}
                type={"text"}
                name={"institucion"}
                onchange={handleChange}
              />
              <div id="fechas" className="grid grid-cols-3 gap-5">
                <WrapperInput
                  mensaje={"Fecha de entrega:"}
                  type={"date"}
                  name={"fecha_entrega"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Fecha de publicación: "}
                  type={"date"}
                  name={"fecha_publicacion"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Número de páginas: "}
                  type={"text"}
                  name={"numero_paginas"}
                  onchange={handleChange}
                />
              </div>
              <label className="block text-sm font-medium  text-gray-900">Origen del reporte técnico:</label>
              <Select name='origen' className='z-40' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`origen`, selectedOption.value)} options={origins} />
              <WrapperInput
                mensaje={"Descripción: "}
                type={"text"}
                name={"descripcion"}
                onchange={handleChange}
              />
              <WrapperInput
                mensaje={"Objetivos: "}
                type={"text"}
                name={"objetivos"}
                onchange={handleChange}
              />
              <Title level={"h4"} text={"Área del conocimiento del puesto"} />
              <div id="ultimos" className="grid grid-cols-3 gap-5">
                <WrapperInput
                  mensaje={"Palabra clave 1:"}
                  type={"text"}
                  name={"palabra_clave1"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Palabra clave 2:"}
                  type={"text"}
                  name={"palabra_clave2"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Palabra clave 3:"}
                  type={"text"}
                  name={"palabra_clave3"}
                  onchange={handleChange}
                />
                
              </div>
              <section className="grid grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-900">
                    ¿Recibicio apoyo del CONACYT?
                  </label>
                  <Select
                    name="apoyo_CONACYT"
                    placeholder={"Seleccione una opción"}
                    onChange={(selectedOption, _) =>
                      setFieldValue(`apoyo_CONACYT`, selectedOption.value)
                    }
                    options={decisions}
                  />
                </div>
                {values.apoyo_CONACYT === true && (
                  <WrapperInput
                    mensaje={"Fondo/programa: "}
                    type={"text"}
                    name={"fondo"}
                    onchange={handleChange}
                  />
                )}
              </section>

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

export default FormReportesTecnicos
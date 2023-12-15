import React from "react";
import Title from "../atoms/Title";
import { Formik, Form } from "formik";
import WrapperInput from "../molecules/wrapperInput";
import { useState } from "react";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

function FormExperiencia_2() {
    return (
        <Formik
            initialValues={{
              desempeno: "Catedrático CONACYT",
              institucion: "CONSEJO NACIONAL DE CIENCIA Y TECNOLOGIA (CONACYT)",
              institucionCatedra: "",
              inicio: "",
              fin: "",
              logros: "",
              puesto: "",
              area: "",
              campo: "",
              disciplina: "",
              subdisciplina: "",
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
                  <Title level={"h1"} text={"Experiencia Laboral"} />
                  <WrapperInput
                    mensaje={"Institución/Empresa"}
                    type={"text"}
                    name={"institucion"}
                    dato={values.institucion}
                    activo={true}
                    onchange={handleChange}
                  />
                <Title level={"h4"} text={"Estatus Catedras:"}/>
                <p>El catedrático es encontrado sin Institución</p>
                <WrapperInput
                    mensaje={"Institución de la comisión del catedrático:"}
                    type={"text"}
                    name={"institucionCatedra"}
                    onchange={handleChange}
                  />
                  <Title level={"h4"} text={"Periodo"} />
                  <div id="fechas" className="grid grid-cols-2 gap-5">
                    <WrapperInput
                      mensaje={"Inicio"}
                      type={"date"}
                      name={"inicio"}
                      onchange={handleChange}
                    />
                    <WrapperInput
                      mensaje={"Fin"}
                      type={"date"}
                      name={"fin"}
                      onchange={handleChange}
                    />
                  </div>
    
                  <WrapperInput
                    mensaje={"Nombre del puesto/Nombramiento"}
                    type={"text"}
                    name={"puesto"}
                    onchange={handleChange}
                  />
                  <WrapperInput
                    mensaje={"Logros"}
                    type={"text"}
                    name={"logros"}
                    onchange={handleChange}
                  />
                  <Title level={"h4"} text={"Área del conocimiento del puesto"} />
                  <div id="ultimos" className="grid grid-cols-3 gap-5">
                    <WrapperInput
                      mensaje={"Áreas"}
                      type={"text"}
                      name={"area"}
                      onchange={handleChange}
                    />
                    <WrapperInput
                      mensaje={"Campos"}
                      type={"text"}
                      name={"campo"}
                      onchange={handleChange}
                    />
                    <WrapperInput
                      mensaje={"Disciplina"}
                      type={"text"}
                      name={"disciplina"}
                      onchange={handleChange}
                    />
                    <WrapperInput
                      mensaje={"Subdisciplina"}
                      type={"text"}
                      name={"subdisciplina"}
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
      )
}

export default FormExperiencia_2
import React from 'react'
import { Formik, Form } from 'formik';
import WrapperInput from '../../molecules/wrapperInput';
import Title from '../../atoms/Title';
import Swal from "sweetalert2";
import Select from "react-select";

function FormRedesInvestigacion() {

  const areas = [
    { value: "Biología y química", label: "Biología y química" },
    { value: "Ciencias Sociales", label: "Ciencias Sociales" },
    {
      value: "Ciencias agropecuarias y biotecnología",
      label: "Ciencias agropecuarias y biotecnología",
    },
    {
      value: "Ciencias físico matemáticas y ciencias de la tierra",
      label: "Ciencias físico matemáticas y ciencias de la tierra",
    },
    {
      value: "Humanidades y ciencias de la conducta",
      label: "Humanidades y ciencias de la conducta",
    },
    { value: "Ingeniería y tecnología", label: "Ingeniería y tecnología" },
    {
      value: "Medicina y ciencias de la salud",
      label: "Medicina y ciencias de la salud",
    },
  ];

  return (
    <>
      <Formik
        initialValues={{
          nombreRed: "",
          fechaCreacion: "",
          fechaIngreso: "",
          nombre: "",
          primerApellido: "",
          segundoApellido: "",
          institucionRed: "",
          totalIntegrante: "",
          area: "",
          campo: "",
          disciplina: "",
          subdisciplina: "",
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
              <Title level="h1" text="Redes de investigación" />
              <div className='grid grid-cols-3 gap-5'>
                <WrapperInput onchange={handleChange} name="nombreRed" mensaje="Nombre red:" type="text" />
                <WrapperInput onchange={handleChange} name="fechaCreacion" mensaje="Fecha de creación:" type="date" />
                <WrapperInput onchange={handleChange} name="fechaIngreso" mensaje="Fecha de ingreso:" type="date" />
              </div>
              <div className='flex flex-col gap-5'>
                <Title level="h4" text="Nombre del responsable de la red" />
                <div className='grid grid-cols-3 gap-5'>
                  <WrapperInput onchange={handleChange} name="nombre" mensaje="Nombre:" type="text" />
                  <WrapperInput onchange={handleChange} name="primerApellido" mensaje="Primer apellido:" type="text" />
                  <WrapperInput onchange={handleChange} name="segundoApellido" mensaje="Segundo apellido:" type="text" />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-5'>
                <WrapperInput onchange={handleChange} name="institucionRed" mensaje="Institución de adscripción del responsable de la red:" type="text" />
                <WrapperInput onchange={handleChange} name="totalIntegrante" mensaje="Total de integrantes:" type="number" />
              </div>
              <div className='flex flex-col gap-5'>
                <Title level="h4" text="Área de conocimiento" />
                <div className="grid grid-cols-3 gap-5">
                    <div className="mt-2">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Área
                      </label>
                      <Select
                        name="area"
                        placeholder={"Seleccione una opción"}
                        onChange={(selectedOption, _) =>
                          setFieldValue(`area`, selectedOption.value)
                        }
                        options={areas}
                      />
                    </div>
                    <WrapperInput onchange={handleChange} name="campo" mensaje="Campo" type="text" />
                    <WrapperInput onchange={handleChange} name="disciplina" mensaje="Disciplina" type="text" />
                    <WrapperInput onchange={handleChange} name="subdisciplina" mensaje="Subdisciplina" type="text" />
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

export default FormRedesInvestigacion
import React from 'react'
import { Formik, Form } from "formik";
import Swal from "sweetalert2";
import Select from 'react-select';
import { createDiplomat } from "../../../api/FormacionPersonas/Routes";
import Title from "../../atoms/Title";
import WrapperInput from "../../molecules/wrapperInput";

function FormDiplomados() {
  const escolaridad = [
    { value: "preparatoria", label: "Preparatoria"},
    { value: "licenciatura", label: "Licenciatura"},
    { value: "especialidad", label: "Especialidad"},
    { value: "maestria", label: "Maestría"},
    { value: "doctorado", label: "Doctorado"},
  ]

  const areas = [
    {value: "Biología y química", label:"Biología y química"},
    {value:"Ciencias Sociales", label:"Ciencias Sociales"},
    {value:"Ciencias agropecuarias y Biotecnología", label:"Ciencias agropecuarias y Biotecnología"},
    {value:"Ciencias físico matemático y ciencias de la tierra", label:"Ciencias físico matemático y ciencias de la tierra"},
    {value:"Humanidades y ciencias de la conducta", label:"Humanidades y ciencias de la conducta"},
    {value:"Ingeniería y tecnología", label:"Ingeniería y tecnología"},
    {value:"Mediciona y ciencias de la salud", label:"Mediciona y ciencias de la salud"},
]

  return (
    <>
    <Formik
        initialValues={{
          // institucion:"",
          Nombre_diplomado:"",
          Nombre_curso:"",
          AÑO:"",
          Horas_totales:"",
          Area:"",
          Campo:"",
          Disciplina:"",
          Subdisciplina:""
        }}
        onSubmit={async (values, actions) => {
          try {
            //Descomentar lo siguiente cuando este lo del axios y funcione el back

            const response = await createDiplomat(values);
            if (response.status === 200) {
              Swal.fire({
                icon: "success",
                title: "Registrado correctamente",
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
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
              <Title level={"h1"} text={"Diplomados impartidos"} />

              <div className='grid grid-cols-2 gap-5'>
              <WrapperInput
                mensaje={"Institución"}
                type={"text"}
                name={"institucion"}
                onchange={handleChange}
              />

              <WrapperInput
                mensaje={"Nombre del diplomado"}
                type={"text"}
                name={"Nombre_diplomado"}
                onchange={handleChange}
                />
                </div>

              <div id="fechas" className="grid grid-cols-3 gap-5">
                <WrapperInput
                  mensaje={"Nombre del curso o asignatura"}
                  type={"text"}
                  name={"Nombre_curso"}
                  onchange={handleChange}
                />

                <WrapperInput
                  mensaje={"Año"}
                  type={"text"}
                  name={"AÑO"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Horas totales"}
                  type={"text"}
                  name={"Horas_totales"}
                  onchange={handleChange}
                />
              </div>
              
              <Title level={"h4"} text={"Área del conocimiento"} />
              <div id="ultimos" className="grid grid-cols-3 gap-5">
                <section className='mt-1 flex flex-col gap-2'>
                    <label className="block text-sm font-medium  text-gray-900 first-letter:">Área:</label>
                    <Select name='Area' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`Area`, selectedOption.value)} options={areas} />
                </section>
                <WrapperInput
                  mensaje={"Campo:"}
                  type={"text"}
                  name={"Campo"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Disciplina:"}
                  type={"text"}
                  name={"Disciplina"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Subdisciplina:"}
                  type={"text"}
                  name={"Subdisciplina"}
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

export default FormDiplomados
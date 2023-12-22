import React from 'react'
import { Formik, Form } from 'formik'
import WrapperInput from '../../molecules/wrapperInput'
import Title from '../../atoms/Title'
import Select from 'react-select'
import Swal from 'sweetalert2'

function FormGradosAcademicos() {
  const statuses = [
    { value: "Creditos terminados", label: "Creditos terminados" },
    { value: "Grado obtenido", label: "Grado obtenido" },
    { value: "Título o grado en proceso", label: "Título o grado en proceso" },
    { value: "Truncado", label: "Truncado" },
  ]
  const levels = [
    { value: "Licenciatura", label: "Licenciatura" },
    { value: "Especialidad", label: "Especialidad" },
    { value: "Maestría", label: "Maestría" },
    { value: "Doctorado", label: "Doctorado" },
    { value: "Otro", label: "Otro" },
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
    <Formik
      initialValues={{
        nivelEscolaridad:"",
        titulo:"",
        estatus:"",
        institucion:"",
        area:"",
        campo:"",
        disciplina:"",
        subdisciplina:"",
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
            <Title level={"h1"} text={"Grados académicos"} />
            <div className="grid grid-cols-3 gap-5">
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Nivel escolaridad:</label>
                <Select name='nivelEscolaridad' className='z-40' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`nivelEscolaridad`, selectedOption.value)} options={levels} />
              </section>
              <WrapperInput
                mensaje={"Título:"}
                type={"text"}
                name={"titulo"}
                onchange={handleChange}
              />
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Estatus:</label>
                <Select name='estatus' className='z-40' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`estatus`, selectedOption.value)} options={statuses} />
              </section>

            </div>
            <WrapperInput
              mensaje={"Institución: "}
              type={"text"}
              name={"institucion"}
              onchange={handleChange}
            />
            <Title level={"h4"} text={"Área del conocimiento"} />
            <div id="ultimos" className="grid grid-cols-3 gap-5">
              <section className='mt-1 flex flex-col gap-2'>
                    <label className="block text-sm font-medium  text-gray-900 first-letter:">Área:</label>
                    <Select name='area' className='z-40' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`area`, selectedOption.value)} options={areas} />
              </section>
              <WrapperInput
                mensaje={"Campo:"}
                type={"text"}
                name={"campo"}
                onchange={handleChange}
              />
              <WrapperInput
                mensaje={"Disciplina:"}
                type={"text"}
                name={"disciplina"}
                onchange={handleChange}
              />
              <WrapperInput
                mensaje={"Subdisciplina:"}
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

export default FormGradosAcademicos
import React from 'react'
import { Formik, Form } from 'formik'
import Title from '../../../atoms/Title'
import Swal from 'sweetalert2'
import Select from 'react-select'
import WrapperInput from '../../../molecules/wrapperInput'

function FormDivulgacion() {
  const levels = [
    { value: "Candidato", label: "Candidato" },
    { value: "SNI 1", label: "SNI 1" },
    { value: "SNI 2", label: "SNI 2" },
    { value: "SNI 3", label: "SNI 3" },
    { value: "Emérito", label: "Emérito" },
    { value: "Beca CONACYT", label: "Beca CONACYT" },
    { value: "RCEA (No pertenece a SNI)", label: "RCEA (No pertenece a SNI)" },
  ]

  return (
    <Formik
      initialValues={{
        tituloTrabajo:"",
        tipoParticipacion:"",
        tipoEvento:"",
        institucionOrganizadora:"",
        dirigidoA:"",
        fecha:"",
        tipoDivulgacion:"",
        tipoMedio:"",
        palabraClave1:"",
        palabraClave2:"",
        palabraClave3:"",
        productoObtenido:"",
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
            <Title level={"h1"} text={"Divulgación"} />
            <WrapperInput mensaje={"Título del trabajo: "} type={"text"} name={"tituloTrabajo"} onchange={handleChange} />
            <div className='grid grid-cols-2 gap-5'>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Tipo de participación:</label>
                <Select name='tipoParticipacion' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`tipoParticipacion`, selectedOption.value)} options={levels} />
              </section>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Tipo de evento:</label>
                <Select name='tipoEvento' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`tipoEvento`, selectedOption.value)} options={levels} />
              </section>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className='col-span-2'>
                <WrapperInput mensaje={"Institución organizadora: "} type={"text"} name={"institucionOrganizadora"} onchange={handleChange} />
              </div>
                <section className='mt-1 flex flex-col gap-2'>
                  <label className="block text-sm font-medium  text-gray-900 first-letter:">Dirigido a:</label>
                  <Select name='dirigidoA' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`dirigidoA`, selectedOption.value)} options={levels} />
                </section>
                <WrapperInput mensaje={"Fecha: "} type={"date"} name={"fecha"} onchange={handleChange} />
                <section className='mt-1 flex flex-col gap-2'>
                  <label className="block text-sm font-medium  text-gray-900 first-letter:">Tipo de divulgación y difusión:</label>
                  <Select name='tipoDivulgacion' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`tipoDivulgacion`, selectedOption.value)} options={levels} />
                </section>
                <section className='mt-1 flex flex-col gap-2'>
                  <label className="block text-sm font-medium  text-gray-900 first-letter:">Tipo medio:</label>
                  <Select name='tipoMedio' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`tipoMedio`, selectedOption.value)} options={levels} />
                </section>
                <WrapperInput mensaje={"Palabra clave 1: "} type={"text"} name={"palabraClave1"} onchange={handleChange} />
                <WrapperInput mensaje={"Palabra clave 2: "} type={"text"} name={"palabraClave2"} onchange={handleChange} />
                <WrapperInput mensaje={"Palabra clave 3: "} type={"text"} name={"palabraClave3"} onchange={handleChange} />
            </div>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Notas periodísticas:</label>
                <textarea name="notasPeriodisticas" placeholder='Notas periodísticas' cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
              </section>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Producto obtenido:</label>
                <textarea name="productoObtenido" placeholder='Escriba uno o más productos obtenidos' cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
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
  )
}

export default FormDivulgacion
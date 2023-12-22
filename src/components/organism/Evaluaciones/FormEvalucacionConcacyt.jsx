import React from 'react'
import { Formik, Form } from 'formik'
import Title from '../../atoms/Title'
import Swal from 'sweetalert2'
import Select from 'react-select'
import WrapperInput from '../../molecules/wrapperInput'

function FormEvalucacionConcacyt() {
  return (
    <Formik
      initialValues={{
        nombreFondo:"",
        fechaAsignacion:"",
        fechaAceptacion:"",
        fechaEvaluacion:"",
        descripcion:"",
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
            <Title level={"h1"} text={"Evaluaciones CONACYT"} />
            <WrapperInput mensaje={"Nombre del fondo o programa: "} type={"text"} name={"nombreFondo"} onchange={handleChange} />
            <div className="grid grid-cols-3 gap-5">
                <WrapperInput mensaje={"Fecha de asignación: "} type={"date"} name={"fechaAsignacion"} onchange={handleChange} />
                <WrapperInput mensaje={"Fecha de aceptación: "} type={"date"} name={"fechaAceptacion"} onchange={handleChange} />
                <WrapperInput mensaje={"Fecha de evaluación: "} type={"date"} name={"fechaEvaluacion"} onchange={handleChange} />
            </div>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Descripción:</label>
                <textarea name="descripcion" placeholder='Descripción' cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
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

export default FormEvalucacionConcacyt
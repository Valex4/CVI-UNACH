import React from 'react'
import { Formik, Form } from 'formik'
import WrapperInput from '../../molecules/wrapperInput'
import Title from '../../atoms/Title'
import Select from 'react-select'
import Swal from 'sweetalert2'


function FormCertificacionesM() {
  const levels = [
    { value: "Certificación", label: "Certificación" },
    { value: "Recertificación", label: "Recertificación" },
  ]
  return (
    <Formik
      initialValues={{
        folio:"",
        consejo:"",
        especialidad:"",
        vigenciaDe:"",
        vigenciaA:"",
        tipo:"",
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
            <Title level={"h1"} text={"Certificaciones médicas"} />
            <div className="grid grid-cols-3 gap-5">
            <WrapperInput
                mensaje={"Número de folio:"}
                type={"text"}
                name={"folio"}
                onchange={handleChange}
              />
              <WrapperInput
                mensaje={"Consejo que otorga la certificación:"}
                type={"text"}
                name={"consejo"}
                onchange={handleChange}
              />
              <WrapperInput
                mensaje={"Especialidad:"}
                type={"text"}
                name={"especialidad"}
                onchange={handleChange}
              />
              <WrapperInput
                mensaje={"Vigencia de:"}
                type={"date"}
                name={"vigenciaDe"}
                onchange={handleChange}
              />
              <WrapperInput
                mensaje={"a:"}
                type={"date"}
                name={"vigenciaA"}
                onchange={handleChange}
              />
              <div className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Tipo de certificación médica:</label>
                <Select name='tipo' style="display: none"  placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`tipo`, selectedOption.value)} options={levels} />
              </div>
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

export default FormCertificacionesM
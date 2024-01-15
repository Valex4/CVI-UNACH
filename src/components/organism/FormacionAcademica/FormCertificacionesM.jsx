import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import WrapperInput from '../../molecules/wrapperInput'
import Title from '../../atoms/Title'
import Select from 'react-select'
import Swal from 'sweetalert2'
import { createCertificate } from '../../../api/FormacionAcademica/Routes'
import * as Yup from 'yup';

function FormCertificacionesM() {
  const levels = [
    { value: "Certificación", label: "Certificación" },
    { value: "Recertificación", label: "Recertificación" },
  ]

  const validaciones = Yup.object().shape({
    folio: Yup.string()
    .matches(/^[0-9]+$/, 'El folio debe contener únicamente números.')
    .required('Campo obligatorio'),
    consejo: Yup.string().required('Campo obligatorio'),
    especialidad: Yup.string().required('Campo obligatorio'),
    tipo_certificacion: Yup.string().required('Campo obligatorio'),
    vigencia_de: Yup.string().required('Campo obligatorio'),
    vigencia_a: Yup.string()
      .required('Campo obligatorio')
      .test(
        'fecha-valida',
        'La fecha de vigencia final debe ser mayor o igual a la fecha de inicio',
        function (value) {
          const vigenciaDe = this.resolve(Yup.ref('vigencia_de'));
          const vigenciaA = this.resolve(Yup.ref('vigencia_a'));
  
          if (!vigenciaDe || !vigenciaA) {
            return true; // Si alguna fecha está ausente, se asume que la validación pasa
          }
  
          // Comparar las fechas
          return new Date(vigenciaA) >= new Date(vigenciaDe);
        }
      ),
  });

  return (
    <Formik
      validationSchema={validaciones}
      initialValues={{
        folio:"",
        consejo:"",
        especialidad:"",
        vigencia_de:"",
        vigencia_a:"",
        tipo_certificacion:"",
      }}
      onSubmit={async (values, actions) => {
        try {
           const response = await createCertificate(values);
                  if(response.status === 200){
                    Swal.fire({
                      icon: "success",
                      title: "Guardado exitosamente...",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    console.table(values);
                  }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error...",
            text: "Intente de nuevo",
            footer: 'Si el problema persiste intentelo mas tarde'
          });
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
            <div>
              <WrapperInput mensaje={"Número de folio:"} type={"text"} name={"folio"} onchange={handleChange}/>
              <ErrorMessage name="folio" component="div" className="text-red-500" />
            </div>
            <div>
            <WrapperInput mensaje={"Consejo que otorga la certificación:"} type={"text"} name={"consejo"} onchange={handleChange}/>
            <ErrorMessage name="consejo" component="div" className="text-red-500" />
            </div>
            <div>
            <WrapperInput mensaje={"Especialidad:"} type={"text"} name={"especialidad"} onchange={handleChange}/>
            <ErrorMessage name="especialidad" component="div" className="text-red-500" />
            </div>
            <div>
            <WrapperInput mensaje={"Vigencia de:"} type={"date"} name={"vigencia_de"} onchange={handleChange}/>
            <ErrorMessage name="vigencia_de" component="div" className="text-red-500" />
            </div>
            <div>
            <WrapperInput mensaje={"a:"} type={"date"} name={"vigencia_a"} onchange={handleChange}/>
            <ErrorMessage name="vigencia_a" component="div" className="text-red-500" />
            </div>
            <div className='mt-1 flex flex-col gap-2'>
              <label className="block text-sm font-medium  text-gray-900 first-letter:">Tipo de certificación médica:</label>
              <Select name='tipo_certificacion' style="display: none"  placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`tipo_certificacion`, selectedOption.value)} options={levels} />
              <ErrorMessage name="tipo_certificacion" component="div" className="text-red-500" />
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
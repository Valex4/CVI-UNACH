import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import Title from '../../atoms/Title'
import Swal from 'sweetalert2'
import WrapperInput from '../../molecules/wrapperInput'
import { createEvaluacionConacyt } from '../../../api/Evaluaciones/Routes'
import * as Yup from 'yup';

function FormEvalucacionConcacyt() {

  const validationSchema = Yup.object().shape({
    nombre_programa: Yup.string().required('Campo obligatorio'),
    descripcion: Yup.string().required('Campo obligatorio'),
    fecha_asignacion: Yup.string().required('Campo obligatorio'),
    fecha_evaluacion: Yup.string()
      .required('Campo obligatorio')
      .test(
        'fecha-valida',
        'La fecha de evaluación debe ser mayor o igual a la fecha de asignación',
        function (value) {
          const vigenciaDe = this.resolve(Yup.ref('fecha_asignacion'));
          const vigenciaA = this.resolve(Yup.ref('fecha_evaluacion'));

          if (!vigenciaDe || !vigenciaA) {
            return true;
          }
          return new Date(vigenciaA) >= new Date(vigenciaDe);
        }
      ),
      fecha_aceptacion: Yup.string()
      .required('Campo obligatorio')
      .test(
        'fecha-valida',
        'La fecha de aceptación debe ser mayor o igual a la fecha de evaluación',
        function (value) {
          const vigenciaDe = this.resolve(Yup.ref('fecha_evaluacion'));
          const vigenciaA = this.resolve(Yup.ref('fecha_aceptacion'));

          if (!vigenciaDe || !vigenciaA) {
            return true;
          }
          return new Date(vigenciaA) >= new Date(vigenciaDe);
        }
      ),
    
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        nombre_programa: "",
        fecha_asignacion: "",
        fecha_aceptacion: "",
        fecha_evaluacion: "",
        descripcion: "",
      }}
      onSubmit={async (values, actions) => {
        try {
          const response = await createEvaluacionConacyt(values);
          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Guardado con éxito",
              showConfirmButton: false,
              timer: 1500,
            });
            console.table(values)
          } else {
            Swal.fire({
              icon: "error",
              title: "Error...",
              text: "Intente de nuevo",
              footer: 'Si el problema persiste intentelo mas tarde'
            });
            console.log(error);
          }
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
            <div>
            <WrapperInput mensaje={"Nombre del fondo o programa: "} type={"text"} name={"nombre_programa"} onchange={handleChange} />
            <ErrorMessage name="nombre_programa" className='text-red-500' component="div" />
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div>
              <WrapperInput mensaje={"Fecha de asignación: "} type={"date"} name={"fecha_asignacion"} onchange={handleChange} />
              <ErrorMessage name="fecha_asignacion" className='text-red-500' component="div" />
              </div>
              <div>
              <WrapperInput mensaje={"Fecha de evaluación: "} type={"date"} name={"fecha_evaluacion"} onchange={handleChange} />
            <ErrorMessage name="fecha_evaluacion" className='text-red-500' component="div" />
            </div>
            <div>
            <WrapperInput mensaje={"Fecha de aceptación: "} type={"date"} name={"fecha_aceptacion"} onchange={handleChange} />
            <ErrorMessage name="fecha_aceptacion" className='text-red-500' component="div" />
            </div>
            </div>
            <section className='mt-1 flex flex-col gap-2'>
              <label className="block text-sm font-medium  text-gray-900 first-letter:">Descripción:</label>
              <textarea name="descripcion" placeholder='Descripción' cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
              <ErrorMessage name="descripcion" className='text-red-500' component="div" />
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
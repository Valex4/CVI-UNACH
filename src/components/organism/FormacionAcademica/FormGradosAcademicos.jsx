import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import WrapperInput from '../../molecules/wrapperInput'
import Title from '../../atoms/Title'
import Select from 'react-select'
import Swal from 'sweetalert2'
import { createGrados } from '../../../api/FormacionAcademica/Routes'
import * as Yup from 'yup';

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
    { value: "Biología y química", label: "Biología y química" },
    { value: "Ciencias Sociales", label: "Ciencias Sociales" },
    { value: "Ciencias agropecuarias y Biotecnología", label: "Ciencias agropecuarias y Biotecnología" },
    { value: "Ciencias físico matemático y ciencias de la tierra", label: "Ciencias físico matemático y ciencias de la tierra" },
    { value: "Humanidades y ciencias de la conducta", label: "Humanidades y ciencias de la conducta" },
    { value: "Ingeniería y tecnología", label: "Ingeniería y tecnología" },
    { value: "Mediciona y ciencias de la salud", label: "Mediciona y ciencias de la salud" },
  ]

  const validaciones = Yup.object().shape({
    Nivel_escolaridad: Yup.string().required('Campo obligatorio'),
    Titulo: Yup.string().required('Campo obligatorio'),
    Institucion: Yup.string().required('Campo obligatorio'),
    Estatus: Yup.string().required('Campo obligatorio'),
    Area: Yup.string().required('Campo obligatorio'),
    Campo: Yup.string().required('Campo obligatorio'),
    Disciplina: Yup.string().required('Campo obligatorio'),
    Subdisciplina: Yup.string().required('Campo obligatorio'),
  });

  return (
    <Formik
      validationSchema={validaciones}
      initialValues={{
        Nivel_escolaridad: "",
        Titulo: "",
        Estatus: "",
        Cedula: "",
        Opciones_Titulacion: "",
        Fecha_Obtencion: "",
        Institucion: "",
        Area: "",
        Campo: "",
        Disciplina: "",
        Subdisciplina: "",
      }}
      onSubmit={async (values, actions) => {
        try {
          const response = await createGrados(values);
          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Guardado exitosamente",
              showConfirmButton: false,
              timer: 1500,
            });
            console.table(values);
          } else {
            Swal.fire({
              icon: "error",
              title: "Error...",
              text: "Intente de nuevo",
              footer: 'Si el problema persiste intentelo mas tarde'
            });
            console.log(response.data)
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
        <Form onSubmit={handleSubmit} className="space-y-2 mt-[10px] py-8 pl-8 pr-8">
          <div id="padre" className="flex flex-col gap-8">
            <Title level={"h1"} text={"Grados académicos"} />
            <div className="grid grid-cols-3 gap-5">
              <div className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Nivel escolaridad:</label>
                <Select name='Nivel_escolaridad' styles="display:none" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`Nivel_escolaridad`, selectedOption.value)} options={levels} />
                <ErrorMessage name="Nivel_escolaridad" component="div" className="text-red-500" />
              </div>
              <div className='col-span-2'>
                <div>
                  <WrapperInput mensaje={"Título:"} type={"text"} name={"Titulo"} onchange={handleChange}/>
                  <ErrorMessage name="Titulo" component="div" className="text-red-500" />
                </div>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-5'>
              <div className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Estatus:</label>
                <Select name='Estatus' styles="display:none" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`Estatus`, selectedOption.value)} options={statuses} />
                <ErrorMessage name="Estatus" component="div" className="text-red-500" />
              </div>
              {values.Estatus === 'Grado obtenido' && (
                <>
                  <WrapperInput mensaje={"Cédula profesional:"} type={"text"} name={"Cedula"} onchange={handleChange} />
                  <WrapperInput mensaje={"Opciones de titulación: "} type={"text"} name={"Opciones_Titulacion"} onchange={handleChange} />
                  <WrapperInput mensaje={"Fecha de obtención: "} type={"date"} name={"Fecha_Obtencion"} onchange={handleChange} />
                </>
              )}
            </div>
            <div>
              <WrapperInput mensaje={"Institución: "} type={"text"} name={"Institucion"} onchange={handleChange}/>
              <ErrorMessage name="Institucion" component="div" className="text-red-500" />
            </div>
            <Title level={"h4"} text={"Área del conocimiento"} />
            <div id="ultimos" className="grid grid-cols-3 gap-5">
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Área:</label>
                <Select name='Area' className='z-40' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`Area`, selectedOption.value)} options={areas} />
                <ErrorMessage name="Area" component="div" className="text-red-500" />
              </section>
              <div>
              <WrapperInput mensaje={"Campo:"} type={"text"} name={"Campo"} onchange={handleChange}/>
              <ErrorMessage name="Campo" component="div" className="text-red-500" />
              </div>
              <div>
              <WrapperInput mensaje={"Disciplina:"} type={"text"} name={"Disciplina"} onchange={handleChange}/>
              <ErrorMessage name="Disciplina" component="div" className="text-red-500" />
              </div>
              <div>
              <WrapperInput mensaje={"Subdisciplina:"} type={"text"} name={"Subdisciplina"} onchange={handleChange}/>
              <ErrorMessage name="Subdisciplina" component="div" className="text-red-500" />
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

export default FormGradosAcademicos
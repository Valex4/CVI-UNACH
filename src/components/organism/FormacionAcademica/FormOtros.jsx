import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import WrapperInput from '../../molecules/wrapperInput'
import Title from '../../atoms/Title'
import Select from 'react-select'
import Swal from 'sweetalert2'
import { createOthers } from '../../../api/FormacionAcademica/Routes'
import * as Yup from 'yup';

function FormOtros() {

  const levels = [
    { value: "Acreditación", label: "Acreditación" },
    { value: "Certificación", label: "Certificación" },
    { value: "Coaching", label: "Coaching" },
    { value: "Curso", label: "Curso" },
    { value: "Diplomado", label: "Diplomado" },
    { value: "Seminario", label: "Seminario" },
    { value: "Taller", label: "Taller" },
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

  const validationSchema = Yup.object().shape({
    formacion_continua: Yup.string().required('Campo obligatorio'),
    nombre: Yup.string().required('Campo obligatorio'),
    institucion: Yup.string().required('Campo obligatorio'),
    year: Yup.string()
      .matches(/^\d{4}$/, 'El año debe contener exactamente 4 números.')
      .required('Campo obligatorio'),
    horas_totales: Yup.string().required('Campo obligatorio'),
    area: Yup.string().required('Campo obligatorio'),
    campo: Yup.string().required('Campo obligatorio'),
    disciplina: Yup.string().required('Campo obligatorio'),
    subdisciplina: Yup.string().required('Campo obligatorio'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        formacion_continua: "",
        nombre: "",
        institucion: "",
        year: "",
        horas_totales: "",
        area: "",
        campo: "",
        disciplina: "",
        subdisciplina: "",
      }}
      onSubmit={async (values, actions) => {
        try {
          //Descomentar lo siguiente cuando este lo del axios y funcione el back

          const response = await createOthers(values);
          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Guardado Exitosamente",
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
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error...",
            text: error,
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
        <Form onSubmit={handleSubmit} className="space-y-2 mt-[10px] py-8 pl-8 pr-8">
          <div id="padre" className="flex flex-col gap-8">
            <Title level={"h1"} text={"Otro"} />
            <div className="grid grid-cols-2 gap-5">
              <div className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Formación continua:</label>
                <Select name='formacion_continua' style="display: none" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`formacion_continua`, selectedOption.value)} options={levels} />
                <ErrorMessage name="formacion_continua" component="div" className="text-red-500" />
              </div>
              <div>
                <WrapperInput mensaje={"Nombre:"} type={"text"} name={"nombre"} onchange={handleChange} />
                <ErrorMessage name="nombre" component="div" className="text-red-500" />
              </div>
            </div>
            <div>
              <WrapperInput mensaje={"Institución: "} type={"text"} name={"institucion"} onchange={handleChange} />
              <ErrorMessage name="institucion" component="div" className="text-red-500" />
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div>
                <WrapperInput mensaje={"Año: "} type={"text"} name={"year"} onchange={handleChange} />
                <ErrorMessage name="year" component="div" className="text-red-500" />
              </div>
              <div>
                <WrapperInput mensaje={"Horas totales: "} type={"number"} name={"horas_totales"} onchange={handleChange} />
                <ErrorMessage name="horas_totales" component="div" className="text-red-500" />
              </div>
            </div>
            <Title level={"h4"} text={"Área del conocimiento"} />
            <div id="ultimos" className="grid grid-cols-3 gap-5">
              <div className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Área:</label>
                <Select name='area' style="display: none" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`area`, selectedOption.value)} options={areas} />
                <ErrorMessage name="area" component="div" className="text-red-500" />
              </div>
              <div>
                <WrapperInput mensaje={"Campo:"} type={"text"} name={"campo"} onchange={handleChange} />
                <ErrorMessage name="campo" component="div" className="text-red-500" />
              </div>
              <div>
                <WrapperInput mensaje={"Disciplina:"} type={"text"} name={"disciplina"} onchange={handleChange} />
                <ErrorMessage name="disciplina" component="div" className="text-red-500" />
              </div>
              <div>
                <WrapperInput mensaje={"Subdisciplina:"} type={"text"} name={"subdisciplina"} onchange={handleChange} />
                <ErrorMessage name="subdisciplina" component="div" className="text-red-500" />
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

export default FormOtros
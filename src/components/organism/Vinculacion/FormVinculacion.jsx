import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import Title from '../../atoms/Title';
import Swal from 'sweetalert2';
import Select from 'react-select';
import WrapperInput from '../../molecules/wrapperInput';
import { createProyectosInvestigacion } from '../../../api/Vinculacion/Routes';
import * as Yup from 'yup';

function FormVinculacion() {
  const types = [
    { value: "consultoria", label: "Consultoría" },
    { value: "investigacion", label: "Investigación" },
    { value: "planesDeNegocio", label: "Planes de negocio" },
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
    nombre_proyecto: Yup.string().required('Campo obligatorio'),
    tipo_proyecto: Yup.string().required('Campo obligatorio'),
    inicio: Yup.string().required('Campo obligatorio'),
    fin: Yup.string()
      .required('Campo obligatorio')
      .test(
        'fecha-valida',
        'La fecha de vigencia final debe ser mayor o igual a la fecha de inicio',
        function (value) {
          const vigenciaDe = this.resolve(Yup.ref('inicio'));
          const vigenciaA = this.resolve(Yup.ref('fin'));
  
          if (!vigenciaDe || !vigenciaA) {
            return true; // Si alguna fecha está ausente, se asume que la validación pasa
          }
  
          // Comparar las fechas
          return new Date(vigenciaA) >= new Date(vigenciaDe);
        }
      ),
    institucion: Yup.string().required('Campo obligatorio'),
    logro_proyecto: Yup.string().required('Campo obligatorio'),
    area: Yup.string().required('Campo obligatorio'),
    campo: Yup.string().required('Campo obligatorio'),
    disciplina: Yup.string().required('Campo obligatorio'),
    subdisciplina: Yup.string().required('Campo obligatorio'),
  });


  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        nombre_proyecto: "",
        tipo_proyecto: "",
        inicio: "",
        fin: "",
        institucion: "",
        logro_proyecto: "",
        area: "",
        campo: "",
        disciplina: "",
        subdisciplina: ""
      }}
      onSubmit={async (values, actions) => {
        try {
          const response = await createProyectosInvestigacion(values);
          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Guardado con exíto",
              showConfirmButton: true,
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
        setFieldValue,
        isValid
      }) => (
        <Form onSubmit={handleSubmit} className="space-y-2 mt-[10px] py-8 pl-8 pr-8" >
          <div id="padre" className="flex flex-col gap-8">
            <Title level={"h1"} text={"Proyectos investigación"} />
            <div>
              <WrapperInput mensaje={"Nombre del proyecto:"} type={"text"} name={"nombre_proyecto"} onchange={handleChange} />
              <ErrorMessage name="nombre_proyecto" className='text-red-500' component="div" />
            </div>
            <div id="fechas" className="grid grid-cols-3 gap-5">
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Tipo de proyecto:</label>
                <Select name='tipo_proyecto' className='z-40' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`tipo_proyecto`, selectedOption.value)} options={types} />
                <ErrorMessage name="tipo_proyecto" className='text-red-500' component="div" />
              </section>
              <div>
                <WrapperInput mensaje={"Inicio:"} type={"date"} name={"inicio"} onchange={handleChange} />
                <ErrorMessage name="inicio" className='text-red-500' component="div" />
              </div>
              <div>
                <WrapperInput mensaje={"Fin:"} type={"date"} name={"fin"} onchange={handleChange} />
                <ErrorMessage name="fin" className='text-red-500' component="div" />
              </div>
            </div>
            <div>
              <WrapperInput mensaje={"Institución: "} type={"text"} name={"institucion"} onchange={handleChange} />
              <ErrorMessage name="institucion" className='text-red-500' component="div" />
            </div>
            <div>
              <WrapperInput mensaje={"Logros:"} type={"text"} name={"logro_proyecto"} onchange={handleChange} />
              <ErrorMessage name="logro_proyecto" className='text-red-500' component="div" />
            </div>
            <Title level={"h4"} text={"Área del conocimiento"} />
            <div id="ultimos" className="grid grid-cols-3 gap-5">
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Área:</label>
                <Select name='area' className='z-40' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`area`, selectedOption.value)} options={areas} />
                <ErrorMessage name="area" className='text-red-500' component="div" />
              </section>
              <div>
                <WrapperInput mensaje={"Campo:"} type={"text"} name={"campo"} onchange={handleChange} />
                <ErrorMessage name="campo" className='text-red-500' component="div" />
              </div>
              <div>
                <WrapperInput mensaje={"Disciplina:"} type={"text"} name={"disciplina"} onchange={handleChange} />
                <ErrorMessage name="disciplina" className='text-red-500' component="div" />
              </div>
              <div>
                <WrapperInput mensaje={"Subdisciplina:"} type={"text"} name={"subdisciplina"} onchange={handleChange} />
                <ErrorMessage name="subdisciplina" className='text-red-500' component="div" />
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

export default FormVinculacion
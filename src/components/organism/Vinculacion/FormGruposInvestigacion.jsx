import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import Title from '../../atoms/Title'
import Select from 'react-select'
import WrapperInput from '../../molecules/wrapperInput'
import Swal from 'sweetalert2'
import { createGrupoInvestigacion } from '../../../api/Vinculacion/Routes'
import * as Yup from 'yup';

function FormGruposInvestigacion() {
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
    nombre_grupo: Yup.string().required('Campo obligatorio'),
    nombre_lider: Yup.string().required('Campo obligatorio'),
    fecha_creacion: Yup.string().required('Campo obligatorio'),
    fecha_ingreso: Yup.string()
      .required('Campo obligatorio')
      .test(
        'fecha-valida',
        'La fecha de ingreso debe ser mayor o igual a la fecha de inicio',
        function (value) {
          const vigenciaDe = this.resolve(Yup.ref('fecha_creacion'));
          const vigenciaA = this.resolve(Yup.ref('fecha_ingreso'));
  
          if (!vigenciaDe || !vigenciaA) {
            return true; // Si alguna fecha está ausente, se asume que la validación pasa
          }
  
          // Comparar las fechas
          return new Date(vigenciaA) >= new Date(vigenciaDe);
        }
      ),
    primer_apellido_lider: Yup.string().required('Campo obligatorio'),
    segundo_apellido_lider: Yup.string().required('Campo obligatorio'),
    institucion_adscripcion: Yup.string().required('Campo obligatorio'),
    total_investigadores: Yup.string().required('Campo obligatorio'),
    colaboracion: Yup.string().required('Campo obligatorio'),
    impacto: Yup.string().required('Campo obligatorio'),
    area: Yup.string().required('Campo obligatorio'),
    campo: Yup.string().required('Campo obligatorio'),
    disciplina: Yup.string().required('Campo obligatorio'),
    subdisciplina: Yup.string().required('Campo obligatorio'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        nombre_grupo: "",
        fecha_creacion: "",
        fecha_ingreso: "",
        nombre_lider: "",
        primer_apellido_lider: "",
        segundo_apellido_lider: "",
        institucion_adscripcion: "",
        total_investigadores: "",
        colaboracion: "",
        impacto: "",
        area: "",
        campo: "",
        disciplina: "",
        subdisciplina: "",
      }}
      onSubmit={async (values, actions) => {
        try {
          const response = await createGrupoInvestigacion(values);
          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Guardado con éxito",
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
            <Title level={"h1"} text={"Grupos de investigación"} />
            <div className='grid grid-cols-3 gap-5'>
              <div>
              <WrapperInput mensaje={"Nombre del grupo:"} type={"text"} name={"nombre_grupo"} onchange={handleChange} />
              <ErrorMessage name="nombre_grupo" className='text-red-500' component="div" />
              </div>
              <div>
              <WrapperInput mensaje={"Fecha de creación:"} type={"date"} name={"fecha_creacion"} onchange={handleChange} />
              <ErrorMessage name="fecha_creacion" className='text-red-500' component="div" />
              </div>
              <div>
              <WrapperInput mensaje={"Fecha de ingreso:"} type={"date"} name={"fecha_ingreso"} onchange={handleChange} />
              <ErrorMessage name="fecha_ingreso" className='text-red-500' component="div" />
              </div>
            </div>
            <Title level={"h4"} text={"Responsable/líder grupo"} />
            <div id="fechas" className="grid grid-cols-3 gap-5">
              <div>
              <WrapperInput mensaje={"Nombre:"} type={"text"} name={"nombre_lider"} onchange={handleChange} />
              <ErrorMessage name="nombre_lider" className='text-red-500' component="div" />
              </div>
              <div>
              <WrapperInput mensaje={"Primer apellido:"} type={"text"} name={"primer_apellido_lider"} onchange={handleChange} />
              <ErrorMessage name="primer_apellido_lider" className='text-red-500' component="div" />
              </div>
              <div>
              <WrapperInput mensaje={"Segundo apellido:"} type={"text"} name={"segundo_apellido_lider"} onchange={handleChange} />
              <ErrorMessage name="segundo_apellido_lider" className='text-red-500' component="div" />
              </div>
            </div>
            <div className='grid grid-cols-3 gap-5'>
              <div className='col-span-2'>
                <WrapperInput mensaje={"Institución de adscripción del responsable del grupo: "} type={"text"} name={"institucion_adscripcion"} onchange={handleChange} />
                <ErrorMessage name="institucion_adscripcion" className='text-red-500' component="div" />
              </div>
              <div>
              <WrapperInput mensaje={"Total de investigadores: "} type={"number"} name={"total_investigadores"} onchange={handleChange} />
              <ErrorMessage name="total_investigadores" className='text-red-500' component="div" />
              </div>
            </div>
            <section className='mt-1 flex flex-col gap-2'>
              <label className="block text-sm font-medium  text-gray-900 first-letter:">Colaboración:</label>
              <textarea name="colaboracion" placeholder='Descripción' cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
              <ErrorMessage name="colaboracion" className='text-red-500' component="section" />
            </section>
            <div className='mt-1 flex flex-col gap-2'>
              <label className="block text-sm font-medium  text-gray-900 first-letter:">Impacto:</label>
              <textarea name="impacto" placeholder='Descripción' cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
              <ErrorMessage name="impacto" className='text-red-500' component="div" />
            </div>
            <Title level={"h4"} text={"Área del conocimiento"} />
            <div id="ultimos" className="grid grid-cols-3 gap-5">
              <div className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Área:</label>
                <Select name='area' className='z-40' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`area`, selectedOption.value)} options={areas} />
                <ErrorMessage name="area" className='text-red-500' component="div" />
              </div>
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

export default FormGruposInvestigacion
import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import Title from '../../atoms/Title'
import Select from 'react-select'
import Swal from 'sweetalert2'
import WrapperInput from '../../molecules/wrapperInput'
import { createEstanciaInvestigacion } from '../../../api/TrayectoriaProfesional/Routes'
import * as Yup from 'yup';

function FormEstanciasInvestigacion() {
  const types = [
    { value: "Académica", label: "Académica" },
    { value: "Posdoctoral", label: "Posdoctoral" },
    { value: "Sabática", label: "Sabática" }
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
    institucion: Yup.string().required('Campo obligatorio'),
    nombre_estancia: Yup.string().required('Campo obligatorio'),
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
    logro_profesional: Yup.string().required('Campo obligatorio'),
    tipo_estancia: Yup.string().required('Campo obligatorio'),
    area: Yup.string().required('Campo obligatorio'),
    campo: Yup.string().required('Campo obligatorio'),
    disciplina: Yup.string().required('Campo obligatorio'),
    subdisciplina: Yup.string().required('Campo obligatorio'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        institucion: "",
        nombre_estancia: "",
        inicio: "",
        fin: "",
        tipo_estancia:"",
        logro_profesional:"",
        area:"",
        campo: "",
        disciplina: "",
        subdisciplina: "",
      }}
      onSubmit={async (values, actions) => {
        try {
          const response = await createEstanciaInvestigacion(values);
          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Guardado exitosamente...",
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
        <Form onSubmit={handleSubmit} className="space-y-2 mt-[10px] py-8 pl-8 pr-8">
          <div id="padre" className="flex flex-col gap-8">
            <Title level={"h1"} text={"Estancias de investigación, profesionales y pos-doctorales"} />
            <div>
            <WrapperInput mensaje={"Institución: "} type={"text"} name={"institucion"} onchange={handleChange}/>
            <ErrorMessage name="institucion" component="div" className="text-red-500" />
            </div>
            <div>
            <WrapperInput mensaje={"Nombre de la estancia: "} type={"text"} name={"nombre_estancia"} onchange={handleChange}/>
            <ErrorMessage name="nombre_estancia" component="div" className="text-red-500" />
            </div>
            <div className='grid grid-cols-3 gap-5'>
              <div>
              <WrapperInput mensaje={"Inicio: "} type={"date"} name={"inicio"} onchange={handleChange} />
              <ErrorMessage name="inicio" component="div" className="text-red-500" />
              </div>
              <div>
              <WrapperInput mensaje={"Fin: "} type={"date"} name={"fin"} onchange={handleChange} />
              <ErrorMessage name="fin" component="div" className="text-red-500" />
              </div>
              <div className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Tipo de estancia:</label>
                <Select name='tipo_estancia' style="display: none" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`tipo_estancia`, selectedOption.value)} options={types} />
                <ErrorMessage name="tipo_estancia" component="div" className="text-red-500" />
              </div>
            </div>
            <div className='mt-1 flex flex-col gap-2'>
              <label className="block text-sm font-medium  text-gray-900 first-letter:">Logro profesional:</label>
              <textarea name="logro_profesional" cols="10" onChange={handleChange} rows="3" placeholder='Logro propfesional' className='textareaStyle'></textarea>
              <ErrorMessage name="logro_profesional" component="div" className="text-red-500" />
            </div>
            <Title level={"h4"} text={"Área de conocimiento"} />
            <div className='grid grid-cols-3 gap-5'>
              <div className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Área:</label>
                <Select name='area' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`area`, selectedOption.value)} options={areas} />
                <ErrorMessage name="area" component="div" className="text-red-500" />
              </div>
              <div>
              <WrapperInput mensaje={"Campo: "} type={"text"} name={"campo"} onchange={handleChange} />
              <ErrorMessage name="campo" component="div" className="text-red-500" />
              </div>
              <div>
              <WrapperInput mensaje={"Disciplina: "} type={"text"} name={"disciplina"} onchange={handleChange} />
              <ErrorMessage name="disciplina" component="div" className="text-red-500" />
              </div>
             <div>
             <WrapperInput mensaje={"Subdisciplina: "} type={"text"} name={"subdisciplina"} onchange={handleChange} />
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

export default FormEstanciasInvestigacion
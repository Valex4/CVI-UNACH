import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import Title from '../../atoms/Title'
import WrapperInput from '../../molecules/wrapperInput'
import Select from 'react-select'
import Swal from 'sweetalert2'
import { createEvaluacionNoConacyt } from '../../../api/Evaluaciones/Routes'
import * as Yup from 'yup';

function FormEvaluacionNoConacyt() {
  const areas = [
    { value: "Biología y química", label: "Biología y química" },
    { value: "Ciencias Sociales", label: "Ciencias Sociales" },
    { value: "Ciencias agropecuarias y Biotecnología", label: "Ciencias agropecuarias y Biotecnología" },
    { value: "Ciencias físico matemático y ciencias de la tierra", label: "Ciencias físico matemático y ciencias de la tierra" },
    { value: "Humanidades y ciencias de la conducta", label: "Humanidades y ciencias de la conducta" },
    { value: "Ingeniería y tecnología", label: "Ingeniería y tecnología" },
    { value: "Mediciona y ciencias de la salud", label: "Mediciona y ciencias de la salud" },
  ]

  const types = [
    { value: "Complementaria", label: "Complementaria" },
    { value: "Consistencia y resultados", label: "Consistencia y resultados" },
    { value: "Diseño", label: "Diseño" },
    { value: "Específica de desempeño", label: "Específica de desempeño" },
    { value: "Estratégica", label: "Estratégica" },
    { value: "Impacto", label: "Impacto" },
    { value: "Indicadores", label: "Indicadores" },
    { value: "Procesos", label: "Procesos" },
    { value: "Otras", label: "Otras" },
    { value: "Participación en comités tutoriales", label: "Participación en comités tutoriales" },
    { value: "Clínica", label: "Clínica" },
    { value: "Arbitraje de producción académica", label: "Arbitraje de producción académica" },
    { value: "Administrativa", label: "Administrativa" },
    { value: "Técnica", label: "Técnica" },
    { value: "Académica", label: "Académica" },
    { value: "Inspección", label: "Inspección" },
    { value: "Psicológica", label: "Psicológica" },
    { value: "Participación como jurado examinador", label: "Participación como jurado examinador" },
  ]

  const validationSchema = Yup.object().shape({
    institucion: Yup.string().required('Campo obligatorio'),
    cargo: Yup.string().required('Campo obligatorio'),
    fecha_inicio: Yup.string().required('Campo obligatorio'),
    fecha_fin: Yup.string()
      .required('Campo obligatorio')
      .test(
        'fecha-valida',
        'La fecha de ingreso debe ser mayor o igual a la fecha de inicio',
        function (value) {
          const vigenciaDe = this.resolve(Yup.ref('fecha_inicio'));
          const vigenciaA = this.resolve(Yup.ref('fecha_fin'));

          if (!vigenciaDe || !vigenciaA) {
            return true;
          }
          return new Date(vigenciaA) >= new Date(vigenciaDe);
        }
      ),
    tipo_evaluacion: Yup.string().required('Campo obligatorio'),
    producto_evaluado: Yup.string().required('Campo obligatorio'),
    nombre_producto_evaluado: Yup.string().required('Campo obligatorio'),
    descripcion_actividad: Yup.string().required('Campo obligatorio'),
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
        fecha_inicio: "",
        fecha_fin: "",
        cargo: "",
        tipo_evaluacion: "",
        producto_evaluado: "",
        nombre_producto_evaluado: "",
        descripcion_actividad: "",
        area: "",
        campo: "",
        disciplina: "",
        subdisciplina: "",
      }}
      onSubmit={async (values, actions) => {
        try {
          const response = await createEvaluacionNoConacyt(values);
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
            <Title level={"h1"} text={"Evaluaciones no CONACYT"} />
            <div className="grid grid-cols-3 gap-5">
              <div className="col-span-2">
                <WrapperInput mensaje={"Institución: "} type={"text"} name={"institucion"} onchange={handleChange} />
                <ErrorMessage name="institucion" className='text-red-500' component="div" />
              </div>
              <div>
                <WrapperInput mensaje={"Fecha de inicio: "} type={"date"} name={"fecha_inicio"} onchange={handleChange} />
                <ErrorMessage name="fecha_inicio" className='text-red-500' component="div" />
              </div>
              <div>
                <WrapperInput mensaje={"Fecha de fin: "} type={"date"} name={"fecha_fin"} onchange={handleChange} />
                <ErrorMessage name="fecha_fin" className='text-red-500' component="div" />
              </div>
              <div>
                <WrapperInput mensaje={"Cargo desempeñado: "} type={"text"} name={"cargo"} onchange={handleChange} />
                <ErrorMessage name="cargo" className='text-red-500' component="div" />
              </div>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Tipo de evaluación:</label>
                <Select name='tipo_evaluacion' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`tipo_evaluacion`, selectedOption.value)} options={types} />
                <ErrorMessage name="tipo_evaluacion" className='text-red-500' component="section" />
              </section>
              <div>
                <WrapperInput mensaje={"Producto evaluado: "} type={"text"} name={"producto_evaluado"} onchange={handleChange} />
                <ErrorMessage name="producto_evaluado" className='text-red-500' component="div" />
              </div>
              <div>
                <WrapperInput mensaje={"Nombre del producto evaluado: "} type={"text"} name={"nombre_producto_evaluado"} onchange={handleChange} />
                <ErrorMessage name="nombre_producto_evaluado" className='text-red-500' component="div" />
              </div>
            </div>
            <section className='mt-1 flex flex-col gap-2'>
              <label className="block text-sm font-medium  text-gray-900 first-letter:">Descripción de la actividad:</label>
              <textarea name="descripcion_actividad" placeholder='Descripción' cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
              <ErrorMessage name="descripcion_actividad" className='text-red-500' component="section" />
            </section>
            <Title level={"h4"} text={"Área de conocimiento"} />
            <div className='grid grid-cols-3 gap-5'>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Área:</label>
                <Select name='area' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`area`, selectedOption.value)} options={areas} />
                <ErrorMessage name="area" className='text-red-500' component="section" />
              </section>
              <div>
                <WrapperInput mensaje={"Campo: "} type={"text"} name={"campo"} onchange={handleChange} />
                <ErrorMessage name="campo" className='text-red-500' component="div" />
              </div>
              <div>
                <WrapperInput mensaje={"Disciplina: "} type={"text"} name={"disciplina"} onchange={handleChange} />
                <ErrorMessage name="disciplina" className='text-red-500' component="div" />
              </div>
              <div>
                <WrapperInput mensaje={"Subdisciplina: "} type={"text"} name={"subdisciplina"} onchange={handleChange} />
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

export default FormEvaluacionNoConacyt
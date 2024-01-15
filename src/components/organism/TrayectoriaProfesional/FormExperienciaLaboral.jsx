import React from 'react'
import Title from '../../atoms/Title'
import { Formik, Form, ErrorMessage } from 'formik'
import WrapperInput from '../../molecules/wrapperInput'
import Swal from 'sweetalert2'
import Select from 'react-select'
import { createExperienciaLaboral } from '../../../api/TrayectoriaProfesional/Routes'
import * as Yup from 'yup';


function FormExperienciaLaboral() {
  const puestos = [
    { value: "Catedrático CONACYT", label: "Catedrático CONACYT" },
    { value: "Investigador", label: "Investigador" },
    { value: "Otro", label: "Otro" },
  ]

  const areas = [
    {value: "Biología y química", label:"Biología y química"},
    {value:"Ciencias Sociales", label:"Ciencias Sociales"},
    {value:"Ciencias agropecuarias y Biotecnología", label:"Ciencias agropecuarias y Biotecnología"},
    {value:"Ciencias físico matemático y ciencias de la tierra", label:"Ciencias físico matemático y ciencias de la tierra"},
    {value:"Humanidades y ciencias de la conducta", label:"Humanidades y ciencias de la conducta"},
    {value:"Ingeniería y tecnología", label:"Ingeniería y tecnología"},
    {value:"Mediciona y ciencias de la salud", label:"Mediciona y ciencias de la salud"},
  ]

  const decisions = [
    { value: true, label: "Si" },
    { value: false, label: "No" },
  ]

  const validationSchema = Yup.object().shape({
    Puesto_desempeñado: Yup.string().required('Campo obligatorio'),
    Empleo_actual: Yup.string().required('Campo obligatorio'),
    Institucion: Yup.string().required('Campo obligatorio'),
    Fecha_inicio: Yup.string().required('Campo obligatorio'),
    Fecha_fin: Yup.string()
      .test(
        'fecha-valida',
        'La fecha de vigencia final debe ser mayor o igual a la fecha de inicio',
        function (value) {
          const vigenciaDe = this.resolve(Yup.ref('Fecha_inicio'));
          const vigenciaA = this.resolve(Yup.ref('Fecha_fin'));
  
          if (!vigenciaDe || !vigenciaA) {
            return true; // Si alguna fecha está ausente, se asume que la validación pasa
          }
  
          // Comparar las fechas
          return new Date(vigenciaA) >= new Date(vigenciaDe);
        }
      ),
    Logros: Yup.string().required('Campo obligatorio'),
    Nombramiento: Yup.string().required('Campo obligatorio'),
    Areas: Yup.string().required('Campo obligatorio'),
    Campo: Yup.string().required('Campo obligatorio'),
    Disciplina: Yup.string().required('Campo obligatorio'),
    Subdisciplina: Yup.string().required('Campo obligatorio'),
  });

  return (
    <Formik
      enableReinitialize
      validationSchema={validationSchema}
      initialValues={{
        Puesto_desempeñado: "",
        Institucion: "",
        Institucion_catedra: "",
        Empleo_actual:"",
        Fecha_inicio: "",
        Fecha_fin: "",
        Logros: "",
        Nombramiento: "",
        Areas: "",
        Campo: "",
        Disciplina: "",
        Subdisciplina: "",
      }}
      onSubmit={async (values, actions) => {
        try {
          const response = await createExperienciaLaboral(values);
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
        setFieldTouched
      }) => (
        <Form onSubmit={handleSubmit} className="space-y-2 mt-[10px] py-8 pl-8 pr-8">
          <div id="padre" className="flex flex-col gap-8">
            <Title level={"h1"} text={"Experiencia Laboral"} />
            <div className='mt-1 flex flex-col gap-2'>
              <label className="block text-sm font-medium  text-gray-900 first-letter:">En este puesto se desempeño como:</label>
              <Select name='Puesto_desempeñado' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`Puesto_desempeñado`, selectedOption.value)} options={puestos} />
              <ErrorMessage name="Puesto_desempeñado" component="div" className="text-red-500" />
            </div>
            {values.Puesto_desempeñado === 'Catedrático CONACYT' ? (
              <>
                <div>
                <WrapperInput mensaje={"Institución/Empresa"} type={"text"} name={"Institucion"} dato={"CONSEJO NACIONAL DE CIENCIA Y TECNOLOGIA (CONACYT)"} onchange={(e) => {setFieldValue('Institucion', "CONSEJO NACIONAL DE CIENCIA Y TECNOLOGIA (CONACYT)"); setFieldTouched('Institucion', true);}}/>
                <ErrorMessage name="Institucion" component="div" className="text-red-500" />
                </div>
                <Title level={"h4"} text={"Estatus Catedras:"} />
                <p>El catedrático es encontrado sin Institución</p>
                <WrapperInput mensaje={"Institución de la comisión del catedrático:"} type={"text"} name={"Institucion_catedra"} onchange={handleChange}/>
              </>
            ) : (
              <>
                <div>
                  <WrapperInput mensaje={"Institución/Empresa"} type={"text"} name={"Institucion"} onchange={handleChange}/>
                  <ErrorMessage name="Institucion" component="div" className="text-red-500" />
                </div>
                
              </>
            )}
            <Title level={"h4"} text={"Periodo"} />
            <div className='mt-1 flex flex-col gap-2'>
              <label className="block text-sm font-medium  text-gray-900 first-letter:">¿Es su empleo actual?</label>
              <Select name='Empleo_actual' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`Empleo_actual`, selectedOption.value)} options={decisions} />
              <ErrorMessage name="Empleo_actual" component="div" className="text-red-500" />
            </div>
            {values.Empleo_actual === false ? (
              <div id="fechas" className="grid grid-cols-2 gap-5">
                <div>
                <WrapperInput mensaje={"Inicio"} type={"date"} name={"Fecha_inicio"} onchange={handleChange}/>
                <ErrorMessage name="Fecha_inicio" component="div" className="text-red-500" />
                </div>
                <div>
                <WrapperInput mensaje={"Fin"} type={"date"} name={"Fecha_fin"} onchange={handleChange}/>
                <ErrorMessage name="Fecha_fin" component="div" className="text-red-500" />
                </div>
              </div>
            ) : (
              <div id="fechas" className="grid grid-cols-2 gap-5">
                <div>
                  <WrapperInput mensaje={"Inicio"} type={"date"} name={"Fecha_inicio"} onchange={handleChange}/>
                  <ErrorMessage name="Fecha_inicio" component="div" className="text-red-500" />
                </div>
              </div>
            )}
            <div>
              <WrapperInput mensaje={"Nombre del puesto/Nombramiento"} type={"text"} name={"Nombramiento"} onchange={handleChange}/>
              <ErrorMessage name="Nombramiento" component="div" className="text-red-500" />
            </div>
            <div>
              <WrapperInput mensaje={"Logros"} type={"text"} name={"Logros"} onchange={handleChange}/>
              <ErrorMessage name="Logros" component="div" className="text-red-500" />
            </div>
            <Title level={"h4"} text={"Área del conocimiento del puesto"} />
            <div id="ultimos" className="grid grid-cols-3 gap-5">
            <div className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Área:</label>
                <Select name='Areas' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`Areas`, selectedOption.value)} options={areas} />
                <ErrorMessage name="Areas" component="div" className="text-red-500" />
            </div>
            <div>
            <WrapperInput mensaje={"Campos"} type={"text"} name={"Campo"} onchange={handleChange}/>
            <ErrorMessage name="Campo" component="div" className="text-red-500" />
            </div>
            <div>
            <WrapperInput mensaje={"Disciplina"} type={"text"} name={"Disciplina"} onchange={handleChange}/>
            <ErrorMessage name="Disciplina" component="div" className="text-red-500" />
            </div>
            <div>
            <WrapperInput mensaje={"Subdisciplina"} type={"text"} name={"Subdisciplina"} onchange={handleChange}/>
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

export default FormExperienciaLaboral
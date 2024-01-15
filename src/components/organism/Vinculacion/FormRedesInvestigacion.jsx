import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik';
import WrapperInput from '../../molecules/wrapperInput';
import Title from '../../atoms/Title';
import Swal from "sweetalert2";
import Select from "react-select";
import { createRedesInvestigacion } from '../../../api/Vinculacion/Routes';
import * as Yup from 'yup';

function FormRedesInvestigacion() {

  const areas = [
    { value: "Biología y química", label: "Biología y química" },
    { value: "Ciencias Sociales", label: "Ciencias Sociales" },
    {
      value: "Ciencias agropecuarias y biotecnología",
      label: "Ciencias agropecuarias y biotecnología",
    },
    {
      value: "Ciencias físico matemáticas y ciencias de la tierra",
      label: "Ciencias físico matemáticas y ciencias de la tierra",
    },
    {
      value: "Humanidades y ciencias de la conducta",
      label: "Humanidades y ciencias de la conducta",
    },
    { value: "Ingeniería y tecnología", label: "Ingeniería y tecnología" },
    {
      value: "Medicina y ciencias de la salud",
      label: "Medicina y ciencias de la salud",
    },
  ];

  const validationSchema = Yup.object().shape({
    nombre_red: Yup.string().required('Campo obligatorio'),
    nombre_responsable: Yup.string().required('Campo obligatorio'),
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
    primer_apellido_responsable: Yup.string().required('Campo obligatorio'),
    segundo_apellido_responsable: Yup.string().required('Campo obligatorio'),
    institucion_adscripcion: Yup.string().required('Campo obligatorio'),
    total_integrantes: Yup.string().required('Campo obligatorio'),
    area: Yup.string().required('Campo obligatorio'),
    campo: Yup.string().required('Campo obligatorio'),
    disciplina: Yup.string().required('Campo obligatorio'),
    subdisciplina: Yup.string().required('Campo obligatorio'),
  });

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          nombre_red: "",
          fecha_creacion: "",
          fecha_ingreso: "",
          nombre_responsable: "",
          primer_apellido_responsable: "",
          segundo_apellido_responsable: "",
          institucion_adscripcion: "",
          total_integrantes: "",
          area: "",
          campo: "",
          disciplina: "",
          subdisciplina: "",
        }}
        onSubmit={async (values, actions) => {
          try {
            const response = await createRedesInvestigacion(values);
            if(response.status === 200){
              Swal.fire({
                icon: "success",
                title: "Guardado con éxito",
                showConfirmButton: true,
                timer: 1500,
              });
            }else{
              Swal.fire({
                icon: "error",
                title: "Error...",
                text: "Intente de nuevo",
                footer: 'Si el problema persiste intentelo mas tarde'
              });
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
          handleBlur,
          isSubmitting,
          setFieldValue,
        }) => (
          <Form
            onSubmit={handleSubmit}
            className="space-y-2 mt-[10px] py-8 pl-8 pr-8"
          >
            <div className='flex flex-col gap-5'>
              <Title level="h1" text="Redes de investigación" />
              <div className='grid grid-cols-3 gap-5'>
                <div>
                <WrapperInput onchange={handleChange} name="nombre_red" mensaje="Nombre red:" type="text" />
                <ErrorMessage name="nombre_red" className='text-red-500' component="div" />
                </div>
                <div>
                <WrapperInput onchange={handleChange} name="fecha_creacion" mensaje="Fecha de creación:" type="date" />
                <ErrorMessage name="fecha_creacion" className='text-red-500' component="div" />
                </div>
                <div>
                <WrapperInput onchange={handleChange} name="fecha_ingreso" mensaje="Fecha de ingreso:" type="date" />
                <ErrorMessage name="fecha_ingreso" className='text-red-500' component="div" />
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <Title level="h4" text="Nombre del responsable de la red" />
                <div className='grid grid-cols-3 gap-5'>
                  <div>
                  <WrapperInput onchange={handleChange} name="nombre_responsable" mensaje="Nombre:" type="text" />
                  <ErrorMessage name="nombre_responsable" className='text-red-500' component="div" />
                  </div>
                  <div>
                  <WrapperInput onchange={handleChange} name="primer_apellido_responsable" mensaje="Primer apellido:" type="text" />
                  <ErrorMessage name="primer_apellido_responsable" className='text-red-500' component="div" />
                  </div>
                  <div>
                  <WrapperInput onchange={handleChange} name="segundo_apellido_responsable" mensaje="Segundo apellido:" type="text" />
                  <ErrorMessage name="segundo_apellido_responsable" className='text-red-500' component="div" />
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-5'>
                <div>
                <WrapperInput onchange={handleChange} name="institucion_adscripcion" mensaje="Institución de adscripción del responsable de la red:" type="text" />
                <ErrorMessage name="institucion_adscripcion" className='text-red-500' component="div" />
                </div>
                <div>
                <WrapperInput onchange={handleChange} name="total_integrantes" mensaje="Total de integrantes:" type="number" />
                <ErrorMessage name="total_integrantes" className='text-red-500' component="div" />
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <Title level="h4" text="Área de conocimiento" />
                <div className="grid grid-cols-3 gap-5">
                    <div className="mt-2">
                      <label className="block text-sm font-medium leading-6 text-gray-900"> Área</label>
                      <Select name="area" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`area`, selectedOption.value) } options={areas}/>
                      <ErrorMessage name="area" className='text-red-500' component="div" />
                    </div>
                    <div>
                    <WrapperInput onchange={handleChange} name="campo" mensaje="Campo" type="text" />
                    <ErrorMessage name="campo" className='text-red-500' component="div" />
                    </div>
                    <div>
                    <WrapperInput onchange={handleChange} name="disciplina" mensaje="Disciplina" type="text" />
                    <ErrorMessage name="disciplina" className='text-red-500' component="div" />
                    </div>
                    <div>
                    <WrapperInput onchange={handleChange} name="subdisciplina" mensaje="Subdisciplina" type="text" />
                    <ErrorMessage name="subdisciplina" className='text-red-500' component="div" />
                    </div>
                  </div>
              </div>

              <div>
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
    </>
  )
}

export default FormRedesInvestigacion
import React from 'react'
import { Formik, Form } from 'formik'
import Title from '../../atoms/Title'
import WrapperInput from '../../molecules/wrapperInput'
import Select from 'react-select'
import Swal from 'sweetalert2'

function FormEvaluacionNoConacyt() {
  const areas = [
    {value: "Biología y química", label:"Biología y química"},
    {value:"Ciencias Sociales", label:"Ciencias Sociales"},
    {value:"Ciencias agropecuarias y Biotecnología", label:"Ciencias agropecuarias y Biotecnología"},
    {value:"Ciencias físico matemático y ciencias de la tierra", label:"Ciencias físico matemático y ciencias de la tierra"},
    {value:"Humanidades y ciencias de la conducta", label:"Humanidades y ciencias de la conducta"},
    {value:"Ingeniería y tecnología", label:"Ingeniería y tecnología"},
    {value:"Mediciona y ciencias de la salud", label:"Mediciona y ciencias de la salud"},
  ]

  const types = [
    {value:"Complementaria", label:"Complementaria"},
    {value:"Consistencia y resultados", label:"Consistencia y resultados"},
    {value:"Diseño", label:"Diseño"},
    {value:"Específica de desempeño", label:"Específica de desempeño"},
    {value:"Estratégica", label:"Estratégica"},
    {value:"Impacto", label:"Impacto"},
    {value:"Indicadores", label:"Indicadores"},
    {value:"Procesos", label:"Procesos"},
    {value:"Otras", label:"Otras"},
    {value:"Participación en comités tutoriales", label:"Participación en comités tutoriales"},
    {value:"Clínica", label:"Clínica"},
    {value:"Arbitraje de producción académica", label:"Arbitraje de producción académica"},
    {value:"Administrativa", label:"Administrativa"},
    {value:"Técnica", label:"Técnica"},
    {value:"Académica", label:"Académica"},
    {value:"Inspección", label:"Inspección"},
    {value:"Psicológica", label:"Psicológica"},
    {value:"Participación como jurado examinador", label:"Participación como jurado examinador"},
  ]
  return (
    <Formik
      initialValues={{
        institucion:"",
        fechaInicio:"",
        fechaFin:"",
        cargo:"",
        tipoEvaluacion:"",
        productoEvaluado:"",
        nombreProducto:"",
        descripcion:"",
        areaConocimiento:"",
        campo:"",
        disciplina:"",
        subdisciplina:"",
      }}
      onSubmit={async (values, actions) => {
        try {
          //Descomentar lo siguiente cuando este lo del axios y funcione el back

          /* const response = await loginUser(values);
  
                  if(response.status === 200){
  
  
                  }else{
                      Swal.fire({
                          icon: "error",
                          title: "Error...",
                          text: "Intente de nuevo",
                          footer: 'Si el problema persiste intentelo mas tarde'
                        });
                        console.log(error);
                  } */
          Swal.fire({
            icon: "success",
            title: "Bienvenido",
            showConfirmButton: false,
            timer: 1500,
          });
          console.table(values);
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
              </div>
                <WrapperInput mensaje={"Fecha de inicio: "} type={"date"} name={"fechaInicio"} onchange={handleChange} />
                <WrapperInput mensaje={"Fecha de fin: "} type={"date"} name={"fechaFin"} onchange={handleChange} />
                <WrapperInput mensaje={"Cargo desempeñado: "} type={"text"} name={"cargo"} onchange={handleChange} />
                <section className='mt-1 flex flex-col gap-2'>
                  <label className="block text-sm font-medium  text-gray-900 first-letter:">Tipo de evaluación:</label>
                  <Select name='tipoEvaluacion' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`tipoEvaluacion`, selectedOption.value)} options={types} />
                </section>
                <WrapperInput mensaje={"Producto evaluado: "} type={"text"} name={"productoEvaluado"} onchange={handleChange} />
                <WrapperInput mensaje={"Nombre del producto evaluado: "} type={"text"} name={"nombreProducto"} onchange={handleChange} />
            </div>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Descripción de la actividad:</label>
                <textarea name="descripcion" placeholder='Descripción' cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
              </section>
              <Title level={"h4"} text={"Área de conocimiento"}/>
            <div className='grid grid-cols-3 gap-5'>
              <section className='mt-1 flex flex-col gap-2'>
                  <label className="block text-sm font-medium  text-gray-900 first-letter:">Área:</label>
                  <Select name='areaConocimiento' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`areaConocimiento`, selectedOption.value)} options={areas} />
              </section>
              <WrapperInput
              mensaje={"Campo: "}
              type={"text"}
              name={"campo"}
              onchange={handleChange}
            />
            <WrapperInput
              mensaje={"Disciplina: "}
              type={"text"}
              name={"disciplina"}
              onchange={handleChange}
            />
            <WrapperInput
              mensaje={"Subdisciplina: "}
              type={"text"}
              name={"subdisciplina"}
              onchange={handleChange}
            />
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
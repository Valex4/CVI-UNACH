import React from 'react'
import { Formik, Form } from 'formik'
import Swal from 'sweetalert2'
import Title from '../atoms/Title'
import WrapperInput from '../molecules/wrapperInput'
import Select from 'react-select'



function FormInnovacion() {

  const innovacionOslo = [
    {value: "Innovacion de Mercadotecnia", label:"Innovacion de Mercadotecnia"},
    {value: "Innovacion de organización", label:"Innovacion de organización"},
    {value: "Innovacion de proceso", label:"Innovacion de proceso"},
    {value: "Innovacion de producto", label:"Innovacion de producto"},
  ]

  const tipoInnovacion =[ 
    {value: "Disruptiva", label:"Disruptiva"},
    {value: "Incremental", label:"Incremental"}
  ]

  const mecanismos = [
    {value:"Derecho de autor", label:"Derecho de autor"},
    {value:"Diseño industrial", label:"Diseño industrial"},
    {value:"Modelo de utilidad", label:"Modelo de utilidad"},
    {value:"Patente", label:"Patente"},
    {value:"Secreteria industrial", label:"Secreteria industrial"},
    {value:"Ninguno", label:"Ninguno"},
  ]

  const coberturas = [
    {value:"Internacional", label:"Internacional"},
    {value:"Local", label:"Local"},
    {value:"Nacional", label:"Nacional"},
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
    {value:"si", label:"Si"},
    {value:"no", label:"No"},
] 

  return (
    <Formik
    initialValues={{
      nombreInnovacion:"",
      fechaFin:"",
      descripcion:"",
      innovacionOslo:"",
      innovacion:"",
      mecanismo:"",
      cobertura:"",
      apoyoConacyt:"",
      fondo:"",
      sectorSCIAN:"",
      subsectorSCIAN:"",
      ramaSCIAN:"",
      subramaSCIAN:"",
      clase:"",
      sectorOCDE:"",
      subsectorOCDE:"",
      ramaOCDE:"",
      subramaOCDE:"",
      claseOCDE:"",
      areaConocimiento:"",
      campo:"",
      disciplina:"",
      subdisciplina:"",
      monto:"",
      volumenProduccion:"",
      directos:"",
      indirectos:"",
      beneficiario:"",
      GeneracionConocimientoTeorico:"",
      innovacionImplementada:"",
      problemaResuelve:"",
      analisisPertinencia:"",
      lineaInvestigacion:"",
      generacionValor:"",
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
      setFieldValue,
    }) => (
      <Form
        onSubmit={handleSubmit}
        className="space-y-2 mt-[10px] py-8 pl-8 pr-8"
      >
        <div id="padre" className="flex flex-col gap-8">
          <Title level={"h1"} text={"Innovación"} />
              <div className='grid grid-cols-2 gap-5'>
                  <WrapperInput
                  mensaje={"Nombre innovación:"}
                  type={"text"}
                  name={"nombreInnovacion"}
                  onchange={handleChange}
                />
                <WrapperInput
                  mensaje={"Fecha fin:"}
                  type={"date"}
                  name={"fechaFin"}
                  onchange={handleChange}
                />
              </div>
            <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Descripción de la innovación:</label>
                <textarea name="descripcion" cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
            </section>
            <div className="grid grid-cols-3 gap-5">
            <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Tipo de innovación OSLO:</label>
                <Select name='innovacionOslo' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`innovacionOslo`, selectedOption.value)} options={innovacionOslo} />
            </section>
            <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Tipo de innovación:</label>
                <Select name='innovacion' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`innovacion`, selectedOption.value)} options={tipoInnovacion} />
            </section>
            <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Mecanismo de protección de propiedad intelectual:</label>
                <Select name='mecanismo' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`mecanismo`, selectedOption.value)} options={mecanismos} />
            </section>
            <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Potencial de cobertura:</label>
                <Select name='cobertura' style="display: none;" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`cobertura`, selectedOption.value)} options={coberturas} />
            </section>
            
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-900">¿Recibicio apoyo del CONACYT?:</label>
                  <Select name='apoyoConacyt' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`apoyoConacyt`, selectedOption.value)} options={decisions} /> 
                </div>
                  {values.apoyoConacyt === 'si' && (
                      <WrapperInput mensaje={"Fondo/programa: "} type={"text"} name={"fondo"} onchange={handleChange}/>
                  )}
          </div>
          <Title level={"h4"} text={"Sector Industrial SCIAN"}/>
          <div className='grid grid-cols-3 gap-5'>
          <WrapperInput
            mensaje={"Sector: "}
            type={"text"}
            name={"sectorSCIAN"}
            onchange={handleChange}
          />
          <WrapperInput
            mensaje={"Subsector: "}
            type={"text"}
            name={"subsectorSCIAN"}
            onchange={handleChange}
          />
          <WrapperInput
            mensaje={"Rama: "}
            type={"text"}
            name={"ramaSCIAN"}
            onchange={handleChange}
          />
          <WrapperInput
            mensaje={"Subrama: "}
            type={"text"}
            name={"subramaSCIAN"}
            onchange={handleChange}
          />
          <WrapperInput
            mensaje={"Clase: "}
            type={"text"}
            name={"clase"}
            onchange={handleChange}
          />
          </div>
          <Title level={"h4"} text={"Sector Industrial OCDE"}/>
          <div className='grid grid-cols-3 gap-5'>
          <WrapperInput
            mensaje={"Sector: "}
            type={"text"}
            name={"sectorOCDE"}
            onchange={handleChange}
          />
          <WrapperInput
            mensaje={"Subsector: "}
            type={"text"}
            name={"subsectorOCDE"}
            onchange={handleChange}
          />
          <WrapperInput
            mensaje={"Rama: "}
            type={"text"}
            name={"ramaOCDE"}
            onchange={handleChange}
          />
          <WrapperInput
            mensaje={"Subrama: "}
            type={"text"}
            name={"subramaOCDE"}
            onchange={handleChange}
          />
          <WrapperInput
            mensaje={"Clase: "}
            type={"text"}
            name={"claseOCDE"}
            onchange={handleChange}
          />
          </div>
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
          <Title level={"h4"} text={"Cantidades anuales"}/>
          <div className='grid grid-cols-3 gap-5'>
          <WrapperInput
            mensaje={"Monto de ventas: "}
            type={"number"}
            name={"monto"}
            onchange={handleChange}
          />
           <WrapperInput
            mensaje={"Volumen de producción: "}
            type={"number"}
            name={"volumenProduccion"}
            onchange={handleChange}
          />
          <WrapperInput
            mensaje={"No. de empleos directos: "}
            type={"number"}
            name={"directos"}
            onchange={handleChange}
          />
           <WrapperInput
            mensaje={"No. de empleos indirectos: "}
            type={"number"}
            name={"indirectos"}
            onchange={handleChange}
          />
          </div>
          <WrapperInput
            mensaje={"Identificación de usuario al que beneficie o beneficiará: "}
            type={"text"}
            name={"beneficiario"}
            onchange={handleChange}
          />
          <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Generación y aplicación del conocimiento teórico-práctico original:</label>
                <textarea name="GeneracionConocimientoTeorico" cols="10" onChange={handleChange} rows="3" className='textareaStyle'></textarea>
          </section>
          <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Identificación de innovación implementada:</label>
                <textarea name="innovacionImplementada" cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
          </section>
          <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Problema que resuelve:</label>
                <textarea name="problemaResuelve" cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
          </section>
          <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Análisis de pertinencia (contexto económico de región, disponibilidad y acceso a la tecnología, infraestructura de la institución o empresa):</label>
                <textarea name="analisisPertinencia" cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
          </section>
          <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Línea de invetigación:</label>
                <textarea name="lineaInvestigacion" cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
          </section>
          <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Generación de valor y/o impacto para el beneficiario:</label>
                <textarea name="generacionValor" cols="10" rows="3" onChange={handleChange} className='textareaStyle'></textarea>
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

export default FormInnovacion
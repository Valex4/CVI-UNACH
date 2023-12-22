import React from 'react'
import { Formik, Form } from 'formik'
import Swal from 'sweetalert2'
import Title from '../../../atoms/Title'
import WrapperInput from '../../../molecules/wrapperInput'
import Select from 'react-select'

function FormPatentes() {
  const types = [
    {value:"Circuitos integrados", label:"Circuitos integrados"},
    {value:"Diseño industrial", label:"Diseño industrial"},
    {value:"Patente como invención", label:"Patente como invención"},
    {value:"Patentes y modelos de utilidad", label:"Patentes y modelos de utilidad"},
    {value:"Tratado de cooperación en materia de patentes PCT", label:"Tratado de cooperación en materia de patentes PCT"},
  ]
  const estados = [
    {value:"Dictamen de conclusión - conseción", label:"Dictamen de conclusión - conseción"},
    {value:"Dictamen de conclusión", label:"Dictamen de conclusión - negativa"},
    {value:"En proceso", label:"En proceso"},
  ]
  const clasificaciones = [
    {value:"Construcciones fijas", label:"Construcciones fijas"},
    {value:"Electricidad", label:"Electricidad"},
    {value:"Física", label:"Física"},
    {value:"Mécanica; iluminación; calefacción; armamento; voladura", label:"Mécanica; iluminación; calefacción; armamento; voladura"},
    {value:"Necesidades corrientes de la vida", label:"Necesidades corrientes de la vida"},
    {value:"Química; metalurgía", label:"Química; metalurgía"},
    {value:"Técnicas industriales diversas; transporte", label:"Técnicas industriales diversas; transporte"},
    {value:"Textiles; papel", label:"Textiles; papel"},
  ]
  const decisions = [
    {value:"Si", label:"Si"},
    {value:"No", label:"No"},
  ]
  const registros = [
    {value:"PCT", label:"PCT"},
    {value:"EPO", label:"EPO"},
    {value:"Ninguno", label:"Ninguno"},
  ]
  
  return (
    <Formik
      initialValues={{
        nombre:"",
        tipoPatente:"",
        estadoPatente:"",
        numeroTramite:"",
        fechaSolicitud:"",
        fechaRegistro:"",
        numeroRegistro:"",
        expediente:"",
        clasificacionPatentes:"",
        resumen:"",
        explotacionIndustrial:"",
        explotador:"",
        yearPublicacion:"",
        pais:"",
        identificacionUsuario:"",
        GeneracionConocimientoTeorico:"",
        innovacionImplementada:"",
        problemaResuelve:"",
        analisisPertinencia:"",
        lineaInvestigacion:"",
        numeroSolicitud:"",
        registroInternacional:"",
       
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
            <Title level={"h1"} text={"Patentes"} />
            <WrapperInput
              mensaje={"Nombre o título: "}
              type={"text"}
              name={"nombre"}
              onchange={handleChange}
            />

            <div className="grid grid-cols-2 gap-5">
              <div className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Tipo de patente:</label>
                <Select name='tipoPatente' style="display: none"  placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`tipoPatente`, selectedOption.value)} options={types} />
              </div>
              <div className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Estado de la patente:</label>
                <Select name='estadoPatente' style="display: none"  placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`estadoPatente`, selectedOption.value)} options={estados} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
            <WrapperInput
              mensaje={"Número de tramite: "}
              type={"text"}
              name={"numeroTramite"}
              onchange={handleChange}
            />
            <WrapperInput
              mensaje={"Fecha de solicitud: "}
              type={"date"}
              name={"fechaSolicitud"}
              onchange={handleChange}
            />
            <WrapperInput
              mensaje={"Fecha de registro: "}
              type={"date"}
              name={"fechaRegistro"}
              onchange={handleChange}
            />
            <WrapperInput
              mensaje={"Número de registro: "}
              type={"text"}
              name={"numeroRegistro"}
              onchange={handleChange}
            />
            <WrapperInput
              mensaje={"Expediente: "}
              type={"text"}
              name={"expediente"}
              onchange={handleChange}
            />

            <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Clasificación internacional de patentes WIPO:</label>
                <Select name='clasificacionPatentes' style="display: none"  placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`clasificacionPatentes`, selectedOption.value)} options={clasificaciones} />
            </section>
            </div>

            <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Resumen:</label>
                <textarea name="resumen" cols="10" onChange={handleChange} rows="3" className='textareaStyle'></textarea>
            </section>
            <div className="grid grid-cols-3 gap-5">
            <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">¿Explotación industrial?:</label>
                <Select name='explotacionIndustrial' style="display: none"  placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`explotacionIndustrial`, selectedOption.value)} options={decisions} />
            </section>
            {values.explotacionIndustrial === "Si" && (
              <WrapperInput mensaje={"¿Quien lo explota?: "} type={"text"} name={"explotador"} onchange={handleChange}
            />
            )}
            <WrapperInput
              mensaje={"Año de publicación: "}
              type={"number"}
              name={"yearPublicacion"}
              onchange={handleChange}
            />
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <WrapperInput mensaje={"País: "} type={"text"} name={"pais"} onchange={handleChange}/>
              <WrapperInput mensaje={"Identificación de usuario al que beneficie o beneficiará: "} type={"text"} name={"identificacionUsuario"} onchange={handleChange}/>
            </div>
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
            <div className='grid grid-cols-2 gap-5'>
              <WrapperInput type={"text"} name={"numeroSolicitud"} mensaje={"Número de solicitud:"} onchange={handleChange}/>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Registro internacional:</label>
                <Select name='registroInternacional' style="display: none"  placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`registroInternacional`, selectedOption.value)} options={registros} />
              </section>
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

export default FormPatentes
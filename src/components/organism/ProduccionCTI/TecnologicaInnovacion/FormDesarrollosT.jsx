import React from "react";
import { Form, Formik } from "formik";
import WrapperInput from "../../../molecules/wrapperInput";
import Swal from "sweetalert2";
import Title from "../../../atoms/Title";
import Select from "react-select";
import Button from "../../../atoms/Button";

function FormDesarrollosT() {
  const recibioapoyo = [
    { value: "si", label: "Si" },
    { value: "no", label: "No" },
  ];

  const rolParticipacion = [
    { value: "colaborador", label: "Colaborador" },
    { value: "lider", label: "Líder" },
    { value: "tecnico", label: "Técnico" },
  ];

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


  const tiposDesarrollo = [
    {value: "Mejora de proceso", label: "Mejora de proceso"},
    {value: "Mejora de producto", label: "Mejora de producto"},
    {value: "Mejora de servicio", label: "Mejora de servicio"},
    {value: "Nuevo proceso", label: "Nuevo proceso"},
    {value: "Nuevo producto", label: "Nuevo producto"},
    {value: "Nuevo servicio", label: "Nuevo servicio"},
  ]

  const documentosRespaldo = [
    {value: "Derecho de Autor", label: "Derecho de Autor"},
    {value: "Dibujo industrial", label: "Dibujo industrial"},
    {value: "Diseño industrial", label: "Diseño industrial"},
    {value: "Modelo de utilidad", label: "Modelo de utilidad"},
    {value: "Patente", label: "Patente"},
    {value: "Derecho de obtentor", label: "Derecho de obtentor"},
    {value: "Secreto industrial", label: "Secreto industrial"},
    {value: "Reporte técnico", label: "Reporte Técnico"},
    {value: "Ninguno", label: "Ninguno"},
  ]
  return (
    <>
      <Formik
        initialValues={{
          nombreDelDesarrollo: "",
          tipoDeDesarrollo: "",
          documentoDeRespaldo: "",
          objetivosDelDesarrollo: "",
          resumenDelDesarrollo: "",
          rolDeParticipacion: "",
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
        // validate={(values) => {
        //   const errors = {};

        //
        //   if (!values.titulo) {
        //     errors.titulo = 'Este campo es obligatorio';
        //   }

        //   if (!values.tipoDesarrollo) {
        //     errors.tipoDesarrollo = 'Este campo es obligatorio';
        //   }

        //   return errors;
        // }}
        onSubmit={async (values, actions) => {
          try {
            // const isEmptyField = Object.values(values).some((value) => value === '');

            // if (isEmptyField) {
            //   Swal.fire({
            //     icon: 'error',
            //     title: 'Campos vacíos',
            //     text: 'Por favor, complete todos los campos antes de guardar.',
            //   });
            //   return;
            // }

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
          } catch (error) {}
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          setFieldValue,
          isSubmitting,
        }) => (
          <Form
            onSubmit={handleSubmit}
            className="space-y-2 pl-8 pr-8 mt-[10px] p-5"
          >
            <div className="flex flex-col gap-5">
              <Title level="h1" text="Desarrollos Tecnológicos" />
              <WrapperInput
                onchange={handleChange}
                name="nombreDelDesarrollo"
                mensaje="Nombre del desarrollo"
              />
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Tipo de desarrollo</label>
                    <Select
                      name="tipoDeDesarrollo"
                      className="z-40"
                      placeholder={"Seleccione una opción"}
                      onChange={(selectedOption, _) =>
                        setFieldValue(`tipoDeDesarrollo`, selectedOption.value)
                      }
                      options={tiposDesarrollo}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="">Documento de respaldo</label>
                    <Select
                      name="documentoDeRespaldo"
                      className="z-40"
                      placeholder={"Seleccione una opción"}
                      onChange={(selectedOption, _) =>
                        setFieldValue(`documentoDeRespaldo`, selectedOption.value)
                      }
                      options={documentosRespaldo}
                    />
                  </div>
              </div>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Objetivos del desarrollo:</label>
                <textarea name="objetivosDelDesarrollo" cols="10" onChange={handleChange} rows="3" className='textareaStyle'></textarea>
              </section>
              <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Resumen del desarrollo:</label>
                <textarea name="resumenDelDesarrollo" cols="10" onChange={handleChange} rows="3" className='textareaStyle'></textarea>
              </section>

              <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Rol de participación</label>
                  <Select
                    name="rolDeParticipacion"
                    className="z-40"
                    placeholder={"Seleccione una opción"}
                    onChange={(selectedOption, _) =>
                      setFieldValue(`rolDeParticipacion`, selectedOption.value)
                    }
                    options={rolParticipacion}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div >
                    <label className="block text-sm font-medium mb-3 text-gray-900">¿Recibicio apoyo del CONACYT?:</label>
                    <Select name='apoyoConacyt' placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`apoyoConacyt`, selectedOption.value)} options={decisions} /> 

                    
                  </div >
                  
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
              
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#18386B] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#30599b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isSubmitting ? "Guardando..." : "Guardar"}
              </button>
            </div>
          </Form>
        )}
      </Formik>


        
    </>
  );
}

export default FormDesarrollosT;

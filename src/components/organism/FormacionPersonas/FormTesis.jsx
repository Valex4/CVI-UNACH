import React from 'react'
import { Formik, Form } from 'formik'
import Title from '../../atoms/Title'
import Select from 'react-select'
import Swal from 'sweetalert2'
import WrapperInput from '../../molecules/wrapperInput'

function FormTesis() {

  const decisions = [
    {value:"Si", label:"Si"},
    {value:"No", label:"No"},
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

  const grados = [
    {value:"Licenciatura", label:"Licenciatura"},
    {value:"Especialidad", label:"Especialidad"},
    {value:"Maestría", label:"Maestría"},
    {value:"Doctorado", label:"Doctorado"},
  ]

  const roles = [
    {value:"Co-Director (a)", label:"Co-Director (a)"},
    {value:"Director (a) y/o Asesor (a) principal", label:"Director (a) y/o Asesor (a) principal"},
  ]
  const statuses = [
    {value:"En proceso", label:"En proceso"},
    {value:"Terminada", label:"Terminada"},
    {value:"Trunca", label:"Trunca"}
  ]
 
  return (
    <Formik
    initialValues={{
      programaPNPC:"",
      programas:"",
      institucion:"",
      titulo:"",
      estadoTesis:"",
      fechaAprobacion:"", 
      fechaObtencion:"",
      nombre:"",
      primerApellido:"",
      segundoApellido:"",
      grado:"",
      rol:"",
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
          <Title level={"h1"} text={"Tesis dirigida"} />
         
          <div className='grid grid-cols-2 gap-5'>
            <section className='mt-1 flex flex-col gap-2'>
              <label className="block text-sm font-medium  text-gray-900 first-letter:">¿Es un programa PNPC?:</label>
              <Select name='programaPNPC' style="display: none"  placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`programaPNPC`, selectedOption.value)} options={decisions} />
            </section>
            {values.programaPNPC === "Si" && (
              <WrapperInput mensaje={"Programas PNPC: "} type={"text"} name={"programas"} onchange={handleChange}/>
            )}

          </div>
          <WrapperInput
            mensaje={"Institución: "}
            type={"text"}
            name={"institucion"}
            onchange={handleChange}
          />
          <WrapperInput
            mensaje={"Título de la tesis: "}
            type={"text"}
            name={"titulo"}
            onchange={handleChange}
          />

          <div className='grid grid-cols-3 gap-5'>
            <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Estado de la tesis:</label>
                <Select name='estadoTesis' style="display: none"  placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`estadoTesis`, selectedOption.value)} options={statuses} />
            </section>
            {values.estadoTesis === "Terminada" && (
              <>
                <WrapperInput mensaje={"Fecha de aprobación de tésis"} type={"date"} name={"fechaAprobacion"} onchange={handleChange}/>
                <WrapperInput mensaje={"Fecha de obtención de grado"} type={"date"} name={"fechaObtencion"} onchange={handleChange}/>    
              </>
            )}
          </div>
          <Title level={"h4"} text={"Nombre del autor"}/>
          <div className='grid grid-cols-3 gap-5'>
            <WrapperInput mensaje={"Nombre: "} type={"text"} name={"nombre"} onchange={handleChange}/>
            <WrapperInput mensaje={"Primer apellido: "} type={"text"} name={"primerApellido"} onchange={handleChange}/>
            <WrapperInput mensaje={"Segundo apellido: "} type={"text"} name={"segundoApellido"} onchange={handleChange}/>
            <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Grado académico de la tesis:</label>
                <Select name='grado' style="display: none"  placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`grado`, selectedOption.value)} options={grados} />
            </section>
            <section className='mt-1 flex flex-col gap-2'>
                <label className="block text-sm font-medium  text-gray-900 first-letter:">Rol de participación:</label>
                <Select name='rol' style="display: none"  placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`rol`, selectedOption.value)} options={roles} />
            </section>
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

export default FormTesis
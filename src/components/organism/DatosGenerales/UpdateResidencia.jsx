import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import WrapperInput from "../../molecules/wrapperInput";
import Swal from "sweetalert2";
import Title from "../../atoms/Title";
import { useState, useEffect } from "react";
import { updateDomicilio, getDomicilio } from "../../../api/DatosGenerales/Routes";
import * as Yup from 'yup';


function UpdateResidencia() {
  const [Domicilio, setDomicilio] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await getDomicilio();
      setDomicilio(response.data[0]);
      console.log(response.data[0]);
    }
    getData()
  }, [])

  const Validaciones = Yup.object().shape({
    Pais: Yup.string().required('Campo obligatorio'),
    Codigo_postal: Yup.string()
      .matches(/^\d{5}$/, 'El código postal debe contener 5 números.')
      .required('Campo obligatorio.'),
    Nombre_asentamiento: Yup.string().required("Campo obligatorio"),
    Estado: Yup.string().required("Campo obligatorio"),
    Municipio_delegacion: Yup.string().required("Campo obligatorio"),
    Localidad: Yup.string().required("Campo obligatorio"),
    Asentamiento: Yup.string().required("Campo obligatorio"),
    Tipo_asentamiento: Yup.string().required("Campo obligatorio"),
    Carretera: Yup.string().required("Campo obligatorio"),
    Nombre_vialidad: Yup.string().required("Campo obligatorio"),
    Parte_numerica: Yup.string().notRequired()
      .matches(/^\d*$/, 'Este campo solo debe contener números.'),
    parte_numerica_interior: Yup.string().notRequired()
      .matches(/^\d*$/, 'Este campo solo debe contener números.'),
    Numero_exterior_anterior: Yup.string().notRequired()
      .matches(/^\d*$/, 'Este campo solo debe contener números.'),
    Tipo: Yup.string().required("Campo obligatorio"),
    Nombre: Yup.string().required("Campo obligatorio"),
    Descripcion_ubicacion: Yup.string().required("Campo obligatorio"),
  });

  return (
    <>
      <Formik
       validationSchema={Validaciones}
        enableReinitialize
        initialValues={{
          Pais: Domicilio.Pais || "",
          Codigo_postal: Domicilio.Codigo_postal,
          Nombre_asentamiento: Domicilio.Nombre_asentamiento,
          Estado: Domicilio.Estado,
          Municipio_delegacion: Domicilio.Municipio_delegacion,
          Localidad: Domicilio.Localidad,
          Asentamiento: Domicilio.Asentamiento,
          Tipo_asentamiento: Domicilio.Tipo_asentamiento,
          Carretera: Domicilio.Carretera,
          Nombre_vialidad: Domicilio.Nombre_vialidad,
          Sin_numero: Domicilio.Sin_numero,
          Parte_numerica: Domicilio.Parte_numerica,
          parte_numerica_interior: Domicilio.parte_numerica_interior,
          Numero_exterior_anterior: Domicilio.Numero_exterior_anterior,
          Parte_alfanumerica: Domicilio.Parte_alfanumerica,
          Parte_alfanumerica_interior: Domicilio.Parte_alfanumerica_interior,
          Tipo: Domicilio.Tipo,
          Nombre: Domicilio.Nombre,
          Descripcion_ubicacion: Domicilio.Descripcion_ubicacion
        }}
        onSubmit={async (values, actions) => {
          try {
            const response = await updateDomicilio(values, Domicilio.id);
            if (response.status === 200) {
              Swal.fire({
                icon: "success",
                title: "Actualizado con exíto",
                showConfirmButton: true,
                timer: 1500,
              });
              console.table(values);
            }
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Error...",
              text: "Intente de nuevo",
              footer: 'Si el problema persiste intentelo mas tarde'
            });
            console.log(error.data.errors);
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
          isValid
        }) => (
          <Form onSubmit={handleSubmit} className="space-y-2 mt-[10px] py-8 pl-8 pr-8" >
            <div className="flex flex-col gap-8">
              <div className="flex flex-row items-center justify-center">
                <Title level="h1" text="Domicilio De Residencia" />
              </div>
              <h4 className="font-bold text-sm">Domicilio nacional</h4>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <WrapperInput onchange={handleChange} name="Pais" type="text" dato={values.Pais} mensaje="Pais" />
                  <ErrorMessage name="Pais" component="div" className="text-red-500" />
                </div>
                <div>
                  <WrapperInput onchange={handleChange} name="Codigo_postal" dato={values.Codigo_postal} type="text" mensaje="Código Postal" />
                  <ErrorMessage name="Codigo_postal" component="div" className="text-red-500" />
                </div>
                <div>
                  <WrapperInput onchange={handleChange} name="Nombre_asentamiento" dato={values.Nombre_asentamiento} type="text" mensaje="Nombre del asentamiento" />
                  <ErrorMessage name="Nombre_asentamiento" component="div" className="text-red-500" />
                </div>
                <div>
                  <WrapperInput onchange={handleChange} name="Estado" type="text" dato={values.Estado} mensaje="Estado" />
                  <ErrorMessage name="Estado" component="div" className="text-red-500" />
                </div>
                <div>
                  <WrapperInput onchange={handleChange} name="Municipio_delegacion" dato={values.Municipio_delegacion} type="text" mensaje="Municipio o Delegación" />
                  <ErrorMessage name="Municipio_delegacion" component="div" className="text-red-500" />
                </div>
                <div>
                  <WrapperInput onchange={handleChange} name="Localidad" type="text" dato={values.Localidad} mensaje="Localidad" />
                  <ErrorMessage name="Localidad" component="div" className="text-red-500" />
                </div>
                <div>
                  <WrapperInput onchange={handleChange} name="Asentamiento" type="text" dato={values.Asentamiento} mensaje="Asentamiento" />
                  <ErrorMessage name="Asentamiento" component="div" className="text-red-500" />
                </div>
                <div>
                  <WrapperInput onchange={handleChange} name="Tipo_asentamiento" type="text" dato={values.Tipo_asentamiento} mensaje="Tipo asentamiento" />
                  <ErrorMessage name="Tipo_asentamiento" component="div" className="text-red-500" />
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <Title level="h4" text="Vialidad de domicilio" />
                <div className="grid grid-cols-3 gap-5">
                  <div>
                    <WrapperInput onchange={handleChange} name="Carretera" type="text" dato={values.Carretera} mensaje="Carretera" />
                    <ErrorMessage name="Carretera" component="div" className="text-red-500" />
                  </div>
                  <div>
                    <WrapperInput onchange={handleChange} name="Nombre_vialidad" type="text" dato={values.Nombre_vialidad} mensaje="Nombre de la vialidad" />
                    <ErrorMessage name="Nombre_vialidad" component="div" className="text-red-500" />
                  </div>
                </div>
                <Title level="h4" text="Identificación del inmueble" />
                <div className="flex flex-row items-center gap-2">
                  <input name="Sin_numero" onChange={handleChange} type="checkbox" value={values.sn} />
                  <label className="text-sm">Sin número exterior (SN)</label>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <Title level="h4" text="Número exterior" />
                <div className="grid grid-cols-3 gap-5">
                  {
                    values.Sin_numero === 0 && (
                      <>
                        <div>
                          <WrapperInput onchange={handleChange} name="Parte_numerica" type="text" dato={values.Parte_numerica} mensaje="Parte numérica" />
                          <ErrorMessage name="Parte_numerica" component="div" className="text-red-500" />
                        </div>
                        <div>
                          <WrapperInput onchange={handleChange} name="Numero_exterior_anterior" type="text" dato={values.Numero_exterior_anterior} mensaje="Número exterior anterior" />
                          <ErrorMessage name="Numero_exterior_anterior" component="div" className="text-red-500" />
                        </div>
                        <WrapperInput onchange={handleChange} name="Parte_alfanumerica" type="text" dato={values.Parte_alfanumerica} mensaje="Parte alfanumérica" />
                      </>
                    )
                  }
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <Title level="h4" text="Número interior" />
                <div className="grid grid-cols-3 gap-5">
                  <div>
                    <WrapperInput onchange={handleChange} name="parte_numerica_interior" type="text" dato={values.parte_numerica_interior} mensaje="Parte numérica" />
                    <ErrorMessage name="parte_numerica_interior" component="div" className="text-red-500" />
                  </div>
                  <WrapperInput onchange={handleChange} name="Parte_alfanumerica_interior" type="text" dato={values.Parte_alfanumerica_interior} mensaje="Parte alfanumérica" />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="font-bold text-sm">Entre que calles</h4>
                <div className="grid grid-cols-3 gap-5">
                  <div>
                    <WrapperInput onchange={handleChange} name="Tipo" type="text" dato={values.Tipo} mensaje="Tipo" />
                    <ErrorMessage name="Tipo" component="div" className="text-red-500" />
                  </div>
                  <div>
                    <WrapperInput onchange={handleChange} name="Nombre" type="text" dato={values.Nombre} mensaje="Nombre" />
                    <ErrorMessage name="Nombre" component="div" className="text-red-500" />
                  </div>
                </div>
                <div>
                  <WrapperInput onchange={handleChange} name="Descripcion_ubicacion" type="text" dato={values.Descripcion_ubicacion} mensaje="Descripción" />
                  <ErrorMessage name="Descripcion_ubicacion" component="div" className="text-red-500" />
                </div>
              </div>
              <div className="flex justify-end w-full gap-4">
                <button type="submit" className="flex w-full justify-center rounded-md bg-[#18386B] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#30599b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{isSubmitting ? "Guardando..." : "Guardar"}</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default UpdateResidencia
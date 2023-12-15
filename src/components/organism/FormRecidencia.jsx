import React from "react";
import { Formik, Form } from "formik";
import WrapperInput from "../molecules/wrapperInput";
import Swal from "sweetalert2";
import Button from "../atoms/Button";
import Title from "../atoms/Title";

export default function FormRecidencia() {
  return (
    <>
      <Formik
        initialValues={{
          pais: "",
          codigoPostal: "",
          nombreAsentamiento: "",
          estado: "",
          municipio: "",
          localidad: "",
          asentamiento: "",
          tipoAsentamiento: "",
          camino: "",
          carretera: "",
          nombreVialidad: "",
          sn: "", 
          parteNumerica: "",
          parteNumericaInterior: "",
          parteExterior: "",
          parteAlfanumerica: "",
          parteAlfanumericaInterior: "",
          tipo: "",
          nombre: "",  
          descripcion: ""
        }}
        onSubmit={async (values, actions) => {
          try {
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
        }) => (
          <Form
            onSubmit={handleSubmit}
            className="space-y-2 mt-[100px] py-8 pl-8 pr-8"
          >
            <div className="flex flex-col gap-8">
                <div className="flex flex-row items-center justify-center">
                    <Title level="h1" text="Domicilio De Residencia" />
                </div>
              <h4 className="font-bold text-sm">Domicilio nacional</h4>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <WrapperInput onchange={handleChange} name="pais" type="text" mensaje="Pais" />
                <WrapperInput onchange={handleChange} name="codigoPostal" type="text" mensaje="Código Postal" />
                <WrapperInput onchange={handleChange} name="nombreAsentamiento" type="text" mensaje="Nombre del asentamiento" />
                <WrapperInput onchange={handleChange} name="estado" type="text" mensaje="Estado" />
                <WrapperInput onchange={handleChange} name="municipio" type="text" mensaje="Municipio o Delegación" />
                <WrapperInput onchange={handleChange} name="localidad" type="text" mensaje="Localidad" />
                <WrapperInput onchange={handleChange} name="asentamiento" type="text" mensaje="Asentamiento" />
                <WrapperInput onchange={handleChange} name="tipoAsentamiento" type="text" mensaje="Tipo asentamiento" />
              </div>

              <div className="flex flex-col gap-5">
                <Title level="h4" text="Vialidad de domicilio" />
                <div className="flex flex-row items-center gap-2">
                  <input name="camino" onChange={handleChange} type="checkbox" />
                  <label className="text-sm">Camino</label>
                </div>

                <div className="grid grid-cols-3 gap-5">
                  <WrapperInput onchange={handleChange} name="carretera" type="text" mensaje="Carretera" />
                  <WrapperInput onchange={handleChange} name="nombreVialidad" type="text" mensaje="Nombre de la vialidad" />
                </div>

                <Title level="h4" text="Identificación del inmueble" />
                <div className="flex flex-row items-center gap-2">
                  <input name="sn" onChange={handleChange} type="checkbox" />
                  <label className="text-sm">Sin número exterior (SN)</label>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <Title level="h4" text="Número exterior" />
                <div className="grid grid-cols-3 gap-5">
                  <WrapperInput onchange={handleChange} name="parteNumerica" type="text" mensaje="Parte numérica" />
                  <WrapperInput onchange={handleChange} name="parteExterior"
                    type="text"
                    mensaje="Número exterior anterior"
                  />
                  <WrapperInput onchange={handleChange} name="parteAlfanumerica" type="text" mensaje="Parte alfanumérica" />
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <Title level="h4" text="Número interior" />
                <div className="grid grid-cols-3 gap-5">
                  <WrapperInput onchange={handleChange} name="parteNumericaInterior" type="text" mensaje="Parte numérica" />
                  <WrapperInput onchange={handleChange} name="parteAlfanumericaInterior" type="text" mensaje="Parte alfanumérica" />
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h4 className="font-bold text-sm">Entre que calles</h4>
                <div className="grid grid-cols-3 gap-5">
                  <WrapperInput onchange={handleChange} name="tipo" type="text" mensaje="Tipo" />
                  <WrapperInput onchange={handleChange} name="nombre" type="text" mensaje="Nombre" />
                </div>
                <WrapperInput onchange={handleChange} name="descripcion" type="text" mensaje="Descripción" />
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

import WrapperInput from "../molecules/wrapperInput";
import { Formik, Form, ErrorMessage, Field } from "formik";
import Swal from "sweetalert2";
import logo1 from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { creaeteUser } from "../../api/DatosGenerales/Routes";
import Select from "react-select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

function FormRegister() {
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);
    const navigate = useNavigate();
    const sexos = [
        { value: "MASCULINO", label: "MASCULINO" },
        { value: "FEMENINO", label: "FEMENINO" },
        { value: "SIN ESPECIFICAR", label: "SIN ESPECIFICAR" },
    ]

    const Estado = [
        { value: 'CASADO', label: 'CASADO' },
        { value: 'DIVORCIADO', label: 'DIVORCIADO' },
        { value: 'SEPARADO', label: 'SEPARADO' },
        { value: 'SOLTERO', label: 'SOLTERO' },
        { value: 'UNION LIBRE', label: 'UNION LIBRE' },
        { value: 'VIUDO', label: 'VIUDO' },
        { value: 'CONTRATOS DE CONVIVENCIA', label: 'CONTRATOS DE CONVIVENCIA' }
    ]

    const validationSchema = Yup.object({
        email: Yup.string().email('Ingresa una dirección de correo electrónico válida').required('El correo electrónico es obligatorio'),
        password: Yup.string().min(8,'La contraseña debe contener 8 caracteres').required('La contraseña es obligatoria'),
        informacion_general: Yup.object().shape({
            curp: Yup.string().min(16, 'La CURP debe tener al menos 16 caracteres').required('La CURP es obligatoria'),
            rfc: Yup.string().min(13, 'El RFC debe tener al menos 13 caracteres').required('El RFC es obligatorio'),
            nombre: Yup.string().required('El nombre es obligatorio'),
            primer_apellido: Yup.string().required('El primer apellido es obligatorio'),
            segundo_apellido: Yup.string().required('El segundo apellido es obligatorio'),
            fecha_de_nacimiento: Yup.date().required('La fecha de nacimiento es obligatoria'),
            pais: Yup.string().required('El país es obligatorio'),
            entidad: Yup.string().required('La entidad es obligatoria'),
            nacionalidad: Yup.string().required('La nacionalidad es obligatoria'),
          }),
    });


    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <img
                    className="mx-auto h-[147px] w-auto"
                    src={logo1}
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Registro al Currículum Vitae Institucional
                </h2>
            </div>

            <div>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        informacion_general: {
                            curp: "", 
                            rfc: "", 
                            nombre: "",  
                            primer_apellido: "",  
                            segundo_apellido: "", 
                            fecha_de_nacimiento: "", 
                            sexo: "", 
                            pais: "",
                            entidad: "", 
                            estado_conyugal: "",
                            nacionalidad: "" 
                        }
                    }}
                    onSubmit={async (values, actions) => {
                        console.table(values)
                        try {
                            const response = await creaeteUser(values);
                            if(response.status === 200) {
                              Swal.fire({
                                icon: "success",
                                title: "Registrado con exíto",
                                showConfirmButton: false,
                                timer: 1500,
                              });
                              console.table(values);
                              navigate("/")
                            }
                          } catch (error) {
                            Swal.fire({
                              icon: "error",
                              title: "Error...",
                              text: "Intente de nuevo",
                              footer: 'Si el problema persiste intentelo mas tarde'
                            });
                            console.log(error);
                          }
                    }}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleSubmit, handleChange, setFieldValue, isValid, isSubmitting }) => (
                        <Form onSubmit={handleSubmit} className="space-y-2">
                            <div className={`sm:mx-auto sm:w-full sm:max-w-sm ${showAdditionalFields ? "hidden" : ""} `}>
                                <div>
                                    <WrapperInput mensaje={"Correo electronico: "} type={"email"} name={"email"} onchange={handleChange} />
                                    <ErrorMessage name="email" className='text-red-500' component="div" />
                                </div>
                                <div>
                                    <WrapperInput mensaje={"Constraseña: "} type={"password"} name={"password"} onchange={handleChange} />
                                    <ErrorMessage name="password" className='text-red-500' component="div" />
                                </div>
                                <div className="mt-2">
                                    <button
                                        type="button"
                                        disabled={!(values.email && values.password)}
                                        onClick={() => setShowAdditionalFields(true)}
                                        className="flex w-full justify-center rounded-md bg-[#18386B] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#30599b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Siguiente
                                    </button>
                                </div>
                            </div>

                            {showAdditionalFields && (
                                <>
                                    <div className="grid grid-cols-3 gap-5  p-10">
                                        <div>
                                            <WrapperInput mensaje={"CURP: "} type={"text"} name={"informacion_general.curp"} onchange={handleChange} />
                                            <ErrorMessage name="informacion_general.curp" component="div" className="text-red-500" />
                                        </div>
                                        <div>
                                            <WrapperInput mensaje={"RFC: "} type={"text"} name={"informacion_general.rfc"} onchange={handleChange} />
                                            <ErrorMessage name="informacion_general.rfc" component="div" className="text-red-500" />
                                        </div>
                                        <div>
                                            <WrapperInput mensaje={"Fecha de nacimiento: "} type={"date"} name={"informacion_general.fecha_de_nacimiento"} onchange={handleChange} />
                                            <ErrorMessage name="informacion_general.fecha_de_nacimiento" component="div" className="text-red-500" />
                                        </div>
                                        <div>
                                            <WrapperInput mensaje={"Nombre: "} type={"text"} name={"informacion_general.nombre"} onchange={handleChange} />
                                            <ErrorMessage name="informacion_general.nombre" component="div" className="text-red-500" />
                                        </div>
                                        <div>
                                            <WrapperInput mensaje={"Primer apellido: "} type={"text"} name={"informacion_general.primer_apellido"} onchange={handleChange} />
                                            <ErrorMessage name="informacion_general.primer_apellido" component="div" className="text-red-500" />
                                        </div>
                                        <div>
                                            <WrapperInput mensaje={"Segundo apellido: "} type={"text"} name={"informacion_general.segundo_apellido"} onchange={handleChange} />
                                            <ErrorMessage name="informacion_general.segundo_apellido" component="div" className="text-red-500" />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="block text-sm font-medium leading-6 text-gray-900">Sexo</label>
                                            <Select  title="Hola" placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`informacion_general.sexo`, selectedOption.value)} options={sexos} />
                                        </div>
                                        <div>
                                            <WrapperInput mensaje={"País: "} type={"text"} name={"informacion_general.pais"} onchange={handleChange} />
                                            <ErrorMessage name="informacion_general.pais" component="div" className="text-red-500" />
                                        </div>
                                        <div>
                                            <WrapperInput mensaje={"Entidad: "} type={"text"} name={"informacion_general.entidad"} onchange={handleChange} />
                                            <ErrorMessage name="informacion_general.entidad" component="div" className="text-red-500" />
                                        </div>
                                        <div>
                                            <WrapperInput mensaje={"Nacionalidad: "} type={"text"} name={"informacion_general.nacionalidad"} onchange={handleChange} />
                                            <ErrorMessage name="informacion_general.nacionalidad" component="div" className="text-red-500" />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="block text-sm font-medium leading-6 text-gray-900">Estado conyugal</label>
                                            <Select placeholder={"Seleccione una opción"} onChange={(selectedOption, _) => setFieldValue(`informacion_general.estado_conyugal`, selectedOption.value)} options={Estado} />
                                        </div>
                                        <WrapperInput mensaje={"Correo electronio ingresado: "} type={"text"} dato={values.email} activo={true} />
                                    </div>
                                    <div className="p-10">
                                        <button
                                            type="submit"
                                            disabled={!isValid || isSubmitting} 
                                            className="flex w-full justify-center rounded-md bg-[#18386B] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#30599b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            {isSubmitting ? "Guardando..." : "Guardar"}
                                        </button>
                                    </div>
                                </>
                            )}

                        </Form>
                    )}
                </Formik>
                <p className="mt-10 text-center text-sm text-gray-500">
                    ¿Ya tienes una cuenta?{' '}
                    <Link to="/" className="font-semibold leading-6 text-[#18386B] hover:text-[#30599b]">Inicia Sesión</Link>
                </p>
            </div>
        </>
    );
}

export default FormRegister;
import WrapperInput from "../molecules/wrapperInput";
import { Formik, Form } from "formik";
import Swal from "sweetalert2";
import logo1 from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
function FormRegister() {
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
            
            <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
            <Formik
            initialValues={{
                email: "",
                password:"",
                confirmPassword: ""
            }}
            onSubmit={async(values, actions) =>{
                try{

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
                    console.log(values)

                }catch(error){

                }
            }} 
        
        >
            {({values, errors, touched, handleSubmit, handleChange, isSubmitting}) => (
                <Form onSubmit={handleSubmit} className="space-y-2">
                     <WrapperInput mensaje={"Correo electronico"} type={"email"} name={"email"} onchange={handleChange} />
                     <WrapperInput mensaje={"Constraseña"} type={"password"} name={"password"} onchange={handleChange} />
                     <WrapperInput mensaje={"Repite la contraseña"} type={"password"} name={"confirmPassword"} onchange={handleChange} />
                     <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-[#18386B] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#30599b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{isSubmitting ? "Iniciando..." : "Iniciar Sesion"}</button>
                     </div>
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
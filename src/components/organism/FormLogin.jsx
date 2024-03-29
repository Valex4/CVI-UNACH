import WrapperInput from "../molecules/wrapperInput";
import { Formik, Form } from "formik";
import Swal from "sweetalert2";
import logo from "../../assets/images/logo.png"
import { Link, Navigate } from "react-router-dom";
import { loginUser } from "../../api/DatosGenerales/Routes";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
function FormLogin() {
    const navigate = useNavigate()
    return ( 
        <>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <img
                    className="mx-auto h-[147px] w-auto"
                    src={logo}
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Currículum Vitae Institucional
                </h2>
            </div>
            
            <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
            <Formik
            initialValues={{
                email: "",
                password:""
            }}
            onSubmit={async(values, actions) =>{
                try{
                    const response = await loginUser(values);
                    if(response.status === 200){
                        Swal.fire({
                            icon: "success",
                            title: "Bienvenido",
                            showConfirmButton: false,
                            timer: 1500,
                          });

                        const token = response.data.token;
                        Cookies.set('token', token, { expires: 7, secure: true, sameSite: 'None' });
                        console.log(response.data.token)
                        navigate("/home")
                    }else{
                        Swal.fire({
                            icon: "error",
                            title: "Error...",
                            text: "Intente de nuevo",
                            footer: 'Si el problema persiste intentelo mas tarde'
                          });
                    } 
                }catch(error){
                    Swal.fire({
                        icon: "warning",
                        title: "Error...",
                        text: "Intente de nuevo",
                        footer: 'Usuario y contraseña incorrectos'
                      });
                }
            }} 
        
        >
            {({values, errors, touched, handleSubmit, handleChange, isSubmitting}) => (
                <Form onSubmit={handleSubmit} className="space-y-2">
                     <WrapperInput mensaje={"Correo electronico"} type={"email"} name={"email"} onchange={handleChange} />
                     <WrapperInput mensaje={"Constraseña"} type={"password"} name={"password"} onchange={handleChange} />
                     <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-[#18386B] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#30599b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{isSubmitting ? "Iniciando..." : "Iniciar Sesion"}</button>
                     </div>
                </Form>
            )}
        </Formik>

        <p className="mt-10 text-center text-sm text-gray-500">
            ¿No tienes una cuenta?{' '}
            <Link to="/register" className="font-semibold leading-6 text-[#18386B] hover:text-[#30599b]">Registrate</Link>
          </p>
        </div>
        </>
     );
}

export default FormLogin;
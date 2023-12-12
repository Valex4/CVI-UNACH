import WrapperInput from "../molecules/wrapperInput";
import { Formik, Form } from "formik";
import Swal from "sweetalert2";

function FormLogin() {
    return ( 
        <>
            <h1 className="text-3xl font-bold underline">Login UNACH CVI</h1>

            <Formik
            initialValues={{
                email: "",
                password:""
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
                <Form onSubmit={handleSubmit}>
                     <WrapperInput mensaje={"Correo electronico"} type={"email"} name={"email"} onchange={handleChange} />
                     <WrapperInput mensaje={"Constraseña"} type={"password"} name={"password"} onchange={handleChange} />
                     <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">{isSubmitting ? "Iniciando..." : "Iniciar Sesion"}</button>
                </Form>
            )}
        </Formik>

        </>
     );
}

export default FormLogin;
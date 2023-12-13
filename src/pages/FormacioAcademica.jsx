import Dash from "../components/templates/Dash";
import FormRegister from "../components/organism/FormRegister";
function FormacionAcademica() {
    return (
        <>
            <Dash/>
            <main className="ml-[256px] h-auto">
                <div className="mt-20">
                    {/* Aca van los formularios */}
                    <FormRegister/>
                    
                </div>
                   
            </main> 
        </>
      );
}

export default FormacionAcademica;
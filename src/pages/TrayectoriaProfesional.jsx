import Dash from "../components/templates/Dash";
import FormExperienciaL from "../components/organism/FormExperienciaL";

function TrayectoriaProfesional() {
    return (
        <>
            <Dash/>
            <main className="dashboard">
                <div className="mt-12 h-auto">
                    {/* Aca van los formularios */}
                    <FormExperienciaL/>
                </div>
                   
            </main> 
        </>
     );
}

export default TrayectoriaProfesional;
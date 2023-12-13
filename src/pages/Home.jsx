import Dash from "../components/templates/Dash";
import FormLogin from "../components/organism/FormLogin";
function Home() {
    return (
        <>
            <Dash/>
            <main className="ml-[256px] h-auto">
                <div className="mt-20">
                    {/* Aca van los formularios */}
                    <FormLogin/>
                    <FormLogin/>    
                    
                </div>
                   
            </main> 
           
        </>
      );
}

export default Home;
import Dash from "../components/templates/Dash";
import { NavLink } from "react-router-dom";
function TecnologicaInnovacion() {
    return (
        <>  
            <Dash/>
            <main className="ml-[256px] h-auto">
                <div className="mt-20">
                    {/* Aca van los formularios */}
                    <header>
                    <nav className="mt-30">
                        <ul className="flex flex-row gap-5 item-center justify-center top-">
                            <li className="relative">
                                <NavLink>Desarrollos Tecnológicos</NavLink>
                            </li>
                            <li className="relative">
                                <NavLink>Innovación</NavLink>
                                <a href=""></a>
                            </li>
                            <li className="relative">
                                <NavLink>Desarrollo de Software</NavLink>
                            </li>
                            
                        </ul>
                    </nav>
                    </header>
                    
                    <h1>TEcnologia</h1>
                    <h1>Innovacion</h1>
                    <h1>TEcnologia</h1>
                    <h1>Innovacion</h1>
                    
                </div>
                   
            </main> 
        </>
      );
}

export default TecnologicaInnovacion;
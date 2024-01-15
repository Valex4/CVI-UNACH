import React from 'react'
import Dash from '../components/templates/Dash'
import { useState, useEffect } from 'react'
import Title from '../components/atoms/Title'
import { getExperienciaLaboral, deleteExperienciaLaboral, getEstanciasInvestigacion, deleteEstanciaInvestigacion } from '../api/TrayectoriaProfesional/Routes'
import Swal from 'sweetalert2'
import FormEstanciasInvestigacion from "../components/organism/TrayectoriaProfesional/FormEstanciasInvestigacion"
import FormExperienciaLaboral from '../components/organism/TrayectoriaProfesional/FormExperienciaLaboral'

function TrayectoriaProfesional() {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    const [ExperienciasLaborales, setExperienciasLaborales] = useState([])
    const [Estancias, setEstancias] = useState([])
    const [Change, setChange] = useState(false)


    useEffect(() => {
        const getData = async () => {
            const responseExperiencia = await getExperienciaLaboral();
            const responseEstancias = await getEstanciasInvestigacion();
            setEstancias(responseEstancias.data);
            setExperienciasLaborales(responseExperiencia.data)
        }
        getData();
    }, [Change])


    const handleDeleteExperiencia = async (event) => {
        const button = event.target;
        const id = button.closest('tr').id;
        Swal.fire({
            title: "¿Desea eliminar el registro?",
            text: "No podrás revertir esta acción",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Eliminado",
                    text: "El registro se ha eliminado correctamente",
                    icon: "success"
                });
                const response = await deleteExperienciaLaboral(id);
                console.log(response);
                setChange((prev) => !prev);
            }
        });
    }

    const handleUpdateExperiencia = async (event) => {

    }


    const handleDeleteEstancia = async(event)=>{
        const button = event.target;
        const id = button.closest('tr').id;
        Swal.fire({
            title: "¿Desea eliminar el registro?",
            text: "No podrás revertir esta acción",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Eliminado",
                    text: "El registro se ha eliminado correctamente",
                    icon: "success"
                });
                const response = await deleteEstanciaInvestigacion(id);
                console.log(response);
                setChange((prev) => !prev);
            }
        });
    }

    const renderTableExperiencia = () => {
        return (
            <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                    <thead className=" w-full h-10 p-30">
                        <tr className=" rounded-lg">
                            <th className="p-3"><Title level="h3" text="Experiencia Laboral" /> </th>
                        </tr>
                    </thead>
                    <thead>
                        <tr className=" bg-[#667DA3] text-white">
                            <th className="py-2 px-4 border-b text-left">Puesto desempeño</th>
                            <th className="py-2 px-4 border-b text-left">Institución</th>
                            <th className="py-2 px-4 border-b text-left">Fecha inicio</th>
                            <th className="py-2 px-4 border-b text-left">Fecha fin</th>
                            <th className="py-2 px-4 border-b text-left">Empleo actual</th>
                            <th className="py-2 px-4 border-b text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ExperienciasLaborales.map((item) => (
                                <tr key={item.id} id={item.id}>
                                    <td className="py-2 px-4 border-b">{item.Puesto_desempeñado}</td>
                                    <td className="py-2 px-4 border-b">{item.Institucion}</td>
                                    <td className="py-2 px-4 border-b">{item.Fecha_inicio}</td>
                                    <td className="py-2 px-4 border-b">{item.Fecha_fin === null ? "-" : item.Fecha_fin}</td>
                                    <td className="py-2 px-4 border-b">{item.Empleo_actual === 1 ? "Si" : "No"}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button className="bg-[#758AAC] text-black w-auto h-auto rounded-full ">
                                            <span className="material-icons-sharp">
                                                edit
                                            </span>
                                        </button>
                                        <button onClick={handleDeleteExperiencia} className="bg-[#758AAC] text-black w-auto h-auto rounded-full ml-2 hover:bg-red-600 ">
                                            <span className="material-symbols-outlined">
                                                delete
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    const renderTableEstancias = () => {
        return (
            <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                    <thead className=" w-full h-10 p-30">
                        <tr className=" rounded-lg">
                            <th className="p-3"><Title level="h3" text="Estancias" /> </th>
                        </tr>
                    </thead>
                    <thead>
                        <tr className=" bg-[#667DA3] text-white">
                            <th className="py-2 px-4 border-b text-left">Nombre de la estancia</th>
                            <th className="py-2 px-4 border-b text-left">Tipo estancia</th>
                            <th className="py-2 px-4 border-b text-left">Institución</th>
                            <th className="py-2 px-4 border-b text-left">Fecha inicio</th>
                            <th className="py-2 px-4 border-b text-left">Fecha fin</th>
                            <th className="py-2 px-4 border-b text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Estancias.map((item) => (
                                <tr key={item.id} id={item.id}>
                                    <td className="py-2 px-4 border-b">{item.nombre_estancia}</td>
                                    <td className="py-2 px-4 border-b">{item.tipo_estancia}</td>
                                    <td className="py-2 px-4 border-b">{item.institucion}</td>
                                    <td className="py-2 px-4 border-b">{item.inicio}</td>
                                    <td className="py-2 px-4 border-b">{item.fin}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                                            <span className="material-icons-sharp">
                                                edit
                                            </span>
                                        </button>
                                        <button onClick={handleDeleteEstancia} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
                                            <span className="material-symbols-outlined">
                                                delete
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>   
                </table>
            </div>
        )
    }

    const renderFormulario = () => {
        switch (opcionSeleccionada) {
            case 'op1':
                return (
                    <>
                        <FormExperienciaLaboral />
                        {renderTableExperiencia()}
                    </>

                );
            case 'op2':
                return (
                    <>
                        <FormEstanciasInvestigacion />
                        {renderTableEstancias()}
                    </>
                );
            default:
                setOpcionSeleccionada('op1')
        }
    }
    return (
        <>
            <Dash />
            <main className='dashboard'>
                <div className='mt-12 h-auto'>
                    <div className="flex items-center justify-center flex-col mt-[80px] border-b border-[#828282]">
                        <header className='mb-5 mt-2'>
                            <nav className="mt-30">
                                <ul className="flex flex-row gap-5 item-center justify-center top-">
                                    <li className={`cursor-pointer ${opcionSeleccionada === 'op1' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op1')}>Experiencia laboral</li>
                                    <li className={`cursor-pointer ${opcionSeleccionada === 'op2' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op2')}>Estancias de investigación, profesionales y pos-doctorales</li>
                                </ul>
                            </nav>
                        </header>
                    </div>
                    {renderFormulario()}
                </div>
            </main>
        </>
    )
}

export default TrayectoriaProfesional
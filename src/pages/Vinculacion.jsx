import React from 'react'
import FormVinculacion from '../components/organism/Vinculacion/FormVinculacion'
import FormRedesInvestigacion from '../components/organism/Vinculacion/FormRedesInvestigacion'
import FormRedesTematicas from '../components/organism/Vinculacion/FormRedesTematicas'
import FormGruposInvestigacion from '../components/organism/Vinculacion/FormGruposInvestigacion'
import Dash from '../components/templates/Dash'
import Title from '../components/atoms/Title'
import { useState, useEffect } from 'react'
import { getGruposInvestigacion, deleteGrupoInvestigacion, getRedesInvestigacion, deleteRedesInvestigacion, getRedesTematicas, deleteRedesTematicas, getProyectosInvestigacion, deleteProyectosInvestigacion } from '../api/Vinculacion/Routes'
import Swal from 'sweetalert2'

function Vinculacion() {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    const [Grupos, setGrupos] = useState([]);
    const [RedesInvestigacion, setRedesInvestigacion] = useState([]);
    const [RedesTematicas, setRedesTematicas] = useState([]);
    const [ProyectosInvestigacion, setProyectosInvestigacion] = useState([])
    const [Change, setChange] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const gruposData = await getGruposInvestigacion();
            const responseRedesInvestigacion = await getRedesInvestigacion();
            const responseRedesTematicas = await getRedesTematicas();
            const responseProyectosInvestigacion = await getProyectosInvestigacion();
            setProyectosInvestigacion(responseProyectosInvestigacion.data);
            setRedesTematicas(responseRedesTematicas.data);
            setRedesInvestigacion(responseRedesInvestigacion.data);
            setGrupos(gruposData.data);
        }
        getData();
    }, [Change])

    const handleDeleteGrupo = async (event) => {
        const button = event.target;
        const tr = button.closest('tr');
        const trId = tr.id;
        console.log('ID del <tr>:', trId);

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
                const response = await deleteGrupoInvestigacion(trId);
                console.log(response);
                setChange((prev) => !prev);
            }
        });
    }

    const handleDeleteRedesInvestigacion = (event) => {
        const button = event.target
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
                const response = await deleteRedesInvestigacion(id);
                setChange((prev) => !prev);
            }
        });
    }

    const handleDeleteRedTematica = (event) => {
        const button = event.target
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
                const response = await deleteRedesTematicas(id);
                setChange((prev) => !prev);
            }
        });
    }

    const handleDeleteProyectosInvestigacion = (event) => {
        const button = event.target
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
                const response = await deleteProyectosInvestigacion(id);
                setChange((prev) => !prev);
            }
        });
    }

    const renderTable = () => {
        return (
            <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                    <thead className=" w-full h-10 ">
                        <tr className="rounded-lg">
                            <th className="p-2"><Title level="h3" text="Proyectos" /> </th>
                        </tr>
                    </thead>
                    <thead>
                        <tr className=" bg-[#667DA3] text-white">
                            <th className="py-2 px-4 border-b text-left">Nombre del proyecto</th>
                            <th className="py-2 px-4 border-b text-left">Tipo de proyecto</th>
                            <th className="py-2 px-4 border-b text-left">Fecha inicio</th>
                            <th className="py-2 px-4 border-b text-left">Fecha fin</th>
                            <th className="py-2 px-4 border-b text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ProyectosInvestigacion.map((item) => (
                                <tr key={item.id} id={item.id}>
                                    <td className="py-2 px-4 border-b">{item.nombre_proyecto}</td>
                                    <td className="py-2 px-4 border-b">{item.tipo_proyecto}</td>
                                    <td className="py-2 px-4 border-b">{item.inicio}</td>
                                    <td className="py-2 px-4 border-b">{item.fin}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                                            <span className="material-icons-sharp">
                                                edit
                                            </span>
                                        </button>
                                        <button onClick={handleDeleteProyectosInvestigacion} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
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

    const renderTableRedTematica = () => {
        return (
            <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                    <thead className=" w-full h-10 ">
                        <tr className="rounded-lg">
                            <th className="p-2"><Title level="h3" text="Redes temáticas" /> </th>
                        </tr>
                    </thead>
                    <thead>
                        <tr className=" bg-[#667DA3] text-white">
                            <th className="py-2 px-4 border-b text-left">Red temática</th>
                            <th className="py-2 px-4 border-b text-left">Fecha de ingreso</th>
                            <th className="py-2 px-4 border-b text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            RedesTematicas.map((item) => (
                                <tr key={item.id} id={item.id}>
                                    <td className="py-2 px-4 border-b">{item.red_tematica}</td>
                                    <td className="py-2 px-4 border-b">{item.fecha_ingreso}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                                            <span className="material-icons-sharp">
                                                edit
                                            </span>
                                        </button>
                                        <button onClick={handleDeleteRedTematica} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
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

    const renderTableInvestigacion = () => {
        return (
            <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                    <thead className=" w-full h-10 ">
                        <tr className="rounded-lg">
                            <th className="p-2"><Title level="h3" text="Redes de investigación" /> </th>
                        </tr>
                    </thead>
                    <thead>
                        <tr className=" bg-[#667DA3] text-white">
                            <th className="py-2 px-4 border-b text-left">Red</th>
                            <th className="py-2 px-4 border-b text-left">Fecha de ingreso</th>
                            <th className="py-2 px-4 border-b text-left">Fecha de creación</th>
                            <th className="py-2 px-4 border-b text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            RedesInvestigacion.map((item) => (
                                <tr key={item.id} id={item.id}>
                                    <td className="py-2 px-4 border-b">{item.nombre_red}</td>
                                    <td className="py-2 px-4 border-b">{item.fecha_ingreso}</td>
                                    <td className="py-2 px-4 border-b">{item.fecha_creacion}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                                            <span className="material-icons-sharp">
                                                edit
                                            </span>
                                        </button>
                                        <button onClick={handleDeleteRedesInvestigacion} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
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

    const renderTableGruposInvestigacion = () => {
        return (
            <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                    <thead className=" w-full h-10 ">
                        <tr className="rounded-lg">
                            <th className="p-2"><Title level="h3" text="Grupos de investigación" /> </th>
                        </tr>
                    </thead>
                    <thead>
                        <tr className=" bg-[#667DA3] text-white">
                            <th className="py-2 px-4 border-b text-left">Nombre del grupo</th>
                            <th className="py-2 px-4 border-b text-left">Creación</th>
                            <th className="py-2 px-4 border-b text-left">Ingreso</th>
                            <th className="py-2 px-4 border-b text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Grupos.map((item) => (
                            <tr key={item.id} id={item.id}>
                                <td className="py-2 px-4 border-b">{item.nombre_grupo}</td>
                                <td className="py-2 px-4 border-b">{item.fecha_creacion}</td>
                                <td className="py-2 px-4 border-b">{item.fecha_ingreso}</td>
                                <td className="py-2 px-4 border-b">
                                    <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                                        <span className="material-icons-sharp">
                                            edit
                                        </span>
                                    </button>
                                    <button onClick={handleDeleteGrupo} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
                                        <span className="material-symbols-outlined">
                                            delete
                                        </span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }


    const renderFormulario = () => {
        switch (opcionSeleccionada) {
            case 'op1':
                return (<>
                    <FormVinculacion />
                    {renderTable()}
                </>
                );
            case 'op2':
                return (
                    <>
                        <FormRedesTematicas />
                        {renderTableRedTematica()}
                    </>
                );
            case 'op3':
                return (
                    <>
                        <FormRedesInvestigacion />
                        {renderTableInvestigacion()}
                    </>
                );
            case 'op4':
                return (
                    <>
                        <FormGruposInvestigacion />
                        {renderTableGruposInvestigacion()}
                    </>
                )
            default:
                setOpcionSeleccionada('op1')
        }
    }

    return (
        <>
            <Dash />
            <main className="dashboard">
                <div className="mt-12 h-auto">
                    <div className="flex items-center justify-center flex-col mt-[80px] border-b border-[#828282]">
                        <header className='mb-5 mt-2'>
                            <nav className="mt-30">
                                <ul className="flex flex-row gap-5 item-center justify-center top-">
                                    <li className={`cursor-pointer ${opcionSeleccionada === 'op1' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op1')}>Proyectos de investigación</li>
                                    <li className={`cursor-pointer ${opcionSeleccionada === 'op2' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op2')}>Redes temáticas CONACYT</li>
                                    <li className={`cursor-pointer ${opcionSeleccionada === 'op3' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op3')}>Redes de investigación</li>
                                    <li className={`cursor-pointer ${opcionSeleccionada === 'op4' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op4')}>Grupos de investigación</li>
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

export default Vinculacion
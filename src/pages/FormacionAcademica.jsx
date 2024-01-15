import Dash from "../components/templates/Dash";
import { useState, useEffect } from "react";
import FormGradosAcademicos from "../components/organism/FormacionAcademica/FormGradosAcademicos"
import FormOtros from "../components/organism/FormacionAcademica/FormOtros"
import FormCertificacionesM from "../components/organism/FormacionAcademica/FormCertificacionesM"
import Title from "../components/atoms/Title";
import { getGrados, getOthers, deleteOther, deleteGrado, getCertificates, deleteCertificate } from "../api/FormacionAcademica/Routes";
import Swal from "sweetalert2";

function FormacionAcademica() {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    const [Grados, setGrados] = useState([])
    const [Others, setOthers] = useState([])
    const [Certificaciones, setCertificaciones] = useState([])
    const [Change, setChange] = useState(false)

    useEffect(() => {
        const getData = async () => {
            const response = await getGrados();
            const responseOthers = await getOthers();
            const responseCertificaciones = await getCertificates();
            setGrados(response.data);
            setOthers(responseOthers.data);
            setCertificaciones(responseCertificaciones.data);
        }
        getData()
    }, [Change])

    const handleDeleteOthers = async (event) => {
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
                const response = await deleteOther(id);
                setChange((prev) => !prev);
            }
        });
    }


    const handleDeleteGrado = async (event) => {
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
                const response = await deleteGrado(id);
                setChange((prev) => !prev);
            }
        });
    }

    const handleDeleteCertificacion = async (event) => {
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
                const response = await deleteCertificate(id);
                setChange((prev) => !prev);
            }
        });
    }

    const renderTableCertificacionesM = () => {
        return (
            <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                    <thead className=" w-full h-10 ">
                        <tr className="rounded-lg">
                            <th className="p-2"><Title level="h3" text="Certificaciones Médicas" /> </th>
                        </tr>
                    </thead>
                    <thead>
                        <tr className=" bg-[#667DA3] text-white">
                            <th className="py-2 px-4 border-b text-left">Consejo que otorga la certificación</th>
                            <th className="py-2 px-4 border-b text-left">Especialidad</th>
                            <th className="py-2 px-4 border-b text-left">Tipo de certificación</th>
                            <th className="py-2 px-4 border-b text-left">Vigencia de</th>
                            <th className="py-2 px-4 border-b text-left">Vigencia a</th>
                            <th className="py-2 px-4 border-b text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Certificaciones.map((item) => (
                                <tr key={item.id} id={item.id}>
                                    <td className="py-2 px-4 border-b">{item.consejo}</td>
                                    <td className="py-2 px-4 border-b">{item.especialidad}</td>
                                    <td className="py-2 px-4 border-b">{item.tipo_certificacion}</td>
                                    <td className="py-2 px-4 border-b">{item.vigencia_de}</td>
                                    <td className="py-2 px-4 border-b">{item.vigencia_a}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                                            <span className="material-icons-sharp">
                                                edit
                                            </span>
                                        </button>
                                        <button onClick={handleDeleteCertificacion} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
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

    const renderTableGA = () => {
        return (
            <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                    <thead className=" w-full h-10 ">
                        <tr className="rounded-lg">
                            <th className="p-2"><Title level="h3" text="Grados académicos" /> </th>
                        </tr>
                    </thead>
                    <thead>
                        <tr className=" bg-[#667DA3] text-white">
                            <th className="py-2 px-4 border-b text-left">Título</th>
                            <th className="py-2 px-4 border-b text-left">Nivel de escolaridad</th>
                            <th className="py-2 px-4 border-b text-left">Estatus</th>
                            <th className="py-2 px-4 border-b text-left">Institución</th>
                            <th className="py-2 px-4 border-b text-left">Fecha de obtencion de grado</th>
                            <th className="py-2 px-4 border-b text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Grados.map((item) => (
                                <tr key={item.id} id={item.id}>
                                    <td className="py-2 px-4 border-b">{item.Titulo}</td>
                                    <td className="py-2 px-4 border-b">{item.Nivel_escolaridad}</td>
                                    <td className="py-2 px-4 border-b">{item.Estatus}</td>
                                    <td className="py-2 px-4 border-b">{item.Institucion}</td>
                                    <td className="py-2 px-4 border-b">{item.Fecha_Obtencion}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                                            <span className="material-icons-sharp">
                                                edit
                                            </span>
                                        </button>
                                        <button onClick={handleDeleteGrado} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
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

    const renderTableOtros = () => {
        return (
            <div className=" mx-auto mt-8 pl-8 pr-8 p-5 ">
                <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
                    <thead className="w-full h-10 ">
                        <tr className="rounded-lg">
                            <th className="p-2"><Title level="h3" text="Otros" /> </th>
                        </tr>
                    </thead>
                    <thead>
                        <tr className=" bg-[#667DA3] text-white">
                            <th className="py-2 px-4 border-b text-left">Formación continua</th>
                            <th className="py-2 px-4 border-b text-left">Nombre</th>
                            <th className="py-2 px-4 border-b text-left">Año</th>
                            <th className="py-2 px-4 border-b text-left">Horas totales</th>
                            <th className="py-2 px-4 border-b text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Others.map((item) => (
                            <tr key={item.id} id={item.id}>
                                <td className="py-2 px-4 border-b">{item.formacion_continua}</td>
                                <td className="py-2 px-4 border-b">{item.nombre}</td>
                                <td className="py-2 px-4 border-b">{item.year}</td>
                                <td className="py-2 px-4 border-b">{item.horas_totales}</td>
                                <td className="py-2 px-4 border-b">
                                    <button className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                                        <span className="material-icons-sharp">
                                            edit
                                        </span>
                                    </button>
                                    <button onClick={handleDeleteOthers} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2 hover:bg-red-600 ">
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
                return (
                    <>
                        <FormGradosAcademicos />
                        {renderTableGA()}
                    </>
                );
            case 'op2':
                return (
                    <>
                        <FormCertificacionesM />
                        {renderTableCertificacionesM()}
                    </>
                );
            case 'op3':
                return (
                    <>
                        <FormOtros />
                        {renderTableOtros()}
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
                                    <li className={`cursor-pointer ${opcionSeleccionada === 'op1' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op1')}>Grados académicos</li>
                                    <li className={`cursor-pointer ${opcionSeleccionada === 'op2' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op2')}>Certificaciones médicas</li>
                                    <li className={`cursor-pointer ${opcionSeleccionada === 'op3' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op3')}>Otro</li>
                                </ul>
                            </nav>
                        </header>
                    </div>
                    {renderFormulario()}
                </div>
            </main>
        </>
    );
}

export default FormacionAcademica;
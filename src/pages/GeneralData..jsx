import Dash from "../components/templates/Dash";
import FormGeneralData from "../components/organism/DatosGenerales/FormGeneralData";
import FormRecidencia from "../components/organism/DatosGenerales/FormRecidencia";
import UpdateResidencia from "../components/organism/DatosGenerales/UpdateResidencia";
import { useEffect, useState } from "react";
import Title from "../components/atoms/Title";
import Button from "../components/atoms/Button";
import Swal from "sweetalert2";
import { createMedioContacto, getMediosContacto, deleteMedioContacto } from "../api/TrayectoriaProfesional/Routes";
import { getDomicilio } from "../api/DatosGenerales/Routes";

function GeneralData() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [MediosContacto, setMediosContacto] = useState([])
  const [Domicilio, setDomicilio] = useState([])
  const [Change, setChange] = useState(false)


  useEffect(() => {
    const getData = async() =>{
      const responseMedioContacto = await getMediosContacto();
      const responseDomicilio = await getDomicilio();
      setDomicilio(responseDomicilio.data);
      setMediosContacto(responseMedioContacto.data);
    }
    getData();
  }, [Change])
  

  const handlerClickAgregarGD = async () => {
    Swal.fire({
      title: 'Medios de contacto',
      customClass: {
        popup: 'w-auto h-auto border border-red-500',
      },
      html: `
        <div class="flex justify justify-center mb-5">
          <div class="grid grid-cols-2 gap-5">
            <div class="">
              <label class="block text-sm font-medium leading-6 text-gray-900">Medio de contacto: </label>
              <select class=" bg-transparent border w-full p-2 text-base text-[#888888] border-[#e9e9e9] rounded shadow-sm" name="select" id="input1">
                <option value="Correo Electronico">Correo Electronico</option>
                <option value="Telefono" selected>Telefono</option>
                <option value="Móvil ">Móvil </option>
              </select>
            </div>
            <div className="border-2 border-red-500" >
              <label class="block text-sm font-medium leading-6 text-gray-900">Categoría de contacto: </label>
              <select name="select" id="input2" class="bg-transparent border w-full p-2 text-base text-[#888888] border-[#e9e9e9] rounded shadow-sm">
                <option value="Oficial">Oficial</option>
                <option value="Personal" selected>Personal</option>
              </select>
            </div>
            <div>
              <label id="dynamicLabel" class="block text-sm font-medium leading-6 text-gray-900">Telefono: </label>
              <input class="block w-full px-2 pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-[#18386B] sm:text-sm sm:leading-6" id="input3" class="swal2-input" placeholder="Ingrese el valor solicitado">
            </div>
            <div>
              <label class="block text-sm font-medium leading-6 text-gray-900">¿Es el principal?: </label>
              <select name="select" id="input4" class="bg-transparent border w-full p-2 text-base text-[#888888] border-[#e9e9e9] rounded shadow-sm">
                <option value="Si">Si</option>
                <option value="No" selected>No</option>
              </select>
            </div>
          </div>
        </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Guardar",
      cancelButtonText:"Cancelar",
      didOpen: () => {
        const input1 = document.getElementById('input1');
        const dynamicLabel = document.getElementById('dynamicLabel');
    
        if (input1 && dynamicLabel) {
          input1.addEventListener('change', () => {
            const selectedOption = input1.options[input1.selectedIndex];
            const selectedValue = selectedOption.value;
            dynamicLabel.textContent = `${selectedValue}:`;
          });
        }
      },
      preConfirm: async() => {
        const input1Value = document.getElementById('input1')?.value;
        const input2Value = document.getElementById('input2')?.value;
        const input3Value = document.getElementById('input3')?.value;
        const input4Value = document.getElementById('input4')?.value;

        if (!input1Value || !input2Value || !input3Value || !input4Value) {
          Swal.showValidationMessage('Todos los campos son obligatorios');
          return false; 
        }

        const valores = {
          medio_contacto:input1Value,
          categoria_contacto: input2Value,
          valor: input3Value, 
          principal:input4Value
      }
      const response = await createMedioContacto(valores);
      Swal.fire({
        title: "Guardado exitosamente",
        text: "Se ha guardado exitosamente",
        icon: "success"
      });
      setChange((prev) => !prev);
      }
    });
  }

  const handlerClickEliminarGD = async (event) => {
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
      cancelButtonText:"Cancelar"
    }).then(async(result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado",
          text: "El registro se ha eliminado correctamente",
          icon: "success"
        });
        const response = await deleteMedioContacto(id);
        setChange((prev) => !prev);
      }
    });
  }

  const handlerClickEditarrGD = async () => {
    
  }


  const renderTableGeneralData = () => {
    return (
      <>
        <div className="mx-auto mt-8 pl-8 pr-8 p-5 ">
          <table className="min-w-full bg-white border-gray-300 drop-shadow-2xl  rounded-3xl ">
            <thead className=" w-full h-10 p-30">
              <tr className=" rounded-lg">
                <th className="p-3"><Title level="h3" text="Medios de contacto" /> </th>
                <th></th>
                <th></th>
                <th></th>
                <th className="p-3"><Button type={"button"} onclick={handlerClickAgregarGD} mensaje="Agregar" className="w-full bg-[#18386B] text-white" /> {/* cambiar boton */}</th>
              </tr>
            </thead>
            <thead>
              <tr className=" bg-[#667DA3] text-white">
                <th className="py-2 px-4 border-b text-left">Medio</th>
                <th className="py-2 px-4 border-b text-left">Categoría</th>
                <th className="py-2 px-4 border-b text-left">Correo/Telefono</th>
                <th className="py-2 px-4 border-b text-left">Principal</th>
                <th className="py-2 px-4 border-b text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                MediosContacto.map((item)=>(
                <tr key={item.id} id={item.id}>
                <td className="py-2 px-4 border-b">{item.medio_contacto}</td>
                <td className="py-2 px-4 border-b">{item.categoria_contacto}</td>
                <td className="py-2 px-4 border-b">{item.valor}</td>
                <td className="py-2 px-4 border-b">{item.principal}</td>
                <td className="py-2 px-4 border-b">
                  <button onClick={handlerClickEditarrGD} className="bg-[#758AAC] text-black w-9 h-10 rounded-full">
                    <span className="material-icons-sharp">
                      edit
                    </span>
                  </button>
                  <button onClick={handlerClickEliminarGD} className="bg-[#758AAC] text-black w-9 h-10 rounded-full ml-2  hover:bg-red-600 ">
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
      </>
    )
  }

  const renderFormulario = () => {
    switch (opcionSeleccionada) {
      case 'op1':
        return (
          <>
            <FormGeneralData />
            {renderTableGeneralData()}
          </>
        );
      case 'op2':
        if(Domicilio.length === 0) {
          return(
            <FormRecidencia />
          )
        }else{
          return (
            <UpdateResidencia/>
            );
        }
      default:
        setOpcionSeleccionada('op1')
    }
  }

  return (
    <>
      <Dash />
      <main className="dashboard">
        <div className='mt-12 h-auto'>
          <div className="flex items-center justify-center flex-col mt-[80px] border-b border-[#828282]">
            <header className='mb-5 mt-2'>
              <nav className="mt-30">
                <ul className="flex flex-row gap-5 item-center justify-center top-">
                  <li className={`cursor-pointer ${opcionSeleccionada === 'op1' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op1')}>Datos generales</li>
                  <li className={`cursor-pointer ${opcionSeleccionada === 'op2' ? 'text-[#D2A92D]' : ''}`} onClick={() => setOpcionSeleccionada('op2')}>Domicilio de Residencia</li>
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

export default GeneralData;
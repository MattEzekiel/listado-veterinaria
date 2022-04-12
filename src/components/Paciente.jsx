import ModalEliminar from "./ModalEliminar";
import {useState} from "react";

export default function Paciente({ paciente, setPaciente, eliminarPaciente }) {
    const { nombre, propietario, email, alta, sintomas, id } = paciente;
    const [ showModal, setShowModal] = useState(false);

    return (
        <div className={"bg-white shadow-xl px-5 py-5 rounded-lg mx-5 mb-5"}>
            <ul className={"mb-5"}>
                <li className={"mt-5 font-bold mb-3 text-gray-700 uppercase"}>Nombre de la mascota: <span className={"font-medium normal-case"}>{nombre}</span></li>
                <li className={"mt-5 font-bold mb-3 text-gray-700 uppercase"}>Nombre del dueño: <span className={"font-medium normal-case"}>{propietario}</span></li>
                <li className={"mt-5 font-bold mb-3 text-gray-700 uppercase"}>Email: <span className={"font-medium normal-case"}>{email}</span></li>
                <li className={"mt-5 font-bold mb-3 text-gray-700 uppercase"}>Fecha de alta: <span className={"font-medium normal-case"}>{alta}</span></li>
                <li className={"mt-5 font-bold mb-3 text-gray-700 uppercase"}>Síntomas: <span className={"font-medium normal-case"}>{sintomas}</span></li>
            </ul>
            <div className={"mt-10 flex justify-between"}>
                <button
                    type={"button"}
                    className={"py-2 px-10 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-bold uppercase rounded-lg"}
                    onClick={() => setPaciente(paciente)}
                >Editar</button>
                <button
                    type={"button"}
                    className={"py-2 px-10 bg-red-600 hover:bg-red-700 transition-colors text-white font-bold uppercase rounded-lg"}
                    onClick={() => setShowModal(true)}
                >Eliminar</button>
            </div>
            {showModal && (
                <ModalEliminar
                    setShowModal={setShowModal}
                    showModal={showModal}
                    eliminarPaciente={eliminarPaciente}
                    id={id}
                />
            )}
        </div>
    )
}
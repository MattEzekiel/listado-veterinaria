import { useState, useEffect } from "react";
import Error from "./Error";

export default function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {

    const [ nombre, setNombre ] = useState('');
    const [ propietario, setPropietario ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ alta, setAlta ] = useState('');
    const [ sintomas, setSintomas ] = useState('');
    const [ error, setError ] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setAlta(paciente.alta);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);

    function generarID() {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if ([nombre, propietario, email, alta, sintomas].includes('')) {
            setError(true);
        } else {
            setError(false);

            const objPaciente = {
                nombre,
                propietario,
                email,
                alta,
                sintomas
            }

            if (paciente.id) {
                objPaciente.id = paciente.id;
                const pacientesUpdate = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState );
                setPacientes(pacientesUpdate);
                setPaciente({});
            } else {
                objPaciente.id = generarID();
                setPacientes([...pacientes, objPaciente]);
            }

            setNombre('');
            setPropietario('');
            setEmail('');
            setAlta('');
            setSintomas('');
        }
    }

    return (
        <div className={"md:w-1/2 lg:w-2/5"}>
            <h2 className={"font-black text-3xl text-center"}>Seguimiento de pacientes:</h2>
            <p className={"text-lg mt-5 text-center font-medium mb-10"}>Añade pacientes {''} <span className={"text-indigo-600 font-bold"}>Administralos</span></p>
            <form
                className={"bg-white shadow-xl rounded-lg pt-10 pb-5 px-5 mb-10 mx-5 md:mx-0"}
                  onSubmit={handleSubmit}
            >
                { error && (
                    <Error>
                        <p>Todos los campos son obligatorios</p>
                    </Error>
                )}
                <div className={"mb-5"}>
                    <label className={"block text-gray-700 uppercase font-bold"}
                           htmlFor="nombre"
                    >Nombre de la mascota</label>
                    <input
                        type="text"
                        name={"nombre"}
                        id={"nombre"}
                        placeholder={"Ingrese aquí el nombre de la mascota"}
                        className={"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"}
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className={"mb-5"}>
                    <label className={"block text-gray-700 uppercase font-bold"}
                           htmlFor="propietario"
                    >Nombre del dueño</label>
                    <input
                        type="text"
                        name={"propietario"}
                        id={"propietario"}
                        placeholder={"Ingrese aquí el nombre del dueño"}
                        className={"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"}
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                    />
                </div>
                <div className={"mb-5"}>
                    <label className={"block text-gray-700 uppercase font-bold"}
                           htmlFor="email"
                    >Email</label>
                    <input
                        type="email"
                        name={"email"}
                        id={"email"}
                        placeholder={"Ingrese aquí su email de contacto"}
                        className={"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className={"mb-5"}>
                    <label className={"block text-gray-700 uppercase font-bold"}
                           htmlFor="alta"
                    >Fecha de alta</label>
                    <input
                        type="date"
                        name={"alta"}
                        id={"alta"}
                        className={"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"}
                        value={alta}
                        onChange={e => setAlta(e.target.value)}
                    />
                </div>
                <div className={"mb-5"}>
                    <label className={"block text-gray-700 uppercase font-bold"}
                           htmlFor="sintomas"
                    >Síntomas</label>
                    <textarea
                        name={"sintomas"}
                        id={"sintomas"}
                        className={"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"}
                        placeholder={"Describa los síntomas"}
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    />
                </div>
                <div className={"mb-5"}>
                    <button
                        type={"submit"}
                        className={"bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all"}
                    >{paciente.id ? 'Guardar Cambios' : 'Agregar'}</button>
                </div>
            </form>
        </div>
    )
}
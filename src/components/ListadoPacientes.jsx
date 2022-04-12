import Paciente from "./Paciente";

export default function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {

    return (
        <div className={"md:w-1/2 lg:w-3/5 md:max-h-full md:h-screen overflow-y-auto"}>
        {pacientes && pacientes.length ? (
            <>
                <h2 className={"font-black text-2xl lg:text-3xl text-center mt-5"}>Listado de pacientes:</h2>
                <p className={"text-lg my-5 text-center font-medium md:px-0 px-10"}>Administra tus <span className={"text-indigo-600 font-bold"}>Pacientes y Citas</span></p>
                { pacientes.map( paciente =>
                    <Paciente
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />
                )}
            </>
        )
            :
            <>
                <h2 className={"font-black text-2xl lg:text-3xl text-center mt-5"}>No hay pacientes</h2>
                <p className={"text-lg mt-5 mb-10 text-center font-medium md:px-0 px-10"}>Comienza agregando <span className={"text-indigo-600 font-bold"}>Pacientes y Citas</span></p>
            </>
        }
        </div>
    )
}
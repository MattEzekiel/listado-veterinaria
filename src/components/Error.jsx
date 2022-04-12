export default function Error({ children }) {
    return (
        <div role={"alert"} className={"mb-5"}>
            <div className={"bg-red-500 text-white font-bold rounded-t px-4 py-2"}>
                Error
            </div>
            <div className={"border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"}>
                {children}
            </div>
        </div>
    )
}
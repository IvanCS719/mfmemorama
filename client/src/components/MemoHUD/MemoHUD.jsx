
function MemoHUD({ movimientos, puntos }) {

    return (
        <div className="flex gap-2">
            <div className="max-w-max flex px-4 py-1 bg-gray-300 rounded-lg items-center gap-2">
                <img className="w-4" src="/vite.svg" alt="" />
                <span>{movimientos}</span>
            </div>
            <div className="max-w-max flex px-4 py-1 bg-gray-300 rounded-lg items-center gap-2">
                <img className="w-4" src="/vite.svg" alt="" />
                <span>{puntos}</span>
            </div>
        </div>
    );

}

export default MemoHUD;
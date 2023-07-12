
function MemoHUD({ movimientos, puntos, obtenerFormatoTiempo, pausarJuego }) {

    return (
        <div className="w-full flex justify-between text-base mb-2">
            <div className="flex gap-3">
                <div className="w-20 flex justify-center px-4 py-1 bg-gray-300 rounded-lg items-center gap-2">
                    <img className="w-4" src="/vite.svg" alt="" />
                    <span>{movimientos}</span>
                </div>
                <div className="w-20 flex justify-center px-4 py-1 bg-gray-300 rounded-lg items-center gap-2">
                    <img className="w-4" src="/vite.svg" alt="" />
                    <span>{puntos}</span>
                </div>
                <div className="w-24 flex justify-center px-4 py-1 bg-gray-300 rounded-lg items-center gap-2">
                    <img className="w-4" src="/vite.svg" alt="" />
                    <span>{obtenerFormatoTiempo}</span>
                </div>
            </div>
            <div className="w-10 flex justify-center px-4 py-1 bg-gray-300 rounded-lg items-center gap-2">
                <button onClick={pausarJuego}>||</button>
            </div>
        </div>
    );

}

export default MemoHUD;
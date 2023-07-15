function MemoWin({gano, totalP, puntos, totalTiempo, totalMovimiento, handleResetGameClick}) {

    return (
        <div className={`fixed z-50 inset-0 flex items-center justify-center transition-all duration-500 ${gano ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}>
            <div className='w-full h-full p-4 max-h-full flex justify-center items-center overflow-auto'>
                <div className="bg-white flex flex-col items-center p-4 rounded-xl text-center font-fontGeneral font-bold text-gray-950">
                    <p className="text-5xl">¡NO PUEJ!</p>
                    <p className="text-3xl">¡ENCONTRAJTE TODOJ<br/>LOJ PAREJ!</p>
                    <div className="text-lg w-full flex justify-between px-5 mt-3">
                        <span>Puntos</span>
                        <span>{puntos}</span>
                    </div>
                    <div className="text-lg w-full flex justify-between px-5">
                        <span>Movimientos</span>
                        <span>{totalMovimiento}</span>
                    </div>
                    <div className="text-lg w-full flex justify-between px-5">
                        <span>Tiempo</span>
                        <span>{totalTiempo}</span>
                    </div>
                    <div className="max-w-max px-3 py-1 flex flex-col mt-3 rounded-lg shadow-xl">
                        <span className="text-lg">Total:</span>
                        <span className="text-5xl">{totalP}</span>
                    </div>
                    <div className="w-full mt-3">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-5 rounded-lg shadow-2xl mr-5" onClick={() => handleResetGameClick()}><i className="fa-solid fa-rotate-left"></i></button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-5 rounded-lg shadow-2xl"><i className="fa-solid fa-house"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default MemoWin;
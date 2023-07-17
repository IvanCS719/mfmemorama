function MemoPause({pauseAlert, totalP, puntos, totalTiempo, totalMovimiento, handleResetGameClick, continuarJuego}) {

    return (
        <div className={`fixed z-50 inset-0 flex items-center justify-center transition-all duration-300 ${pauseAlert ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}>
            <div className='w-full h-full p-4 max-h-full flex justify-center items-center overflow-auto'>
                <div className="bg-white flex flex-col items-center p-7 rounded-xl text-center font-fontGeneral font-bold text-gray-950">
                    <p className="text-5xl">¡NO PUEJ!</p>
                    <p className="text-3xl">¡ENCONTRAJTE TODOJ<br/>LOJ PAREJ!</p>
                    <div className="text-2xl w-full flex justify-between px-5 mt-5">
                        <span>Sonido</span>
                        <span>Musica</span>
                    </div>
                    
                    <div className="w-full flex justify-center gap-4 mt-6 text-2xl">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-2xl" onClick={() => handleResetGameClick()}><i className="fa-solid fa-rotate-left"></i></button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-2xl" onClick={continuarJuego}><i className="fa-solid fa-play"></i></button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-2xl"><i className="fa-solid fa-house"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default MemoPause;
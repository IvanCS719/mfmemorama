function MemoMessage({ mostrarMensajesAction, mostrarCombo, combo, mostrarMensajesActionTurno,turnoPlayer1, turnoPlayer2 }) {

    return (
        <div className={`fixed z-30 w-full flex items-center justify-center font-fontGeneral text-center font-bold ${mostrarMensajesAction ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}>
            
                <div className={`fixed inset-0 min-w-max flex items-center justify-center transition-all duration-100 ${mostrarCombo ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`} >
                <p className='text-7xl'>Combo x{combo}</p>
            </div>
            {mostrarMensajesActionTurno ? <div>
            <div className={`fixed inset-0 min-w-max flex items-center justify-center transition-all duration-200 ${turnoPlayer1 ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`} >
            <p className='text-7xl'>Turno de<br/>Rojo</p>
            </div>

            <div className={`fixed inset-0 min-w-max flex items-center justify-center transition-all duration-200 ${turnoPlayer2 ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`} >
                <p className='text-7xl'>Turno de<br/>Azul</p>
            </div>
            </div>: null}

        </div>
    );

}

export default MemoMessage;
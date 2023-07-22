function MemoMessageTurno({mostrarMensajesTurno, turnoPlayer1Mess, turnoPlayer2Mess }) {

    return (
        <div className={`fixed z-30 w-full flex items-center justify-center font-fontGeneral text-center font-bold ${mostrarMensajesTurno ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}>

            <div className={`fixed inset-0 min-w-max flex items-center justify-center transition-all duration-200 ${turnoPlayer1Mess ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`} >
                <p className='text-7xl'>Turno de<br />Rojo</p>
            </div>

            <div className={`fixed inset-0 min-w-max flex items-center justify-center transition-all duration-200 ${turnoPlayer2Mess ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`} >
                <p className='text-7xl'>Turno de<br />Azul</p>
            </div>

        </div>
    );

}
export default MemoMessageTurno;
import './StyleMemoTarjeta.css'

function MemoTarjetas({memoTarjeta, animacion, handleMemoClick}) {

    return(
        <div className="memo-tarjeta" onClick={()=>(!memoTarjeta.tarjetaGirada && !animacion) && handleMemoClick(memoTarjeta)}>
            <div className={`memo-tarjeta-inner ${memoTarjeta.tarjetaGirada &&  'memo-tarjeta-Girada'}`}>
                <div className="memo-tarjeta-front">

                </div>
                <div className="memo-tarjeta-back">
                    {memoTarjeta.contenido}
                </div>
            </div>
        </div>
    );
   
}
   
   export default MemoTarjetas
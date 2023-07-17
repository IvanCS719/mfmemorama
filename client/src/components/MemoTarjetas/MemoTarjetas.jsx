import './StyleMemoTarjeta.css'
//import logo from 'imgBackPreview/petate.jpg';

//Se reciben las props
function MemoTarjetas({ memoTarjeta, animacion, handleMemoClick, start }) {

    return (
        //Codicional para poder hacer click en la tarjeta
        <div className="memo-tarjeta" onClick={() => (!memoTarjeta.tarjetaGirada && !animacion) && handleMemoClick(memoTarjeta)}>
            {/*si la propieda tarjetaGirada es true, se le aplica la clase para girarla con css*/}
            <div className={`memo-tarjeta-inner ${start ? 'start' : null} ${memoTarjeta.tarjetaGirada && 'memo-tarjeta-Girada'}`}>
                <div className="memo-tarjeta-front" style={{ backgroundImage: `url(imgFrontPreview/petate.jpg`}}>
                
                </div>
                <div className="memo-tarjeta-back" style={{ backgroundImage: `url(imgBackPreview/${memoTarjeta.contenido})`}}>
                    
                </div>
            </div>
        </div>
    );

}

export default MemoTarjetas
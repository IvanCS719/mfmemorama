import { useState } from 'react';
import MemoTarjetas from '../MemoTarjetas/MemoTarjetas';
//import './StyleMemoTablero.css';

//Se reciben la props
function MemoTablero({ contenidoBarajeado, animacion, handleMemoClick, start, selectedNumCards }) {

    /*---Estilos css personalizados---*/
    //Para las columnas grip
    const numeroColumnas = 12;
    const styleMemoTablero = {
        gridTemplateColumns: `repeat(${numeroColumnas}, 1fr)`,
    }
    
    return (
        
        <div className='w-full flex items-center justify-center'>
            <div className='grid gap-1 md:gap-2 w-full mfsm:w-[440px] sm:w-[520px] md:w-[720px] mflg:w-[520px] lg:w-[720px]' style={styleMemoTablero}>
            {
                //sea mapea el arreglo con el contenido de la tarjetas, para crear cada tarjeta
                contenidoBarajeado.map((item, i) => {
                    //Se pasa la props correspondientes
                    return <MemoTarjetas key={`${i}_${item}`} memoTarjeta={item} animacion={animacion} handleMemoClick={handleMemoClick} start={start} />
                })
            }
        </div>
        </div>
    );
}

export default MemoTablero

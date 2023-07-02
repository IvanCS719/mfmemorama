import { useState, useEffect } from 'react';
import MemoTablero from './MemoTablero';

const contenidoList = [...'🤖🦖🐒🦜🐓🥭🍅🥑']

function MemoLogica() {

  const [barajearTarjetas, setBarajearTarjetas] = useState([]);
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);
  const [animacion, setAnimacion] = useState(false);

  const mezclarArray = a =>{
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.floor(Math.random() * (i + 1)));
      [a[i],a[j]] = [a[j], a[i]];
      
    }
    return a;
  }

  useEffect( ()=>{
    const mezclarContenidoList = mezclarArray([...contenidoList, ...contenidoList]);
    setBarajearTarjetas(mezclarContenidoList.map( (contenido, indice) => ({index: indice, contenido, tarjetaGirada: false}))) 
  },[]);

  console.log(barajearTarjetas)

  const handleMemoClick = memoTarjeta => {
    const memoTarjetaGirada = {...memoTarjeta, tarjetaGirada: true};
    let barajearTarjetasCopia = [...barajearTarjetas];
    barajearTarjetasCopia.splice(memoTarjeta.index, 1, memoTarjetaGirada);
    setBarajearTarjetas(barajearTarjetasCopia);

    if(tarjetaSeleccionada === null){
      setTarjetaSeleccionada(memoTarjeta);
    }else if(tarjetaSeleccionada.contenido === memoTarjeta.contenido){
      setTarjetaSeleccionada(null);
    }else{
      setAnimacion(true);
      setTimeout(()=>{
        barajearTarjetasCopia.splice(memoTarjeta.index, 1, memoTarjeta);
        barajearTarjetasCopia.splice(tarjetaSeleccionada.index, 1, tarjetaSeleccionada);
        setBarajearTarjetas(barajearTarjetasCopia);
        setTarjetaSeleccionada(null);
        setAnimacion(false);
      }, 1000);
    }
  }

  return(
   <MemoTablero contenidoBarajeado={barajearTarjetas} animacion={animacion} handleMemoClick={handleMemoClick}/>
  );
}

export default MemoLogica

import { useState, useEffect } from 'react';
import MemoTablero from './MemoTablero';

//Arreglo local con contenido de prueba para cada tarjeta
const contenidoList = [...'🤖🦖🐒🦜🐓🥭🍅🥑']

function MemoLogica() {
  //constante para almacenar el contenido del memorama mezclado
  const [barajearTarjetas, setBarajearTarjetas] = useState([]);
  //constante para almacenar la carta que el usuario dio click
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);
  //constante para controlar la animación de ver las dos cartas que el usuario volteó
  const [animacion, setAnimacion] = useState(false);

  /*función que recibe un arreglo del contenido del memorama duplicado 
  y retorna el mismo arreglo con los elemento mezclados*/
  const mezclarArray = a =>{
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.floor(Math.random() * (i + 1)));
      /*EJemplo de intercambio, lo que hay en la posición a[j] pasa a la posición a[i]
       y lo que hay en la posición a[i] pasa a la posición a[j]*/
      [a[i],a[j]] = [a[j], a[i]];
      
    }
    return a;
  }

  //Al renderizar por primera vez el componente...
  useEffect( ()=>{
    //Se llama a la función mezclarArray, pasando un arreglo que concatena el contenido del memorama dos vez
    //el retorno se pasa al arreglo mezclarContenidoList
    const mezclarContenidoList = mezclarArray([...contenidoList, ...contenidoList]);
    //Se setea barajearTarjetas con un arreglo de objetos, que contienen el indice, el continido, y el estado de que no esta girada
    setBarajearTarjetas(mezclarContenidoList.map( (contenido, indice) => ({index: indice, contenido, tarjetaGirada: false}))) 
  },[]);

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

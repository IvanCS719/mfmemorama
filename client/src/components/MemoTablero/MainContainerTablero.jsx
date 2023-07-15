import { useState, useEffect, useRef } from 'react';
import MemoTablero from './MemoTablero';
import MemoHUB from '../MemoHUD/MemoHUD';
import MemoWin from '../MemoAlert/MemoWIn';
import sonidoParEncontrado from '../../assets/sounds/successAudio.mp3';
import sonidoGirarTarjeta from '../../assets/sounds/flipCard.mp3';
import sonidoGanaste from '../../assets/sounds/win.mp3';

//Arreglo local con contenido de prueba para cada tarjeta
const contenidoList = ['choco_1.jpg'];
const successAudio = new Audio(sonidoParEncontrado);
const girarTarjetaAudio = new Audio(sonidoGirarTarjeta);
const ganasteAudio = new Audio(sonidoGanaste);

function MemoLogica() {
  //constante para almacenar el contenido del memorama mezclado
  const [barajearTarjetas, setBarajearTarjetas] = useState([]);
  //constante para almacenar la carta que el usuario dio click
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);
  //constante para controlar la animación de ver las dos cartas que el usuario volteó
  const [animacion, setAnimacion] = useState(false);

  const [tarjetasEncontradas, setTarjetasEncontradas] = useState(0);

  const [gano, setGano] = useState(false);

  //Sistema de puntos
  const [movimientos, setMovimientos] = useState(0);
  const [puntos, setPuntos] = useState(0);
  const [combo, setCombo] = useState(0);
  const [totalP, setTotalP] = useState(0);
  const [totalTiempo, setTotalTiempo] = useState(0);
  const [totalMovimiento, setTotalMovimiento] = useState(0);


  //Sistama de timer
  const [tiempo, setTiempo] = useState(0);
  //const [pausado, setPausado] = useState(true);
  const intervalRef = useRef();

  /*función que recibe un arreglo del contenido del memorama duplicado 
  y retorna el mismo arreglo con los elemento mezclados*/
  const mezclarArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.floor(Math.random() * (i + 1)));
      /*EJemplo de intercambio, lo que hay en la posición a[j] pasa a la posición a[i]
       y lo que hay en la posición a[i] pasa a la posición a[j]*/
      [a[i], a[j]] = [a[j], a[i]];

    }
    return a;
  }

  const iniciarCartasTablero = () => {
    //Se llama a la función mezclarArray, pasando un arreglo que concatena el contenido del memorama dos vez
    //el retorno se pasa al arreglo mezclarContenidoList
    const mezclarContenidoList = mezclarArray([...contenidoList, ...contenidoList]);
    //Se setea la constante barajearTarjetas con un arreglo de objetos, que contienen el indice, el continido, y el estado de que no esta girada
    setBarajearTarjetas(mezclarContenidoList.map((contenido, indice) => ({ index: indice, contenido, tarjetaGirada: false })));
  }

  //Al renderizar por primera vez el componente...
  useEffect(() => {
    iniciarCartasTablero();
  }, []);

  //Sistema de puntos
  useEffect(() => {
    if (combo > 0) {
      setPuntos((puntos) => puntos + 50 * combo);
    }
  }, [combo]);

  useEffect(() => {
    if (tarjetasEncontradas === contenidoList.length) {
      ganasteAudio.volume = 0.8;
      ganasteAudio.play();
      pausarCronometro();
      calculatePuntos();
      setGano(true);
    }
  }, [tarjetasEncontradas]);

  //Timer
  useEffect(() => {

    intervalRef.current = setInterval(() => {
      setTiempo((prevTiempo) => prevTiempo + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const pausarCronometro = () => {

    clearInterval(intervalRef.current);
  };

  const obtenerFormatoTiempo = () => {
    const segundos = tiempo % 60;
    const minutos = Math.floor(tiempo / 60) % 60;
    //const horas = Math.floor(tiempo / 3600);

    const formatoSegundos = segundos < 10 ? `0${segundos}` : segundos;
    const formatoMinutos = minutos < 10 ? `0${minutos}` : minutos;
    //const formatoHoras = horas < 10 ? `0${horas}` : horas;

    return `${formatoMinutos}:${formatoSegundos}`;
  };

  const pausarJuego = () => {

    setAnimacion(true);
    pausarCronometro();
  };

  const calculatePuntos = () => {
    const totalTiempoPre = Math.max(450 - (5 * Math.max(Math.floor(tiempo - 30), 0)), 0);
    const totalMovimientoPre = Math.max(270 - (6 * Math.floor(movimientos - contenidoList.length)), 0);
    setTotalTiempo(totalTiempoPre);
    setTotalMovimiento(totalMovimientoPre);
    setTotalP(puntos + totalTiempoPre + totalMovimientoPre);
  }

  const handleResetGameClick = () => {
    iniciarCartasTablero();
    setAnimacion(false);
    setTarjetasEncontradas(0);
    setPuntos(0);
    setMovimientos(0);
    setCombo(0);
    setTiempo(0);
    setGano(false);
    intervalRef.current = setInterval(() => {
      setTiempo((prevTiempo) => prevTiempo + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }

  //función que se llama al hacer click en alguna tarjeta y recibe un objeto (con los datos de la tarjeta)
  const handleMemoClick = memoTarjeta => {
    //se crea objeto con los datos de la tarjeta y se modifica la propiedad tarjetaGirada a true
    const memoTarjetaGirada = { ...memoTarjeta, tarjetaGirada: true };
    //se crea una copia de todas las cartas del memorama 
    let barajearTarjetasCopia = [...barajearTarjetas];
    //se elimina y agrega el contenido de la tarjeta girada (actulización)
    barajearTarjetasCopia.splice(memoTarjeta.index, 1, memoTarjetaGirada);
    //se setea barajearTarjetas con el memorama modificado
    setBarajearTarjetas(barajearTarjetasCopia);

    girarTarjetaAudio.volume = 0.6;
    girarTarjetaAudio.currentTime = 0;
    girarTarjetaAudio.play();

    //Se condiciona si no hay una tarjeta seleccionada, entonces se setea tarjetaSeleccionada
    if (tarjetaSeleccionada === null) {
      setTarjetaSeleccionada(memoTarjeta);
    }
    /*si ya hay una targeta seleccionacioda se compara la selección anterior con la nueva selección
    y si son iguales, las tarjetas quedan giradas y se setea tarjetaSeleccionada a null*/
    else if (tarjetaSeleccionada.contenido === memoTarjeta.contenido) {
      setTarjetaSeleccionada(null);
      setTarjetasEncontradas((tarjetasEncontradas) => tarjetasEncontradas + 1);
      //successAudio.ended();
      girarTarjetaAudio.volume = 0.0;
      successAudio.volume = 0.5;
      successAudio.currentTime = 0;
      successAudio.play();
      setMovimientos((movimientos) => movimientos + 1);
      setCombo((combo) => combo + 1)
      //setPuntos((puntos) => puntos + 50);
    }
    /*si no son iguales, se setea animacion a true, se hace una pausa donde las
    tarjetas se muestran por un 1seg. además de que ambas tarjetas vuelven a su estado inicial,
    y se seta tarjetaSeleccionada a null y animación a false*/
    else {
      setAnimacion(true);
      setTimeout(() => {
        barajearTarjetasCopia.splice(memoTarjeta.index, 1, memoTarjeta);
        barajearTarjetasCopia.splice(tarjetaSeleccionada.index, 1, tarjetaSeleccionada);
        setBarajearTarjetas(barajearTarjetasCopia);
        setTarjetaSeleccionada(null);
        setAnimacion(false);
      }, 1000);
      setMovimientos((movimientos) => movimientos + 1);
      setCombo(0);
    }

  };

  //console.log(barajearTarjetas)

  return (
    //Se pasan la props a tablero
    <main className='w-full min-h-screen flex items-center justify-center flex-col p-2'>
      <MemoWin gano={gano} puntos={puntos} totalP={totalP} totalTiempo={totalTiempo} totalMovimiento={totalMovimiento} handleResetGameClick={handleResetGameClick}/>

      <MemoHUB movimientos={movimientos} puntos={puntos} obtenerFormatoTiempo={obtenerFormatoTiempo()} pausarJuego={pausarJuego} />
      <MemoTablero contenidoBarajeado={barajearTarjetas} animacion={animacion} handleMemoClick={handleMemoClick} />
    </main>

  );
}

export default MemoLogica

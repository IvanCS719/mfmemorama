import MemoTarjetas from '../MemoTarjetas/MemoTarjetas';
import './StyleMemoTablero.css';

 function MemoTablero({contenidoBarajeado, animacion, handleMemoClick}) {

return(
    <main className='memoTablero'>
        {
            contenidoBarajeado.map((item, i) => {
                return <MemoTarjetas key={`${i}_${item}`} memoTarjeta={item} animacion={animacion} handleMemoClick={handleMemoClick}/>
            })
        }
    </main>
); 
   }
   
   export default MemoTablero
   
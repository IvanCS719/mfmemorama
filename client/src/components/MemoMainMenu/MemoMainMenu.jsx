import { useState, useEffect, useRef } from 'react';

function MemoMainMenu() {
 

  return (
    //Se pasan la props a tablero
    <main className='w-full min-h-screen flex items-center justify-center flex-col p-2'>
      <div>
        <p className='font-bold font-fontGeneral text-4xl'>MEMORAMA</p>
      </div>
      <div className='flex flex-col gap-4 text-2xl font-semibold font-fontGeneral'>
        <button className='bg-blue-500 text-white w-60 py-3 rounded-3xl flex justify-center'>1 JUGADOR</button>
        <button className='bg-blue-500 text-white w-60 py-3 rounded-3xl flex justify-center'>2 JUGADORES</button>
      </div>
      <div className='py-4'>
        <a href='https://mercadofacil.mx/' target='_blank'>MercadoFácil.mx</a>
      </div>
    </main>

  );
}

export default MemoMainMenu;
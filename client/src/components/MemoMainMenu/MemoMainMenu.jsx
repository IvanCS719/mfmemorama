import { useState, useEffect, useRef } from 'react';

function MemoMainMenu() {
 

  return (
    //Se pasan la props a tablero
    <main className='w-full min-h-screen flex items-center justify-between flex-col p-2 font-fontGeneral'>
      <div>
        <p className='font-bold text-5xl text-center mb-2'>MEMORAMA</p>
        <img src="logoMainMenu.png" alt="" className='w-96' />
      </div>
      <div className='flex flex-col gap-4 text-2xl font-semibold'>
        <button className='bg-blue-500 text-white w-60 py-3 rounded-2xl flex justify-center'>1 JUGADOR</button>
        <button className='bg-blue-500 text-white w-60 py-3 rounded-2xl flex justify-center'>2 JUGADORES</button>
      </div>
      <div className='font-semibold text-gray-800'>
        <a href='https://mercadofacil.mx/' target='_blank'>MercadoFácil.mx</a>
      </div>
    </main>

  );
}

export default MemoMainMenu;
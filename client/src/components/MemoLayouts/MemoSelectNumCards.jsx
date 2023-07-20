import { useState, useEffect, useRef } from 'react';

function MemoSelectNumCards({setLayoutSelectNumCards, setSelectedNumCards, renderizarCartasYTablero}) {

    const numCards = [{ numCards: 3, totalCards: 6 },
    { numCards: 6, totalCards: 12 },
    { numCards: 10, totalCards: 20 },
    { numCards: 15, totalCards: 30 },
    { numCards: 28, totalCards: 56 },
    { numCards: 36, totalCards: 72 }];

    return (
        //Se pasan la props a tablero
        <main className='bg-white fixed z-40 inset-0 flex items-center font-fontGeneral py-2'>
            <div className='w-full h-full max-h-full flex flex-col items-center overflow-auto'>
                <div>
                    <p className='font-semibold text-4xl text-center mb-4'>Elije el Número de Cartas en el Tablero</p>
                </div>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:px-8 lg:px-2 xl:px-9'>
                    {numCards.map((e, i) => <div key={`${i}_${e}`} className='bg-blue-500 w-64 h-64 flex justify-center items-center rounded-2xl cursor-pointer p-2'
                    onClick={()=>{
                        setSelectedNumCards(e.numCards);
                        renderizarCartasYTablero(e.numCards);
                        setLayoutSelectNumCards(false);
                    }}>
                        <p className='text-6xl font-bold text-center'>{e.totalCards}</p>
                    </div>)}
                </div>
            </div>
        </main>
    );
}
export default MemoSelectNumCards;
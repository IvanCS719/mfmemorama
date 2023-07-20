import { useState, useEffect, useRef } from 'react';

function MemoSelectTema() {

    const temaList = [{title: 'Caricaturas', img: '#'},
    {title: 'Chontal - Español', img: '#'},
    {title: 'Elementos Tabasqueños', img: '#'},
    {title: 'Frutas Tabasqueñas', img: '#'}];

    const temaListPueblosMagicos = [{title: 'Centla', img: '#'},
    {title: 'Tapijulapa', img: '#'},
    {title: 'Teapa', img: '#'}];

    return (
        //Se pasan la props a tablero
        <main className='w-full min-h-screen flex items-center flex-col p-2 font-fontGeneral'>
            <div>
                <p className='font-semibold text-4xl text-center mb-4'>Elige un tema</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:px-8 lg:px-2 xl:px-9'>
                {temaList.map((e, i) => <div key={`${i}_${e}`} className='bg-blue-500 w-64 h-64 flex justify-center items-center rounded-2xl cursor-pointer p-2'>
                    <p className='text-3xl font-bold text-center'>{e.title}</p>
                </div>)}
            </div>
            <h3 className='text-3xl font-semibold mt-8 mb-4'>Pueblos Mágicos de Tabasco</h3>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:px-8 lg:px-2 xl:px-9'>
            {temaListPueblosMagicos.map((e, i) => <div key={`${i}_${e}`}className='bg-blue-500 w-64 h-64 flex justify-center items-center rounded-2xl cursor-pointer p-2'>
                    <p className='text-3xl font-bold text-center'>{e.title}</p>
                </div>)}
            </div>

        </main>
    );
}
export default MemoSelectTema;
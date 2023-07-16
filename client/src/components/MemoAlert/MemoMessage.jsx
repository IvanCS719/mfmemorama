function MemoMessage({}) {

    return (
        <div className='fixed z-50 inset-0 flex items-center justify-center opacity-100'>
            <div className='w-full h-full p-4 max-h-full flex justify-center items-center overflow-auto font-fontGeneral text-center font-bold'>
            <div className={`fixed inset-0 flex items-center justify-center transition-all duration-500 ${false ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`} >
                <p className='text-6xl'>¡VAMOS A VE<br />QUE TAN TIGRE SOS<br />VOS!</p>
            </div>
            <div className={`fixed inset-0 flex items-center justify-center transition-all duration-500 ${true ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`} >
                <p className='text-6xl'>¡PONTE AGUSAO!</p>
            </div>
            </div>
        </div>
    );

}

export default MemoMessage;
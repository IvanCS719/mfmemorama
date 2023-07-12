function MemoWin() {

    return (
        <div className={`fixed bg-slate-400 z-50 inset-0 flex items-center justify-center transition-all duration-200 ${true ? 'opacity-40' : 'opacity-0 pointer-events-none'}`}>
            <div className='w-full h-full p-3 max-h-full flex-col overflow-auto'>
                <p>Ganaste</p>
            </div>
        </div>
    );

}

export default MemoWin;
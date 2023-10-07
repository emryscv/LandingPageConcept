function Main(){
    return(
        <div className = "grid h-4/6 place-items-center">
            <div className="flex flex-col w-3/5 h-1/2 mx-auto" style={{ backgroundImage: `url("./pattern.svg")`}}>
                <img src="./assets/logo.svg" className="h-1/3 w-1/3 mx-auto mb-8"/>
                <h1 className="text-center text-neutral-800 text-2xl font-extrabold font-['Inter'] mb-3 leading-none">¡Pronto llegará Caribbean Payways, la nueva pasarela de pago para la región del Caribe!</h1>
                <p className="text-center text-neutral-800 font-normal font-['Inter'] leading-none mb-8">¿Estás buscando una forma rápida, segura y conveniente de realizar tus transacciones en línea? ¡Caribbean Payways está aquí par hacerte la vida más fácil! Con tecnología de vanguardia y una interfaz intuitiva, Caribbean Payways se convertirá en tu perfecta herramienta para todas tus necesidades de pago en línea.</p>
                <form className="flex flex-col w-3/5 mx-auto">
                    <input type="text" placeholder="Introduzca su dirección de correo" className="mb-3 rounded-md border-neutral-500 border-2 border-solid font-thin font-['Inter'] h-9 p-2"/>
                    <button><img src="./assets/button.svg" className="mx-auto w-1/2"/></button>
                </form>
            </div>
        </div>
    )
}//a

export default Main
function Main(){
    return(
        <div className="flex flex-col w-3/5 h-1/2">
            <img src="./assets/logo.svg"/>
            <h1 className="text-center text-neutral-800 text-2xl font-extrabold font-['Inter']">¡Pronto llegará Caribbean Payways, la nueva pasarela de pago para la región del Caribe!</h1>
            <p className="text-center text-neutral-800 font-extrabold font-['Inter']">¿Estás buscando una forma rápida, segura y conveniente de realizar tus transacciones en línea? ¡Caribbean Payways está aquí par hacerte la vida más fácil! Con tecnología de vanguardia y una interfaz intuitiva, Caribbean Payways se convertirá en tu perfecta herramienta para todas tus necesidades de pago en línea</p>
            <form className="">
                <input type="text" placeholder="Introduzca su dirección de correo"/>
                <button><img src="./assets/button.svg"/></button>
            </form>
        </div>
    )
}

export default Main
function Eventos({numero}){

    function evento1(){
        console.log(`Click ativado! ${numero}`)

    }
    return(
    <div>
        <p>Botando o botão para trabalhar </p>
        <button onClick={evento1}>Ativar Botão: {numero}</button>
        
    </div>
    )
}

export default Eventos
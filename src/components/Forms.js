function Forms(){

    function cadastrar(e){
     e.preventDefault()  
        console.log(`Cadastrou o indivíduo`)
    }
return(
    <div>
        <h1>Meu cadastro:</h1>
        <form onSubmit={cadastrar}>
            <div>
                <input type="text" placeholder="escreva aqui"></input>
            </div>
            <div>
                <input type="submit" value="Cadastrar"></input>
            </div>
        </form>

    </div>
)
}

export default Forms
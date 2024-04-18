import {useState} from 'react'

function Forms(){
  
    
    function cadastrar(e){
        
     e.preventDefault()  
       
        console.log(` ${name} foi cadastrado com a senha ${password}`) //tentando fazer o nome no imput aparecer no console, além da mensagem
    }

    const [name,setName] = useState()
    const [password, setPassword] = useState()


return(
    
    <div>
        <h1>Meu cadastro:</h1>
        <form onSubmit={cadastrar}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" placeholder="Nome do usuário"  id='name' name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input type="password" placeholder="Senha" id='password' name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div>
                <input type="submit" value="Cadastrar"></input>
            </div>
        </form>

    </div>
)
}

export default Forms
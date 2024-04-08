import './App.css'
import Ola from './components/Ola'

function App() {
  const name = 'É o Lion, não tem jeito.'.toUpperCase()
  function sum(a,b){
    return a + b
  }

  const url = 'https://s2-techtudo.glbimg.com/CDCDKUhS0FMmWH6daMavnixT6cg=/0x0:1024x609/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg'

  return (
    <div className="App">
    <h1>Frase do dia: {name} </h1>
    <p>Soma de 3 e 5 é {sum(3,5)}</p>
    <p>Não tem não tem!</p>
    <img src={url} alt="uma imagem"></img>
    <Ola />
    
    </div>
  );
}

export default App;
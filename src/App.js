import './App.css'
import Ola from './components/Ola'
import DigaMeuNome from './components/DigaMeuNome'
import Pessoa from'./components/Pessoa'
import List from './components/List'
import Eventos from './components/Eventos'
import Forms from'./components/Forms'

export function App() {
  const nome ="Anubis"
  return (
    <div className="App">  
    <h1>Testando o CSS</h1>
    
      
      <Ola />
      <DigaMeuNome nome="A Adamastor" />
      <DigaMeuNome nome="B Braulino" />
      <DigaMeuNome nome = {nome} />
      <Pessoa nome = "Tinga" idade = "36" profissao="Não te interessa" foto="https://ih1.redbubble.net/image.5287552061.6571/bg,f8f8f8-flat,200x,070,f-pad,150x150,f8f8f8.jpg"/>
      <List></List> 
      <h3>Teste de botão abaixo</h3>
      &darr;
      <Eventos numero="1" />
      <Eventos numero="2" />
      <Eventos numero="3" />
      <Forms /><p>Teoricamente deveriamos clicar em "cadastrar" e a informação apareceeir ano console do site, mas não aparece.</p>

    </div>
    
  );
}
export default App
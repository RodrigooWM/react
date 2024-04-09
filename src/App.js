import './App.css'
import Ola from './components/Ola'
import DigaMeuNome from './components/DigaMeuNome'
import Pessoa from'./components/Pessoa'
export function App() {
  let nome ="Anubis"
  return (
    <div className="App">  
      <Ola />
      <DigaMeuNome nome="A Adamastor" />
      <DigaMeuNome nome="B Braulino" />
      <DigaMeuNome nome = {nome} />
      <Pessoa nome = "Tinga" idade = "36" profissao="Não te interessa" foto="https://ih1.redbubble.net/image.5287552061.6571/bg,f8f8f8-flat,200x,070,f-pad,150x150,f8f8f8.jpg"/>

      
    </div>
  );
}
export default App

import Style from "./AppModule.css"
import { Div, Color, SayacButton } from "./Components"



function App() {
  return (
    <div className="App">
      <Div>
        <div id="Div">

        </div>
      </Div>

      <div id="color">
        <Color onClick={Renkdegis} theme="red">Red</Color>
        <Color onClick={Renkdegis} theme="green">Green</Color>
        <Color onClick={Renkdegis} theme="blue">Blue</Color>
        <Color onClick={Renkdegis} theme="yellow">Yellow</Color>
      </div>

      <div id="sayac">
        <h1 id="sayacText" >0</h1>
        <div>
          <SayacButton onClick={sayacEkle} theme="sayacArti">+</SayacButton>
          <SayacButton onClick={sayacEkle} theme="sayacEksi">-</SayacButton>

        </div>
      </div>

    </div>
  );
}
const Renkdegis = (data) => {
  const div = document.getElementById("Div");
  div.style.backgroundColor = data.target.textContent;
  div.style.transitionDuration = "0.50s"
}

const sayacEkle = (data) => {

  if(data.target.textContent == "+")
  {
    const sayacText = document.getElementById("sayacText");
    sayacText.textContent = parseInt(sayacText.textContent) + 1;
    
  }else{
    const sayacText = document.getElementById("sayacText");
    sayacText.textContent = parseInt(sayacText.textContent) - 1;
  }

  
  
}

export default App;
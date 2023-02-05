import { useState } from 'react';

function App() {

  const[calc, setCalc] = useState("");
  const[result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value =>{

    if(
      ops.includes(value)&&calc === '' ||
      ops.includes(value)&&ops.includes(calc.slice(-1))
    ){
      return;
    }

    setCalc(calc+value);

    if(!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
    
  }

const digits = () =>{
  const num = [];

  for(let i=1; i<10; i++){
    num.push(
      <button onClick = {() => updateCalc(i.toString())} key={i}>{i}</button>
    )
  }
  return num;
}

const calculate= () =>{
setCalc(eval(calc).toString());
}

const del= () =>{
if(calc === ''){
  return;
}
const value = calc.slice(0, -1);
setCalc(value);
}

  return (
    <div className="App">
      <div class="calculator">
        <div class="display">
          <span></span>{ calc || "0"}
        </div>
        <div class="operators">
          <button onClick = {() => updateCalc('/')}>/</button>
          <button onClick = {() => updateCalc('*')}>*</button>
          <button onClick = {() => updateCalc('+')}>+</button>
          <button onClick = {() => updateCalc('-')}>-</button>
          <button onClick={del}>DEL</button>
        </div>
        <div class="digits">
          {digits()}
          <button onClick = {() => updateCalc('0')}>0</button>
          <button onClick = {() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

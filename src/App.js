import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [prev, setPrev] = useState([])
  const [current, setCurr] = useState([])
  const [op, setOp] = useState('')

  const digitClick = (e) => {
    // console.log(e.target.id)
    const text = e.target.id
    setCurr([...current, text])
  }

  const opClick = (e) => {
    console.log(e.target.id)
    const oper = e.target.id
    setPrev(current)
    setOp(oper)
    setCurr([])
  }

  const clear = () => {
    setCurr([])
    setPrev([])
    setOp('')
  }

  const calc = () => {
    const num1 = Number(prev.join(''))
    const num2 = Number(current.join(''))
    console.log(num1, typeof num1)
    console.log(num2, typeof num2)

    let res

    switch(op) {
      case '÷':
        res = num1 / num2
        break
      case '+':
        res = num1 + num2
        break
      case '-':
        res = num1 - num2
        break
      case '*':
        res = num1 * num2
        break
      default:
        return ''
    }

    console.log(Number(res))
    setPrev([])
    setOp('')

    let resp = String(res).split('').map(Number)
    console.log(resp)

    setCurr(resp)

    console.log('current:', current)
    console.log('previous:', prev)
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="output">
          <div className="prev-op">{prev} {op}</div>
          <div className="current-op">{current}</div>
        </div>
        <div className="btn-grid">
          <div className="top-grid">
            <button onClick={clear}>AC</button>
            <button>DEL</button>
            <button id='÷' onClick={opClick}>÷</button>
          </div>
          <div className="mid-grid">
            <button id='1' onClick={digitClick}>1</button>
            <button id='2' onClick={digitClick}>2</button>
            <button id='3' onClick={digitClick}>3</button>
            <button id='*' onClick={opClick}>*</button>
            <button id='4' onClick={digitClick}>4</button>
            <button id='5' onClick={digitClick}>5</button>
            <button id='6' onClick={digitClick}>6</button>
            <button id='+' onClick={opClick}>+</button>
            <button id='7' onClick={digitClick}>7</button>
            <button id='8' onClick={digitClick}>8</button>
            <button id='9' onClick={digitClick}>9</button>
            <button id='-' onClick={opClick}>-</button>
          </div>
          <div className="bottom-grid">
            <button>.</button>
            <button id='0' onClick={digitClick}>0</button>
            <button onClick={calc}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

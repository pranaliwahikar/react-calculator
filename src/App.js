import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Table } from 'react-bootstrap';

function App() {
  const [exp, setExp] = useState("0")

  const handleclick = (arg) =>{
    if(exp == "0"){
      setExp(arg);
    }else{
      setExp(exp+arg)

    }
  }
  const equal =()=>{
    setExp(eval(exp));
  }
  const reset = ()=>{
    setExp("0")
  }
  return (
    <div className="App">
      <Container>
        <div className='calculator'>
        <div className='calcibtn'>
          <Table>
          <tbody>
          <tr>
            <td colSpan={4}>
            <div className="display">
          <h3>result = {exp}</h3>
        </div>
            </td>
          </tr>
            <tr>
              <td><Button className='btn-num' onClick={(e)=>handleclick("1")}>1</Button></td>
              <td><Button className='btn-num' onClick={(e)=>handleclick("2")}>2</Button></td>
              <td><Button className='btn-num' onClick={(e)=>handleclick("3")}>3</Button></td>
              <td><Button className='btn-op' onClick={(e)=>handleclick("+")}>+</Button></td>
            </tr>
             <tr>
              <td><Button className='btn-num' onClick={(e)=>handleclick("4")}>4</Button></td>
              <td><Button className='btn-num' onClick={(e)=>handleclick("5")}>5</Button></td>
              <td><Button className='btn-num' onClick={(e)=>handleclick("6")}>6</Button></td>
              <td><Button className='btn-op' onClick={(e)=>handleclick("-")}>-</Button></td>
            </tr>
             <tr>
              <td><Button className='btn-num' onClick={(e)=>handleclick("7")}>7</Button></td>
              <td><Button className='btn-num' onClick={(e)=>handleclick("8")}>8</Button></td>
              <td><Button className='btn-num' onClick={(e)=>handleclick("9")}>9</Button></td>
              <td><Button className='btn-op' onClick={(e)=>handleclick("*")}>x</Button></td>
            </tr>
             <tr>
              <td><Button className='btn-num' onClick={(e)=>handleclick("/")}>/</Button></td>
              <td><Button className='btn-num' onClick={(e)=>handleclick("0")}>0</Button></td>
              <td><Button className='btn-num' onClick={(e)=>handleclick(".")}>.</Button></td>
              <td><Button className='btn-op' onClick={(e)=>equal("=")}>=</Button></td>
            </tr>
            <tr>
              <td  colSpan={4}><Button className='reset' onClick={(e)=>reset()}>Reset</Button></td> 
            </tr>
            </tbody>
          </Table>
        </div>
        </div>
      </Container>
    </div>
  );
}

export default App;

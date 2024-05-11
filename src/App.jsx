import { useState } from 'react';
import './App.css'
import Trivia from './components/Trivia';

function App() {
  const [questionNumber,setQuestionNumber]=useState(10);
  const moneyPyramid=[
    {id:1, amount:"$100"},
    {id:2, amount:"$200"},
    {id:3, amount:"$300"},
    {id:4, amount:"$400"},
    {id:5, amount:"$800"},
    {id:6, amount:"$1600"},
    {id:7, amount:"$3200"},
    {id:8, amount:"$6400"},
    {id:9, amount:"$12800"},
    {id:10, amount:"$25600"}
  ].reverse()
  return (
    <div className="app">
     <div className="main">
      <div className="top">
        <div className="timer">30</div>
      </div>
      <div className="bottom"><Trivia/></div>
     </div>
     <div className="pyramid">
      <ul className='moneylist'>
{moneyPyramid.map((m)=>(
  <li className={questionNumber === m.id? "moneyListItem active":"moneyListItem"}>
    <span className='moneyListItemNumber'>{m.id}</span>
    <span className='moneyListItemAmount'>{m.amount}</span>
  </li>
))}
      </ul>
     </div>
    </div>
  );
}

export default App;

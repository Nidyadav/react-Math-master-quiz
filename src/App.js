import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Quiz from './components/Quiz/Quiz';
import React from "react";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Welcome from './components/welcome/welcome';
function App() {
  // return (
  //   <div id="mathapp" className='Mathapp'>
  //    <Quiz></Quiz>
  //   </div>
  // );
  return(
    <div>
      <Welcome></Welcome>
    </div>
  );
}
export default App;

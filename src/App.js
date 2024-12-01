import './App.css';
//import QuizManager from "./components/QuizManager";
import React from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Container,Row,Col} from "react-bootstrap";
import Welcome from "./components/Home";
import Footer from './components/Footer';

function App() {
  
//   return (
//     <div className="App">
//       <header className="App-header">
//       <p>
//         Maths Quiz     
//       </p> 
//         </header> 
//         <QuizManager/>
//     </div>
// );
return (
  <Router>
      
      <Container>
          <Row>
              <Col lg={45}>
                 <Switch>
                      <Route   path="/"  exact  component={Welcome}/>
                
                 </Switch>
              </Col>
          </Row>
      </Container>
      <Footer/>
  </Router>
);
}

export default App;

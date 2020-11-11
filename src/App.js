
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Navbar/Header';
import Services from './components/Services/Services';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Switch>
      <Route path="/" exact component={Main}/>
     <Route path="/services" component={Services}/>
     </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;

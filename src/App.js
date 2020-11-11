
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Navbar/Header';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Route path="/" component={Main}/>
     
    </div>
    </BrowserRouter>
  );
}

export default App;

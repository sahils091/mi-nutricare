import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Main from "./components/Main/Main";
import Header from "./components/Navbar/Header";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
        </Switch>
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;

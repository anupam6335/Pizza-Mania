import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { Navbar } from "./components/allComp";
import { Homescreen, Cartscreen, Registerscreen, Loginscreen } from "./screens/allScreens";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={Cartscreen} />
        <Route path="/register" exact component={Registerscreen} />
        <Route path="/login" exact component={Loginscreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;

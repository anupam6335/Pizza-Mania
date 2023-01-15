import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Navbar } from "./components/allComp";
import { Homescreen, Cartscreen, Registerscreen, Loginscreen, Ordersscreen, Adminscreen } from "./screens/allScreens";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={Cartscreen} />
        <Route path="/register" exact component={Registerscreen} />
        <Route path="/login" exact component={Loginscreen} />
        <Route path='/orders' exact component={Ordersscreen}/>
        <Route path='/admin' component={Adminscreen}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

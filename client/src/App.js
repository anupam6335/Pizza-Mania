import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/allComp";
import {Homescreen} from "./screens/allScreens";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homescreen />
    </div>
  );
}

export default App;

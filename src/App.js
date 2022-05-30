import logo from "./logo.svg";
import "./App.css";
import { Noticia } from "./components/Noticia";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <Noticia /> */}
    </div>
  );
}

export default App;

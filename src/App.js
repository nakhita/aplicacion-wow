import "./App.css";
import Header from "./components/Header";
import ClassList from "./components/ClassList";
import { Provider } from "./context/claseWowContext";

function App() {
  return (
    <Provider>
      <div className="contenedor">
        <Header></Header>
        <ClassList></ClassList>
      </div>
    </Provider>
  );
}

export default App;

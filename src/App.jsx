import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Swipe from "./components/Swipe";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Swipe/>
      <ItemListContainer greeting={"No se encontraron productos"}/>
      <Footer/>
    </div>
  );
}

export default App;

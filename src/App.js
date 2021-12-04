import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components//Footer/Footer";
import { HashRouter as Router } from "react-router-dom"; //using hasrouter since githubpages does not have a configuration to redirect to index.html
import ShoppingCartContext from "./state/ShoppingCartContext";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  console.log(items);
  return (
    <Router>
      <div className="App">
        <ShoppingCartContext.Provider value={{ items, setItems }}>
          <Header />
          <Content />
        </ShoppingCartContext.Provider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

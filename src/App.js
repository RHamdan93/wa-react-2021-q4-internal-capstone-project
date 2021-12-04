import "./App.css";
//import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components//Footer/Footer";
import { HashRouter as Router } from "react-router-dom"; //using hasrouter since githubpages does not have a configuration to redirect to index.html

function App() {
  //const { data, isLoading } = useFeaturedBanners();

  return (
    <Router>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
//import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  //const { data, isLoading } = useFeaturedBanners();

  return (
    <Router basename="/wa-react-2021-q4-internal-capstone-project">
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

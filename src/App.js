import "./App.css";
//import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  //const { data, isLoading } = useFeaturedBanners();

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

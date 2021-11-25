import "./App.css";
//import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import * as Constants from "./Constants";

function App() {
  //const { data, isLoading } = useFeaturedBanners();
  const [currentPage, setCurrentPage] = useState(Constants.sitePages.HOME);

  return (
    <div className="App">
      <Header {...{ setCurrentPage }} />
      <Content {...{ currentPage, setCurrentPage }} />
      <Footer />
    </div>
  );
}

export default App;

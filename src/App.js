import ActiveCategory from "./Components/ActiveCategory/ActiveCategory";
import Categories from "./Components/Categories/Categories";
import { Footer } from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <ActiveCategory />
      <Products />
      <Footer />
    </div>
  );
}

export default App;

import Categories from "./Components/Categories/Categories";
import { Header } from "./Components/Header/Header";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Products />
    </div>
  );
}

export default App;

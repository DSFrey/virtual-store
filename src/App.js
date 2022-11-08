import ActiveCategory from "./Components/ActiveCategory/ActiveCategory";
import Categories from "./Components/Categories/Categories";
import { Header } from "./Components/Header/Header";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <ActiveCategory />
      <Products />
    </div>
  );
}

export default App;

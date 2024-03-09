import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import { CartShowProvide } from "./Contexts/CartShowContext";

function App() {
  // const [cartIsShow, setCartIsShow] = useState(false);
  return (
    <>
      <CartShowProvide>
        <Header />
        <Hero />
        <Products />
      </CartShowProvide>
    </>
  );
}

export default App;

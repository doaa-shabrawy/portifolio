import 'bootstrap/dist/css/bootstrap.min.css'

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ProductDetails from "./components/products/ProductDetails";
function App() {
  return (
    <div>
    <Nav/>
    {/* <Home/> */}
    <ProductDetails/>
      <Footer/>
    </div>
  );
}

export default App;

import Navbarnew from "./component/Navbarnew";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// IMPORT BOOSTRAP CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from "./component/Car";
import Bike from "./component/Bike";
import AddProduct from "./component/AddProduct";
import TechnicalIteams from "./component/TechnicalIteams";
import Shoes from "./component/Shoes";
import Jeep from "./component/Jeep";
import Footer from "./component/Footer";
// IMPORT TOASTIFY
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>

      <Router>

        <Navbarnew />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path='/products/:category' element={<Car />} />
          <Route path='/products/:category' element={<Bike />} />
          <Route path='/products/:category' element={<TechnicalIteams />} />
          <Route path='/products/:category' element={<Shoes />} />
          <Route path='/products/:category' element={<Jeep />} />

        </Routes>

        <Footer />

      </Router>

      <ToastContainer theme="dark" />

    </>
  );
}

export default App;

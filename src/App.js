import Navbarnew from "./component/Navbarnew";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// IMPORT BOOSTRAP CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from "./component/Car";
import Bike from "./component/Bike";
import AddProduct from "./component/AddProduct";

function App() {
  return (
    <>

      <Router>
        {/* {isAthenticated ? <DashBordNav /> : <NavbarMain />} */}
        <Navbarnew />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path='/products/:category' element={<Car />} />
          <Route path='/products/:category' element={<Bike />} />

        </Routes>

        {/* <Footer /> */}

      </Router>

    </>
  );
}

export default App;

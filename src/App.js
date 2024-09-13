import Navbarnew from "./component/Navbarnew";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// IMPORT BOOSTRAP CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>

      <Router>
        {/* {isAthenticated ? <DashBordNav /> : <NavbarMain />} */}
        <Navbarnew />
        <Routes>

          <Route path='/' element={<Home />} />

        </Routes>

        {/* <Footer /> */}

      </Router>

    </>
  );
}

export default App;

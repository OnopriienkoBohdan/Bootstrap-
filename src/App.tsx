import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./Component/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./Component/Link/Home";
import { Users } from "./Component/Link/Users";
import { About } from "./Component/Link/About";
import { Footer } from "./Component/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/" element={<Users />} />
          <Route path="about/" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

import { Routes, Route, Link } from "react-router-dom";
import About from "./component/About";
import Contract from "./component/Contract";
import Home from "./component/Home";

function App() {
  return (
    <div>
      
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contract">Contract</Link>
        </li>
      </ul>

      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contract" element={<Contract />} />
      </Routes>
    </div>
  );
}

export default App;
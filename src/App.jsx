import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./Home";
import Signtist from "./components/projects/Signtist";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signtist" element={<Signtist />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App;
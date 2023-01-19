import Counter from "./components/Counter";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/counter" element={<Counter />}></Route>
    </Routes>
  );
}

export default App;

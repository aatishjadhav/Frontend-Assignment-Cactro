import { Routes, Route } from "react-router-dom";
import SlackLanding from "./pages/SlackLanding";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<SlackLanding />} /> */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

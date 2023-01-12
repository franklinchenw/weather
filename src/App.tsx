import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Weather } from "./components/pages/weather";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

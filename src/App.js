import Header from "./Components/Header";
import HandelInformation from "./Components/HandelInformation";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exect path="/" element={<Header />} />
          <Route path="/karan" element={<HandelInformation />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

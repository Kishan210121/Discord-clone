import Header from "./Components/Header";
import HandelInformation from "./Components/HandelInformation";
import ChatHome from "./Components/ChatHome"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exect path="/" >
            <Header/>
            <HandelInformation/>
          </Route>
          <Route path="/karan" element={<ChatHome />} />
        </Routes>
    ``</BrowserRouter>
    </>
  );
}

export default App;

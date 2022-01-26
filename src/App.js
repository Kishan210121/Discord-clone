
import Header from "./Components/Header";
import Home from "./Components/Home"
import Signup from "./Components/Signup";
import Signin from "./Components/SignIn";
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
          <Route exect path="/" element={<Header/>} >
            
          </Route>
          <Route exect path="/karan" element={<Home/>}/>
          <Route exect path="/signup" element={<Signup/>}/>
          <Route exect path="/signin" element={<Signin/>}/>
        </Routes>
    ``</BrowserRouter>
    </>
  );
}

export default App;

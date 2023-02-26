import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom";
import Navigation from "./navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component.jsx";



const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path="sign-in" element={<Authentication/>} />
        </Route>
    </Routes>
  )
};

export default App;

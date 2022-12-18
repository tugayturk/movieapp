import { Toaster } from "react-hot-toast";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import MoviePage from "./pages/MoviePage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
function App() {
  return (
    <div className="App">
       <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

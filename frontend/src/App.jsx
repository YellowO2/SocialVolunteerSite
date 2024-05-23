import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Post from "./pages/post";
// import About from './pages/About';
// import Contact from './pages/Contact';
import CreatePost from "./pages/create_post";
import NavBar from "./components/nav_bar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/create-post" element={<CreatePost />} />

          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Your Website 2023
            </p>
          </div>
        </footer>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;

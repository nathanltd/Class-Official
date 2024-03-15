import "./App.css";
import { useEffect } from "react";
//React Router Dom--------------------
import { Route, Routes, useLocation } from "react-router-dom";
//Components
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Class from "./Pages/Class/Class";
import Tutor from "./Pages/Tutor/Tutor";
import BookStore from "./Pages/BookStore/BookStore";
import Landing from "./Pages/Landing/Landing";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Class />} path="/class" />
        <Route element={<Tutor />} path="/tutor" />
        <Route element={<BookStore />} path="/bookstore" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

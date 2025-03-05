 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import PostsList from "./pages/postsList";
 import AboutUs from "./pages/aboutUs";
 import HomePage from "./pages/HomePage";
 import DefoultLayout from "./layouts/Defoultlayout";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Rout Component={DefoultLayout}>
            <Rout path="/" Component={HomePage} />
            <Rout path="/about-us" Component={AboutUs} />
            <Rout path="/posts-list" Component={PostsList} />
            </Rout>
        </Routes>
      </BrowserRouter>
       
    </>
  );
}

export default App

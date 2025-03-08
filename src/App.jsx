 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import PostsList from "./pages/postsList";
 import AboutUs from "./pages/aboutUs";
 import HomePage from "./pages/HomePage";
 import DefoultLayout from "./layouts/Defoultlayout";
 import SinglePost from "./pages/SinglePost";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefoultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/about-us" Component={AboutUs} />
            <Route path="/posts-list" Component={PostsList} />
            <Route path="/posts/:id" Component={PostsList} />
            </Route>
        </Routes>
      </BrowserRouter>
       
    </>
  );
}

export default App

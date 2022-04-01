import { Routes, Route } from "react-router-dom";
import { Home, Signin, Signup, Notes } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  );
};

export { Router };

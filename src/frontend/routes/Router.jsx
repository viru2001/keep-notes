import { Routes, Route } from "react-router-dom";
import { Home, Signin, Signup, Notes, Archives, Labels, Trash } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/archives" element={<Archives />} />
      <Route path="/labels" element={<Labels />} />
      <Route path="/trash" element={<Trash />} />
    </Routes>
  );
};

export { Router };

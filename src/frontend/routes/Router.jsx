import { Routes, Route } from "react-router-dom";
import { Home } from "frontend/pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export { Router };

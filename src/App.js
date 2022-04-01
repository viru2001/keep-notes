import "./App.css";
import { Footer, Navbar } from "./frontend/components";
import { Router } from "./frontend/routes/Router";

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;

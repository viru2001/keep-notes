import "./App.css";
import { Footer, Navbar, Sidebar } from "./frontend/components";
import { Router } from "./frontend/routes/Router";
import { useNotes } from "./frontend/context/";
import { useLocation } from "react-router-dom";
function App() {
  const {
    notesState: { isSidebarOpen },
  } = useNotes();
  const { pathname } = useLocation();
  const sidebarHiddenPaths = ["/", "/signin", "/signup"];
  return (
    <>
      <Navbar />
      <div
        className={
          !sidebarHiddenPaths.includes(pathname)
            ? "d-flex main-content-page-wrapper"
            : undefined
        }
      >
        {!sidebarHiddenPaths.includes(pathname) && isSidebarOpen && <Sidebar />}
        <Router />
      </div>
      <Footer />
    </>
  );
}

export default App;

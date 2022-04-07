import "./App.css";
import { Footer, MobileSidebar, Navbar, Sidebar } from "./frontend/components";
import { Router } from "./frontend/routes/Router";
import { useNotes } from "./frontend/context/";
import { useLocation } from "react-router-dom";
function App() {
  const {
    notesState: { isSidebarOpen, isMobileSidebarOpen },
  } = useNotes();
  const { pathname } = useLocation();
  const sidebarHiddenPaths = ["/", "/signin", "/signup"];
  return (
    <>
      {!sidebarHiddenPaths.includes(pathname) && isMobileSidebarOpen && (
        <MobileSidebar />
      )}
      <Navbar />
      <div
        className={
          !sidebarHiddenPaths.includes(pathname)
            ? "d-flex main-content-page-wrapper"
            : null
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

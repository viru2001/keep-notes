import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, useNotes } from "frontend/context";
import { NotesIcon } from "frontend/assets";

import "./Navbar.css";
import { useWindowSize } from "frontend/hooks";
const Navbar = () => {
  const {
    auth: { status, username },
    setAuth,
  } = useAuth();
  const navigate = useNavigate();
  const signOutHandler = setAuth => {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("username");
    setAuth(auth => ({
      ...auth,
      status: false,
      token: null,
      username: "",
    }));
    navigate("/");
  };

  const { pathname } = useLocation();
  const { notesDispatch } = useNotes();
  const sidebarHiddenPaths = ["/", "/signin", "/signup"];

  const { width } = useWindowSize();

  return (
    <>
      <header className="navbar-wrapper d-flex flex-wrap align-center justify-between box-shadow-lg">
        <div className="d-flex pl-4 align-center">
          {!sidebarHiddenPaths.includes(pathname) && (
            <button
              className="btn text-md px-8 hamburger-btn"
              onClick={() => {
                width < 680
                  ? notesDispatch({ type: "MOBILE_SIDEBAR_TOGGLE" })
                  : notesDispatch({ type: "SIDEBAR_TOGGLE" });
              }}
            >
              <i className="fas fa-bars hamburger-icon"></i>
            </button>
          )}

          <div className="d-flex align-center">
            <img src={NotesIcon} alt="Notes" />
            <Link className="brand-name text-dec-none  font-wt-bold p-4" to="/">
              <h1 className="headline-lg">Keep Notes</h1>
            </Link>
          </div>
        </div>
        <section className="d-flex m-2 py-4">
          {pathname === "/" ? (
            <a
              className="btn btn-primary rounded-sm text-sm p-3 mx-4 text-dec-none"
              href="https://github.com/viru2001/keep-notes"
              target="_blank"
              rel="noreferrer"
            >
              <span className="d-flex align-center">
                <i className="fab fa-github mr-3 text-md"></i>
                Github
              </span>
            </a>
          ) : (
            <div className="d-flex align-center mx-8">
              <div className="ml-4">
                {status === true ? (
                  <button
                    className="btn text-dec-none btn-primary rounded-sm text-sm p-4 mr-4"
                    onClick={() => signOutHandler(setAuth)}
                  >
                    Signout
                  </button>
                ) : (
                  <Link
                    to="/signin"
                    className="btn text-dec-none btn-primary rounded-sm text-sm p-4 mr-4"
                  >
                    Signin
                  </Link>
                )}
              </div>
              {username && (
                <h3 className="headline-sm">{`Welcome ${username}`}</h3>
              )}
            </div>
          )}
        </section>
      </header>
    </>
  );
};

export { Navbar };

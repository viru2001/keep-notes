import { Link, useLocation } from "react-router-dom";
import { NotesIcon } from "frontend/assets";

const Navbar = () => {
  const status = false;
  const username = "Viresh";

  const { pathname } = useLocation();

  return (
    <header className="navbar-wrapper d-flex flex-wrap align-center justify-around box-shadow-lg">
      <div className="d-flex align-center">
        <img src={NotesIcon} alt="Notes" />
        <Link className="brand-name text-dec-none  font-wt-bold p-4" to="/">
          <h1 className="headline-lg">Keep Notes</h1>
        </Link>
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
          <div className="d-flex align-center">
            <div className="ml-4">
              {status === true ? (
                <button
                  className="btn text-dec-none btn-primary rounded-sm text-sm p-4 mr-4"
                  onClick={() => {}}
                >
                  Signout
                </button>
              ) : (
                <Link
                  to="/"
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
  );
};

export { Navbar };

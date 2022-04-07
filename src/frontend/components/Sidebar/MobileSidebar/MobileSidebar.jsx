import { useNotes } from "frontend/context";
import { NotesIcon } from "frontend/assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./MobileSidebar.css";
const MobileSidebar = () => {
  const activeStyle = {
    backgroundColor: "#a7f6ff",
  };
  const {
    notesState: { sortByTime },
    notesDispatch,
  } = useNotes();
  const { pathname } = useLocation();
  return (
    <div
      className="modal-wrapper w-100 h-100 justify-center align-center p-fixed"
      id="simple-modal-wrapper"
    >
      <div className="modal-container mobile-modal-container">
        <div className="d-flex justify-between">
          <div className="d-flex align-center">
            <img src={NotesIcon} alt="Notes" />
            <Link className="brand-name text-dec-none  font-wt-bold p-4" to="/">
              <h1 className="headline-lg">Keep Notes</h1>
            </Link>
          </div>
          <button
            className="btn btn-icon btn-primary px-8 hamburger-btn"
            onClick={() => notesDispatch({ type: "MOBILE_SIDEBAR_TOGGLE" })}
          >
            <span className="material-icons-outlined text-lg">close</span>
          </button>
        </div>
        <div className="d-flex flex-col mobile-sidebar-wrapper">
          <ul className="d-flex flex-col mt-6">
            <li>
              <NavLink
                className="sidebar-nav-link-item text-dec-none font-wt-semibold d-flex align-center"
                to="/notes"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <span className="material-icons-outlined mr-8">
                  description
                </span>
                Notes
              </NavLink>
            </li>
            <li>
              <NavLink
                className="sidebar-nav-link-item text-dec-none font-wt-semibold d-flex align-center"
                to="/archives"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <span className="material-icons-outlined mr-8">archive</span>
                Archives
              </NavLink>
            </li>
            <li>
              <NavLink
                className="sidebar-nav-link-item text-dec-none font-wt-semibold d-flex align-center"
                to="/labels"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <span className="material-icons-outlined mr-8">label</span>
                Labels
              </NavLink>
            </li>
            <li>
              <NavLink
                className="sidebar-nav-link-item text-dec-none font-wt-semibold d-flex align-center"
                to="/trash"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <span className="material-icons-outlined mr-8">delete</span>
                Trash
              </NavLink>
            </li>
          </ul>

          {/* sort by time */}
          {pathname === "/notes" && (
            <fieldset className="mt-4 border-none ml-8 mt-8">
              <div className="d-flex align-center justify-between">
                <legend className="headline-sm font-wt-semibold">
                  Sort By Time
                </legend>
                <button
                  className="btn btn-clear mr-8"
                  onClick={() => {
                    notesDispatch({ type: "SORT_BY_TIME", payload: "" });
                  }}
                >
                  Clear
                </button>
              </div>
              <ul className="d-flex flex-col text-sm">
                <li className="pt-2">
                  <label htmlFor="newest-first" className="cursor-pointer">
                    <input
                      type="radio"
                      id="newest-first"
                      name="sort"
                      value="newest-first"
                      checked={sortByTime === "NEWEST_FIRST"}
                      onChange={e =>
                        notesDispatch({
                          type: "SORT_BY_TIME",
                          payload: e.target.value,
                        })
                      }
                    />
                    <span className="ml-4">Newest First</span>
                  </label>
                </li>
                <li className="pt-2">
                  <label htmlFor="oldest-first" className="cursor-pointer">
                    <input
                      type="radio"
                      id="oldest-first"
                      name="sort"
                      value="oldest-first"
                      checked={sortByTime === "OLDEST_FIRST"}
                      onChange={e =>
                        notesDispatch({
                          type: "SORT_BY_TIME",
                          payload: e.target.value,
                        })
                      }
                    />
                    <span className="ml-4">Oldest First </span>
                  </label>
                </li>
              </ul>
            </fieldset>
          )}
        </div>
      </div>
    </div>
  );
};
export { MobileSidebar };

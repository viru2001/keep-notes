import { useNotes } from "frontend/context";
import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  const activeStyle = {
    backgroundColor: "#a7f6ff",
  };
  const {
    notesState: { sortByTime },
    notesDispatch,
  } = useNotes();
  const { pathname } = useLocation();
  return (
    <div className="d-flex flex-col">
      <ul className="sidebar-wrapper d-flex flex-col mt-6">
        <li>
          <NavLink
            className="sidebar-nav-link-item text-dec-none font-wt-semibold d-flex align-center"
            to="/notes"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <span className="material-icons-outlined mr-8">description</span>
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
  );
};
export { Sidebar };

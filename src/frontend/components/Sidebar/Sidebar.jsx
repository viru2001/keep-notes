import { NavLink } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  const activeStyle = {
    backgroundColor: "#a7f6ff",
  };
  return (
    <ul className="sidebar-wrapper d-flex flex-col mt-6">
      <li>
        <NavLink
          className="sidebar-nav-link-item text-dec-none font-wt-semibold d-flex align-center"
          to="/notes"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span>
            {" "}
            <i className="fas fa-sticky-note text-md mr-8"></i>
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
          <span>
            {" "}
            <i className="fas fa-archive text-md mr-8"></i>
          </span>
          Archives
        </NavLink>
      </li>
      <li>
        <NavLink
          className="sidebar-nav-link-item text-dec-none font-wt-semibold d-flex align-center"
          to="/labels"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span>
            {" "}
            <i className="fas fa-tag text-md mr-8"></i>
          </span>
          Labels
        </NavLink>
      </li>
      <li>
        <NavLink
          className="sidebar-nav-link-item text-dec-none font-wt-semibold d-flex align-center"
          to="/trash"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span>
            {" "}
            <i className="fas fa-trash text-md mr-8"></i>
          </span>
          Trash
        </NavLink>
      </li>
    </ul>
  );
};
export { Sidebar };

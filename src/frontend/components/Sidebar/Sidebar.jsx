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
          <span class="material-icons-outlined mr-8">description</span>
          Notes
        </NavLink>
      </li>
      <li>
        <NavLink
          className="sidebar-nav-link-item text-dec-none font-wt-semibold d-flex align-center"
          to="/archives"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span class="material-icons-outlined mr-8">archive</span>
          Archives
        </NavLink>
      </li>
      <li>
        <NavLink
          className="sidebar-nav-link-item text-dec-none font-wt-semibold d-flex align-center"
          to="/labels"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span class="material-icons-outlined mr-8">label</span>
          Labels
        </NavLink>
      </li>
      <li>
        <NavLink
          className="sidebar-nav-link-item text-dec-none font-wt-semibold d-flex align-center"
          to="/trash"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span class="material-icons-outlined mr-8">delete</span>
          Trash
        </NavLink>
      </li>
    </ul>
  );
};
export { Sidebar };

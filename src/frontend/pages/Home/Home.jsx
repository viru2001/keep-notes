import { Link } from "react-router-dom";
import { HomepageImage } from "frontend/assets";
import "./Home.css";
const Home = () => {
  return (
    <div className="homepage-wrapper d-flex flex-wrap align-center container-center">
      <div className="homepage-details m-8">
        <h2 className="headline-lg">
          Meet your modern{" "}
          <span className="heading-highlight">Notes Taking App</span>
        </h2>
        <p className="text-sm mt-8">
          Manage your daily tasks and workflow in a modern way and boost your
          efficiency without any efforts.
        </p>
        <div className="d-flex flex-col homepage-actions-wrapper">
          <Link
            to="/"
            className="btn btn-primary rounded-sm text-sm p-4 text-dec-none text-center"
          >
            Join now
          </Link>
          <Link
            className="text-dec-none text-sm mt-4 homepage-action-link"
            to="/"
          >
            Already have an account ?
          </Link>
        </div>
      </div>
      <div className="m-8">
        <img
          className="img-responsive"
          src={HomepageImage}
          alt="boy looking at notes"
        />
      </div>
    </div>
  );
};
export { Home };

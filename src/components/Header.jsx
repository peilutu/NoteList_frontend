import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="app-header">
      <Link to="/">
        <h1>#MYNOTE</h1>
      </Link>
    </div>
  );
};

export default Header;

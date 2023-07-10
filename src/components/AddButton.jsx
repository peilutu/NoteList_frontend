import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to="/notes/new" className="floating-button">
      Add New
    </Link>
  );
};

export default AddButton;

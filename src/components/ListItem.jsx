import { Link } from "react-router-dom";

const getTitle = (note) => {
  let title = note.body.split("\n")[0];
  if (title.length > 45) {
    title.slice(0, 45);
  }
  return title;
};

const getTime = (note) => {
  return new Date(note.updated).toLocaleDateString();
};

const getContent = (note) => {
  const title = getTitle(note);
  let content = note.body.replace("\n", " ");
  content = content.replace(title, "");
  if (content.length > 45) {
    return content.slice(0, 45) + "...";
  } else {
    return content;
  }
};

const ListItem = ({ note }) => {
  return (
    <div>
      <Link to={`notes/${note.id}`}>
        <div className="notes-list-item">
          <h4>{getTitle(note)}</h4>
          <p>
            <span>{getTime(note)}</span>
            {getContent(note)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;

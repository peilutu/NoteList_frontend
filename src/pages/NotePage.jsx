import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const NotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState("");

  useEffect(() => {
    getNote();
  }, [id]);

  const getNote = async () => {
    if (id === "new") return;
    const res = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`);
    const data = await res.json();
    setNote(data);
  };

  const updateNote = async () => {
    await fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(note),
    });
  };

  const deleteNote = async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
      method: "DELETE",
    });
    const data = await res.json();

    console.log(data);
    navigate("/");
  };

  const addNote = async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/notes/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    const data = await res.json();
    console.log(data);
  };

  const handleSubmit = () => {
    if (!note.body && id !== "new") {
      deleteNote();
    } else if (id !== "new") {
      updateNote();
    } else if (id === "new" && note !== null) {
      addNote();
    }
    navigate("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h2 onClick={handleSubmit}>🪴 save&back</h2>
        {id !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        defaultValue={note && note.body}
      ></textarea>
    </div>
  );
};

export default NotePage;

import { useEffect } from "react";
import { useState } from "react";
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";

const NotesListPage = () => {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/notes/`);
    const data = await res.json();
    console.log(data);
    setNotes(data);
  };

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782;</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes && notes.map((note) => <ListItem key={note.id} note={note} />)}
      </div>

      <AddButton />
    </div>
  );
};

export default NotesListPage;

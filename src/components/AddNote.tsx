import { Plus, SendHorizontal } from "lucide-react";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

type Note = {
  id: number;
  body: string;
};

const AddNote = () => {
  const context = useContext(NoteContext);

  if (!context) {
    throw new Error("AddNote must be used within a NoteProvider");
  }

  const {
    notes,
    setNotes,
    isEdit,
    setIsEdit,
    selectedNote,
    newNote,
    setNewNote,
  } = context;

  const addNewNote = () => {
    if (isEdit) {
      updateNote();
    } else {
      const note = {
        id: Date.now(),
        body: newNote,
      };
      setNotes([...notes, note]);
      setIsEdit(false);
    }
    setNewNote("");
  };

  const updateNote = () => {
    if (!selectedNote) return;
    const updatedNote: Note = { ...selectedNote, body: newNote };
    setNotes(
      notes.map((note) => (note.id === selectedNote.id ? updatedNote : note))
    );
  };

  return (
    <div className="absolute top-1/2 right-10 ">
      <div className="flex items-center gap-5 p-5 border-2 rounded-3xl animate-flicker">
        <input
          placeholder="write a new note..."
          className="bg-white border-2 rounded-3xl h-20 px-5"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button
          className="h-10 w-10 rounded-full flex justify-center items-center bg-yellow-400 cursor-pointer"
          onClick={addNewNote}
        >
          {isEdit ? <SendHorizontal /> : <Plus />}
        </button>
      </div>
    </div>
  );
};

export default AddNote;

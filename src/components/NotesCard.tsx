import { Pencil, Trash } from "lucide-react";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

type Note = {
  id: number;
  body: string;
};

type NotesCardProps = {
  item: Note;
};

const NotesCard = ({ item }: NotesCardProps) => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("AddNote must be used within a NoteProvider");
  }

  const {
    notes,
    setNotes,
    setIsEdit,
    selectedNote,
    setSelectedNote,
    setNewNote,
  } = context;

  const updateNote = (id: number): void => {
    const noteToEdit = notes.find((note) => note.id === id) || null;
    if (!noteToEdit) return;
    setIsEdit(true);
    setSelectedNote(noteToEdit);
    setNewNote(selectedNote?.body ?? "");
  };
  const deleteNote = (id: number): void => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="w-full h-48 sm:w-80 rounded-tr-[50px] rounded-bl-[50px] p-5 bg-gray-300 flex flex-col justify-between">
      <p className="text-md text-gray-700">{item.body}</p>
      <div className="flex justify-end items-center gap-2 border-t-2 pt-2">
        <Pencil
          className=" text-green-600 cursor-pointer"
          size={22}
          onClick={() => updateNote(item.id)}
        />
        <Trash
          className=" text-red-600 cursor-pointer"
          size={22}
          onClick={() => deleteNote(item.id)}
        />
      </div>
    </div>
  );
};

export default NotesCard;

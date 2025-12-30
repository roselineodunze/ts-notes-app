import { createContext, ReactNode, useState } from "react";

type Note = {
  id: number;
  body: string;
};

type NoteContextType = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  selectedNote: Note | null;
  setSelectedNote: React.Dispatch<React.SetStateAction<Note | null>>;
  newNote: string;
  setNewNote: React.Dispatch<React.SetStateAction<string>>;
};

type NoteProviderProps = {
  children: ReactNode;
};

export const NoteContext = createContext<NoteContextType | undefined>(undefined);

const NoteProvider = ({ children }: NoteProviderProps) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [selectedNote, setSelectedNote] = useState<Note | null>(null)
  const [newNote, setNewNote] = useState<string>("");


  const contextData: NoteContextType = { notes, setNotes, isEdit, setIsEdit, selectedNote, setSelectedNote, newNote, setNewNote };

  return (
    <NoteContext.Provider value={contextData}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;

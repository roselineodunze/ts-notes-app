import PageLayout from "./layouts/PageLayout";
import { Route, Routes } from "react-router-dom";
import NotesPage from "./pages/NotesPage";

function App() {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={<NotesPage />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;

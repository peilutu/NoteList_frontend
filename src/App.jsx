import Header from "./components/Header";
import NotePage from "./pages/NotePage";
import NotesListPage from "./pages/NotesListPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<NotesListPage />} />
            <Route path="/notes/:id" element={<NotePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle";
import { ToastContainer } from 'react-toastify';

import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import SubjectsPage from "./pages/SubjectsPage"
import TutorsPage from "./pages/TutorsPage";
import TutorPage from "./pages/TutorPage";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/subjects" element={<SubjectsPage />} />
          <Route path="tutors/:subjectId" element={<TutorsPage />} />
          <Route path="/tutor/:tutorId" element={<TutorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
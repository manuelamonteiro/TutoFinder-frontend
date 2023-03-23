import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle";

import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import SubjectsPage from "./pages/SubjectsPage"
import TutorsPage from "./pages/TutorsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/subjects" element={<SubjectsPage />} />
          <Route path="/tutors/:subjectId" element={<TutorsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
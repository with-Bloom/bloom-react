import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/Home';
import QuestionPage from 'pages/Question';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/question" element={<QuestionPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

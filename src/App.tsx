import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ErrorPage from 'pages/Error';
import HomePage from 'pages/Home';
import QuestionPage from 'pages/Question';
import ResultPage from 'pages/Result';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/question" element={<QuestionPage />}></Route>
        <Route path="/result" element={<ResultPage />}></Route>
        <Route path="/error" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

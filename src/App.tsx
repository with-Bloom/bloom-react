import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

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
      </Routes>
    </Router>
  );
};

export default App;

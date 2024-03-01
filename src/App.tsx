import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AnswerProvider } from 'context/AnswerContext';
import { PageProvider } from 'context/PageContext';

import ErrorPage from 'pages/Error';
import HomePage from 'pages/Home';
import QuestionPage from 'pages/Question';
import ResultPage from 'pages/Result';

const App = () => {
  return (
    <AnswerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/question"
            element={
              <PageProvider>
                <QuestionPage />
              </PageProvider>
            }
          ></Route>
          <Route
            path="/result"
            element={
              <PageProvider>
                <ResultPage />
              </PageProvider>
            }
          ></Route>
          <Route path="/error" element={<ErrorPage />}></Route>
          <Route path="*" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </AnswerProvider>
  );
};

export default App;

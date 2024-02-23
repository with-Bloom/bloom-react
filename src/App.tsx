import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { PageContextProvider } from 'context/PageContext';

import ErrorPage from 'pages/Error';
import HomePage from 'pages/Home';
import QuestionPage from 'pages/Question';
import ResultPage from 'pages/Result';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/question"
          element={
            <PageContextProvider>
              <QuestionPage />
            </PageContextProvider>
          }
        ></Route>
        <Route
          path="/result"
          element={
            <PageContextProvider>
              <ResultPage />
            </PageContextProvider>
          }
        ></Route>
        <Route path="/error" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

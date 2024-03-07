import { AnswerProvider } from 'context/AnswerContext';
import { PageProvider } from 'context/PageContext';

import Router from './routes/Router';

const App = () => {
  return (
    <AnswerProvider>
      <PageProvider>
        <Router />
      </PageProvider>
    </AnswerProvider>
  );
};

export default App;

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Edit from 'pages/Edit';
import Error from 'pages/Error';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Question from 'pages/Question';
import Result from 'pages/Result';

import Root from './Root';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: 'question', element: <Question /> },
        { path: 'result', element: <Result /> },
        { path: 'edit', element: <Edit /> },
        { path: 'error', element: <Error /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

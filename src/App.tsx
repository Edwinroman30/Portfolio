import './App.css'
import 'bulma/css/bulma.min.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import SkeletonPage from './pages/SkeletonPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ErrorPage from './pages/ErrorPage';

const appBrowserRouter = createBrowserRouter([
  {
    path : '/',
    element: <SkeletonPage></SkeletonPage>,
    errorElement: <ErrorPage/>,
    children : [
      {
        index : true,
        element: <HomePage/>
      },
      {
        path: '*',
        element: <NotFoundPage/>
      }
    ]
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={appBrowserRouter}></RouterProvider>
    </>
  )
}

export default App;

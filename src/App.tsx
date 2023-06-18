import './App.css'
import 'bulma/css/bulma.min.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import SkeletonPage from './pages/SkeletonPage';
import HomePage from './pages/HomePage';

const appBrowserRouter = createBrowserRouter([
  {
    path : '/',
    element: <SkeletonPage></SkeletonPage>,
    children : [
      {
        index : true,
        element: <HomePage/>
      }
    ]
  }
]);


function App() {

  return (
    <>
      <RouterProvider router={appBrowserRouter}></RouterProvider>
    </>
  )
}

export default App;

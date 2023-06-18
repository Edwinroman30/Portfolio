import './App.css'
import 'bulma/css/bulma.min.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import SkeletonPage from './pages/SkeletonPage';


const appBrowserRouter = createBrowserRouter([
  {
    path : '/',
    element: <SkeletonPage></SkeletonPage>
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

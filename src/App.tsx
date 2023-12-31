import './App.css'
import 'bulma/css/bulma.min.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BlogLayoutPage from './pages/blog/BlogLayoutPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PostListingPage from './pages/blog/PostListingPage';
import SkeletonPage from './pages/SkeletonPage';
import WorkingInProgressPage from './pages/shared/WorkingInProgressPage';

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
        path: 'sobre-mi',
        element: <AboutPage/>
      },
      {
        path: 'blog',
        element: <BlogLayoutPage></BlogLayoutPage>,
        children: [
          {
            index: true,
            element: <PostListingPage/>
          },
          {
            path: 'consejos-para-un-junior-developer-potenciando-tu-carrera',
            element: <WorkingInProgressPage/>,
          }
        ]
      },
      {
        path: 'portafolio',
        element: <WorkingInProgressPage/>
      },
      {
        path: 'contacto',
        element: <ContactPage/>
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

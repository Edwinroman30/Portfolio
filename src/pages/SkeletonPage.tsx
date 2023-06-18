import Navbar from '../components/Navbar/Navbar';
import './SkeletonPage.css';
import {Outlet} from 'react-router-dom';

function SkeletonPage() {
  
  return (
    <>
      <Navbar/>
      <div className="container">
          <h3>Home</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias ipsa consequatur cum ea non debitis architecto ducimus. Aperiam maiores perferendis pariatur eos enim assumenda nulla id suscipit. Ipsam, aperiam.</p>
          <Outlet/>
      </div>
    </>
  )
}

export default SkeletonPage
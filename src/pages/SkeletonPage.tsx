import './SkeletonPage.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';
import {Outlet} from 'react-router-dom';

function SkeletonPage() {
  
  return (
    <>
      <Navbar/>

      <section className="is-large py-6">
        <Outlet/>
      </section>
      
      <Footer/>
    </>
  )
}

export default SkeletonPage
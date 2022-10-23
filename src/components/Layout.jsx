import React, { useEffect, useState } from 'react'
import ScrollButton from '../scrollButton/ScrollButton';
import Footer from './Footer';
import Navbar from './Navbar'

function Layout(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading && <div className="preloader"></div>}
      <Navbar />
      <div className='content' >
        {props.children}
      </div>
      <ScrollButton/>
      <Footer/>
    </div>
  )
}

export default Layout
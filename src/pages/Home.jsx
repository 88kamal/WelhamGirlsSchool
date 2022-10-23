import React, { useEffect } from 'react'
import Carousels from '../components/Carousels'
import Layout from '../components/Layout'
import About from './About'
import AddmissionPro from './AddmissionPro'
// import Addmissionprocedure from './Addmissionprocedure'
import Events from './Events'
// import Facilities from './Facilities'
import Faq from './Faq'
import SimilarSchool from './SimilarSchool'
import Testimonials from './Testimonials'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout >
      <Carousels />
      <About/>
      {/* <Addmissionprocedure/> */}
      <AddmissionPro/>
      <SimilarSchool/>
      <Events/>
      {/* <Facilities/> */}
      <Testimonials/>
      <Faq/>
    </Layout>
  )
}

export default Home
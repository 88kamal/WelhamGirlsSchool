import React from 'react'
import '../stylesheet/AboutSection.css'

function About() {

    return (
      
        <div class="container py-5 about-margin">
            <div class="row  align-items-center flex-lg-row-reverse">
                <div class="col-md-6 col-xl-7 mb-4 mb-lg-0 " >



                    <div class="lc-block position-relative zoom float-end"><img loading="lazy" class="img-fluid image1   shadow " src="images/about/ABOUT US .jpg" sizes="(max-width: 3840px) 100vw, 3840px" width="3840" height="" alt="Photo by Richard Horvath" />
                        <a class="position-absolute top-50 start-50 translate-middle glightbox d-flex justify-content-center align-items-center " href="https://www.youtube.com/watch?v=BKgpLOUYZJ4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" fill="currentColor" class="text-white" viewBox="0 0 16 16" lc-helper="svg-icon">
                                {/* <path className='image1' color='blue' d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path> */}
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-md-6 col-xl-5">
                    <div class="lc-block mb-3">
                        <div className="about-title">
                            <div className="title-head">Know More About <span>Welham Girls School</span></div>
                            <div className="container">
                            {/* <hr className=' text-center  '  /> */}
                            </div>
                            {/* <div className="section-title "><h2 className=' '><small>Dedicated to Excellence</small></h2></div> */}
                        </div>
                    </div>



                    <div class="lc-block mb-4">
                        <div editable="rich">
                            {/* <br /> */}
                            <br />

                            <p class="about-para" style={{
                                textAlign: 'justify',
                                textJustify: 'interWord',
                            }}>Welham Girls School Dehradun is a highly renowned English medium girls boarding school in Dehradun. It was founded in the year 1957 by Ms H.S Oliphant. The school is affiliated with the Indian Certificate of Secondary Education (ICSE) and is also a member of the Indian Public Schools Conference (IPSC). Welham Girls has consistently ranked among the top schools in India by various national and international magazines.
                            The academic selection of Welham Girls School Dehradun is par excellence as it offers a rich learning experience to its students through different clubs and activities like debate, science exhibitions and quizzes, vital for all-round development.
                            Welham Girls School also offers a foreign exchange program to its students. The purpose of the exchange is to improve their language skills and cultural understanding while continuing their studies at school which also helps them compete and win various accolades in competitions at the national and international levels</p>

                        </div>
                    </div>
                    {/* <div class="lc-block">
                        <a class="btn btn-lg btn-primary" href="#" role="button">Get it now</a>
                    </div> */}
                    <div className="button">
                        <a href="who-we-are.html" className="btn-one">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
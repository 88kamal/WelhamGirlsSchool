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
                            <hr className=' text-center' />
                            <div className="section-title "><h2 className=' '><small>Dedicated to Excellence</small></h2></div>
                        </div>
                    </div>



                    <div class="lc-block mb-4">
                        <div editable="rich">

                            <p class="about-para" style={{
                                textAlign: 'justify',
                                textJustify: 'interWord',
                            }}>Welham Girls' school is a leading institution of learning that has been imparting quality education to young girls since its inception in 1957. The foundation stone of Welham Girls school was laid by an English lady named H.S. Oliphant, who always had a burning desire to uplift Indian women through education. Despite having negligible resources, she was determined to bring the change she wanted to witness. She entrusted Miss Grace Mary Linnell, an experienced and respected educationist, to set up the school and run it efficiently. Under the guidance of Miss Linnell, the school developed high academic standards, which helped it grow remarkably.
                                The prolonged legacy of Welham has helped it prove its mettle. There were many able educationists at the pinnacle leading the institution successfully, starting from Miss Linnell in 1957 to Vibha Kapoor the present headmistress. All the serving leaders have massively contributed to the institution.</p>

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
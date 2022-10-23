import React from 'react'
import '../stylesheet/responsive.css'

function Addmissionprocedure() {
    return (
        <div>
            {/* about section */}
            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12 about-column">
                            <div className="about-title">
                                <div className="title-head">Know More About <span>Welham Girls School</span></div><hr />
                                <div className="section-title"><h2><small>Dedicated to Excellence</small></h2></div>
                            </div>
                            <div className="about-content">
                                <div className="text">
                                    <p> Welham Girls' school is a leading institution of learning that has been imparting quality education to young girls since its inception in 1957. The foundation stone of Welham Girls school was laid by an English lady named H.S. Oliphant, who always had a burning desire to uplift Indian women through education. Despite having negligible resources, she was determined to bring the change she wanted to witness. She entrusted Miss Grace Mary Linnell, an experienced and respected educationist, to set up the school and run it efficiently. Under the guidance of Miss Linnell, the school developed high academic standards, which helped it grow remarkably.
                                        The prolonged legacy of Welham has helped it prove its mettle. There were many able educationists at the pinnacle leading the institution successfully, starting from Miss Linnell in 1957 to Vibha Kapoor the present headmistress. All the serving leaders have massively contributed to the institution.
                                    </p>
                                </div>
                                <div className="button">
                                    <a href="who-we-are.html" className="btn-one">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 about-column">
                            <div className="video-gallery">
                                <img src="images/about/ABOUT US .jpg" alt="Awesome Video Gallery" />
                                <div className="overlay-gallery">
                                    <div className="icon-holder">
                                        <div className="icon">
                                            {/* <a class="html5lightbox" title="Sample Video" href="javascript:void(0)"><img src="images/about/play-btn.png" alt="Play Button"/></a>  */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about section */}

            {/* cta section */}
            <section className="cta-section sec-pad centred">
                <div className="container">
                    <div className="cta-title white">
                        <div className="title-head"> ADMISSION PROCEDURE</div>
                        <div className="section-title">
                            <h3 style={{ paddingTop: '20px' }}>
                                <small>The admissions process begins with a registration application. For the girl's name to be registered for the year and class for which admission is desired, a registration fee must be paid together with the application. The charge is only good for the designated academic year and is neither refundable nor modifiable. A girl's registration does not ensure her entrance.
                                    <br />
                                    <br />
                                    <h2>
                                        <small> Registration Requirements</small>
                                    </h2>
                                    <ul>
                                        <li>• One recent passport-size photograph of the girl has to be attached.</li>
                                        <li>• The completed registration form must be sent along with the registration fee and an authenticated photocopy of the student's birth certificate.
                                            (Please Note: The girl's birth certificate needs to be produced by the county's registrar of births and deaths. Affidavits, hospital certificates, or credentials from any other source are not recognised.)
                                        </li>
                                    </ul>
                                    <br />
                                    <h2><small> DOCUMENTS REQUIRED AT THE TIME OF ADMISSION</small></h2>
                                    <ul>
                                        <li>• Original Birth Certificate</li>
                                        <li>• Transfer Certificate</li>
                                        <li>• Character Certificate</li>
                                        <li>• Medical Certificate</li>
                                        <li>• Migration Certificate</li>
                                    </ul>
                                </small>
                                {/* </h3><a href="https://www.linkedin.com/in/sulab-dhungana-912570152/"><img src="images/about/principal.png" style="max-width: 30%; height: auto;" ></a> */}
                                <a href="/admission-notices.html"><h5 className="text-primary admission-more"><center>Read More</center></h5></a>
                            </h3></div>
                    </div>
                </div></section>
            {/* cta section end */}
            {/* service section */}
            <section className="service-section sec-pad centred">
                <div className="container">
                    <div className="service-title">
                        <div className="title-head">Notable <span>Alumnae</span></div>
                        <div className="section-title"><h2> of Welham Girls' School</h2></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 my-3">
                            <div class="card" >
                                <img src="images/service/kareena.jpg" class="card-img-top"  />
                                <div class="card-body">
                                    <h3 className='card-title'><a href="service-details.html">Welham Girls School: <span
                                        style={{ color: '#337ab7' }}>Kareena Kapoor Khan's Journey
                                    </span></a></h3>
                                    <div class="card-text">
                                        <p> Kareena Kapoor Khan, a former student of Welham Girls School, has had an incredible
                                            journey throughout her time spent at Welham.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 my-3">
                            <div class="card" >
                                <img src="images/service/meira.jpg" class="card-img-top"  />
                                <div class="card-body">
                                    <h3 className='card-title'><a href="service-details.html">Meira Kumar: <span style={{ color: '#337ab7' }}>A
                                        go-getter</span></a></h3>
                                    <div class="card-text">
                                        <p>
                                            Meira Singh is an alumna of Welham Girls School, who has relentless worked hard and
                                            added so many feathers to her cap. She was born and raised in Bihar, India. Her
                                            father wanted Meira to get the best education possible..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 my-3">
                            <div class="card" >
                                <img src="images/service/Bindra.jpg" class="card-img-top"  />
                                <div class="card-body">
                                    <h3 className='card-title'><a href="service-details.html">A successful politician and an activist: <span
                                        style={{ color: '#337ab7' }}>Brinda Karat:</span></a></h3>
                                    <div class="card-text">
                                        <p> Brinda Karat is a noteworthy alumnus of From the Welham Girls School who has made
                                            many headlines with her active contribution to Indian politics.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 my-3">
                            <div class="card" >
                                <img src="images/service/tavleen.jpg" class="card-img-top"  />
                                <div class="card-body">
                                    <h3 className='card-text'><a href="service-details.html">An expert Journalist: <span
                                        style={{ color: '#337ab7' }}>Tavleen Kaur:</span></a></h3>
                                    <div class="card-text">
                                        <p> Welham has many precious noble jewels in its tiara. One of them is Tavleen Singh,
                                            who entered the gates of Welhams with a smile on her face. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-alumni"><a href="/news.html" className="btn-two">Read more</a></div>
            </section>
            {/* service section end */}
            {/* fact-counter */}
            <section className="fact-counter centred">
                <div className="title-head"><span>EVENTS</span></div>
                {/* <div class="section-title"><h2>We organize weekly &amp; annual events</h2></div> */}
                <div className="container">
                    <div className="row">
                        <div id="gallery">
                            <div className="row" id="hov">
                                <div className="col-sm-3">
                                    <div className="thumbnail">
                                        <a target="_blank" href="javascript:void(0)">
                                            <img src="images/home/3.jpg" className="img-responsive img-rounded" alt="CulturalProgram" width={300} height={200} />
                                            <div className="caption">
                                                <p><b>Cultural Program</b></p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="thumbnail">
                                        <a target="_blank" href="javascript:void(0)">
                                            <img src="images/home/1.jpg" className="img-responsive img-rounded" alt="SportsDay" width={300} height={200} />
                                            <div className="caption">
                                                <p><b>Annual Sports Event</b></p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="thumbnail">
                                        <a target="_blank" href="javascript:void(0)">
                                            <img src="images/home/4.jpg" className="img-responsive img-rounded" alt="Debate" width={300} height={200} />
                                            <div className="caption">
                                                <p> <b>National Competiton</b></p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="thumbnail">
                                        <a target="_blank" href="javascript:void(0)">
                                            <img src="images/home/2.jpg" className="img-responsive img-rounded" alt="Physical Training" width={300} height={200} />
                                            <div className="caption">
                                                <p><b>Physical Training</b></p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* fact-counter section end */}

            {/* image-gallery */}
            <section className="image-gallery sec-pad">
                <div className="container">
                    <div className="gallery-title centred">
                        <div className="title-head">Featured <span>Gallery</span></div>
                        <div className="section-title"><h2>Recent Programs  &amp; Activities</h2></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 my-2">
                            <div class="card thumbnail" >
                                <img src="images/home/3.jpg" class="card-img-top img-thumbnail rounded-4"  />
                                <div class="card-body">
                                    <div class="caption">
                                        <p><b>Cultural Program</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 my-2">
                            <div class="card thumbnail" >
                                <img src="images/home/1.jpg" class="card-img-top img-thumbnail rounded-4"  />
                                <div class="card-body">
                                    <div class="caption">
                                        <p><b>Annual Sports Event</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 my-2">
                            <div class="card thumbnail" >
                                <img src="images/home/4.jpg" class="card-img-top img-thumbnail rounded-4"  />
                                <div class="card-body">
                                    <div class="caption">
                                        <p> <b>National Competiton</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 my-2">
                            <div class="card thumbnail" >
                                <img src="images/home/2.jpg" class="card-img-top img-thumbnail rounded-4"  />
                                <div class="card-body">
                                    <div class="caption">
                                        <p><b>Physical Training</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/slider/LP-2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
            {/* gallery page end */}
            {/* testimonial section */}
            {/* <section className="testimonial-section sec-pad centred">
                <div className="container">
        
                </div>

                
            </section> */}
            {/* testimonial section end */}
            {/* news section */}
            <section className="news-section sec-pad">
                <div className="container">
                    <div className="news-title centred">
                        <div className="title-head">  Our <span>Blog</span></div>
                        <div className="section-title"><h2>  Latest News</h2></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12 news-column">
                            <div className="single-item">
                                <div className="img-box"><a href="blog-details.html"><figure><img src="images/news/1.jpg" alt="" /></figure></a></div>
                                <div className="lower-content">
                                    <div className="date">15 <span>Jan,</span> 2018</div>
                                    <h3><a href="blog-details.html">Curabit finibus dui sem.</a></h3>
                                    <div className="text"><p>Lorem ipsum dolor amet consectetur adipisic
                                        ing elit sed eiusm tempor incididunt ut labore dolore magna aliqua.</p></div>
                                    <div className="button"><a href="blog-details.html" className="btn-two">Read more</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 news-column">
                            <div className="single-item">
                                <div className="img-box"><a href="blog-details.html"><figure><img src="images/news/2.jpg" alt="" /></figure></a></div>
                                <div className="lower-content">
                                    <div className="date">15 <span>Jan,</span> 2018</div>
                                    <h3><a href="blog-details.html">Proin elit pellent esque.</a></h3>
                                    <div className="text"><p>Lorem ipsum dolor amet consectetur adipisic
                                        ing elit sed eiusm tempor incididunt ut labore dolore magna aliqua.</p></div>
                                    <div className="button"><a href="blog-details.html" className="btn-two">Read more</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 news-column">
                            <div className="single-item">
                                <div className="img-box"><a href="blog-details.html"><figure><img src="images/news/3.jpg" alt="" /></figure></a></div>
                                <div className="lower-content">
                                    <div className="date">15 <span>Jan,</span> 2018</div>
                                    <h3><a href="blog-details.html">Elit pellent esque metus.</a></h3>
                                    <div className="text"><p>Lorem ipsum dolor amet consectetur adipisic
                                        ing elit sed eiusm tempor incididunt ut labore dolore magna aliqua.</p></div>
                                    <div className="button"><a href="blog-details.html" className="btn-two">Read more</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* news section end */}
            {/* newsletter section */}
            <section className="newsletter-section">
                <div className="faq-heading">
                    <h3>FAQ's?</h3>
                </div>
                <div className="content-style-two">
                    <div className="accordion-box">
                        <div className="accordion animated out" data-delay={0} data-animation="fadeInUp">
                            <div className="acc-btn active">
                                <div className="acc-title">When did school start?</div>
                                <div className="toggle-icon">
                                    <i className="plus fa fa-plus" /><i className="minus fa fa-minus" />
                                </div>
                            </div>
                            <div className="acc-content collapsed">
                                <p>The school started in the year 1957.</p>
                            </div>
                        </div>
                        <div className="accordion animated out" data-delay={0} data-animation="fadeInUp">
                            <div className="acc-btn">
                                <div className="acc-title">Which Board does the school follow?</div>
                                <div className="toggle-icon">
                                    <i className="plus fa fa-plus" /><i className="minus fa fa-minus" />
                                </div>
                            </div>
                            <div className="acc-content">
                                <p>The school follows ICSE Board. </p>
                            </div>
                        </div>
                        <div className="accordion animated out" data-delay={0} data-animation="fadeInUp">
                            <div className="acc-btn">
                                <div className="acc-title">What is the teacher-student ratio in school?
                                </div>
                                <div className="toggle-icon">
                                    <i className="plus fa fa-plus" /><i className="minus fa fa-minus" />
                                </div>
                            </div>
                            <div className="acc-content">
                                <p>1:20. </p>
                            </div>
                        </div>
                        <div className="accordion animated out" data-delay={0} data-animation="fadeInUp">
                            <div className="acc-btn">
                                <div className="acc-title">What is the process of registration?</div>
                                <div className="toggle-icon">
                                    <i className="plus fa fa-plus" /><i className="minus fa fa-minus" />
                                </div>
                            </div>
                            <div className="acc-content">
                                <p>Registration can be done by submitting the duly filled Registration Form along with an attested copy of the child's Municipality Birth Certificate, Passport, Aadhar Card and a demand draft for Rs. 20,000/- in favour of "The Principal, Welham Girls' School", payable at Dehradun.
                                </p>
                            </div>
                        </div>
                        <div className="accordion animated out" data-delay={0} data-animation="fadeInUp">
                            <div className="acc-btn">
                                <div className="acc-title">Is the Registration fees refundable?</div>
                                <div className="toggle-icon">
                                    <i className="plus fa fa-plus" /><i className="minus fa fa-minus" />
                                </div>
                            </div>
                            <div className="acc-content">
                                <p>Registration fees in Non-refundable.</p>
                            </div>
                        </div>
                        <div className="faq-button"><a href="/objectives-detail.html">Read more</a></div>
                    </div>
                </div>
            </section>
            {/* newsletter section end */}
            {/* main-footer area */}
            <footer className="main-footer sec-pad">
                {/* <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6 col-xs-12 footer-column">
                        <div class="logo-wideget footer-wideget">
                            <div class="footer-logo"><a href="index-2.html"><figure><img src="images/footer/logo.png" alt=""></figure></a></div>
                            <div class="text">
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin  Richard Latin professor at Hampden.</p>
                            </div>
                            <ul class="footer-social">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                               
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-6 col-xs-12 footer-column">
                        <div class="link-wideget footer-wideget">
                            <div class="footer-title"><h4>Quick Links</h4></div>
                            <ul class="list">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Notices</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Admission</a></li>
                            </ul>
                        </div>
                    </div>
                     <div class="col-md-4 col-sm-6 col-xs-12 footer-column">
                        <div class="gallery-wideget footer-wideget">
                            <div class="footer-title"><h4>Our Gallery</h4></div>
                            <ul class="img-list">
                                <li><a href="gallery.html"><figure><img src="images/footer/1.jpg" alt=""></figure></a></li>
                                <li><a href="gallery.html"><figure><img src="images/footer/2.jpg" alt=""></figure></a></li>
                                <li><a href="gallery.html"><figure><img src="images/footer/3.jpg" alt=""></figure></a></li>
                                <li><a href="gallery.html"><figure><img src="images/footer/4.jpg" alt=""></figure></a></li>
                                <li><a href="gallery.html"><figure><img src="images/footer/5.jpg" alt=""></figure></a></li>
                                <li><a href="gallery.html"><figure><img src="images/footer/6.jpg" alt=""></figure></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 footer-column">
                        <div class="tag-wideget footer-wideget">
                            <div class="footer-title"><h4>Popular Tags</h4></div>
                            <ul class="tag-list">
                                <li><a href="#">Charity</a></li>
                                <li><a href="#">ECA</a></li>
                                <li><a href="#">Donation</a></li>
                                <li><a href="#">Hostel</a></li>
                                <li><a href="#">Couses</a></li>
                                <li><a href="#">Canteen</a></li>
                                <li><a href="#">Computer labs</a></li>
                                <li><a href="#">Principal</a></li>
                                <li><a href="#">Holidays</a></li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
                <div className="footer-bottom centred">
                    <div className="container">
                        <div className="copyright"><p>Copyright © <a href="#" /> Welham Admissions 2022.</p></div>
                    </div>
                </div>
            </footer>
            {/* main footer end */}
        </div>
    )
}

export default Addmissionprocedure
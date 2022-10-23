import React from 'react'
import '../stylesheet/AboutSection.css'

function About() {
    
    return (
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12 about-column">
                        <div className="about-title">
                            <div className="title-head">Know More About <span>Welham Girls School</span></div><hr />
                            <div className="section-title"><h2><small>Dedicated to Excellence</small></h2></div>
                        </div>
                        <div className="about-content">
                            <div className="text w-100" style={{
                                textAlign: 'justify',
                                textJustify: 'interWord',
                            }}>
                                <p className='para'> Welham Girls' school is a leading institution of learning that has been imparting quality education to young girls since its inception in 1957. The foundation stone of Welham Girls school was laid by an English lady named H.S. Oliphant, who always had a burning desire to uplift Indian women through education. Despite having negligible resources, she was determined to bring the change she wanted to witness. She entrusted Miss Grace Mary Linnell, an experienced and respected educationist, to set up the school and run it efficiently. Under the guidance of Miss Linnell, the school developed high academic standards, which helped it grow remarkably.
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
                            <img src="images/about/ABOUT US .jpg" className='image3' alt="Awesome Video Gallery" />
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
    )
}

export default About
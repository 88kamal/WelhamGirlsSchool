import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../stylesheet/Testimonial.css'

const handleDragStart = (e) => e.preventDefault();

const items = [
    // <img  src="images/anmol.png"  role="presentation" alt='img' />,
    <div className="item active" onDragStart={handleDragStart}>
        <h2 className=' text-light '>Anmol Vohra</h2>
        {/* <img src="images/home/anmol-web.png" alt=""> */}
        <p className=' text-light testimonial-para' style={{
                                textAlign: 'justify',
                                textJustify: 'interWord',
                               
                            }}> My daughter has been studying at Welham for the past 6 years and we have had a wonderful experience. The teachers are dedicated and caring, and the facilities are excellent. I have no hesitation in recommending Welham Girls School to anyone who is looking for a school that will help their child achieve her full potential.
        </p>
    </div>,
    // <img src="images/Madhu.png"  role="presentation"  alt='img'/>,
    <div className="item" onDragStart={handleDragStart}>
        <h2 className=' text-light '> Madhu Singh</h2>
        {/* <img src="images/home/Madhu-web.png" alt=""> */}
        <p className=' text-light testimonial-para' style={{
                                textAlign: 'justify',
                                textJustify: 'interWord',
                               
                            }}> The Welham Girls School has enriched my daughter in innumerable ways.  I made my choice based on the potential of what my daughter would achieve as a student at Welham. She is both happy and motivated to attend school. The school provides the best learning environment, which is very important for the overall development of my daughter</p>
    </div>,
    // <img src="images/Ankita.png"  role="presentation"  alt='img'/>,
    <div className="item" onDragStart={handleDragStart}>
        <h2 className=' text-light '>Ankita Mishra</h2>
        {/* <img src="images/home/Ankita-web.png" alt=""> */}
        <p className=' text-light testimonial-para' style={{
                                textAlign: 'justify',
                                textJustify: 'interWord',
                               
                            }}>My journey at Welham Girls School was full of exposure. From the beginning, I knew that the school was different, and I wanted to be a part of it. There were many opportunities for me to explore my interests and passions, and to learn new things. I was able to take part in many extracurricular activities, including sports, student government, clubs, tutoring and mentoring programs, and more.
        </p>
    </div>
];
function Testimonials() {
    return (


        // <section className="testimonial-section sec-pad centred addmission2" style={{
        //     height: '47em'
        // }}>
        //     <div className="container">
        // <div className="testimonial-title white">
        //     <div className="title-head"> <span style={{ color: '#fff' }}>Testimonial</span></div>
        // </div>
        //         {/* <div className="row"> */}
        //         {/* <div id="myCarousel" className="carousel slide " data-ride="carousel" > */}
        //         {/* Wrapper for slides */}
        //         {/* <AliceCarousel mouseTracking items={items} /> */}
        //         <div className=' '>
        //     <AliceCarousel className="" mouseTracking items={items}
        //         // autoPlay
        //         infinite
        //         autoPlayInterval="4000"
        //         autoPlayStrategy="none"
        //         disableButtonsControls />
        // </div>
        //         {/* Left and right controls */}

        //         {/* </div> */}
        //         {/* </div> */}
        //     </div>
        // </section>
        <div className="hidden-mobile hidden-mobile2 ">
            <section className="testimonial-section sec-padt centred   addmission2 ">
                <div className="container">
                    <div className="testimonial-title white">

                        <div className="title-head"> <span style={{ color: '#fff' }}>Testimonial</span></div>

                        {/* <div className="section-title-testimonial"> */}
                        <div>
                            <AliceCarousel className="" mouseTracking items={items}
                                // autoPlay
                                // infinite
                                // autoPlayInterval="4000"
                                // autoPlayStrategy="none"
                                disableButtonsControls />

                        </div>
                    </div>
                </div>

                {/* </div>   */}
            </section></div>
    )
}

export default Testimonials
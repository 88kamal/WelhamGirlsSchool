import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../stylesheet/Testimonial.css'

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img  src="images/anmol.png" onDragStart={handleDragStart} role="presentation" alt='img' />,
    <img src="images/Madhu.png" onDragStart={handleDragStart} role="presentation"  alt='img'/>,
    <img src="images/Ankita.png" onDragStart={handleDragStart} role="presentation"  alt='img'/>,
];
function Testimonials() {
    return (
      

        <section className="testimonial-section sec-pad centred addmission2" style={{
            height: '47em'
        }}>
            <div className="container">
                <div className="testimonial-title white">
                    <div className="title-head"> <span style={{ color: '#fff' }}>Testimonial</span></div>
                </div>
                {/* <div className="row"> */}
                    {/* <div id="myCarousel" className="carousel slide " data-ride="carousel" > */}
                        {/* Wrapper for slides */}
                        {/* <AliceCarousel mouseTracking items={items} /> */}
                       <div className=' '>
                       <AliceCarousel className="" mouseTracking items={items}
                            autoPlay
                            infinite
                            autoPlayInterval="4000"
                            autoPlayStrategy="none"
                            disableButtonsControls />
                       </div>
                        {/* Left and right controls */}

                    {/* </div> */}
                {/* </div> */}
            </div>
        </section>
    )
}

export default Testimonials
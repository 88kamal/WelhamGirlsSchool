import React, { useEffect } from 'react'
import '../stylesheet/Carousels.css'
import kwesforms from 'kwesforms';

function Carousels() {

  useEffect(() => {
    kwesforms.init();

  }, []);

  return (
    <div >

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/slider/LP- 1.jpg" className=" image1  w-100" alt="..."  />
            <img src="/images/slider/Mobile LP-1.jpg" className=" image2  w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/slider/LP-2.jpg" className=" image1  w-100" alt="..."  />
            <img src="/images/slider/Mobile LP-2.jpg" className="image2 w-100  " alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/slider/LP-3.jpg" className=" image1 w-100" alt="..."  />
            <img src="/images/slider/Mobile LP-3.jpg" className="image2 w-100 " alt="..." />
          </div>
        </div>
        <div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon none1" aria-hidden="true" ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon none1" aria-hidden="true" ></span>
          <span className="visually-hidden" >Next</span>
        </button>
        </div>
        
        {/* <div className="form-container container my-2">
          <form id="contact" className="kwes-form" action="https://formsubmit.co/Tarun.enquiry@gmail.com" method="POST">
            <h3 style={{ color: '#337ab7', fontWeight: 'bold', paddingTop: '10px', textTransform: 'uppercase', fontSize: '20px' }}> Get More Information About Admissions</h3>
            <fieldset>
              <input name="name" placeholder="Your name" type="text" tabIndex={1} required />
              <input type="hidden" name="_captcha" value="false" />

              <input type="hidden" name="_next" value="http://localhost:3000/thanks" />


            </fieldset>
            <fieldset>
              <input name="email" placeholder="Your Email Address" type="email" tabIndex={2} required />
            </fieldset>
            <fieldset>
              <input name="PhoneNO" placeholder="Your Phone Number" type="tel" tabIndex={3} required />
            </fieldset>
            
            <fieldset>
              <textarea name="Message" placeholder="Type your message here...." tabIndex={5} required defaultValue={""} />
            </fieldset>
            <fieldset>
              <button type="submit" id="contact-submit" data-submit="...Sending" onClick={alert}>Submit</button>
            </fieldset>
          </form>
        </div> */}

<div className="form-container my-2">
        <form id="contact" className="kwes-form" action="https://kwesforms.com/api/foreign/forms/KZGWmtsjL2pW7Gn3kv9A" method="post" noValidate="novalidate">
          <div className="kw-alert kw-alert-success" id="kw-success" aria-live="assertive" style={{display: 'none'}} />
          <h3 style={{color: '#337ab7', fontWeight: 'bold', paddingTop: '10px', textTransform: 'uppercase', fontSize: '20px'}}>
            Apply For Admissions</h3>
          {/* <h4 style="font-weight: bold; text-transform: uppercase;">Contact us</h4> */}
          <fieldset>
            <input name="name" placeholder="Your name" type="text" tabIndex={1} required className="kw-border-error" />
          </fieldset>
          <fieldset>
            <input name="email" placeholder="Your Email Address" type="email" tabIndex={2} required />
          </fieldset>
          <fieldset>
            <input name="PhoneNO" placeholder="Your Phone Number" type="tel" tabIndex={3} required />
          </fieldset>
          {/* <fieldset>
            <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required>
          </fieldset> */}
          {/* <fieldset>
                <textarea name="Message" placeholder="Type your message here...." tabindex="5" required></textarea>
            </fieldset> */}
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
          </fieldset>
        </form>
      </div>
       
      </div>
      


    </div>
  )
}

export default Carousels
import React from 'react'
import '../stylesheet/Similarschool.css'

function SimilarSchool() {
    return (
        <div className=' container addmission' >
            {/* <div className="main">
        <div className="card">
          <div>
            <img className="flexbox" src="./images/home/Mayo.jpeg" />
            <h3 style={{color: 'black', fontWeight: 500, marginTop: '10px'}}>Mayo College Girls’ School</h3>
            <p style={{marginBottom: '13px'}}>Mayo College Girls’ School, take pride in its "exceptional level of pastoral care and academics  There is a 33% chance of getting admission at MCGS.<br /> Grab this opportunity now!</p>
            <a className="btn-one  scroll-to-target" data-target=".form-container">  Apply Now</a>
          </div>
        </div>
        <div className="card">
          <div>
            <img className="flexbox" src="./images/home/Ecole.jpeg" />
            <h3 style={{color: 'black', fontWeight: 500, marginTop: '8px'}}>Ecole Globale International Girls’ School</h3>
            <p style={{marginBottom: '1px !important'}}>Ecole Globale has an excellent academic record. It offers foreign exchange programs, earning them better opportunities. You still have 41% chance to get admission.</p>
            <a className="btn-one  scroll-to-target" data-target=".form-container">  Apply Now</a>
          </div>
        </div>
        <div className="card">
          <div>
            <img className="flexbox" src="./images/home/scindia.jpeg" />
            <h3 style={{color: 'black', fontWeight: 500, marginTop: '10px'}}>Scindia Kanya Vidyalaya</h3>
            <p style={{marginBottom: '12px'}}>Scindia Kanya Vidyalaya is a premier girls' school, that helps children to grow both academically and personally.  There is a 40% chance of your child, to study here.</p>
            <a className="btn-one  scroll-to-target" data-target=".form-container">  Apply Now</a>
          </div>
        </div>
        <div className="card">
          <form style={{borderRadius: '10px', height: '550px !important', width: '280px !important'}} id="contact" className="kwes-form" action="https://kwesforms.com/api/foreign/forms/KFxLSjT83EHVTcM9Whom" method="post" noValidate="novalidate">
            <div className="kw-alert kw-alert-success" id="kw-success" aria-live="assertive" style={{display: 'none'}} />
            <h3 style={{color: '#337ab7', fontWeight: 'bold', paddingTop: '10px', textTransform: 'uppercase', fontSize: '20px'}}>
              Apply For Admissions</h3>
            <input style={{marginTop: '5px'}} name="name" placeholder="Your name" type="text" tabIndex={1} required autoFocus />
            <input style={{marginTop: '5px'}} name="email" placeholder="Your Email Address" type="email" tabIndex={2} required />
            <input style={{marginTop: '5px'}} name="PhoneNO" placeholder="Your Phone Number" type="tel" tabIndex={3} required />
            <button className="btn-one" style={{marginBottom: '28px', marginTop: '20px'}} name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
          </form>
        </div>
      </div> */}
            <h2 className="copyright title-head" style={{ color: '#848484', marginTop: '20px' }}>Similar School   <span style={{ marginLeft: '8px', color: '#337ab7', marginBottom: '30px' }}>Options</span>
            </h2>

            <div className="row m-2">
                <div className="col-md-6 col-lg-3 my-3">
                    <div className="card" >
                        <img src="./images/home/Mayo.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body" style={{
                            height: '379px'
                        }}>
                            <h3 className="card-title fw-bold text-center">Mayo College Girls’ School</h3>
                            <p className="card-text" style={{
                                textAlign: 'justify',
                                textJustify: 'interWord',
                            }}>Mayo College Girls’ School, take pride in its "exceptional level of pastoral care and academics There is a 33% chance of getting admission at MCGS.
                                Grab this opportunity now!</p>
                            <div className="center">
                                <a href='/' style={{
                                    position: 'relative',
                                    top: '4px'
                                }} className="btn-one  scroll-to-target" data-target=".form-container">  Apply Now</a>
                            </div>                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 my-3">
                    <div className="card" >
                        <img src="./images/home/Ecole.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body" style={{
                            height: '379px'
                        }}>
                            <h3 className="card-title fw-bold text-center">Ecole Globale International Girls’ School</h3>
                            <p className="card-text" >Ecole Globale has an excellent academic record. It offers foreign exchange programs, earning them better opportunities. You still have 41% chance to get admission.</p>
                            <div className="center">
                                <a href='/' className="btn-one  scroll-to-target" data-target=".form-container">  Apply Now</a>
                            </div>                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 my-3">
                    <div className="card " style={{ border: 'none !important' }} >
                        <img src="./images/home/scindia.jpeg " className="card-img-top" alt="..." />
                        <div className="card-body" style={{
                            height: '379px',

                        }}>
                            <h3 className="card-title fw-bold text-center">Scindia Kanya Vidyalaya</h3>
                            <p className="card-text">Scindia Kanya Vidyalaya is a premier girls' school, that helps children to grow both academically and personally. There is a 40% chance of your child, to study here.</p>
                            <div className="center">
                                <a href='/' style={{
                                    position: 'relative',
                                    top: '27px'
                                }} className="btn-one  scroll-to-target" data-target=".form-container">  Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 my-3">
                    <div className="car" >
                        <div className="" >
                            <form style={{ borderRadius: '10px', height: '569px' }} id="contact" className="kwes-form" action="https://formsubmit.co/Tarun.enquiry@gmail.com" method="POST" noValidate="novalidate">
                                <div className="kw-alert kw-alert-success" id="kw-success" aria-live="assertive" style={{ display: 'none' }} />
                                <h3 style={{ color: '#337ab7', fontWeight: 'bold', paddingTop: '10px', textTransform: 'uppercase', fontSize: '20px' }}>
                                    Apply For Admissions</h3>
                                <input style={{ marginTop: '5px' }} name="name" placeholder="Your name" type="text" tabIndex={1} required />
                                <input type="hidden" name="_captcha" value="false" />

                                <input type="hidden" name="_next" value="http://localhost:3000/thanks" />
                                <input style={{ marginTop: '5px' }} name="email" placeholder="Your Email Address" type="email" tabIndex={2} required />
                                <input style={{ marginTop: '5px' }} name="PhoneNO" placeholder="Your Phone Number" type="tel" tabIndex={3} required />
                                <button className="btn-one" style={{ marginBottom: '28px', marginTop: '20px' }} type="submit" id="contact-submit">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SimilarSchool
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

            <div className="row  similar">
                <div className="col-md-6 col-lg-3 my-3">
                    <div className="card border-bottom-2"  >
                        <img src="./images/home/Mayo.jpeg" className="card-img-top" alt="..."  style={{
    borderTopRightRadius: '12px',
    borderTopLeftRadius: '12px',
    }}/>
                        <div className="card-body card_h" style={{borderRadius: '12px'}}>
                            <h3 className="card-title  text-center" style={{ fontWeight: '500' }}>Mayo College Girls’ School</h3>
                            <p className="card-text" style={{
                                textAlign: 'justify',
                                textJustify: 'interWord',
                            }}>Mayo College Girls’ School, take pride in its "exceptional level of pastoral care and academics There is a 33% chance of getting admission at MCGS.
                                Grab this opportunity now!</p>
                            <div className="center">
                                {/* <a href='/' style={{
                                    position: 'relative',
                                    top: '29px'
                                }} className="btn-one  scroll-to-target" data-target=".form-container">  Apply Now</a> */}
                                 <button className="btn-one btn_1"name="submit" type="submit" id="contact-submit" data-submit="...Sending">APPLY NOW</button>
                            </div>                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 my-3">
                    <div className="card" >
                        <img src="./images/home/Ecole.jpeg" className="card-img-top" alt="..."  style={{
    borderTopRightRadius: '12px',
    borderTopLeftRadius: '12px',
    }} />
                        <div className="card-body card_h" style={{borderRadius: '12px'}} >
                            <h3 className="card-title  text-center" style={{ fontWeight: '500' }}>Ecole Globale International Girls’ School</h3>
                            <p className="card-text" style={{
                                textAlign: 'justify',
                                textJustify: 'interWord',
                            }} >Ecole Globale has an excellent academic record. It offers foreign exchange programs, earning them better opportunities. You still have 41% chance to get admission.</p>
                            <div className="center">
                                {/* <a href='/' className="btn-one  scroll-to-target" data-target=".form-container">  Apply Now</a> */}
                                <button className="btn-one" name="submit" type="submit" id="contact-submit" data-submit="...Sending">APPLY NOW</button>
                            </div>                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 my-3">
                    <div className="card " style={{ border: 'none !important' }} >
                        <img src="./images/home/scindia.jpeg " className="card-img-top" alt="..."  style={{
    borderTopRightRadius: '12px',
    borderTopLeftRadius: '12px',
    }}/>
                        <div className="card-body card_h" style={{borderRadius: '12px'}} >
                            <h3 className="card-title  text-center" style={{ fontWeight: '500' }}>Scindia Kanya Vidyalaya</h3>
                            <p className="card-text" style={{
                                textAlign: 'justify',
                                textJustify: 'interWord',
                            }}>Scindia Kanya Vidyalaya is a premier girls' school, that helps children to grow both academically and personally. There is a 40% chance of your child, to study here.</p>
                            <div className="center">
                                {/* <a href='/' style={{
                                    position: 'relative',
                                    top: '53px'
                                }} className="btn-one  scroll-to-target" data-target=".form-container">  Apply Now</a> */}
                                 <button className="btn-one btn_2" name="submit" type="submit" id="contact-submit" data-submit="...Sending">APPLY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 my-3">
                    <div className="car" >
                    <div className="card-body padd  "  style={{borderRadius: '12px'}} >
                                   
                                   <form style={{background:'none'}} id="contact" className=" shadow-none padd" method="post" noValidate="novalidate">
                                    {/* <div className="kw-alert kw-alert-error">
                                   </div> */}
                                       <div className="kw-alert kw-alert-success" id="kw-success" aria-live="assertive" style={{ display: 'none' }} />
                                       <h3 style={{ color: '#337ab7', fontWeight: 'bold', paddingTop: '10px', textTransform: 'uppercase', fontSize: '20px' }}>
                                           Apply For Admissions</h3>
                                       <input style={{ marginTop: '5px' }} name="name" placeholder="Your name" type="text" tabIndex={1} required autoFocus className="kw-border-error" />
                                       <input style={{ marginTop: '5px' }} name="email" placeholder="Your Email Address" type="email" tabIndex={2} required />
                                       <input style={{ marginTop: '5px' }} name="PhoneNO" placeholder="Your Phone Number" type="tel" tabIndex={3} required />
                                       <button className="btn-one" style={{ marginBottom: '28px', marginTop: '20px' }} name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                                   </form>
                               </div>

                    </div>
                </div>
            </div>

            {/* <div className="album py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Thumbnail [100%x225]" style={{ height: '225px', width: '100%', display: 'block' }} src="./images/home/Mayo.jpeg" data-holder-rendered="true" />
                                <div className="card-body">
                                    <h3 className="card-title  text-center" style={{ fontWeight: '500' }}>Mayo College Girls’ School</h3>
                                    <p className="card-text" style={{
                                        textAlign: 'justify',
                                        textJustify: 'interWord',
                                    }}>Mayo College Girls’ School, take pride in its "exceptional level of pastoral care and academics There is a 33% chance of getting admission at MCGS.
                                        Grab this opportunity now!</p>
                                   
                                    <div className=' text-center'>
                                        <button className='btn btn-primary rounded-0 border-0  font' style={{background:'#337ab7'}}>APPLY NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Thumbnail [100%x225]" src="./images/home/Ecole.jpeg" data-holder-rendered="true" style={{ height: '225px', width: '100%', display: 'block' }} />
                                <div className="card-body">
                                    <h3 className="card-title  text-center" style={{ fontWeight: '500' }}>Ecole Globale International Girls’ School</h3>
                                    <p className="card-text" style={{
                                        textAlign: 'justify',
                                        textJustify: 'interWord',
                                    }} >Ecole Globale has an excellent academic record. It offers foreign exchange programs, earning them better opportunities. You still have 41% chance to get admission.</p>
                                   
                                     <div className=' text-center'>
                                        <button className='btn btn-primary rounded-0 border-0  font' style={{background:'#337ab7'}}>APPLY NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Thumbnail [100%x225]" src="./images/home/scindia.jpeg" data-holder-rendered="true" style={{ height: '225px', width: '100%', display: 'block' }} />
                                <div className="card-body">
                                <h3 className="card-title  text-center" style={{ fontWeight: '500' }}>Scindia Kanya Vidyalaya</h3>
                            <p className="card-text" style={{
                                textAlign: 'justify',
                                textJustify: 'interWord',
                            }}>Scindia Kanya Vidyalaya is a premier girls' school, that helps children to grow both academically and personally. There is a 40% chance of your child, to study here.</p>
                           
                             <div className=' text-center'>
                                        <button className='btn btn-primary rounded-0 border-0  font' style={{background:'#337ab7'}}>APPLY NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card mb-4 box-shadow" >
                             
                                <div className="card-body "  >
                                   
                                    <form style={{ borderRadius: '10px', height: '550px !important', width: '280px !important', paddingTop: '120px', background: 'none' }} id="contact" className="kwes-form shadow-none" action="https://kwesforms.com/api/foreign/forms/KFxLSjT83EHVTcM9Whom" method="post" noValidate="novalidate"><div className="kw-alert kw-alert-error">
                                    </div>
                                        <div className="kw-alert kw-alert-success" id="kw-success" aria-live="assertive" style={{ display: 'none' }} />
                                        <h3 style={{ color: '#337ab7', fontWeight: 'bold', paddingTop: '10px', textTransform: 'uppercase', fontSize: '20px' }}>
                                            Apply For Admissions</h3>
                                        <input style={{ marginTop: '5px' }} name="name" placeholder="Your name" type="text" tabIndex={1} required autoFocus className="kw-border-error" />
                                        <input style={{ marginTop: '5px' }} name="email" placeholder="Your Email Address" type="email" tabIndex={2} required />
                                        <input style={{ marginTop: '5px' }} name="PhoneNO" placeholder="Your Phone Number" type="tel" tabIndex={3} required />
                                        <button className="btn-one" style={{ marginBottom: '28px', marginTop: '20px' }} name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default SimilarSchool
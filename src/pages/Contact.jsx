import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import FooterSecond from '../components/FooterSecond'
import Layout from '../components/Layout'
// import "../stylesheet/"

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <Layout>
            <section className="page-title">
                <div className="container">
                    <div className="content-box">
                        <div className="title">Contact Us</div>
                        <div className="bread-crumb">
                            <Link to={'/'} >Home &nbsp;<i className="fa fa-angle-right" /></Link> &nbsp;<span>Contact Us</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section contact-page sec-pad">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12 col-xs-12 contact-column">
                            <div className="contact-form-area">
                                {/* <div id="messages" class="hide" role="alert">
<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <div id="messages_content"></div>
            </div>*/}
                                <div className="contact-title">Get in Touch</div>
                                <form id="form" name="contact_form" className="default-form" method="post" action="contact.php">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <input type="text" name="name" placeholder="Name" required />
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <input type="email" name="email" placeholder="Email" required />
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <input type="number" name="phone" placeholder="Phone" required />
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <input type="text" name="subject" placeholder="Subject" required />
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <textarea placeholder="Message" name="message" required />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn-one style-one radi" data-loading-text="Please wait..." name="contact">Send Message</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 contact-column">
                            <div className="contact-info">
                                <div className="single-info">
                                    <div className="icon-box"><i className="flaticon-signs" /></div>
                                    <div className="title">Address Info</div>
                                    <div className="text"><p>PO Box 16122 xyz</p></div>
                                </div>
                                <div className="single-info">
                                    <div className="icon-box"><i className="flaticon-phone-call" /></div>
                                    <div className="title">Phone</div>
                                    <div className="text"><p>(+48) 564-334-21-22-34 <br />(+48) 564-334-21-25</p></div>
                                </div>
                                <div className="single-info">
                                    <div className="icon-box"><i className="flaticon-note" /></div>
                                    <div className="title">Email</div>
                                    <div className="text"><a href="#">info@abcsecondaryschool.com</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <FooterSecond />

            </section>
        </Layout>
    )
}

export default Contact
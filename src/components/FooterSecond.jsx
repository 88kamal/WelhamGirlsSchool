import React from 'react'
import "../stylesheet/FooterSecond.css"
import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs'

import { AiFillLinkedin } from 'react-icons/ai'

function FooterSecond() {
    return (
        <div className=" mt-5">
            <div className="card1 rounded-0 ">
                <div className="row  ">
                    <div className="col-md-4 col-sm-11 col-xs-11">
                        <div className="footer-text pull-left">
                            <div className="d-flex">
                                <img src="images/footer/logo.png" alt="" />
                            </div>
                            <p className="card-text text-light">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin Richard Latin professor at Hampden.</p>
                            <div className="social mt-2 mb-3">
                                <BsFacebook size={20} className=" text-light" />
                                <BsTwitter size={20} className="mx-2 text-light" />
                                <BsInstagram size={20} className="mx-2 text-light" />
                                <AiFillLinkedin size={20} className="mx-2  text-light" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-1 col-xs-1 mb-2" />
                    <div className="col-md-2 col-sm-4 col-xs-4">
                        <h5 className="heading">Quick Links</h5>
                        <ul>
                            <li className=' text-light'>Home</li>
                            <li className=' text-light'>Notices</li>
                            <li className=' text-light'>Gallery</li>
                            <li className=' text-light'>Events</li>
                            <li className=' text-light'>Addmission</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4">
                        <h5 className="heading">Our Gallery</h5>
                        <ul className="card-text ">
                            <div className="row">
                                <div className="col-md-5 my-1">
                                    <li><img width={40} src="images/footer/1.jpg" alt="" /></li>
                                </div>
                                <div className="col-md-5 my-1">
                                    <li><img width={40} src="images/footer/2.jpg" alt="" /></li>
                                </div>
                                <div className="col-md-5 my-1">
                                    <li><img width={40} src="images/footer/3.jpg" alt="" /></li>
                                </div>
                                <div className="col-md-5 my-1">
                                    <li><img width={40} src="images/footer/4.jpg" alt="" /></li>
                                </div>
                                <div className="col-md-5 my-1">
                                    <li><img width={40} src="images/footer/5.jpg" alt="" /></li>
                                </div>
                                <div className="col-md-5 my-1">
                                    <li><img width={40} src="images/footer/6.jpg" alt="" /></li>
                                </div>


                            </div>

                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4">
                        <h5 className="heading">Popular Tags</h5>
                        <ul class="tag-list card-text">
                            <li><a className='  text-light'  href="/">Charity</a></li>
                            <li><a className=' text-light'  href="/">ECA</a></li>
                            <li><a className=' text-light'  href="/">Donation</a></li>
                            <li><a className=' text-light'  href="/">Hostel</a></li>
                            <li><a className=' text-light'  href="/">Couses</a></li>
                            <li><a className=' text-light'  href="/">Canteen</a></li>
                            <li><a className=' text-light'  href="/">Computer labs</a></li>
                            <li><a className=' text-light'  href="/">Principal</a></li>
                            <li><a className=' text-light'  href="/">Holidays</a></li>

                        </ul>
                    </div>
                </div>
                {/* <div className="divider mb-4">
                </div>
                <div className="row" style={{ fontSize: '10px' }}>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="pull-left">
                            <p><i className="fa fa-copyright" /> 2020 thezpdesign</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="pull-right mr-4 d-flex policy">
                            <div>Terms of Use</div>
                            <div>Privacy Policy</div>
                            <div>Cookie Policy</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default FooterSecond
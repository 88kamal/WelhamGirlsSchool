import React, { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import { MdCall, MdEmail } from 'react-icons/md'
import '../stylesheet/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    // const [isVisible, setIsVisible] = useState(true);

    // useEffect(() => {
    //     window.addEventListener("scroll", listenToScroll);
    //     return () =>
    //         window.removeEventListener("scroll", listenToScroll);
    // }, [])

    // const listenToScroll = () => {
    //     let heightToHideFrom = 10;
    //     const winScroll = document.body.scrollTop ||
    //         document.documentElement.scrollTop;

    //     if (winScroll > heightToHideFrom) {
    //         isVisible &&      // to limit setting state only the first time
    //             setIsVisible(false);
    //     } else {
    //         setIsVisible(true);
    //     }
    // };
    return (
        <nav className="navbar navbar-expand-lg bg-light p-3 shadow-sm sticky-top" style={{
            zIndex: '14'
        }}>
            <div className="container-fluid">
                {/* {
                    isVisible && */}
                     <div className=' '>
                        <a href="https://wa.me/+918279548935"><BsWhatsapp size={25} style={{ color: 'rgb(51, 122, 183)' }} /></a>
                        <a className=' mx-2' href="tel:+919760532480" ><MdCall size={25} style={{ color: 'rgb(51, 122, 183)' }} /></a>
                        <a className=' mx-2' href="Tarun.enquiry@gmail.com" ><MdEmail size={30} style={{ color: 'rgb(51, 122, 183)' }} /></a>

                    </div>
                {/* } */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FiMenu size={30} style={{ color: 'rgb(51, 122, 183)' }} />
                </button>
                <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto  ">
                        <li className="nav-item  ">
                            <Link to={'/'} className="nav-link  hover-home fw">Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a href='/' className="nav-link dropdown-toggle fw " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About Us
                            </a>
                            <ul className="dropdown-menu rounded-0   " >
                                <li><Link to={'/about-welham'} className="dropdown-item  ">About Welham</Link>

                                </li>
                                <li><Link to={'/origin-and-history'} className="dropdown-item  ">Origin & History</Link>

                                </li>
                                {/* <li><Link to={'/who-we-are'} className="dropdown-item  ">Who We are</Link>
                                
                                </li>
                             
                                <li><Link to={'/principles-message'} className="dropdown-item  ">Principal's Message</Link>
                                </li>
                                <li><Link to={'/mission-vission-objectives'} className="dropdown-item  ">Mission,Vision &amp; Objective</Link>
                                </li>
                                <li><Link to={'/addninistative-staff-and-faculty-member'} className="dropdown-item  ">Administrative Staff &amp; Faculty Members</Link>
                                </li>
                                <li><Link to={'/resource-and-facilities'} className="dropdown-item  ">Resources &amp; Facilities</Link>
                                </li>
                                <li><Link to={'/history'} className="dropdown-item  ">History</Link>
                                </li> */}
                            </ul>
                        </li>
                        <li className="nav-item dropdown ">
                            <a href='/' className="nav-link dropdown-toggle fw " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Addmission
                            </a>
                            <ul className="dropdown-menu  rounded-0 ">
                                <li><Link to={'/how-to-register'} className="dropdown-item ">How To Register</Link>
                                </li>
                                <li><Link to={'/fee-structure'} className="dropdown-item ">Fee Structure</Link>
                                </li>
                                <li><Link to={'/scholarship'} className="dropdown-item ">Scholarship</Link>
                                </li>
                            </ul>
                        </li>
                        {/* <li className="nav-item dropdown ">
                            <a href='/' className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Facilities
                            </a>
                            Academic
Boarding
Events
 
Students Life
 
Contact

                            <ul className="dropdown-menu  rounded-0 ">
                                <li><Link to={'/how-to-register'} className="dropdown-item "> Academic</Link>
                                </li>
                                <li><Link to={'/fee-structure'} className="dropdown-item ">Fee Structure</Link>
                                </li>
                                <li><Link to={'/scholarship'} className="dropdown-item ">Scholarship</Link>
                                </li>
                            </ul>
                        </li> */}
                        {/* <li className="nav-item dropdown ">
                            <a href='/' className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Academics
                            </a>
                            <ul className="dropdown-menu  rounded-0 ">
                                <li><Link to={'/academic-information'} className="dropdown-item ">Academic Information</Link>
                                </li>
                                <li><Link to={'/academic-departments'} className="dropdown-item ">Academic Departments</Link>
                                </li>
                                <li><Link to={'/admission-notices'} className="dropdown-item ">Admission Notices</Link>
                                </li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                            <Link to={'/news'} className="nav-link fw ">News
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a href='/' className="nav-link dropdown-toggle fw " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </a>
                            <ul className="dropdown-menu rounded-0 ">
                                <li><Link to={'/events'} className="dropdown-item  fw">Events</Link>
                                </li>
                                <li><Link to={'/event-details'} className="dropdown-item  fw">Event Details</Link>
                                </li>

                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a href='/' className="nav-link dropdown-toggle fw" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Blog
                            </a>
                            <ul className="dropdown-menu  rounded-0 ">
                                <li><Link to={'/our-blog'} className="dropdown-item ">Our Blog</Link>
                                </li>
                                <li><Link to={'/blog-details'} className="dropdown-item ">Blog Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to={'/contact'} className="nav-link fw  " aria-current="page" >Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
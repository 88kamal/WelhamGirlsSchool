import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import {AiFillClockCircle} from 'react-icons/ai'
import {GrLocation} from 'react-icons/gr'

function Events() {
  return (
    <Layout>
      <section class="page-title">
        <div class="container">
          <div class="content-box">
            <div class="title">Our Event</div>
            <div class="bread-crumb">
              <Link to={'/'}>Home &nbsp;<i class="fa fa-angle-right"></i></Link> &nbsp;<span>Our Event</span>
            </div>
          </div>
        </div>
      </section>
      <section className="event-section our-event">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12 event-column ">
              <div className="single-item p-4">
                <div className="img-box">
                  <a href="event-details.html"><figure><img src="images/event/1.jpg" alt="" /></figure></a>
                  <div className="date"><h3>25</h3><p>July</p></div>
                </div>
                <div className="lower-content">
                  <h3><a href="event-details.html">Mauris Fommodo Aucib.</a></h3>
                  <ul className="meta">
                    <li><AiFillClockCircle/> 9am - 3pm</li>
                    <li><GrLocation/> 60 Newyork City.</li>
                  </ul>
                  <div className="text"><p>Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt  labore dolore magna aliqua.</p></div>
                  <div className="button"><a href="/">Read more</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 event-column">
              <div className="single-item p-4">
                <div className="img-box">
                  <a href="event-details.html"><figure><img src="images/event/2.jpg" alt="" /></figure></a>
                  <div className="date"><h3>25</h3><p>July</p></div>
                </div>
                <div className="lower-content">
                  <h3><a href="event-details.html">Justo Posuere Nec Mol.</a></h3>
                  <ul className="meta">
                  <li><AiFillClockCircle/> 9am - 3pm</li>
                    <li><GrLocation/> 60 Newyork City.</li>
                  </ul>
                  <div className="text"><p>Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt  labore dolore magna aliqua.</p></div>
                  <div className="button"><a href="/">Read more</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 event-column">
              <div className="single-item p-4">
                <div className="img-box">
                  <a href="event-details.html"><figure><img src="images/event/3.jpg" alt="" /></figure></a>
                  <div className="date"><h3>25</h3><p>July</p></div>
                </div>
                <div className="lower-content">
                  <h3><a href="event-details.html">Posuere Nec Mollis Elit.</a></h3>
                  <ul className="meta">
                    <li><i className="fa fa-clock-o" />9am - 3pm</li>
                    <li><i className="fa fa-map-marker" />60 Newyork City.</li>
                  </ul>
                  <div className="text"><p>Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt  labore dolore magna aliqua.</p></div>
                  <div className="button"><a href="/">Read more</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 event-column">
              <div className="single-item p-4">
                <div className="img-box">
                  <a href="event-details.html"><figure><img src="images/event/4.jpg" alt="" /></figure></a>
                  <div className="date"><h3>25</h3><p>July</p></div>
                </div>
                <div className="lower-content">
                  <h3><a href="event-details.html">Convallis enim vitae pure.</a></h3>
                  <ul className="meta">
                  <li><AiFillClockCircle/> 9am - 3pm</li>
                    <li><GrLocation/> 60 Newyork City.</li>
                  </ul>
                  <div className="text"><p>Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt  labore dolore magna aliqua.</p></div>
                  <div className="button"><a href="/">Read more</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 event-column">
              <div className="single-item p-4">
                <div className="img-box">
                  <a href="event-details.html"><figure><img src="images/event/5.jpg" alt="" /></figure></a>
                  <div className="date"><h3>25</h3><p>July</p></div>
                </div>
                <div className="lower-content">
                  <h3><a href="event-details.html">Vallis enim vitae purus.</a></h3>
                  <ul className="meta">
                  <li><AiFillClockCircle/> 9am - 3pm</li>
                    <li><GrLocation/> 60 Newyork City.</li>
                  </ul>
                  <div className="text"><p>Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt  labore dolore magna aliqua.</p></div>
                  <div className="button"><a href="/">Read more</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 event-column">
              <div className="single-item p-4">
                <div className="img-box">
                  <a href="event-details.html"><figure><img src="images/event/6.jpg" alt="" /></figure></a>
                  <div className="date"><h3>25</h3><p>July</p></div>
                </div>
                <div className="lower-content">
                  <h3><a href="event-details.html">Aliquet sollic tudine.</a></h3>
                  <ul className="meta">
                  <li><AiFillClockCircle/> 9am - 3pm</li>
                    <li><GrLocation/> 60 Newyork City.</li>
                  </ul>
                  <div className="text"><p>Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt  labore dolore magna aliqua.</p></div>
                  <div className="button"><a href="/">Read more</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Events
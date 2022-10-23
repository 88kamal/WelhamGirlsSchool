import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import Layout from '../../components/Layout'
import FooterSecond from '../../components/FooterSecond'

function OurBlog() {
  return (
    <Layout>
      <section class="page-title">
        <div class="container">
          <div class="content-box">
            <div class="title">Our News</div>
            <div class="bread-crumb">
              <Link to={'/'}>Home &nbsp;<i class="fa fa-angle-right"></i></Link> &nbsp;<span>Our News</span>
            </div>
          </div>
        </div>

      </section>
      <section className="our-blog blog-page news-section sidebar-page-container">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-12 col-xs-12 content-side">
              <div className="sidebar-details">
                <div className="single-item">
                  <div className="img-box"><a href="blog-details.html"><figure><img src="images/news/4.jpg" alt="" /></figure></a></div>
                  <div className="lower-content">
                    <div className="date">15 <span>Jan,</span> 2018</div>
                    <h3><a href="blog-details.html">Curabit finibus dui sem.</a></h3>
                    <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p></div>
                    <div className="button"><a href="blog-details.html" className="btn-two">Read more</a></div>
                  </div>
                </div>
                <div className="single-item">
                  <div className="img-box"><a href="blog-details.html"><figure><img src="images/news/5.jpg" alt="" /></figure></a></div>
                  <div className="lower-content">
                    <div className="date">15 <span>Jan,</span> 2018</div>
                    <h3><a href="blog-details.html">Curabit finibus dui sem.</a></h3>
                    <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p></div>
                    <div className="button"><a href="blog-details.html" className="btn-two">Read more</a></div>
                  </div>
                </div>
                <div className="single-item">
                  <div className="img-box"><a href="blog-details.html"><figure><img src="images/news/6.jpg" alt="" /></figure></a></div>
                  <div className="lower-content">
                    <div className="date">15 <span>Jan,</span> 2018</div>
                    <h3><a href="blog-details.html">Curabit finibus dui sem.</a></h3>
                    <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p></div>
                    <div className="button"><a href="blog-details.html" className="btn-two">Read more</a></div>
                  </div>
                </div>
              </div>
              <ul className="link-btn">
                <li><a href="/"><AiOutlineLeft/></a></li>
                <li><a href="/" className="active">1</a></li>
                <li><a href="/">2</a></li>
                <li><a href="/">3</a></li>
                <li><a href="/"><AiOutlineRight/></a></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 sidebar-side">
              <div className="sidebar">
                <div className="sidebar-search sidebar-widget">
                  <div className="sidebar-title">Search</div>
                  <div className="search-box">
                    <form action="#">
                      <button><i className="fa fa-search" /></button>
                      <input type="text" placeholder="Search..." />
                    </form>
                  </div>
                </div>
                <div className="sidebar-catagories sidebar-widget">
                  <div className="sidebar-title">Category</div>
                  <ul className="list">
                    <li><a href="/" className="active"><p>Art &amp; Crafts</p></a></li>
                    <li><a href="/"><p>Sports</p></a></li>
                    <li><a href="/"><p>Science &amp; Tecnologies</p></a></li>
                    <li><a href="/"><p>Social service</p></a></li>
                    <li><a href="/"><p>Pysical Education</p></a></li>
                    <li><a href="/"><p>School Magazine</p></a></li>
                  </ul>
                </div>
                <div className="sidebar-post sidebar-widget">
                  <div className="sidebar-title">Latest Post</div>
                  <div className="single-post">
                    <div className="img-box"><a href="blog-details.html"><figure><img src="images/news/p1.jpg" alt="" /></figure></a></div>
                    <h5><a href="blog-details.html">Totam Rem Aperiam Eaque Ipsa.</a></h5>
                    <div className="date"><i className="fa fa-calendar" />15 Jan, 2018</div>
                  </div>
                  <div className="single-post">
                    <div className="img-box"><a href="blog-details.html"><figure><img src="images/news/p2.jpg" alt="" /></figure></a></div>
                    <h5><a href="blog-details.html">Totam Rem Aperiam Eaque Ipsa.</a></h5>
                    <div className="date"><i className="fa fa-calendar" />15 Jan, 2018</div>
                  </div>
                  <div className="single-post">
                    <div className="img-box"><a href="blog-details.html"><figure><img src="images/news/p3.jpg" alt="" /></figure></a></div>
                    <h5><a href="blog-details.html">Totam Rem Aperiam Eaque Ipsa.</a></h5>
                    <div className="date"><i className="fa fa-calendar" />15 Jan, 2018</div>
                  </div>
                  <div className="single-post">
                    <div className="img-box"><a href="blog-details.html"><figure><img src="images/news/p4.jpg" alt="" /></figure></a></div>
                    <h5><a href="blog-details.html">Totam Rem Aperiam Eaque Ipsa.</a></h5>
                    <div className="date"><i className="fa fa-calendar" />15 Jan, 2018</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSecond/>
    </Layout>
  )
}

export default OurBlog
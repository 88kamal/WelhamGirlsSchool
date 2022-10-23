import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import FooterSecond from '../../components/FooterSecond'
function BlogDetails() {
  return (
    <Layout>
      <section class="page-title">
        <div class="container">
            <div class="content-box">
                <div class="title">Blog Details</div>
                <div class="bread-crumb">
                    <Link to={'/'}>Home &nbsp;<i class="fa fa-angle-right"></i></Link> &nbsp;<span>Blog Details</span> 
                </div>
            </div>
        </div>
    </section>
    <section className="blog-details blog-page sidebar-page-container">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-12 col-xs-12 content-side">
              <div className="sidebar-details">
                <div className="single-item">
                  <div className="img-box"><figure><img src="images/news/4.jpg" alt="" /></figure></div>
                  <div className="lower-content">
                    <div className="date">26 <span>Jan,</span> 2018</div>
                    <div className="title">Curabit finibus dui sem.</div>
                    <div className="text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in repre
                        henderit in voluptate velit esse cillum.dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem
                        que laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia </p>
                      <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem veniam quis nostrud exercitation ullamco.laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inven
                        tore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    </div>
                  </div>
                </div>
                <div className="post-share-option">
                  <div className="text">Share:</div>
                  <ul className="post-social">
                    <li><a href="/" className="active"><FaFacebookF/></a></li>
                    <li><a href="/"><AiOutlineTwitter/></a></li>
                    <li><a href="/"><AiOutlineInstagram/></a></li>
                  </ul>
                </div>
                <div className="comment-area">
                  <div className="comment-title">Comments (3)</div>
                  <div className="single-comment">
                    <div className="img-box"><figure><img src="images/news/c1.jpg" alt="" /></figure></div>
                    <div className="comment-title"><h5>Jessica Brown</h5></div>
                    <div className="comment-time">Jan 15 , 2018</div>
                    <div className="text">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant totam rem ape riamipsa eaque  quae nisi ut aliquip commodo consequat. </p>
                    </div>
                    <div className="button"><a href="/">Reply</a></div>
                  </div>
                  <div className="single-comment">
                    <div className="img-box"><figure><img src="images/news/c2.jpg" alt="" /></figure></div>
                    <div className="comment-title"><h5>Jessica Brown</h5></div>
                    <div className="comment-time">Jan 15 , 2018</div>
                    <div className="text">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant totam rem ape riamipsa eaque  quae nisi ut aliquip commodo consequat. </p>
                    </div>
                    <div className="button"><a href="/">Reply</a></div>
                  </div>
                  <div className="single-comment">
                    <div className="img-box"><figure><img src="images/news/c3.jpg" alt="" /></figure></div>
                    <div className="comment-title"><h5>Jessica Brown</h5></div>
                    <div className="comment-time">Jan 15 , 2018</div>
                    <div className="text">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant totam rem ape riamipsa eaque  quae nisi ut aliquip commodo consequat. </p>
                    </div>
                    <div className="button"><a href="/">Reply</a></div>
                  </div>
                </div>
                <div className="comment-form">
                  <div className="comment-title">Leave A Comments</div>
                  <form id="contact-form" name="contact_form" className="default-form" action="/" method="post" noValidate="novalidate">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <input type="text" name="form_name"  placeholder="Name" required aria-required="true" />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <input type="email" name="form_email"  placeholder="Email" required aria-required="true" />
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <textarea placeholder="Message" name="form_message" required aria-required="true" />
                      </div>
                    </div>
                    <button type="submit" className="btn-one" data-loading-text="Please wait...">Send Message</button>
                  </form>
                </div>
              </div>
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
                    <div className="img-box"><a href="/"><figure><img src="images/news/p1.jpg" alt="" /></figure></a></div>
                    <h5><a href="/">Totam Rem Aperiam Eaque Ipsa.</a></h5>
                    <div className="date"><i className="fa fa-calendar" />15 Jan, 2018</div>
                  </div>
                  <div className="single-post">
                    <div className="img-box"><a href="/"><figure><img src="images/news/p2.jpg" alt="" /></figure></a></div>
                    <h5><a href="/">Totam Rem Aperiam Eaque Ipsa.</a></h5>
                    <div className="date"><i className="fa fa-calendar" />15 Jan, 2018</div>
                  </div>
                  <div className="single-post">
                    <div className="img-box"><a href="/"><figure><img src="images/news/p3.jpg" alt="" /></figure></a></div>
                    <h5><a href="/">Totam Rem Aperiam Eaque Ipsa.</a></h5>
                    <div className="date"><i className="fa fa-calendar" />15 Jan, 2018</div>
                  </div>
                  <div className="single-post">
                    <div className="img-box"><a href="/"><figure><img src="images/news/p4.jpg" alt="" /></figure></a></div>
                    <h5><a href="/">Totam Rem Aperiam Eaque Ipsa.</a></h5>
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

export default BlogDetails
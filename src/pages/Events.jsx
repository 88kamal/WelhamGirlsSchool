import React from 'react'
import '../stylesheet/Events.css'

function Events() {
  return (
    <section className="image-gallery sec-pad">
    <div className="container addmission1">
        <div className=' bg-light p-5'>
               <div className="gallery-title centred">
            <div className="title-head"  style={{color:'#337ab7'}}>Events</div>
            <div className="section-title"><p>Welham Girls' School has a range of events and activities to support the girls in developing their interests, skills and talents. It is packed with fun and interesting challenges that help the girls to develop a sense of community through wonderful events held throughout the year.</p></div>  
            <div className="row">
            <div className="col-md-3 my-2">
                <div className="card bg-light p-2 " >
                    <img src="images/home/3.jpg" className="card-img-top img-thumbnail rounded-4 event-img" alt='img' />
                    <div className="card-bod ">
                        <div className=" mx-2">
                            <p><b>Cultural Program</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 my-2">
                <div className="card bg-light p-2 " >
                    <img src="images/home/1.jpg" className="card-img-top img-thumbnail rounded-4 event-img" alt='img'  />
                    <div className="c">
                        <div className="mx-2">
                            <p><b>Annual Sports Event</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 my-2">
                <div className="card bg-light p-2 " >
                    <img src="images/home/4.jpg" className="card-img-top img-thumbnail rounded-4 event-img" alt='img'  />
                    <div className="">
                        <div className="mx-2">
                            <p> <b>National Competiton</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 my-2">
                <div className="card bg-light p-2 " >
                    <img src="images/home/2.jpg" className="card-img-top img-thumbnail rounded-4 event-img" alt='img'  />
                    <div className="">
                        <div className="mx-2">
                            <p><b>Physical Training</b></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
        </div>
     
      
    </div>
</section>
  )
}

export default Events
import React from 'react'
import { Link } from 'react-router-dom'
import "../stylesheet/Thanks.css"

function Thanks() {
    return (
        <div className="thankyou-page">
            <div className="_header">
                <div className="logo">
                    <img src="https://codexcourier.com/images/banner-logo.png" alt="" />
                </div>
                <h1>Thank You!</h1>
            </div>
            {/* <div className="_body">
                <div className="_box">
                    <h2>
                        <strong>Please check your email</strong> for further instructions on how to complete your account setup.
                    </h2>
                    <p>
                        Thanks a bunch for filling that out. It means a lot to us, just like you do! We really appreciate you giving us a moment of your time today. Thanks for being you.
                    </p>
                </div>
            </div> */}
            <div className="_footer">
                {/* <p>Having trouble? <a href>Contact us</a> </p> */}
                <Link className="btn" to={'/'}>Back to homepage</Link>
            </div>
        </div>
    )
}

export default Thanks
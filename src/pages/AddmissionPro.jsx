import React from 'react'
import '../stylesheet/AddmissionPro.css'

function AddmissionPro() {
     
    return (
        <div className=" container addmission">
            <div className="center">
                <div className="title-head">Admission <span>Procedure</span></div>
            </div>
            <div className="procedure-img ">
                <img className="image1" src="/images/admission-procedure.jpeg" alt="" />
                <img className="image2" src="/images/home/MobileAdmission.png" alt="" />

            </div>
            <div className="button-alumni center"><a href="How-To-Register.html" className="btn-two">Read more</a></div>
        </div>
    )
}

export default AddmissionPro
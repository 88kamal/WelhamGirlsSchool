import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheet/AddmissionPro.css'

function AddmissionPro() {
     
    return (
        <div className=" container addmission addmission-pro1" style={{
        marginTop: '-50px'
    }}>
            <div className="center">
                <div className="title-head" >Admission <span>Procedure</span></div>
            </div>
            <div className="procedure-img addmission-pro ">
                <img className="image1" src="/images/admission-procedure.jpeg" alt="image1" />
                <img className="image2" src="/images/home/MobileAdmission.png" alt="image2" />

            </div>
            <div className="button-alumni center"><Link to={"How-To-Register"} className="btn-two">Read more</Link></div>
        </div>
    )
}

export default AddmissionPro
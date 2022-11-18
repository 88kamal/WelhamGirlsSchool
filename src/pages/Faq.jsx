import React from 'react'
import '../stylesheet/Faq.css'
function Faq() {
    
    return (
        <div className=' container faq'>
            <section className="newsletter-section">
                <div className="faq-heading">
                    <h3 className=' text-center'>FAQ's?</h3>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item my-1">
                        <h2 className="accordion-header" id="headingOne">
                            <button style={{
                                padding: '1px 17px 3px 11px', background: '#f5f5f5'
                            }} className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <div className="acc-title text-dark">Is Welham ICSE or CBSE?</div>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong><div className="acc-content collapsed" style={{ display: 'block' }}>
                                    <p>The Welham Girls School in Dehradun is one of the most renowned schools of the city and this girls boarding school follows the ICSE curriculum.</p>
                                </div></strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-1">
                        <h2 className="accordion-header" id="headingTwo">
                            <button style={{
                                padding: '1px 17px 3px 11px', background: '#f5f5f5'
                            }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <div className="acc-title text-dark">How can I get admission to Welham Girls School?</div>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong> <p>In order to get admission in Welham Girls School Dehradun, one need s to follow the following steps:
                                </p><ul>
                                        <li style={{ marginLeft: '5px', fontSize: '13px' }}> You will need to fill out a registration form</li>
                                        <li style={{ marginLeft: '5px', fontSize: '13px' }}> Please send the registration fee along with the application.</li>
                                        <li style={{ marginLeft: '5px', fontSize: '13px' }}> You will also have to take an aptitude test, usually held in November/December.</li>
                                        <li style={{ marginLeft: '5px', fontSize: '13px' }}>  Upon passing the test, you will be accepted into the school.</li>
                                        <li style={{ marginLeft: '5px', fontSize: '13px' }}> Upon verifying your application and documents, the admission council will notify you if you are eligible.</li>
                                    </ul>
                                    <p /></strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-1">
                        <h2 className="accordion-header" id="headingThree">
                            <button style={{
                                padding: '1px 17px 3px 11px', background: '#f5f5f5'
                            }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <div className="acc-title text-dark">What is the fee structure of Welham Girls School?
                                </div>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong><div className="acc-content" style={{ display: 'block' }}>
                                    <p>Given below is the fees structure of Welham Girls School Dehradun: <br />
                                        School Fees         Rs. 7,50,000/
                                        <br />
                                        Admission Fees   Rs. 1,00,000/- (at the time of admission)
                                        <br />
                                        Security Deposit        Rs.3,75,000(refundable/adjustable)
                                        <br />
                                        Imprest Deposit    Rs. 40,000/
                                        <br />
                                        Uniform Deposit    Rs. 20,000/
                                        <br />
                                        Note: The above-mentioned school fees and deposits are subject to review from time to time.
                                    </p>
                                </div></strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-1">
                        <h2 className="accordion-header" id="headingFour">
                            <button style={{
                                padding: '1px 17px 3px 11px', background: '#f5f5f5'
                            }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <div className="acc-title text-dark">Why Welham Girls is considered the best girls boarding school in Dehradun?</div>
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>   <div className="acc-content" style={{ display: 'block' }}>
                                    <p> Welham Girls School has built a reputation for excellence in academics, sports and extra-curricular activities. It has produced many toppers across India as well as abroad.
                                        <br />
                                        The school has well-qualified and experienced teachers who help students achieve their best. A large number of alumni have gone on to pursue higher education at prestigious universities around the world. They have also excelled in various fields like medicine, engineering, law, etc.
                                        Note: The above-mentioned school fees and deposits are subject to review from time to time.
                                    </p>
                                </div></strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-1">
                        <h2 className="accordion-header" id="headingFive">
                            <button style={{
                                padding: '1px 17px 3px 11px', background: '#f5f5f5'
                            }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <div className="acc-title text-dark">Which are the most noteworthy alumnae of Welham Girls?</div>
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong><div className="acc-content" style={{ display: 'block' }}>
                                    <p>Here are some of the most noteworthy alumnae who studied in Welham Girls:
                                    </p><ol style={{ marginLeft: '20px' }}>
                                        <li style={{ marginLeft: '5px', fontSize: '13px' }}>1. Kareena Kapoor Khan</li>
                                        <li style={{ marginLeft: '5px', fontSize: '13px' }}>2. Meira Kumar</li>
                                        <li style={{ marginLeft: '5px', fontSize: '13px' }}>3. Brinda Karat</li>
                                        <li style={{ marginLeft: '5px', fontSize: '13px' }}>4. Tavleen Kaur</li>
                                    </ol>
                                    <p />
                                </div></strong>
                            </div>
                        </div>
                    </div>
                    <div className="faq-button"><a href="/objectives-detail.html">Read more</a></div>

                </div>
            </section>
        </div>
    )
}

export default Faq
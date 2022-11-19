import React, { useEffect } from 'react'
import Layout from '../../components/Layout'

function FeeStructure() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
        <section className="our-team team-page sec-pad1">
        <div className="container">
          <div className="team-title centred">
            <div>
              {/* <h2 style="color: #337ab7;  margin-bottom: 40px;">About Welham</h2> */}
            </div>
            <img src="https://cdn.discordapp.com/attachments/1031605156996972574/1031896709669851176/fee_structure.jpg" alt="img" />
          </div>
          <div className="row">
            <div className="page-content">
              <p>
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
                <b>Note:</b> The above-mentioned school fees and deposits are subject to review from time to time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FeeStructure
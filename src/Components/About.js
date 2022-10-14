import React from 'react';
import fb from './images/fb.png';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';

export default function About() {

  return (

    <div className='container my-5' style={{ minHeight: "65.9vh" }}>
      <h1 className='my-3' style={{ color: "#0F0326" }}>About Us</h1>
      <div className="accordion" id="accordionExample"  >
        <div className="accordion-item" style={{ border: "1px solid #0F0326", borderBottom: "1px solid white" }}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={{ backgroundColor: "#0F0326", color: "white" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              About the Developer
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Viral patel,</strong> an aspiring IT professional is currently pursuing B.E. in Information Technology from MCT's Rajiv Gandhi Institute of Technology, Mumbai. Currently in the Third Year of his course, Murtaza is passionate about coding and has the working knowledge of different programming languages such as C, C++, Java, Python, HTML, CSS, JavaScript, ReactJS etc.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ border: "1px solid #0F0326", borderBottom: "1px solid white" }}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={{ backgroundColor: "#0F0326", color: "white" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Contact Us
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ border: "1px solid #0F0326" }}>
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={{ backgroundColor: "#0F0326", color: "white" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Queries
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Please submit your queries at : </strong>
              <a className='mx-1' href="https://www.gmail.com/" target="_blank" rel="noopener noreferrer">gmail</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}
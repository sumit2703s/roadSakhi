import React from 'react'
import './contact.css'

function Contact() {
  return (
   <>
    <div className="contact-section">
      
      <form className="form">
        <div>
          <h3>Fill out the form below.</h3>

          <label htmlFor="fullName">Full Name</label>
          <div className="fullName">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              required
            />
          </div>

          <label htmlFor="email">
            Email Address <span>(required)</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />

          <label htmlFor="subject">
            Subject <span>(required)</span>
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
          />

          <label htmlFor="message">
            Message <span>(required)</span>
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Write your message here"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
   
   </>
  )
}

export default Contact
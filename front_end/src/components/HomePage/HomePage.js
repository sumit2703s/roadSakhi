import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import "./HomePage.css";
import "./BoxAnimation.css";
import Dropdown from '../../assets/dropdownArrow.svg';
import lottie from 'lottie-web';

const HomePage = () => {
  const lottieContainer = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieContainer.current, // Reference to the Lottie container
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/953b4f6b-5489-49e9-8af7-55b94165df47/i3zY6xst3X.json', // Your Lottie JSON URL
    });

    return () => animation.destroy(); // Clean up the animation on unmount
  }, []);


  

  const faqs = [
    {
      question: "How do I report a road issue?",
      answer: "You can report a road issue by using our easy-to-use form on the homepage. Just provide the location, a brief description of the problem, and any relevant photos."
    },
    {
      question: "What types of road issues can I report?",
      answer: "You can report a variety of road issues such as potholes, cracks, drainage problems, damaged road signs, and more. Any issue affecting road safety or quality can be reported."
    },
    {
      question: "Can I submit multiple reports?",
      answer: "Yes, you can submit multiple reports. If you notice different issues at different locations, feel free to report them separately to ensure they are addressed."
    }
  ];
  
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleAnswerVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index); // Toggle the visibility for clicked item
  };

  return (
    <section className="hero-section">
      <section className="main-header">
        <div ref={lottieContainer} className="lottie-container" /> {/* Lottie container */}

        <h1>
          Transforming Our <span>Roads</span> Together!
        </h1>
        <p>
          Quickly and easily report road issues in your neighborhood and play a
          vital role in creating safer, smoother streets for everyone.
        </p>

        <Link to='/register'>Get started</Link>
      </section>

      <section className="important-announcements">
        <h2>Project Announcements</h2>
        <p>
          Stay up to date with the latest updates and news about road
          maintenance.
        </p>
        <section className="sliding-boxes">
          <div className="wrapper1">
            <div className="item item1"><Link to='https://umd.nic.in/uppwd/?cd=NgAxADEA' target='_blank'>UP PWD website</Link></div>
            <div className="item item2"><Link to='https://umd.nic.in/uppwd/map.aspx' target='_blank'>Citizen portal of Pwd </Link></div>
            <div className="item item3"><Link to='https://uppwd.gov.in/pages/en-act-and-rules-en/policies' target='_blank'>Policy Rules & Acts</Link></div>
            <div className="item item4"><Link to='https://lucknow.nic.in/citizen-services/' target='_blank'>Lucknow Citizen Services</Link></div>
            <div className="item item5"><Link to='https://lucknow.nic.in/departments/' target='_blank'>Lucknow Departments link</Link></div>
            <div className="item item7"><Link to='http://lmc.up.nic.in/' target='_blank'>Lucknow Nagar Nigam </Link></div>
            <div className="item item8"><Link to='https://www.savelifefoundation.org' target='_blank'>Road Safety NGO</Link></div>
          </div>{" "}
        </section>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Welcome to FixMyRoad, a community-driven platform dedicated to
            improving road maintenance in our neighborhoods. Our mission is to
            empower citizens to report road issues like potholes, cracks, and
            more, enabling local authorities to respond effectively. Together,
            we can enhance road safety and quality for all. Join us in making
            our streets better!
          </p>
          <p>
            At FixMyRoad, we believe that every voice matters. By providing a
            seamless platform for residents to report problems, we aim to bridge
            the gap between communities and local governments. Whether you're
            dealing with uneven pavement, damaged road signs, or drainage
            issues, our easy-to-use platform makes sure that your concerns are
            heard. Our goal is to create safer, more efficient roads for
            everyone, and with your help, we can push for faster resolutions and
            more responsible infrastructure management.
          </p>
          <p>
            Together, we are not just reporting problems; we are fostering a
            culture of accountability and proactive road maintenance. Join the
            movement today, and help pave the way for safer streets in your
            community. Let’s work together to build better, smoother, and safer
            roads, one report at a time.
          </p>
        </div>
      </section>

      <section className="frequentlyAskedQuestion-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleAnswerVisibility(index)}>
                <h3>Q. {faq.question}</h3>
                <img className="dropdown" src={Dropdown} alt="dropdown icon" />
              </div>
              {visibleIndex === index && <p>{faq.answer}</p>} {/* Only show answer if clicked */}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default HomePage;

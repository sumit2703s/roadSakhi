import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import './Vision.css';

function Vision() {
  const lottieContainer = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieContainer.current, // Reference to the Lottie container
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/9b32db31-f406-45aa-ab54-a73a31e194bb/LKth195v9W.json', // Your Lottie JSON URL
    });

    // Cleanup on unmount
    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <>
      <section className="container">
        <div className="Vision-section">
          <h2>Vision</h2>
          <p>
            To create safer, well-maintained roads and infrastructure in every
            community, where citizens and local authorities work together in
            harmony, ensuring smoother and safer streets for everyone.
          </p>
        </div>
        <div className="mission-section">
          <h2>Mission</h2>
          <p>
            To empower citizens with a user-friendly platform for reporting road
            issues such as potholes, cracks, and drainage problems, enabling
            local authorities to take timely, effective action. Through
            collaboration and accountability, we aim to improve road safety and
            quality, fostering a culture of proactive maintenance and
            responsible infrastructure management.
          </p>
        </div>
       
        <div className="animation-box" ref={lottieContainer}></div>
      </section>
    </>
  );
}

export default Vision;

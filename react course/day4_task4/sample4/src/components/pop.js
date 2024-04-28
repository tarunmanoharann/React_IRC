import React, { useState, useEffect } from 'react';
import '../assests/pop.css'
const CookieBanner = () => {
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timeoutId); // Clear the timeout on component unmount
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      {visible ? (
        <div className='card-wrapper'>
          <div className="card">
            <p className="cookieHeading">We use cookies</p>
            <p className="cookieDescription">This website uses cookies to ensure you get the best experience on the website</p>
            <div className="buttonContainer">
              <button className="acceptButton" onClick={toggle}>
                Allow
              </button>
              <button className="declineButton" onClick={toggle}>
                Decline
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={toggle}>Manage Cookies</button>
      )}
    </>
  );
};

export default CookieBanner;

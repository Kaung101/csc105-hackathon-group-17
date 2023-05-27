import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        backgroundImage: 'url(/footbg.jpg)', // Updated URL format
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.8,
      }}
    >
      <img
        src="/logo-no-background.png" // Updated URL format
        alt="Logo"
        style={{
          marginTop: '20px',
          width: '80px',
        }}
      />
      <p>Rebuild Together</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="/terms">Terms and Conditions</a>
      </div>
    </div>
  );
};

export default Footer;

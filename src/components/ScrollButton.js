import React, {useState, useEffect} from 'react';
import './ScrollButton.css';
import ScrollBtnImg from '../assets/images/Arrow_Down@.png'


const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.body.scrollHeight;
  
      // If user scrolled within 100px of the bottom, hide the button
      if (scrollPosition >= pageHeight - 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
  
    const handleScrollNext = () => {
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    if (!isVisible) return null; // Don't render the button if not visible
  
  
    return (
      <div className="scroll-btn" onClick={handleScrollNext}>
        <img src={ScrollBtnImg} alt="Scroll Down" className="scroll-icon" />
      </div>
    );
  };
  
  export default ScrollButton;
  
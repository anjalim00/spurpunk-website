import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Page4.css'; // Link to the external CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

import t1 from '../assets/images/t1.png';
import t2 from '../assets/images/t2.png';
import t3 from '../assets/images/t3.png';
import bottomImagePage4 from '../assets/images/Page4_Bottom_Bit@.png';
import SignUpFrame from '../assets/images/Page4_Signup_Frame@.png'
import SubmitButton from '../assets/images/submitBtn.png'
import Sean from  '../assets/images/Page4_Sean@.png'
import Margarita from  '../assets/images/Page4_Margarita@.png'
import Phil from  '../assets/images/Page4_Phil@.png'
import Itzamna from  '../assets/images/Page4_Itzamna@.png'
import Icon from '../assets/images/Page4_Spurpunk_icon@.png'
import Page4DottedLine from '../assets/images/Picture1.png'
import AppStore from '../assets/images/AppleStore_BTN@.svg'
import PlayStore from '../assets/images/GooglePlay_BTN@.png'
import Cactus from '../assets/images/map-cactus2-icon_COPY@.png'
import Grass from '../assets/images/Map-grass-icon2@.png'
import Landmass from '../assets/images/Page4_Landmass_COPY@.png'

const Page4 = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value, // Dynamically update the state for the correct field
      }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    setMessage('Submitting...');
    if (!formData.name || !formData.email) {
        setMessage('Please fill in both fields.');
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        setMessage('Please enter a valid email address.');
        return;
    }
    //setMessage(''); // Clear any previous messages

    const authHeader = 'Basic ' + btoa('admin_martech' + ':' + '0123406789012');

    // Send data to backend
    try {
      const response = await axios.post('https://martech-robotrace-ykgj.onrender.com/submit', formData, {
          headers: {
            'Authorization': authHeader  // Add the Authorization header to the request
          }
      });
      if (response.status === 200) {
        setMessage('Thank you for subscribing!');
        setFormData({ name: '', email: '' });
      }
    } catch (error) {
        console.log(error)
        setMessage('Oops, something went wrong. Please try again later.');
    }
  };

  useEffect(() => {
    console.log('Updated message:', message); // Log the updated message after it changes
  }, [message]); // This will run whenever the `message` state changes
  
  return (
    <div className='container-fluid g-0 d-flex flex-column'>
      {/* Header */}
      <div className='topSection row g-0'>
        <img src={t1} alt="Testimony Top" className="img-fluid testimony-slice col-12 col-md-4" />
        <img src={t2} alt="Testimony Middle" className="img-fluid testimony-slice col-12 col-md-4" />
        <img src={t3} alt="Testimony Bottom" className="img-fluid testimony-slice col-12 col-md-4" />
      </div>

      <div className='midSection position-relative d-flex justify-content-center align-items-center g-0'> 
        <img src={Landmass} alt="Landmass" className="p4-landmass"/>
        <img src={Page4DottedLine} alt="Page4 Dotted Line" className="img-fluid page4-dotted-line" />
        {/* <img src={ArrowHead} alt="Arrow-head" className="img-fluid arrow-head" /> */}
        <img src={Icon} alt="Spurpunk icon" className="img-fluid icon" />
        <img src={Sean} alt="Hero Sean" className="img-fluid sean" />
        <img src={Margarita} alt="Hero Margarita" className="img-fluid margarita" />
        <img src={Phil} alt="Hero Phil" className="img-fluid phil" />
        <img src={Cactus} alt="Cactus" className="img-fluid cactus" />
        <img src={Grass} alt="Grass" className="img-fluid grass" />

        <p className='signup-text'>Sign up to stay on top of Spurpunk Training<br/>and see which one you might become!</p>

        <img src={SignUpFrame} alt="Signup Frame" className="signup-frame" />
        <div class="name-container">
          <label for="name" class="name-label">NAME</label>
          <input type="text" id="name" name="name" class="name-input" value={formData.name} onChange={(e) => handleInputChange(e)} placeholder="" />
        </div>
        <div class="email-container">
          <label for="email" class="email-label">E-MAIL</label>
          <input type="text" id="email" name="email" class="email-input" value={formData.email} onChange={(e) => handleInputChange(e)} placeholder="" />
          <div className="message-container">
              <span className="email-message">{message}</span>
          </div>
        </div>

        <div class="image-button" onClick={handleSubmit}>
          <img src={SubmitButton} alt="Submit Button" class="submit-button" />
        </div>
      </div>

      <div className='bottomSection'>
        <img src={bottomImagePage4} alt="Bottom Section" className="img-fluid bottom-img" />
        
        <div className='download-btns'>
          <img src={PlayStore} alt="Play Store" className="img-fluid playstore" />
          <img src={AppStore} alt="App Store" className="img-fluid appstore" />
        </div>
        <img src={Itzamna} alt="Itzamna" className="img-fluid itzamna" />
      </div>
      
         {/* Main Content with Bootstrap Form */}
        {/* <div className="signup-form text-center d-flex flex-column justify-content-center align-items-center">
            <img src={Landmass} alt="Landmass background" className="img-fluid landmass" />
            <img src={Cactus} alt="Cactus" className="img-fluid cactus" />
            <img src={Grass} alt="Grass" className="img-fluid grass" />
            <p className='signup-text'>Sign up to stay on top of Spurpunk Training<br/>and see which one you might become!</p>
            <form className="container form justify-content-center align-items-center d-flex flex-column">
              
              <div>{message}</div>
              <div className='justify-content-center align-items-center '>
                
                <img src={NameEmail} alt="Name and Email" className="form-img" />
                <div className="mb-5 d-flex">
                    <label htmlFor="name" className="form-label p-1"></label>
                    <input type="text" className="form-control transparent-input" name="name" value={formData.name} onChange={handleChange} onKeyDown={submission} />
                </div>

                <div className="mb-2 d-flex">
                    <label htmlFor="email" className="form-label p-1"></label>
                    <input type="email" className="form-control transparent-input" name="email"  value={formData.email} onChange={handleChange} onKeyDown={submission} />
                </div>
              </div>
            </form>

            <img src={Page4DottedLine} alt="Page4 Dotted Line" className="img-fluid page4-dotted-line" />
            <img src={Icon} alt="Spurpunk icon" className="img-fluid icon" />
            <img src={ArrowHead} alt="Arrow-head" className="img-fluid arrow-head" />
            <img src={Sean} alt="Hero Sean" className="img-fluid sean" />
            <img src={Margarita} alt="Hero Margarita" className="img-fluid margarita" />
            <img src={Phil} alt="Hero Phil" className="img-fluid phil" />
        </div> */}
        
      
      {/* <div className='footer'>
        <img src={bottomImagePage4} alt="Bottom Section" className="img-fluid bottom-bit w-100" />
        <img src={AppStore} alt="App Store" className="img-fluid appstore" />
        <img  src={PlayStore} alt="Play Store" className="img-fluid playstore" />
        <img src={Itzamna} alt="Itzamna" className="img-fluid itzamna" />
      </div> */}
    </div>
  );
};

export default Page4;

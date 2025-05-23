import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { addScaleCorrector, motion, useInView } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import "./Page1.css";

// Page1
import SpurpunkTitle from '../assets/images/Spurpunk-Title@.png';
import SkeletonFrame from '../assets/images/Skeleton-Frame@.png';
import TrailerRibbon from '../assets/images/Trailer-Ribbon@.png';
import DiscordNormal from '../assets/images/Discord_normal@.png';
import DiscordPressed from '../assets/images/Discord_pressed@.png';
import InstagramNormal from '../assets/images/Instagram_normal@.png';
import InstagramPressed from '../assets/images/Instagram_pressed@.png';
import YoutubeNormal from '../assets/images/Youtube_normal@.png';
import YoutubePressed from '../assets/images/Youtube_pressed@.png';
import XNormal from '../assets/images/X_normal@.png';
import XPressed from '../assets/images/X_pressed@.png';
import FacebookNormal from '../assets/images/Facebook_normal@.png';
import FacebookPressed from '../assets/images/Facebook_pressed@.png';
import Cactus1 from '../assets/images/map-cactus2-icon@.png';
import Compass from '../assets/images/compass-icon@.png';
import Grass from '../assets/images/map-grass-icon@.png';
import Cactus2 from '../assets/images/map-cactus-icon@.png';
import Page1DottedLine from '../assets/images/Page1_Dotteed_Line@.png';
import ArrowDown from '../assets/images/Arrow_Down@.png';
import PlayTrailerNormal from '../assets/images/PlayTrailer_normal@.png';
import PlayTrailerPressed from '../assets/images/PlayTrailer_pressed@.png';
import GooglePlayBtn from '../assets/images/GooglePlay_BTN@.png';
import AppleStoreBtn from '../assets/images/AppleStore_BTN@.png';
import Page1Landmass from '../assets/images/Page1_Landmass@.png';
import SpurpunkIcon from '../assets/images/Spurpunk_icon.png';
import BuyNowButton from '../assets/images/Buy-Now@.png';
// Importing video
import GameplayVideo from '../assets/videos/Gameplay_BurialGrounds_Clips_Better.mp4';


const Page1 = () => {
  const [pressedStates, setPressedStates] = useState({
    discord: false,
    instagram: false,
    youtube: false,
    x: false,
    facebook: false,
    playTrailer: false,
  });

  const handlePress = (key, timeout) => {
    setPressedStates((prevState) => ({
      ...prevState,
      [key]: true,
    }));
    setTimeout(() => {
      setPressedStates((prevState) => ({
        ...prevState,
        [key]: false,
      }));
    }, timeout);
  };

  return (
    <div className="g-0 page1">
      <div className="top-bar d-flex py-2 px-5 d-flex w-100 justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <motion.img src={SpurpunkIcon} alt="Press Kit" className="presskit-btn" initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: 'easeOut' }} />

          {/* Social Media Links */}
          <div className="d-flex justify-content-center">
            <motion.img src={pressedStates.discord ? DiscordPressed : DiscordNormal} alt="Discord" className="social-btn mx-2"
              initial={{ y: -25, opacity: 0 }} animate={{ y: [-25, 20, 0], opacity: 1 }} style={{ transformOrigin: '50% 80%' }}
              transition={{ type: "spring", stiffness: 200, damping: 5 }} onClick={() => handlePress('discord', 200)} />

            <motion.img src={pressedStates.instagram ? InstagramPressed : InstagramNormal} alt="Instagram" className="social-btn mx-2"
              initial={{ y: -25, opacity: 0 }} animate={{ y: [-25, 20, 0], opacity: 1 }}
              transition={{ type: "spring", stiffness: 250, damping: 5 }} onClick={() => handlePress('instagram', 200)} />

            <motion.img src={pressedStates.youtube ? YoutubePressed : YoutubeNormal} alt="Youtube" className="social-btn mx-2"
              initial={{ y: -25, opacity: 0 }} animate={{ y: [-25, 20, 0], opacity: 1 }}
              transition={{ type: "spring", stiffness: 250, damping: 5 }} onClick={() => handlePress('youtube', 200)} />
            <motion.img src={pressedStates.x ? XPressed : XNormal} alt="X" className="social-btn mx-2"
              initial={{ y: -25, opacity: 0 }} animate={{ y: [-25, 20, 0], opacity: 1 }}
              transition={{ type: "spring", stiffness: 250, damping: 5 }} onClick={() => handlePress('x', 200)} />

            <motion.img src={pressedStates.facebook ? FacebookPressed : FacebookNormal} alt="Facebook" className="social-btn mx-2"
                        initial={{ y: -25, opacity: 0 }} animate={{ y: [-25, 20, 0], opacity: 1 }}
                        transition={{ type: "spring", stiffness: 250, damping: 5 }} onClick={() => handlePress('facebook', 200)} />
          </div>
        </div>
        <div className="d-flex align-items-center gap-5">
          <motion.p className="play-now justify-content-center" initial={{ y: -25, opacity: 0 }} animate={{ y: 5, opacity: 1 }} 
                    transition={{ duration: 0.25, ease: 'easeOut' }}>Play Now:</motion.p>

          <a href="https://play.google.com/store/apps/details?id=com.easleydunnproductions.spurpunk&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" className="tag justify-content-centers">
            <motion.img
              src={GooglePlayBtn} alt="Google Play Store" className="playstore-btn"
              initial={{ opacity: 0, scale: 1.5 }} animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1, ease: 'easeOut' }} />
            
          </a>
          <a href="https://apps.apple.com/ge/app/spurpunk-td/id1487386202#?platform=iphone" target="_blank" rel="noopener noreferrer" className="tag">
            <motion.img
              src={AppleStoreBtn} alt="Apple App Store" className="appstore-btn"
              initial={{ opacity: 0, scale: 1.5 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }} />
          </a>
        </div>
      </div>

      <div className="title-container">  
        <motion.video src={GameplayVideo} autoPlay loop muted playsInline className="background-video"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }} />
        
        <div className="container d-flex justify-content-center">
        <motion.img 
          src={SpurpunkTitle} alt="Spurpunk Title" className="spurpunk-title" 
          initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: [0.5, 1] }} 
          transition={{ duration: 1, ease: 'easeOut' }} />
        </div>

      </div>

      <div className="bottom-section position-relative d-flex justify-content-center align-items-center g-0">
          <motion.img src={Page1Landmass} alt="Landmass" className="p1-landmass" />
          <motion.img src={Cactus1} alt="Map Cactus 1" className="cactus1"
                      initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} 
                      transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }} />
          <motion.img src={Cactus2} alt="Map Cactus 2" className="cactus2"
                      initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} 
                      transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }} />
          <motion.img src={Page1DottedLine} alt="Page1 dotted line" className="p1-dotted-line"
                      initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} 
                      transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }} />
          <motion.img src={Grass} alt="Page1 grass icon" className="p1-grass"
                      initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} 
                      transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }} />
          <motion.img src={Compass} alt="Compass icon" className="compass"
                      initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} 
                      transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }} />

        <div className="trailer-wrapper d-flex flex-column align-items-center justify-content-center">
          
          <motion.img src={SkeletonFrame} alt="Skeleton Frame" className="skeleton-frame"
                      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.25, ease: 'easeOut' }}
          />

          
          <a href="https://youtu.be/GEHQamurmBI?si=I8-euk5_BwD9Zi6m" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
            <motion.img
              src={TrailerRibbon} alt="Trailer Ribbon" className="trailer-ribbon"
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.25, ease: 'easeOut' }}
              onClick={() => handlePress('playTrailer', 200)}
            />
          </a>
          
        </div>
        <p className='p1-text'>Are You a Spurpunk?</p>
        <p className='myi'>Meet Your Instructors!</p>
      </div> 

    </div>
  );
};

export default Page1;

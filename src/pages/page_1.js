import { useState } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page1.css';

// Importing images
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
import AreYouSpurpunk from '../assets/images/Are-You-a-Spurpunk@.png';
import MapCactus2Icon from '../assets/images/map-cactus2-icon@.png';
import CompassIcon from '../assets/images/compass-icon@.png';
import MapGrassIcon from '../assets/images/map-grass-icon@.png';
import MapCactusIcon from '../assets/images/map-cactus-icon@.png';
import Page1DottedLine from '../assets/images/Page1_Dotteed_Line@.png';
import ArrowDown from '../assets/images/Arrow_Down@.png';
import PlayTrailerNormal from '../assets/images/PlayTrailer_normal@.png';
import PlayTrailerPressed from '../assets/images/PlayTrailer_pressed@.png';
import GooglePlayBtn from '../assets/images/GooglePlay_BTN@.png';
import AppleStoreBtn from '../assets/images/AppleStore_BTN@.png';
import Page1Landmass from '../assets/images/Page1_Landmass@.png';
import PressKitButton from '../assets/images/PressKit_Button@.png';
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
    <div className="container-fluid page1 p-0">
      {/* Black Background for Top Section */}
      <div className="top-bar">
        {/* Left Side Section: Press Kit Button and Social Media Icons */}
        <div className="top-bar-left d-flex align-items-center gap-3">
          {/* PressKit Button */}
          <motion.img
            src={PressKitButton}
            alt="Press Kit"
            className="presskit-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          />

          {/* Social Media Links */}
          <div className="d-flex justify-content-center">
            <motion.img
              src={pressedStates.discord ? DiscordPressed : DiscordNormal}
              alt="Discord"
              className="discord-normal mx-2"
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              onClick={() => handlePress('discord', 200)}
            />
            <motion.img
              src={pressedStates.instagram ? InstagramPressed : InstagramNormal}
              alt="Instagram"
              className="instagram-normal mx-2"
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              onClick={() => handlePress('instagram', 200)}
            />
            <motion.img
              src={pressedStates.youtube ? YoutubePressed : YoutubeNormal}
              alt="Youtube"
              className="youtube-normal mx-2"
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              onClick={() => handlePress('youtube', 200)}
            />
            <motion.img
              src={pressedStates.x ? XPressed : XNormal}
              alt="X"
              className="x-normal mx-2"
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              onClick={() => handlePress('x', 200)}
            />
            <motion.img
              src={pressedStates.facebook ? FacebookPressed : FacebookNormal}
              alt="Facebook"
              className="facebook-normal mx-2"
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              onClick={() => handlePress('facebook', 200)}
            />
          </div>
        </div>

        {/* Right Side Section: Buy Now and Store Buttons */}
        <div className="top-bar-right d-flex align-items-center gap-3">
          <motion.img
            src={BuyNowButton}
            alt="Buy Now"
            className="buy-now"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          />
          <a href="https://play.google.com/store/apps/details?id=com.easleydunnproductions.spurpunk&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer">
            <motion.img
              src={GooglePlayBtn}
              alt="Google Play Store"
              className="googleplay-btn"
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            />
          </a>
          <a href="https://apps.apple.com/ge/app/spurpunk-td/id1487386202#?platform=iphone" target="_blank" rel="noopener noreferrer">
            <motion.img
              src={AppleStoreBtn}
              alt="Apple App Store"
              className="applestore-btn"
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            />
          </a>
        </div>
      </div>

      {/* Background Video */}
      <motion.video
        src={GameplayVideo}
        autoPlay
        loop
        muted
        className="background-video"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />

      {/* Background Color Section */}
      <div className="background-color"></div>

      {/* Spurpunk Title (Red) */}
      <div className="container d-flex justify-content-center position-relative spurpunk-title-container">
        <motion.img
          src={SpurpunkTitle}
          alt="Spurpunk Title"
          className="spurpunk-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
        />
      </div>

      {/* Trailer Wrapper Section */}
      <div className="container position-relative trailer-wrapper">
        {/* Skeleton Frame (Blue) */}
        <motion.img
          src={SkeletonFrame}
          alt="Skeleton Frame"
          className="skeleton-frame"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.25, ease: 'easeOut' }}
        />

        {/* Trailer Ribbon */}
        <a href="https://youtu.be/GEHQamurmBI?si=I8-euk5_BwD9Zi6m" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={TrailerRibbon}
            alt="Trailer Ribbon"
            className="trailer-ribbon"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.25, ease: 'easeOut' }}
          />
        </a>

        {/* Play Trailer Button */}
        <motion.img
          src={pressedStates.playTrailer ? PlayTrailerPressed : PlayTrailerNormal}
          alt="Play Trailer"
          className="play-trailer-normal"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.25, ease: 'easeOut' }}
          onClick={() => handlePress('playTrailer', 200)}
        />
      </div>

      {/* Are You a Spurpunk (Pink) */}
      <div className="container d-flex justify-content-center position-relative are-you-spurpunk-container">
        <motion.img
          src={AreYouSpurpunk}
          alt="Are You a Spurpunk?"
          className="are-you-spurpunk"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.25, ease: 'easeOut' }}
        />
      </div>

      {/* Landmass Section for the Background */}
      <div className="container d-flex justify-content-center position-relative landmass-container">
        <motion.img
          src={Page1Landmass}
          alt="Page 1 Landmass"
          className="page1-landmass"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.25, ease: 'easeOut' }}
        />
      </div>

      {/* Map Cactus2 Icon */}
      <div className="container d-flex justify-content-center position-relative map-cactus2-container">
        <motion.img
          src={MapCactus2Icon}
          alt="Map Cactus 2"
          className="map-cactus2"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.25, ease: 'easeOut' }}
        />
      </div>

      {/* Compass Icon */}
      <div className="container d-flex justify-content-center position-relative compass-container">
        <motion.img
          src={CompassIcon}
          alt="Compass Icon"
          className="compass-icon"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.25, ease: 'easeOut' }}
        />
      </div>

      {/* Map Grass Icon */}
      <div className="container d-flex justify-content-center position-relative grass-container">
        <motion.img
          src={MapGrassIcon}
          alt="Map Grass Icon"
          className="map-grass-icon mx-2"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.25, ease: 'easeOut' }}
        />
        <motion.img
          src={MapGrassIcon}
          alt="Map Grass Icon Duplicate"
          className="map-grass-icon-duplicate mx-2"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.25, ease: 'easeOut' }}
        />
      </div>

      {/* Map Cactus Icon */}
      <div className="container d-flex justify-content-center position-relative cactus-container">
        <motion.img
          src={MapCactusIcon}
          alt="Map Cactus Icon"
          className="map-cactus-icon"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.25, ease: 'easeOut' }}
        />
      </div>

      {/* Page 1 Dotted Line */}
      <div className="container d-flex justify-content-center position-relative dotted-line-container">
        <motion.img
          src={Page1DottedLine}
          alt="Page 1 Dotted Line"
          className="page1-dotted-line"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.25, ease: 'easeOut' }}
        />
      </div>

      {/* Arrow Down */}
      <div className="container d-flex justify-content-center position-relative arrow-container">
        <motion.img
          src={ArrowDown}
          alt="Arrow Down"
          className="arrow-down"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.25, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

export default Page1;
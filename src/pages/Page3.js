import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page3.css';
import topImage from '../assets/images/Top-image.png';
import middleImage from '../assets/images/Middle-image.png';
import bottomImage from '../assets/images/Bottom-image.png';
import { motion, useScroll, useTransform } from "framer-motion";

const Page3 = () => {
  // Refs for each section
  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);

  // Scroll progress for calculating opacity
  const { scrollYProgress } = useScroll();

  // Opacity for top section
  const topOpacity = useTransform(scrollYProgress, (value) => {
    const bounds = topRef.current?.getBoundingClientRect();
    if (!bounds) return 0;
    const visibleHeight = Math.min(window.innerHeight, bounds.bottom) - Math.max(0, bounds.top);
    return Math.max(0, Math.min(1, visibleHeight / bounds.height));
  });

  // Opacity for middle section
  const middleOpacity = useTransform(scrollYProgress, (value) => {
    const bounds = middleRef.current?.getBoundingClientRect();
    if (!bounds) return 0;
    const visibleHeight = Math.min(window.innerHeight, bounds.bottom) - Math.max(0, bounds.top);
    return Math.max(0, Math.min(1, visibleHeight / bounds.height));
  });

  // Opacity for bottom section
  const bottomOpacity = useTransform(scrollYProgress, (value) => {
    const bounds = bottomRef.current?.getBoundingClientRect();
    if (!bounds) return 0;
    const visibleHeight = Math.min(window.innerHeight, bounds.bottom) - Math.max(0, bounds.top);
    return Math.max(0, Math.min(1, visibleHeight / bounds.height));
  });

  return (
    <div className="page3 container-fluid py-5">
      {/* <div className="container"> */}
        {/* Top Section */}
        <motion.div ref={topRef} style={{ opacity: topOpacity }} className="row mb-5 g-0" >
          <img src={topImage} alt="Top Section Image" className="col-12 col-sm-6 d-flex justify-content-center align-items-center p-3 topimg" />

          <div className='col-12 col-sm-6 d-flex flex-column justify-content-center align-items-end p-4 bgit'>
            <p className='headings' style={{ textAlign: 'right' }}>The First Combination Tower<br/>Defense and Card Game</p>
            <p className='content text-align-right'>Set your towers up but also stay agile with what<br/>cards and spells you use to buff your towers or<br/>repel the creatures. Your cardplay can level your<br/>tower arsenal into a wining defense.</p>
          </div>
        </motion.div>

        {/* Middle Section */}
        <motion.div ref={middleRef} style={{ opacity: middleOpacity }} className="row mb-5  g-0" >
          <div className='col-12 col-sm-6 d-flex flex-column justify-content-center align-items-start p-4 bgim order-2 order-md-1'>
            <p className='headings' style={{ textAlign: 'left' }}>Over 60 Unique Levels -<br/>including Secret Ones</p>
            <p className='content'>From Boot Hill to Death Valley to ancient Mayan<br/>Ruins, these levels will keep you on your toes<br/>partner - and when you're done there's several<br/>hidden ones to discover.</p>
          </div>

          <img src={middleImage} alt="Middle Section" className="col-12 col-sm-6 d-flex justify-content-center align-items-center p-3 middleimg order-1 order-md-2" />
        </motion.div>

        {/* Bottom Section */}
        <motion.div ref={bottomRef} style={{ opacity: bottomOpacity }} className="row g-0" >
          <img src={bottomImage} alt="Bottom Section" className="col-12 col-sm-6 d-flex justify-content-center align-items-center p-3 bottomimg" />

          <div className='col-12 col-sm-6 d-flex flex-column justify-content-center align-items-end p-4 bgib'>
            <p className='headings' style={{ textAlign: 'right' }}>Hidden Secret Towers to Find<br/>and Unleash on the Monsters</p>
            <p className='content'>You'll need all the help you can get to fight<br/>regenerating zombies, exploding landsharks and<br/>jumping ghouls. Unlock and deploy the several<br/>secret towers to turn the tides of battle.</p>
          </div>
        </motion.div>
      {/* </div> */}
    </div>
  );
};

export default Page3;

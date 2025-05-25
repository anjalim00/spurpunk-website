import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Page2.css';

// Page2
import Page2DottedLine from '../assets/images/Page-2-dotted_line@.png';
import HeroFrame from '../assets/images/Hero_frame@.png';
import Sean from '../assets/images/Hero_Sean@.png';
import Margarita from '../assets/images/Hero_Margarita@.png';
import Phil from '../assets/images/Hero_Phil@.png';
import Mickey from '../assets/images/Hero_Mickey@.png';
import SeanGearSilhouette from '../assets/images/Page2_Phil_Gear_silhouette@.png';
import MargaritaCardsSilhouette from '../assets/images/Page2_Susies_Cards_silhouette@.png';
import PhilBombSilhouette from '../assets/images/Page2_Phils_Bomb_silhouette@.png';
import MickeySkullSilhouette from '../assets/images/Page2_Mickeys_Skull_silhouette@.png';
import SeanGear from '../assets/images/Page2_Phil_Gear@.png'
import MargaritaCards from '../assets/images/Page2_Susies_Cards@.png'
import PhilBomb from '../assets/images/Page2_Phils_Bomb@.png'
import MickeySkull from '../assets/images/Page2_Mickeys_Skull@.png'

const jumpAnimation = {
    hidden: { height: '0%' },
    visible: {
      height: '52%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        bounce: 0.3,
      },
    },
    settle: {
      height: '50%',
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
};

const Page2 = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    // <div className="page2-container page2 py-5" ref={ref}>
      <div className="page-2 container-fluid g-0 ">
        

        {/* Page 2 Dotted Line */}
        <img
          src={Page2DottedLine}
          alt="Page 2 Dotted Line"
          className="page2-dotted-line d-md-block d-none"
        />

        {/* Text Backgrounds */}
        <div className="row g-0 text-center justify-content-center align-items-center d-flex rowc">
        
         {/*Sean  col-sm-6 col-12*/}   
        <div className="col col-md-3">
            <div className="text-wrapper">
                <p className='fonts'>Sean</p>
                <img
                    src={SeanGearSilhouette}
                    alt="Sean's gear silhouette"
                    className="img-fluid silhouette"
                />
                <img
                    src={SeanGear}
                    alt="Mickey's skull silhouette"
                    className="hero-element"
                />
                <img
                    src={HeroFrame}
                    alt="Hero frame 1"
                    className="hero-frame"
                />
        
                <motion.img 
                    src={Sean} 
                    alt="Hero Sean" 
                    className="hero-figure" 
                    // initial="hidden"
                    // animate={isInView ? ['visible', 'settle'] : 'hidden'}
                    // variants={jumpAnimation}
                />
                <p className='sp-title'>Electric Spurpunk</p>
                <p className='sp-content'>Creates weapons from any<br/>and all scraps - metal, wood,<br/>even bone.</p>
                
            </div>
        </div>

        {/* Margarita  col-sm-6 col-12*/}
        <div className="col col-md-3">
            <div className="text-wrapper">
            <p className='fonts'>Margarita</p>
            <img
              src={MargaritaCardsSilhouette}
              alt="Margarita's cards silhouette"
              className="img-fluid silhouette"
            />
            <img
              src={MargaritaCards}
              alt="Mickey's skull silhouette"
              className="hero-element"
            />
            <img
                src={HeroFrame}
                alt="Hero frame 2"
                className="hero-frame"
            />
            
            <motion.img 
                src={Margarita} 
                alt="Hero Margarita" 
                className="hero-figure" 
                // initial="hidden"
                // animate={isInView ? ['visible', 'settle'] : 'hidden'}
                // variants={jumpAnimation}
            />
            <p className='sp-title'>Elemental Spurpunk</p>
            <p className='sp-content'>A mage with a talent to create<br/>dangerous spells from<br/>playing cards.</p>
            
            </div> 
        </div>

        {/* Phil col-sm-6 col-12*/}
        <div className="col col-md-3">
            <div className="text-wrapper">
            <p className='fonts'>Phil</p>
            <img
              src={PhilBombSilhouette}
              alt="Phil's bomb silhouette"
              className="img-fluid silhouette"
            />
            <img
              src={PhilBomb}
              alt="Mickey's skull silhouette"
              className="hero-element"
            />
            <img
                src={HeroFrame}
                alt="Hero frame 3"
                className="hero-frame"
            />
            
            <motion.img 
                src={Phil} 
                alt="Hero Phil" 
                className="hero-figure" 
                // initial="hidden"
                // animate={isInView ? ['visible', 'settle'] : 'hidden'}
                // variants={jumpAnimation}
            />
            <p className='sp-title'>Ghost Spurpunk</p>
            <p className='sp-content'>An ectoplasmic shopkeeper<br/>who crafts unstable items<br/>and then puts them on sale.</p>
            
            </div>
        </div>

        {/* Mickey  col-12 col-sm-6 */}
        <div className="col col-md-3 ">
            <div className="text-wrapper">
            <p className='fonts'>Mickey</p>
            <img
              src={MickeySkullSilhouette}
              alt="Mickey's skull silhouette"
              className="silhouette"
            />
            <img
              src={MickeySkull}
              alt="Mickey's skull silhouette"
              className="hero-element"
            />
            <img
                src={HeroFrame}
                alt="Hero frame 2"
                className="hero-frame"
            />
            
            <motion.img 
                src={Mickey} 
                alt="Hero Mickey" 
                className="hero-figure mickey" 
                // initial="hidden"
                // animate={isInView ? ['visible', 'settle'] : 'hidden'}
                // variants={jumpAnimation}
            />
            <p className='sp-title'>Dark Spurpunk</p>
            <p className='sp-content'>A powerful necromancer<br/>who commands an army of<br/>the undead.</p>
            </div>
        </div>
        </div>
        
      {/* </div> */}
    </div>
  );
};

export default Page2;

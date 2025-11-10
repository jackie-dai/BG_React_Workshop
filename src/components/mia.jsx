import { useState } from 'react'

const Mia = () => {

  const pathwayBgPath = "/mia-card.png"; 
  const characterImagePath = "/mia-photo.png";
  const rainbowBorderPath = "/mia-rainbow.png";
  const outlinedTextStyle = {
    textShadow: '1px 1px 0 #FFFFFF, -1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF',
    color: '#333333',
    fontWeight: 'bold',
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8" style={{backgroundColor: '#f3f4f6'}}>
      <div 
        className="card-shadow" 
        style={{
          width: '350px', 
          height: '550px',
          borderRadius: '20px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)'
        }}
      >
        
        <img 
          src={rainbowBorderPath} 
          alt="Rainbow Border" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '20px',
          }}
        />

        <img 
          src={pathwayBgPath} 
          alt="Pathway Background" 
          style={{
            position: 'absolute',
            top: '5px',
            left: '5px',
            width: 'calc(100% - 10px)',
            height: 'calc(100% - 10px)',
            objectFit: 'cover',
            borderRadius: '15px',
          }}
        />
        
        <div 
          style={{
            position: 'absolute',
            top: '45px', 
            left: '15px',
            width: 'calc(100% - 30px)',
            height: '175px', 
            borderRadius: '10px',
            overflow: 'hidden',
            zIndex: 5,
          }}
        >
          <img 
            src={characterImagePath} 
            alt="Mia Character" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100px',
            height: '35px',
            backgroundColor: '#f0f0f0', 
            transform: 'skewX(-30deg) translateX(-15px)', 
            zIndex: 10,
          }}
        ></div>
        <span 
          style={{
            position: 'absolute',
            top: '5px',
            left: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#4a4a4a',
            zIndex: 11,
          }}
        >BASIC</span>

        <span 
          style={{
            ...outlinedTextStyle,
            position: 'absolute',
            top: '240px',
            left: '15px',
            padding: '5px 10px',
            backgroundColor: '#f4d0d0', 
            borderRadius: '10px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#4a4a4a',
            textTransform: 'uppercase',
            zIndex: 5,
          }}
        >ABILITY</span>
        
        <span 
          style={{
            ...outlinedTextStyle,
            position: 'absolute',
            top: '240px',
            left: '90px',
            padding: '5px 10px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#333333',
            zIndex: 5,
          }}
        >Mystical Figma</span>

        <p 
          style={{
            ...outlinedTextStyle,
            position: 'absolute',
            top: '285px',
            left: '15px',
            width: 'calc(100% - 30px)',
            fontSize: '14px',
            color: '#333333',
            lineHeight: '1.4',
            zIndex: 5,
          }}
        >
          This pokemon is a 3rd year student from UC Berkeley, majoring in Media Studies and CS
        </p>

        <div 
          style={{
            ...outlinedTextStyle,
            position: 'absolute',
            top: '360px',
            left: '15px',
            fontSize: '14px',
            color: '#333333',
            lineHeight: '1.0',
            zIndex: 5,
          }}
        >
          <p><b style={{fontWeight: 'bold'}}>Location:</b> Bay Area</p>
          <p><b style={{fontWeight: 'bold'}}>Powers:</b> Figma</p>
          <p><b style={{fontWeight: 'bold'}}>Strengths:</b> Watching Netflix</p>
          <p><b style={{fontWeight: 'bold'}}>Weakness:</b> CS70</p>
        </div>

        <div 
          style={{
            position: 'absolute',
            bottom: '15px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 5,
          }}
        >
          <span 
            style={{
              fontSize: '30px',
              color: 'black', 
              letterSpacing: '5px',
            }}
          >★★★★</span>
        </div>
      </div>
    </div>
  );
};

export default Mia;
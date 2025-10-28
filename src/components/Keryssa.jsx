import { useState } from 'react'

function Keryssa() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Moul&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Moulpali&display=swap');
      `}</style>
      <div className="relative">
        <div 
          className="overflow-hidden bg-white shadow-2xl"
          style={{
            width: '422.5px',
            height: '595px',
            borderRadius: '50px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <img
            src="/sunset_bg.png"
            alt="Framed content"
            className="w-full h-full object-cover"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '118.5px',
              height: '118.5px',
              borderRadius: '50%',
              overflow: 'hidden',
              top: '25px',
              right: '245px',
              zIndex: 1
            }}
          >
            <img
              src="/jungkook_flag.png"
              alt="Circle content"
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
              left: '10px',
              top: '50%',
              transform: 'translateX(-45%) translateY(-50%) rotate(90deg)',
              transformOrigin: 'center',
              fontFamily: 'Moul, serif',
              fontSize: '75px',
              color: '#734741',
              WebkitTextStroke: '1px #FFFFFF',
              textStroke: '1px #FFFFFF',
              whiteSpace: 'nowrap',
              zIndex: 2
            }}
          >
            KERYSSA LI
          </div>
          <div
            style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(10%, -25%)',
            width: '166.5px',
            height: '351.5px',
            backgroundColor: 'rgba(193, 145, 129, 0.6)',
            borderRadius: '40px',
            zIndex: 3
            }}
          />
          <img
            src="/keryssa-main.png"
            alt="Keryssa main"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-61%, -47%)',
              width: '145%',
              height: '145%',
              objectFit: 'contain',
              zIndex: 4
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(10%) translateY(20%)',
              fontFamily: 'Moulpali, serif',
              fontSize: '20px',
              color: 'white',
              textAlign: 'center',
              lineHeight: '1.2',
              zIndex: 10,
              whiteSpace: 'pre-line',
              fontWeight: 'bold'
            }}
          >
            {'KERYSSA LI\nSHE/HER\n2ND YEAR\nMILPITAS\nDATA SCIENCE + ECON'}
          </div>
          <div
            style={{
              position: 'absolute',
              top: '160px',
              left: '50%',
              transform: 'translateX(40%) translateY(40%)',
              fontFamily: 'Moulpali, serif',
              fontSize: '15px',
              color: 'white',
              textAlign: 'left',
              lineHeight: '1.4',
              zIndex: 10
            }}
          >
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>
              HOBBIES &lt;3
            </div>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>RUNNING</li>
              <li>NAPPING</li>
              <li>LISTENING TO<br/>MUSIC</li>
              <li>COOKING/BAKING</li>
              <li>WHEEL OF<br/>FORTUNE</li>
              <li>READING</li>
              <li>KDRAMAS &<br/>CDRAMAS</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Keryssa
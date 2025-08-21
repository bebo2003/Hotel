import React from 'react';

const CircularText = ({ text, diameter, fontSize }) => {
  const radius = diameter / 2;
  // Calculate angle between each letter based on text length

  return (
    <div
      style={{
        position: 'relative',
        width: diameter,
        height: diameter,
        borderRadius: '50%',
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontFamily: "'Arial Black', Arial, sans-serif",
        color: '#222',
      }}
    >
      {/* The center icon */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: fontSize * 2,
          color: '#1f7a5f',
        }}
        aria-label="Star icon"
        role="img"
      >
        &#10038;
      </div>

      {/* Circular text */}
      <svg
        width={diameter}
        height={diameter}
        style={{ position: 'absolute', top: 0, left: 0 }}
        aria-hidden="true"
      >
        <defs>
          <path
            id="circlePath"
            d={`
              M ${radius}, ${radius} 
              m -${radius - 10}, 0 
              a ${radius - 10},${radius - 10} 0 1,1 ${2 * (radius - 10)},0 
              a ${radius - 10},${radius - 10} 0 1,1 -${2 * (radius - 10)},0
            `}
          />
        </defs>
        <text
          fill="#222"
          fontSize={fontSize}
          fontWeight="bold"
          fontFamily="'Arial Black', Arial, sans-serif"
        >
          <textPath
            href="#circlePath"
            startOffset="50%"
            textAnchor="middle"
            letterSpacing="2"
          >
            {text.toUpperCase()}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default function Test() {
  return (
   
      <CircularText text="30 YEARS OF EXPERIENCE HOTEL BUSINESS" diameter={150} fontSize={13} />
   
  );
}


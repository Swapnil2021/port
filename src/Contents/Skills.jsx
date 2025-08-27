import React from 'react'
import photo1 from "/assets/1.png"
import photo2 from "/assets/2.png"
import photo3 from "/assets/3.png"
import photo4 from "/assets/4.png"
import photo5 from "/assets/5.png"
import photo6 from "/assets/6.png"
import photo7 from "/assets/7.png"
import photo8 from "/assets/8.png"
import photo9 from "/assets/9.png"
import database from "/assets/database.png"
function Skills() {
  return (

    <>
    <div className='bg-rose-300 p-40'>
      <p className='uppercase Tan text-8xl'>SKILLS</p>
       
       <div
      style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '1rem',
        
      }}
    >
      {iconPaths.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Icon ${idx + 1}`}
          style={{
            width: 250,
            height: 250,
            cursor: 'pointer',
            border: '5px solid #ccc',
            padding:"20px"
          }}
        />
      ))}
    </div>
    </div>

   

    </>
  )
}

export default Skills





const iconPaths = [
  photo1,
photo2,
photo3,
photo4,
photo5,
photo6,
photo7,
photo8,
photo9,
database,

];

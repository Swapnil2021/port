import React from 'react'

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
            width: 70,
            height: 70,
            cursor: 'pointer',
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
  '/src/assets/1.png',
'/src/assets/2.png',
'/src/assets/3.png',
'/src/assets/4.png',
'/src/assets/5.png',
'/src/assets/6.png',
'/src/assets/7.png',
'/src/assets/8.png',
'/src/assets/9.png',
'/src/assets/database.png',

];

import React from 'react'
import "./componente1.css";
import coverVideo from "../imagenes";
const componente1 = () => {
  return (
    <div className='logo'>
      <video className='video' src={coverVideo} autoPlay loop muted />



        
    </div>
  );
};

export default componente1;
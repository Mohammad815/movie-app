import React from 'react';
import img1 from '../../images/bg.jpg'
import './Banner.scss'

const Banner = () => {
    return (
        <div className="banner1" style={{  
            backgroundImage:`url(${img1})`,
            backgroundPosition:'center',
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            backgroundColor:'#DDE6E7',
          }}>
        </div>
    );
};

export default Banner;
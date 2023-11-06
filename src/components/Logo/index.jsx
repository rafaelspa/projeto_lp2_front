import React from 'react';
import logo from '../../assets/logo.png'

const Logo = () => {
    const divStyle = {
        width: '150px',
        height: '150px'
      };

    return (
        <div>
            <img src={logo} style={divStyle}/>
        </div>
    );
}

export default Logo;

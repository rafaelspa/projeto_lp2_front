import React from 'react';
import logo from '../../assets/logo.png'

const Logo = () => {
    const divStyle = {
        width: '125px',
        height: '125px'
      };

    return (
        <div>
            <img src={logo} style={divStyle}/>
        </div>
    );
}

export default Logo;

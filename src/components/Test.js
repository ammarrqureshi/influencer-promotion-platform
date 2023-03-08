import React from "react";
import Image from 'next/image'
import Logo from '../../assets/logo.png';
import brandLines from '../../assets/brand-lines-purple.png'

const Test = () => {
  const displayMessage = () =>{
    alert("WE LOVE YOU!")
  }
  return (
    <div>
      <center>
        <Image src={Logo} alt="logo here"  style={{
          maxWidth: '300px',
          width: "200px",
          
          height: 'auto',
          margin: '50px'
        }}/>
        <h1 style={{
          fontFamily: 'Raleway',

        }}>Coming Soon... </h1>
        <h2 style={{
          fontFamily: 'Raleway',

        }}>Stay tuned </h2>
        
        
    

      <button onClick= {displayMessage} style={{background: "#5E17EB",
              border: "0",
              fontWeight: "500",
              outline: "0",
              color: "white",
              padding: "20px 10px",
              borderRadius: "10px",
              cursor: "pointer"
    }}>Say Something!</button>

    <br>
    </br>
    <br>
    </br>
<a type="email" href="contact@postdost.com">contact@postdost.com</a>

      </center>

    <Image src={brandLines} alt="" style={{
      position: "absolute",
      top: "0",
      right: "0"
    }} />
      
    </div>
  );
};

export default Test;

import React from "react";

const Test = () => {
  const displayMessage = () =>{
    alert("WE LOVE YOU!")
  }
  return (
    <div>
      <center>
        <h1>Welcome to PostDost </h1>
      <p style={{ color: "grey", }}>Qureshi Companies Ltd.</p>
      <p style={{ color: "grey", }}>CEO: Nimra Raza</p>

      <button onClick= {displayMessage} style={{background: "green",
              border: "0",
              outline: "0",
              color: "white",
              padding: "20px 10px",
              borderRadius: "10px",
              cursor: "pointer"
    }}>Click Here for Bang!</button>

      </center>
      
    </div>
  );
};

export default Test;

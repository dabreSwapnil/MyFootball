import React from 'react'

const Header = () => {
    const logo = {
        width:"55px",
        height:"55px",
        borderRadius: "27.5px",

    };
    const head={
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        padding: "5px",
        alignItems:"center",
        backgroundColor:"#ADDFFF",
};
    const text={
        color:"black",
        margin:"10px",

    };
  return (
    <div style={head}>
        <img src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" alt="logo" style={logo}></img>
        <h1 style={text}>MyFootball</h1>
    </div>
  )
}

export default Header
import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
    const sw = {
        display: "flex",
        flexDirection:"column",
        justifyContent:"space-between",
    };
  return (
    <div style={sw}>
        <Header/>
        <Main/>
    </div>
  )
}



export default App
import React, { useState } from 'react';


const App = () => {

    const purple = "#8e44ad"
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("Mouse Out");

    const bgChange = () => {
        let newBg = "#34495e"
        setBg(newBg);
        setName("Mouse In");
    };

    const bgBack = () => {
        setBg(purple);
        setName("Mouse Out"); 
    };

return(
    <>
        <div style = {{ backgroundColor: bg }}>
            <button onMouseEnter = {bgChange}  onMouseLeave = {bgBack} > {name} </button>
        </div>
    </>
);

};

export default App;
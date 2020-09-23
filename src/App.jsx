import React, { useState } from 'react';


const App = () => {

    const purple = "#8e44ad"
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("Click Me");

    const bgChange = () => {
        let newBg = "#34495e"
        setBg(newBg);
        setName("Ooch!! ");
    };

    const bgBack = () => {
        setBg(purple);
        setName("Ayyo!!"); 
    };

return(
    <>
        <div style = {{ backgroundColor: bg }}>
            <button onClick = {bgChange}  onDoubleClick = {bgBack} > {name} </button>
        </div>
    </>
);

};

export default App;
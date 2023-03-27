import React from "react";
import Characters from "../chara/characters";
import Title from "../title/title";


import "./style.css"

function App(){

const StarHeader = "ЗОРЯНІ ВІЙНИ"
    return(
        <div id="main">
        <Title name={StarHeader}></Title>
        <div id="cr">
        <Characters></Characters>
        </div>
        </div>
    )
}

export default App;
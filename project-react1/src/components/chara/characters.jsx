import React from "react";
import data from "../../data";
import Card from "../card/card";
// import "./style.css";

function Characters(){ 
    return(
    <>
     {data.map((elem,ind)=>{
     return(
       <ul key={ind+"FFF"}>
<li>{elem.name}</li>
<li>{elem.height}</li>
<li>{elem.mass}</li>
<li>{elem.hair_color}</li>
<li>{elem.skin_color}</li>
<li>{elem.eye_color}</li>
<li>{elem.birth_year}</li>
<li>{elem.gender}</li>
<li>{elem.homeworld}</li>
<Card></Card>
</ul>
     )
})}
</>
    )
}
export default Characters

import React, { useState } from "react";

const Chips=()=>{

    const [chipsEaten,setChipsEaten]=useState(0)


    return (
        <>  
            <p>SALTY!</p>

            <p>BAGS EATEN: {chipsEaten}!</p>
            <button onClick={()=>setChipsEaten(chipsEaten+1)}>NOM NOM NOM</button>



        </>
    )
}

export default Chips;
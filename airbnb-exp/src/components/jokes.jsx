import React from "react";

function Jokes({setup,punchline}){
    return(
        <div>
            <h1>
                Setup : {setup}
            </h1>
            <h1>
                Punchline :  { punchline}
            </h1>
            <hr />
        </div>
    )
}

export {Jokes}
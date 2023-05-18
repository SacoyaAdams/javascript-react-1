import React from "react";

export const Tweet = (props) => {
    return (
        <div>
        {/* <p>{props.message}</p> */}
        <div style={{ backgroundColor: props.color, height: '25px', padding: '0px', }}>{props.message}</div>
       
        </div>
    );
        };


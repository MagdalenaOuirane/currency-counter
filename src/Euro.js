import React from 'react';


const Euro = (props) => {
    const cash = (props.value / props.ratio).toFixed(2)


    return (
        <div>Value in euro : {props.value <= 0 ? "" : cash} </div>
    )

}











export default Euro;
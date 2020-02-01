import React from 'react';

const Dollars = (props) => (
    <div>Value in dollars: {props.value <= 0 ? "" : (props.value / props.ratio).toFixed(2)}</div>
)















export default Dollars;
import React from "react";
import Button from '@material-ui/core/Button';
function CalculatorButton(props) {
    return <Button onClick={()=>{props.onButtonClick(props.number)}} className="calc-btn" variant="outlined" color={props.color}>{props.number}</Button>
}
export default CalculatorButton;
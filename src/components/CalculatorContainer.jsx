import React from "react";
import CalculatorButton from "./CalculatorButton";
import Container from '@material-ui/core/Container';
function CalculatorContainer(props){
   
    var arr=["1","2","3","+","4","5","6","*","7","8","9","-","0",".","=","/","AC","DEL","(",")"];
 return <Container maxWidth="sm" className="outer-container">
     <div className="container">
      {arr.map((symbol)=>
{        return <CalculatorButton key={symbol} onButtonClick={props.onButtonClick} number={symbol} color="primary" className={symbol==="="?"equal-to":null} />
}

 

 )}
     </div>
 </Container>
}
export default CalculatorContainer;
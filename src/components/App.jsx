import React,{useState} from "react";
import CalculatorContainer from "./CalculatorContainer"
function App(props){
  const [inputText,setInputText]=useState("");
  const [num,setNum]=useState("");
  const [expression,setExpression]=useState([]);
  
   
  function buttonHandler(symbol){
   function expressionSolver(exp){
     function solver(a,b,op){
    var res=0;
       a=Number(a);
       b=Number(b);
    switch (op){
      case "+":
        res= a+b;
        break;
        case "-":
        res= a-b;
        break;
        case "*":
        res= a*b;
        break;
        case "/":
        res= a/b;
        break;
        default:
          res= NaN;
    }
    return res;
  }
     var index=0;
     var result=0;
     
     var copy=exp.filter((item)=>item!=="");
    var order=["/","*","-","+"];
     for(var i=0;i<4;i++){
      while(copy.lastIndexOf(order[i])!==-1)
       {for(var j=0;j<copy.length;j++){
          
         if(copy[j]===order[i]){
          index=j;
          result=solver(copy[j-1],copy[j+1],order[i]);
          copy.splice(index-1,3,result.toString());
          
         }
        
       }}
     }
  return copy;
   }
   if(symbol!=="AC"&&symbol!=="="&&symbol!=="DEL")
   {
      setInputText(inputText+symbol);
   }
     if(parseInt(symbol)!==NaN&&symbol!=="DEL"){
     setNum(num+symbol);
      
   }
     if(symbol==="/"||symbol==="-"||symbol==="+"||symbol==="*"||symbol==="("||symbol===")")
   {
     
       setExpression([...expression,num,symbol]);
       setNum("");
   }
   
   if(symbol==="="){
     
     var arr=[...expression,num];
     
     arr=arr.filter((item)=>item!=="");
     setNum("");
     
    var t=0;
arr.forEach((item)=>{
  if(item==="(")
    {
      t+=1;
    }
});

var firstIndex=0;
var lastIndex=0;
var x=[];
for(var j=1;j<=t;j++){
   firstIndex=arr.lastIndexOf("(");
  
  for(var i=firstIndex;i<arr.length;i++){
   if(arr[i]===")"){
     lastIndex=i;
    break;   
   }
 }
   x= arr.splice(firstIndex+1,(lastIndex-firstIndex-1));
  arr.splice(firstIndex,(lastIndex-firstIndex-2),expressionSolver(x)[0]);
  
}

  
  
     var newExpression =expressionSolver(arr);
     if(newExpression[0]==="NaN"){
       setInputText("Invalid Input");
     }
     else
   { 
     setExpression(newExpression);
     
     
      setInputText(newExpression[0]);
     
    
    }

     
   }
   if(symbol==="AC"){
     setInputText("");
     setNum("");
     setExpression([]);
   }
   if(symbol==="DEL"){
     console.log(expression);
     console.log(Number(inputText.charAt(inputText.length-1)));
     if(Number((inputText.charAt(inputText.length-1))>=0&&Number(inputText.charAt(inputText.length-1))<=9)||inputText.charAt(inputText.length-1)==="."){
       console.log("number condition called");
       setInputText(inputText.substring(0,inputText.length-1));
       if(num===""&&expression.length===1){
         console.log("result condition called");
        var trash =expression[0];
        trash =trash.substring(0,trash.length-1);
        setExpression([trash]);
       }
      else{
      setNum(num.substring(0,num.length-1));
      }
     }
     if(inputText.charAt(inputText.length-1)==="/"||inputText.charAt(inputText.length-1)==="+"||inputText.charAt(inputText.length-1)==="-"||inputText.charAt(inputText.length-1)==="*"){
       console.log(" symbol condition called");
       setInputText(inputText.substring(0,inputText.length-1));
       var xx=expression;
       xx.splice(xx.length-1,1);
console.log(xx);
       setExpression(xx);
     }
     
   }
  }
   
  return <div>
  <h1>CALCULATOR</h1>
  <div className="input-container">
  <input type="text" value={inputText} ></input>
  </div>
  <CalculatorContainer onButtonClick={buttonHandler} />
  </div>
}
export default App;

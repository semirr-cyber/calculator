let display=document.getElementById('display');

function appendToDisplay(input){
    display.value +=input;
}
function calculate(){
    try{
        display.value=eval(display.value);
    }catch{
        display.value = 'Error'
    }
}
//Operators
function appendToOperator(operator){
   
 const lastChar = display.value.slice(-1);
 const operators = ['+','*','/','-'];

 //Do not start with an operator 
 if (display.value ===''){
    return;
 }
 //Replace  the last operator with the new one
 if(operators.includes(lastChar)){
    display.value = display.value.slice(0,-1)+operator;
 }else{
    display.value += operator;
 }
}
//Dot
function appendToDot(){
   // get the last number you are typing(after last operator)
   const currentNumber= display.value.split(/[\+\-\*\/]/).pop();
  // do not add more than one Dot on one number
  if(!currentNumber.includes('.')){
    display.value +='.';
  }
}






function clearAll(){
    display.value='';
}
function deleteLast(){
    display.value = display.value.slice(0, -1);
}



    
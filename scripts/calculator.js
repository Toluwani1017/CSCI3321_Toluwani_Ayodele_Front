const clear = document.getElementById('clear');
const displayValElement = document.getElementById("display");
const btnNumbers = document.getElementsByClassName("btn_num");
const btnOperators = document.getElementsByClassName("btn_operator");

var displayVal = '0';
var pendingVal;  
var evalStringArray = []; 

updateDisplayVal = (e) => {
    var btnText = e.target.innerText;
    if(displayVal === "0") { 
      displayVal = ""; 
    }
    displayVal += btnText; 
    displayValElement.innerText = displayVal;
}

performOperation = (e) => {
    var operator = e.target.innerText;  
    
      switch (operator) {
          case '+':
              pendingVal = displayVal;
              displayVal = '0';
              displayValElement.innerText = displayVal;
              evalStringArray.push(pendingVal);
              evalStringArray.push('+');
              break;
          case '-':
              pendingVal = displayVal;
              displayVal = '0';
              displayValElement.innerText = displayVal;
              evalStringArray.push(pendingVal);
              evalStringArray.push('-');
              break;
          case '*':
              pendingVal = displayVal;
              displayVal = '0';
              displayValElement.innerText = displayVal;
              evalStringArray.push(pendingVal);
              evalStringArray.push('*');
              break;
          case '/':
              pendingVal = displayVal;
              displayVal = '0';
              displayValElement.innerText = displayVal;
              evalStringArray.push(pendingVal);
              evalStringArray.push('/');
              break;
          case '=':
              evalStringArray.push(displayVal);
              var evaluation = eval(evalStringArray.join(' '));
              displayVal = evaluation + ''; 
              console.log(typeof displayVal);
              displayValElement.innerText = displayVal;
              evalStringArray = [];
              break;
          default:
              break;
      }
  }

  for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener('click', updateDisplayVal) 
}

for (let i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener('click', performOperation);
}

clear.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}

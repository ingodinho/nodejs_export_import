const math = (num1,num2,operator) => {
  if(typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    return 'keine korrekten zahlen eingegeben'
  }

  switch(operator) {
    case '+': 
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    case '*':
      return num1 * num2;
    default: 
      return 'eingabe nicht richtig'
  }
}

module.exports = {math};
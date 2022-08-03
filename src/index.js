module.exports = function toReadable (number) {
  let output = "";
  let hundred = Math.floor(number / 100);
  let ten = Math.floor((number % 100) / 10);
  let figure = (number % 100) % 10;
  
  if(number === 0){
    output += 'zero';
  }

  if(hundred === 0){
    output += '';
  }
  if(hundred !== 0 && ten === 0 && figure === 0){
    output += `${numberToString(hundred)} hundred`;
  } else if(hundred !== 0){
    output += `${numberToString(hundred)} hundred `;
  }
    if (ten === 0) {
      output += "";
    } else {
      if (ten === 1) {
        switch (figure) {
          case 0:
            output += 'ten';
            break;
          case 1:
            output += "eleven";
            break;
          case 2:
            output += "twelve";
            break;
          case 3:
            output += "thirteen";
            break;
          case 4:
            output += "fourteen";
            break;
          case 5:
            output += "fifteen";
            break;
          case 6:
            output += "sixteen";
            break;
          case 7:
            output += "seventeen";
            break;
          case 8:
            output += "eighteen";
            break;
          case 9:
            output += "nineteen";
            break;
        }
        return output;
      } else {
        switch (ten) {
          case 2:
            output += "twenty";
            break;
          case 3:
            output += "thirty";
            break;
          case 4:
            output += "forty";
            break;
          case 5:
            output += "fifty";
            break;
          case 6:
            output += "sixty";
            break;
          case 7:
            output += "seventy";
            break;
          case 8:
            output += "eighty";
            break;
          case 9:
            output += "ninety";
            break;
        }
      }
    }
    if (figure === 0) {
      output += "";
    } else if(figure !== 0 && ten !== 0){
      output += ` ${numberToString(figure)}`;
    } else{
      output += `${numberToString(figure)}`;
    }
  function numberToString(num) {
    let output = "";

    switch (num) {
      case 1:
        output += "one";
        break;
      case 2:
        output += "two";
        break;
      case 3:
        output += "three";
        break;
      case 4:
        output += "four";
        break;
      case 5:
        output += "five";
        break;
      case 6:
        output += "six";
        break;
      case 7:
        output += "seven";
        break;
      case 8:
        output += "eight";
        break;
      case 9:
        output += "nine";
        break;
    }
    return output;
  }
  return output;
}

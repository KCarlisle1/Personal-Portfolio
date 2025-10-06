const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9,5, 4, 1];

const key = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
};

const clicked = () => {
  const input = number.value;

  if(input >= 1 && input < 4000){
    output.innerText = arabicToRoman(input);
  }
   else if(!input){
    output.innerText = "Please enter a valid number";
  }
  else if(input >= 4000){
    output.innerText = "Please enter a number less than or equal to 3999";
  }
  else{
    output.innerText = "Please enter a number greater than or equal to 1";
  }
 
}

const arabicToRoman = (num) => {
  let i = 0;
  let output = "";

  while(num > 0){
     const foundNumber = numbers[i];
     if(foundNumber > num){
       i++;
     }
     else{
       num -= foundNumber;
       output += key[foundNumber];
     }
  }
  return output;
}

convertBtn.addEventListener('click', clicked);

/*The inspiration and prompt for this project came from the "Build a Roman Numeral Converter" exercise on freeCodeCamp. 
 Reference: https://www.freecodecamp.org*/
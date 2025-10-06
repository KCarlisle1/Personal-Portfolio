const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');
const infoButton = document.getElementById('info-btn');
const infoParagraph = document.getElementById('info-paragraph');

let infoShowing = false;

const clicked = () =>{
  event.preventDefault();
  const input = textInput.value;

  if(input){
    const isPalindrome = palindrome(input);
    returnMsg(isPalindrome, input);
  }
  else if(!input){
    alert("Please input a value");
  }  
}

const palindrome = (str) => {
  const upperAlnum = str.toUpperCase().match(/[A-Z0-9]/g); 
  if (!upperAlnum) return false;
  return upperAlnum.join("") === upperAlnum.reverse().join("");
}

const returnMsg = (isPalindrome, input) => {
  if (isPalindrome){
    result.innerText =`"${input}" is a palindrome.`;
  }
  else{
    result.innerText =`"${input}" is not a palindrome.`;
  }

}

const infoShow = () => {
  infoShowing = !infoShowing;
  if (infoShowing) {
    infoButton.innerText = "Hide Info";
    infoParagraph.innerText = "A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). Examples include 'racecar', 'level' etc...";
  }
  else {
    infoButton.innerText = "Show Info";
    infoParagraph.innerText = "";
  }
}

checkButton.addEventListener('click', clicked);
infoButton.addEventListener('click', infoShow);

/*The inspiration and prompt for this project came from the "Build a Palindrome Checker" exercise on freeCodeCamp. 
 Reference: https://www.freecodecamp.org*/
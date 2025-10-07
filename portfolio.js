const butterflidBtn = document.getElementById('butterflid-btn');
const cashRegisterBtn = document.getElementById('cash-register-btn');
const palindromeCheckerBtn = document.getElementById('palindrome-checker-btn');
const romanNumeralConverterBtn = document.getElementById('roman-numeral-converter-btn');
const financeManagerBtn = document.getElementById('finance-manager-btn');
const moreBtn = document.getElementById('to-be-added-btn');


butterflidBtn.addEventListener('click', () => {
    window.location.href='buterfli-d/homepage.html';
})
butterflidBtn.addEventListener('mouseover', () => {
    butterflidBtn.textContent = "ButterflI-D - A British butterfly identification website. Test your knowledge!";
})
butterflidBtn.addEventListener('mouseout', () => {
    butterflidBtn.textContent = "ButterflI-D";
})


financeManagerBtn.addEventListener('click', () => {
    window.location.href='finance-manager/homepage.html';
})
financeManagerBtn.addEventListener('mouseover', () => {
    financeManagerBtn.textContent = "Finance Manager - A yearly record utility to help visualise financial changes.";
})
financeManagerBtn.addEventListener('mouseout', () => {
   financeManagerBtn.textContent = "Finance Manager";
})


palindromeCheckerBtn.addEventListener('click', () => {
    window.location.href='palindrome-checker/index.html';
})
palindromeCheckerBtn.addEventListener('mouseover', () => {
    palindromeCheckerBtn.textContent = "Palindrome Checker - A React.js tool for identifying palindromes.";
})
palindromeCheckerBtn.addEventListener('mouseout', () => {
    palindromeCheckerBtn.textContent = "Palindrome Checker";
})


romanNumeralConverterBtn.addEventListener('click', () => {
    window.location.href='roman-numeral-converter/numeral.html';
})
romanNumeralConverterBtn.addEventListener('mouseover', () => {
    romanNumeralConverterBtn.textContent = "Roman Numeral Converter - A React.js tool for converting numbers into Roman numerals.";
})
romanNumeralConverterBtn.addEventListener('mouseout', () => {
    romanNumeralConverterBtn.textContent = "Roman Numeral Converter";
})


cashRegisterBtn.addEventListener('click', () => {
    window.location.href='cash-register/register.html';
})
cashRegisterBtn.addEventListener('mouseover', () => {
    cashRegisterBtn.textContent = "Cash Register - A fun, CSS-based cash register simulation.";
})
cashRegisterBtn.addEventListener('mouseout', () => {
    cashRegisterBtn.textContent = "Cash Register";
})

moreBtn.addEventListener('mouseover', () => {
    moreBtn.textContent = "Constantly working on additional projects";
})
moreBtn.addEventListener('mouseout', () => {
    moreBtn.textContent = "More to be added"
})

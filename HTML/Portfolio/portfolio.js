const butterflidBtn = document.getElementById('butterflid-btn');
const cashRegisterBtn = document.getElementById('cash-register-btn');
const palindromeCheckerBtn = document.getElementById('palindrome-checker-btn');
const romanNumeralConverterBtn = document.getElementById('roman-numeral-converter-btn');
const financeManagerBtn = document.getElementById('finance-manager-btn');
const moreBtn = document.getElementById('to-be-added-btn');


butterflidBtn.addEventListener('click', () => {
    window.location.href='/BUTTERFLI-D/homepage.html';
})
butterflidBtn.addEventListener('mouseover', () => {
    butterflidBtn.textContent = "ButterflI-D - A British butterfly identification website. Test your knowledge!";
})
butterflidBtn.addEventListener('mouseout', () => {
    butterflidBtn.textContent = "ButterflI-D";
})


financeManagerBtn.addEventListener('click', () => {
    window.location.href='/Finance Manager/homepage.html';
})
financeManagerBtn.addEventListener('mouseover', () => {
    financeManagerBtn.textContent = "Finance Manager - A yearly record utility to help visualise financial changes.";
})
financeManagerBtn.addEventListener('mouseout', () => {
   financeManagerBtn.textContent = "Finance Manager";
})


palindromeCheckerBtn.addEventListener('click', () => {
    window.location.href='/Palindrome Checker/index.html';
})
palindromeCheckerBtn.addEventListener('mouseover', () => {
    palindromeCheckerBtn.textContent = "Palindrome Checker - A React.js tool for identifying palindromes.";
})
palindromeCheckerBtn.addEventListener('mouseout', () => {
    palindromeCheckerBtn.textContent = "Palindrome Checker";
})


romanNumeralConverterBtn.addEventListener('click', () => {
    window.location.href='/Roman Numeral Converter/index.html';
})
romanNumeralConverterBtn.addEventListener('mouseover', () => {
    romanNumeralConverterBtn.textContent = "Roman Numeral Converter - A React.js tool for converting numbers into Roman numerals.";
})
romanNumeralConverterBtn.addEventListener('mouseout', () => {
    romanNumeralConverterBtn.textContent = "Roman Numeral Converter";
})


cashRegisterBtn.addEventListener('click', () => {
    window.location.href='/Cash Register/index.html';
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

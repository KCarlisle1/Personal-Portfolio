const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceDisplay = document.getElementById('price');
const changeDisplay = document.getElementById('change');
const changeDue = document.getElementById('change-due');
const cidDisplay = document.getElementById('cash-in-drawer');


let price = 1.87;
let cid = [
  ['PENNIES', 1.01],
  ['NICKELS', 2.05],
  ['DIMES', 3.1],
  ['QUARTERS', 4.25],
  ['ONES', 90],
  ['FIVES', 55],
  ['TENS', 20],
  ['TWENTIES', 60],
  ['ONE HUNDREDS', 100]
];

priceDisplay.innerHTML += `ITEM PRICE: ${price}`;

const checkRegister = () => {
  const cashInt = parseFloat(cashInput.value);
  const changeDueAmount = Number((cashInt - price).toFixed(2));
  const totalCid = Number(cid.reduce((a, b) => a + b[1], 0).toFixed(2));

  if(cashInt < price){
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  else if(cashInt === price){
    changeDue.textContent = "No change due - customer paid with exact cash";
    return;
  }
  else if(!cashInt){
    alert("Please enter a value");
    return;
  }

  if(changeDueAmount > totalCid){
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  const denomArr = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
  const denomNames = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];
  
  let changeArr = [];
  let changeRemaining = changeDueAmount; //copied as to not change the amount of change due.

  let cidCopy = [...cid].reverse().map(arr => [...arr]); //same here.

  for(let i = 0; i < denomArr.length; i++){
    let denomName = denomNames[i];
    let denomValue = denomArr[i];
    let amountInDrawer = cidCopy[i][1];
    let returnAmount = 0;

    while(changeRemaining >= denomValue && amountInDrawer >= denomValue){
      changeRemaining = Number((changeRemaining - denomValue).toFixed(2)); 
      amountInDrawer = Number((amountInDrawer - denomValue).toFixed(2));
      returnAmount = Number((returnAmount + denomValue).toFixed(2));
    }

    if(returnAmount > 0){
      changeArr.push([denomName, returnAmount]);
      cidCopy[i][1] = amountInDrawer;
    }
  }

  if(changeRemaining > 0){
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  const cidLeft = Number(cidCopy.reduce((a, b) => a + b[1], 0).toFixed(2));

  if(cidLeft === 0){
    changeDue.innerHTML = "Status: CLOSED";
  }
  else{
    changeDue.innerHTML = "Status: OPEN";
  }

  cid = cidCopy;

  changeDisplay.innerHTML = "Change given:<br>" + changeArr.map(item => `${item[0]}: $${item[1].toFixed(2)}`).join("<br>");
  cidDisplay.innerHTML = "<br>Cash left in drawer:<br><br>" + cid.map(item => `${item[0]}: $${item[1].toFixed(2)}`).join("<br>");

};

purchaseBtn.addEventListener('click', checkRegister);

/*The inspiration and prompt for this project came from the "Build a Cash Register" exercise on freeCodeCamp. 
 Reference: https://www.freecodecamp.org*/
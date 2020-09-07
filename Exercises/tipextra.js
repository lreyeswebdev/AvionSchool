// Victor's family also went on a holiday, going to 4 different restaurants. The bills were Php 770, Php 3750, Php 1100 and Php 450.
// - Victor likes to tip 20% of the bill when the bill is less than Php 1000, 10% when the bill is between Php 1000 and Php 3000, and 25% if the bill is more than Php 3000 (different than John).
//     1. Implement the same functionality as before, this time using Victor's tipping rules.
//     2. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
//     3. Calculate the average tip for each family
//     4. Log to the console which family paid the highest tips on average.

let billAmount = [1240, 480, 2680, 1800, 420];
let billTip = [];
let totalBillPaid = [];


function tipCompute(cost) {
      if (cost < 500) {
        return cost * .2;
      }
      if (cost >= 500 && cost <= 2000) {
        return cost * .15;
      }
      return cost * .1;
    }

function makeBillTipArray(inputArray) {
    var length = inputArray.length;
    for (var i = 0; i < length; i++) {
        billTip[i] = tipCompute(inputArray[i]);
    }
}

function calculateTotal(billArray) {
    var length = billArray.length;
    for (var i = 0; i < length; i++) {
      totalBillPaid[i] = billArray[i] + tipCompute(billArray[i]);
    }
  }

  makeBillTipArray(billAmount);
  calculateTotal(billAmount);

  console.log(`John's bills are: ${billAmount}`);
  console.log(`John's calculated tips are: ${billTip}`);
  console.log(`John's calculated totals are: ${totalBillPaid}`);

let billAmountVictor = [770, 3750, 1100, 450];
let billTipVictor = [];
let totalBillPaidVictor = [];

function tipComputeVictor(cost) {
  if (cost < 1000) {
    return cost * .2;
  }
  if (cost >= 1000 && cost <= 3000) {
    return cost * .1;
  }
  return cost * .25;
}

function makeBillTipArrayVictor(inputsArray) {
    var length = inputsArray.length;
    for (var i = 0; i < length; i++) {
        billTipVictor[i] = tipComputeVictor(inputsArray[i]);
    }
}

makeBillTipArrayVictor(billAmountVictor);

console.log(`Victor's bills are: ${billAmountVictor}`);
console.log(`Vicor's calculated tips are: ${billTipVictor}`);

function calculateTipAverage (tipArray) {
  var total = 0;
  for (var i = 0; i < tipArray.length; i++) {
    total += tipArray[i];
  }
  var ave = total/ tipArray.length;
  return ave;
}

console.log("John's family paid an average tip of " + calculateTipAverage(billTip) + ".");
console.log("Victor's family paid an average tip of " + calculateTipAverage(billTipVictor) + ".");

function checkHighestTip() {
  if (calculateTipAverage(billTip) > calculateTipAverage(billTipVictor)) {
    console.log("John's family paid a higher tip on average than Victor's family.");
  } else if (calculateTipAverage(billTip) < calculateTipAverage(billTipVictor)) {
    console.log("Victor's family paid a higher tip on average than John's family.");
  } else {
    console.log("Both families paid the same amount of tips on average.");
  }
}

checkHighestTip(billTip, billTipVictor);

// John and his family went on a holiday and went to 3 different restaurants. The bills were Php 1240, Php 480 and Php 2680.
// To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than Php 500, 15% when the bill is between Php 500 and Php 2000, and 10% if the bill is more than Php 2000.
// In the end, John would like to have 2 arrays:
// Containing all three tips (one for each bill)
// Containing all three final paid amounts (bill tip).

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
  
  console.log(`The bills are: ${billAmount}`);
  console.log(`The calculated tips are: ${billTip}`);
  console.log(`The calculated totals are: ${totalBillPaid}`);
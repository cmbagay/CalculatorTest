window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanValues = { amount: 0, years: 0, rate: 0 }

  const loanAmt = document.getElementById("loan-amount");
  const loanYrs = document.getElementById("loan-years");
  const loanRt = document.getElementById("loan-rate");

  loanAmt.value = loanValues.amount;
  loanYrs.value = loanValues.years;
  loanRt.value = loanValues.rate;

  calculateMonthlyPayment(loanValues);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // mthPmt = (loanAmt * [loanRt/12]) / (1 - (1+[loanRt/12])^-(loanYrs*12)
  // mthPmt = (p * i) / (1 - (1 + i)^-n)

  const p = values.amount
  const i = (values.rate / 100) / 12;
  const n = values.years * 12;

  console.log("p: " + p + " i: " + i + " n: " + n);

  const numerator = (p * i);
  const denominator = 1 - (Math.pow(1 + i, -n));

  console.log("Num: " + numerator + " Denom: " + denominator);

  return (numerator / denominator).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = "$" + monthly;
}

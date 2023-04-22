
it('should calculate the monthly rate correctly', function () {
  const loan = {
    amount: 1000,
    years: 5,
    rate: 5
  };

  expect(calculateMonthlyPayment(loan)).toEqual('18.87');
});


it("should return a result with 2 decimal places", function () {
  const loan = {
    amount: 35000,
    years: 10,
    rate: 6.48
  };

  expect(calculateMonthlyPayment(loan)).toEqual('397.06');
});

it("should return a result expected from a long term mortgage", function () {
  const loan = {
    amount: 250000,
    years: 30,
    rate: 7.26
  };

  expect(calculateMonthlyPayment(loan)).toEqual('1707.14');
});

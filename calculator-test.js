it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 10000,
      years: 5,
      rate: 4.0,
    };
    expect(calculateMonthlyPayment(values)).toEqual('184.17');
});

it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 15000,
      years: 8,
      rate: 3.8,
    };
    expect(calculateMonthlyPayment(values)).toEqual('181.45');
});




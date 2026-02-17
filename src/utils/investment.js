// This function expects a JS object as an argument
// The object should contain the following properties
// - initial: The initial investment amount
// - annual: The amount invested every year
// - interest: The expected (annual) interest rate
// - years: The investment years (time frame)
export function calculateInvestment({ initial, annual, interest, years }) {
  const annualData = [];
  let investmentValue = initial;
  let totalInterest = 0;

  for (let i = 0; i < years; i++) {
    const interestEarnedInYear = investmentValue * (interest / 100);
    totalInterest += interestEarnedInYear;
    investmentValue += interestEarnedInYear + annual;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      totalInterest: totalInterest, // total interest earned
      investmentValue: investmentValue, // investment value at end of year
      investedCapital: annual * (i + 1) + initial // total investment capital
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

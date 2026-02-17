import "./ResultsTable.css"
import { calculateInvestment, formatter } from '../../utils/investment'

export default function ResultsTable({ userInput }) {
  const results = calculateInvestment(userInput);

  return <table id='results'>
    <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Invested Capital</th>
        <th>Total Interest</th>
        <th>Interest (Year)</th>
      </tr>
    </thead>

    <tbody>
      {results.map(result => <tr>
        <td>{result.year}</td>
        <td>{formatter.format(result.investmentValue)}</td>
        <td>{formatter.format(result.investedCapital)}</td>
        <td>{formatter.format(result.totalInterest)}</td>
        <td>{formatter.format(result.interest)}</td>
      </tr>)}
    </tbody>
  </table>
}
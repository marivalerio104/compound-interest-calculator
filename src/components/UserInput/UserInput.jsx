import './UserInput.css'

export default function UserInput() {
  return <form id="user-input">
    <div className="input-group">
      <label htmlFor="initial-input">INITIAL INVESTMENT</label>
      <input type="number" id="initial-input" />
    </div>
    <div className="input-group">
      <label htmlFor="annual-input">ANNUAL CONTRIBUTION</label>
      <input type="number" id="annual-input" />
    </div>
    <div className="input-group">
      <label htmlFor="interest-input">INTEREST RATE</label>
      <input type="number" id="interest-input" />
    </div>
    <div className="input-group">
      <label htmlFor="years-input">YEARS</label>
      <input type="number" id="years-input" />
    </div>
    <button>Calculate</button>
  </form>
}
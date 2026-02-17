import { useState } from 'react'
import './UserInput.css'

export default function UserInput({ setUserInput }) {
  const [input, setInput] = useState({
    initial: 1000,
    annual: 1200,
    interest: 6,
    years: 10
  });

  function handleChange(event) {
    const { id, value } = event.target;
    setInput(prev => ({ ...prev, [id]: (value === "" ? "" : Number(value)) }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setUserInput(input);
  }

  return <form id="user-input" onSubmit={handleSubmit}>
    <div>
      <label htmlFor="initial-input">INITIAL INVESTMENT</label>
      <input type="number" id="initial" value={input.initial} required
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="contribution-input">ANNUAL CONTRIBUTION</label>
      <input type="number" id="annual" value={input.annual} required
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="interest-input">INTEREST RATE</label>
      <input type="number" id="interest" value={input.interest} required
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="years-input">YEARS</label>
      <input type="number" id="years" value={input.years} required
        onChange={handleChange}
      />
    </div>
    <button>Calculate</button>
  </form>
}
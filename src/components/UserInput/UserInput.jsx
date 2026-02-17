import { useState } from 'react'
import './UserInput.css'

export default function UserInput({ setUserInput }) {
  const [input, setInput] = useState({
    initial: 4848,
    annual: 9600,
    interest: 7,
    years: 25
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
        onChange={handleChange} max={999999999999}
      />
    </div>
    <div>
      <label htmlFor="contribution-input">ANNUAL CONTRIBUTION</label>
      <input type="number" id="annual" value={input.annual} required
        onChange={handleChange} max={999999999999}
      />
    </div>
    <div>
      <label htmlFor="interest-input">INTEREST RATE</label>
      <input type="number" id="interest" value={input.interest} required
        onChange={handleChange} max={1000}
      />
    </div>
    <div>
      <label htmlFor="years-input">YEARS</label>
      <input type="number" id="years" value={input.years} required
        onChange={handleChange} min={1} max={100}
      />
    </div>
    <button>Calculate</button>
  </form>
}
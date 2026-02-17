import { useState } from 'react';
import UserInput from './components/UserInput/UserInput'
import ResultsTable from './components/ResultsTable/ResultsTable'
import './App.css'

export default function App() {
  const [userInput, setUserInput] = useState();

  return (<>
    <UserInput setUserInput={setUserInput} />
    {userInput && <ResultsTable userInput={userInput} />}
  </>)
}
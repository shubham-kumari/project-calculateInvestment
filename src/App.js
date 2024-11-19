import { useState } from 'react';
import Form from './components/Form';
import Header from './components/header';
import Result from './components/Result';



function App() {
  // const [results, setResults] = useState(null)
  const [userInput, setUserInput] = useState(null)

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...



    // do something with yearlyData ...
    // setResults(yearlyData);
  };

  const yearlyData = []; // per-year results
  if (userInput) {

    let currentSavings = +userInput['currentSaving']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearlyContribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expectedReturn'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

  }

  return (
    <>
      <Header />

      <Form onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {!userInput && <p>No investment calculated yet.</p>}
      {userInput && <Result data={yearlyData} initialInvestment={userInput["currentSaving"]}/>}
    </>
  );
}

export default App;

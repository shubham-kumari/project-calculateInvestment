import { useState } from "react";

const initialState = {
    currentSaving: 10000,
    yearlyContribution: 1200,
    expectedReturn: 7,
    duration: 10,
  };

export default function Form({onCalculate}) {
  const [inputValue, setInputValue] = useState(initialState);
  function handleSubmit(event) {
    event.preventDefault();
    // console.log("Submitted Data:", inputValue);
    onCalculate(inputValue);
  }

  function submitHandler(){
    console.log('SUBMIT');
  }

  function handleInputChange(inputId, eventValue) {
    setInputValue((prevInputValue) => {
        console.log(prevInputValue);
        
      return {
        ...prevInputValue,
      [inputId]: +eventValue, 
      }
    });
  }

  function resetHandler() {
    setInputValue(initialState);
  }
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="currentSaving">Current Savings ($)</label>
          <input
            type="number"
            id="currentSaving"
            value={inputValue.currentSaving}
            onChange={(event) =>
                handleInputChange("currentSaving", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearlyContribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearlyContribution"
            value={inputValue.yearlyContribution}
            onChange={(event) =>
                handleInputChange("yearlyContribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Interest (%, per year)</label>
          <input
            type="number"
            id="expectedReturn"
            value={inputValue.expectedReturn}
            onChange={(event) =>
                handleInputChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={inputValue.duration}
            onChange={(event) =>
                handleInputChange("duration", event.target.value)
            }
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" onClick={submitHandler} className="button" >
          Calculate
        </button>
      </p>
    </form>
  );
}

import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    // Using above State which where defined individually, in one UseState!


// WE WILL USE THE INTITIAL STATE APPROACH 

    // const [userInput,setUserInput] = useState({
    //     enteredTitle: ' ',
    //     enteredAmount: ' ',
    //     enteredDate: ' ',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

    // setUserInput({
    //     Spread Operator (...)
    //     ...userInput,
    //     enteredTitle: event.target.value,

    // Instead of above approach, using another one 
    // We use it bcz react schedules the states. 

    // setUserInput((prevState) => {
    //     return {...prevState,enteredTitle:event.target.value};
    // });
};

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // 
        // setUserInput({
        //     // Spread Operator (...)
        //     ...userInput,
        //     enteredAmount: event.target.value,
    
        // })
        };
    
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     // Spread Operator (...)
        //     ...userInput,
        //     enteredDate: event.target.value,
    
        // })
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };
       
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
    <form onSubmit={submitHandler}> 
        <div className="new-expense__controls">
        <div className="new-expense__control">  
        <label> Title </label>
        <input type="text"

// This value concept is for removing data once clicked on Add Expense by using 2-way binding!
         value={enteredTitle} 
         onChange={titleChangeHandler}/>
        </div>

        <div className="new-expense__control">  
        <label> Amount </label>
        <input type="number"
         min="0.01" 
         step="0.01"
         value={enteredAmount}  
        onChange={amountChangeHandler}/>
        </div>

        <div className="new-expense__control">  
        <label> Date </label>
        <input type="date"
         min="2019-01-01"
          max="2023-12-31"
          value={enteredDate} 
          onChange={dateChangeHandler}/>
        </div>
    </div>

    <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit"> Add Expense </button>
    </div>
    </form>
    );
};
export default ExpenseForm;
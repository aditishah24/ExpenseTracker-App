// Props can only be transformed from Parent to Child.
// Passing the data which we created in ExpenseForm to NewExpenses,
// bcz we ultimately call NewExpense in App.js File.

import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
   const[isEditing,setIsEditing] = useState(false);

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // 
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const StartEditingHandler = () =>{
        setIsEditing(true);
    };


    const StopEditingHandler = () => {
        setIsEditing(false);
    };

return (
    <div className="new-expense">
{/* This bellow line of code, shows can child compnent communicate to Parent's Component. */}
       {!isEditing  && <button onClick={StartEditingHandler}>Add New Expense </button>}
        {isEditing && <ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler} onCancel = {StopEditingHandler} />}

      
    </div>
);
};

export default NewExpense;
// A component is jst a javascript function, which has some return elements, then export it 
// and then import the custom component in the App.js file,
// thus calling that component and showing the output on the screen.

// first custom component 

// Props stands for properties and is passed as an attribute,
// replace the hardcoded inside that expenseTitle,amt and date to props.title,amt and date.
// The attribute name mentioned while declaring the expense item in App.js should have names
// when called with props(i.e-props.title).
// PROPS MAKES COMPONENTS REUSABLE!

// import React, {useState} from "react";
import React from 'react';

// useState is a React Hook! This must be called inside a react function.
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
const ExpenseItem =(props) => {
// The first value is pointer managed value (title) and the second element is
// a function, which can be called later to set a new title.

// const [title,setTitle] = useState (props.title);

//     const clickHandler = () => {
//         setTitle('Updated!');
//         console.log(title);
//     }

// Now, we have our hands on props, so we can remove this const variables holding values 
//  const expenseDate = new Date(2023, 6, 2);
//  const expenseTitle = 'Car Insurance';
//  const expenseAmount = 294.67;

// For making js clean we define month in variable const and then call it in div element bellow


    return (
        <li>
    <Card className="expense-item">
        {/* We used dynamic placeholders to remove the hardcoded stuff as date,time,amt. */}
        <ExpenseDate date={props.date}> </ExpenseDate>
        <div className="expense-item__description">
            {/* <h2> {title} </h2> */}
            <h2>{props.title}</h2>
            <div className="expense-item__price"> Rs {props.amount} </div>
        </div>
        {/* <button onClick = {clickHandler} > Change Title </button> */}
    </Card>
    </li>
    );
}

export default ExpenseItem;
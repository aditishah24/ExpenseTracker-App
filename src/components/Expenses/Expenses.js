import React,{useState} from 'react';
 
import './Expenses.css';

import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';


// function Expenses(props) {
    const Expenses = (props) => {
        const [filteredYear,setFilteredYear] = useState('2020');
        const filterChangeHandler = selectedYear =>{
            setFilteredYear(selectedYear);
        };


        // Filter returns a New Array!
        const filteredExpenses = props.items.filter(expense => {
            return expense.date.getFullYear().toString() === filteredYear;
        });

        
        
    return (

        <div> 
        <Card className="expenses">

        <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter = {filterChangeHandler}/>

        <ExpensesChart expenses={filteredExpenses}/>

       <ExpensesList items={filteredExpenses}/>

        {/* Map function transforms 1 object into another. As expense object is tranformed
        into ExpenseItem object. */}

    {/* Adding conditional content, to render a msg on the screen if the year selected shows no expense element. */}
    {/* We used Ternary Operator (? :) and (&&) operator. */}

        {/* Removed the content headed over here, to above code above return, to make file more readable. */}
        

{/* This is Rendering List of data - to make hard-coded elements into dynamic ones. */}
        

{/* Now we can use it dynamically from above code, and remove the bellow hard-coded expense items. */}

        {/* <ExpenseItem 
       title={props.items[0].title} 
       amount={props.items[0].amount}
       date={props.items[0].date}> 
      </ExpenseItem>
      <ExpenseItem 
       title={props.items[1].title} 
       amount={props.items[1].amount}
       date={props.items[1].date}> 
      </ExpenseItem>
      <ExpenseItem 
       title={props.items[2].title} 
       amount={props.items[2].amount}
       date={props.items[2].date}> 
      </ExpenseItem>
      <ExpenseItem 
       title={props.items[3].title} 
       amount={props.items[3].amount}
       date={props.items[3].date}> 
      </ExpenseItem> */}

    </Card>
    </div>
    );
};
export default Expenses;
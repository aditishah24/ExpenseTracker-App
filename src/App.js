// importing custom component 
import React,{useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Snacks',
    amount: 940,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV',
    amount: 799,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 295,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Electricity Bill',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// function App() {
  const App = () => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
   
const addExpenseDataHandler = expense =>
{
  setExpenses((PrevExpenses) => {
    return [expense,...PrevExpenses];
  }); 
};

// Now this Expenses are truly dynamic,
// by using state in App.js and making expense elements dynamic in Expense.js.
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseDataHandler}/>
      {/* Calling custom component */}
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;



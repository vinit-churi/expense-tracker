import "./App.scss";
import { Header } from "../header/Header";
import { Balance } from "../balance/Balance";
import { IncomeExpenses } from "../incomeExpenses/IncomeExpenses";
import { TransactionList } from "../transactionList/TransactionList";
import { AddTransaction } from "../addtransaction/AddTransaction";
function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;

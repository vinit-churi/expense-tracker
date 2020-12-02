import "./App.scss";
import { Header } from "../header/Header";
import { Balance } from "../balance/Balance";
import { IncomeExpenses } from "../incomeExpenses/IncomeExpenses";
import { TransactionList } from "../transactionList/TransactionList";
import { AddTransaction } from "../addtransaction/AddTransaction";
import { GlobalProvider } from "../../context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

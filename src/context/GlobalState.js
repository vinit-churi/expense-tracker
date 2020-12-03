import React, { createContext, useReducer } from "react";
import AppReducer from "../appReducer/AppReducer";
const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispach] = useReducer(AppReducer, initialState);
  function deleteTransaction(id) {
    dispach({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispach({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

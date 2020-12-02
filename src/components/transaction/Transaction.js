import React from 'react'

export const Transaction = ({transaction}) => {
    return (
        <li className="minus">
        {transaction.text} <span> {transaction.amount}</span><button className="delete-bth">x</button>
        </li>
    )
}

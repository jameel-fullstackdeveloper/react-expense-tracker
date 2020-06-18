import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                <li className="plus">
                    Project 01 Income
                    <span>$1,000</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                    Project 01 Tea Expense
                    <span>-$5000</span>
                    <button className="delete-btn">X</button>

                </li>
               
            </ul>
        </div>
    )
}

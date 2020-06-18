import React, {useState} from 'react'

export const AddTransaction = () => {

    const [description,setDescription] = useState();
    const [transactionAmount,setTransactionAmount] = useState();

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input  type="text" 
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Detail of Transaction" 
                            required="required"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input  type="number" 
                            id="transactionamount"
                            value={transactionAmount}
                            onChange={(e) => setTransactionAmount(e.target.value)}
                            placeholder="Dollar Value of Transaction"
                            required="required"
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

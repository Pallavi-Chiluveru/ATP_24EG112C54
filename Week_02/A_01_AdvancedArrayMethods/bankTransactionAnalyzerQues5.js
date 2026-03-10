// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

//Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


// Tasks:

//     1. filter() all credit transactions[creates new array]
        let allCreditTransaction = transactions.filter(transac=> transac.type =="credit")
        console.log("All credit transactions :",allCreditTransaction)

//     2. map() to extract only transaction amounts[creates new array]
        let transacAmounts = transactions.map(transac=>transac.amount)
        console.log("All transaction Amounts : ",transacAmounts)

//     3. reduce() to calculate final account balance
        let finalAmount = transactions.reduce((acc,transac)=>{
                if(transac.type=="credit")
                        return acc+transac.amount
                else
                        return acc-transac.amount

        },0)
        console.log("Final account balance : ",finalAmount)

//     4. find() the first debit transaction
        let firstDebit = transactions.find(transac=>transac.type=="debit")
        console.log("first debit transaction : ",firstDebit)

//     5. findIndex() of transaction with amount 10000
        let findIndex = transactions.findIndex(transac=>transac.amount==10000)
        console.log("Index of transaction with amount 10000 : ",findIndex)








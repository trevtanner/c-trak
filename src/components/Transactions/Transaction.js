import FadeIn from "react-fade-in";
import TransactionItem from "./TransactionItem";

const Transaction = (props) => {
  
     return (
       <FadeIn>
              <ul>
       {props.transactions.map((transaction) => (
          <TransactionItem
          key={transaction.id}
          coin={transaction.coin}
          amount={transaction.amount}
          value={transaction.value}
          date={transaction.date}
          />
          ))
        }
        </ul>
        </FadeIn>

       )
      }
 

 export default Transaction;
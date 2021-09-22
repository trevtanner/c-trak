const Transaction = (props) => {
    let date = props.date
    let options = { timeZone: 'UTC', timeZoneName: 'short'};
    
    const time = date.toLocaleString('en-US', options);
  

     return (
            <li key={props.id}>
              <b>Amount:</b> {props.amount} {props.coin} 
              <br />
              <b>Cost in dollar at time of purchase:</b> ${props.value}
              <br />
              <b>Purchase Date:</b> {time}
            </li>
          )
        
        }
 

 export default Transaction;
import { useSelector,useDispatch } from "react-redux";
import React from 'react';
import { actionCreators } from "../Action";
//update
import { bindActionCreators } from "redux";

const Shop = () => {
  const {amount}=useSelector(state=>state);
  const dispatch=useDispatch();
  //update
  const{depositmoney,withdrawmoney}=bindActionCreators(actionCreators,dispatch);

return(
    <div>
        <h1>Using dispatch</h1>
        <button onClick={()=>{dispatch(actionCreators.depositmoney(100))}}>+</button>
        Amount is {amount}
        <button onClick={()=>{dispatch(actionCreators.withdrawmoney(100))}}>-</button>
        <h1>Without using dispatch implementing update</h1>
        <button onClick={()=>depositmoney(100)}>+</button>
        Amount is {amount}
        <button onClick={()=>withdrawmoney(100)}>-</button>

        
    </div>
)
}


export default Shop;

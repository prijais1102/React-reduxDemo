const initialstate=100;

const AmountReducer = (state= initialstate, action) => {
    console.log(state)
    switch(action.type)
    {
        case 'deposit':  return state+action.payload;
        case 'withdraw':  return state-action.payload;
        default:  return state;
    }
}

export default AmountReducer

export const reducer2 = (state={},action)=>{
    if(action.type=='ASYNC'){
        return {...state,resultasync:(action.pay)};
    }
    return state;
}
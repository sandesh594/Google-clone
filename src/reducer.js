export const initialState={

    term: null,

}
//initiaol state===state
export const actionTypes={
    SET_SEARCH_TERM:'SET_SEARCH_TERM',
}

//console.log(action,1);
const reducer=(state,action)=>{

    //console.log(action,2);
  
    switch (action.type) {

        case actionTypes.SET_SEARCH_TERM:
           
            return {
                ...state,
            
                term:action.term,
                
                
            }
            
           
    
        default:
            return state
           
    }


    

}



export default reducer
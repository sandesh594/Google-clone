import React, { createContext,useContext,useReducer} from "react";

//data layout

export const StateContext=createContext();


//component

export const StateProvider =({ reducer,initialState,children })=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>

)

export const useStateValue=()=>useContext(StateContext);

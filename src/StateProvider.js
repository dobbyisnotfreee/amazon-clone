import React, {createContext, useContext, useReducer} from "react";



//데이터 레이어를 만든다.
export const StateContext = createContext();



// 앱을 래핑하고, 데이터 레이어를 제공한다
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);



// 데이터 레이어로부터 정보를 가져오는 메소드 설정
export const useStateValue = () => useContext(StateContext);
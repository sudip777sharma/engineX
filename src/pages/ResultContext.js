import { createContext, useContext, useReducer } from "react";

export const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {

    const initialState = {
        result: null
    };

    const resultReducer = (state, action) => {
        switch (action.type) {
            case "SET_SEARCH_RESULT":
                return {
                    result: action.payload
                };
            default:
                return state;
        }
    };

    const [state, dispatchResult] = useReducer(resultReducer, initialState);

    return (
        <ResultContext.Provider value={{ state, dispatchResult }} >
            {children}
        </ResultContext.Provider>
    );
}
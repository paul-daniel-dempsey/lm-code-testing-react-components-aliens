import React, { useContext, useState } from "react";

// Create Context
const W12FormContext1 = React.createContext<boolean>(true);

// Create Context setCharacterFavourites =>
//  React.Dispatch (so can use value in Provider call)
//  React.SetStateAction (so can link setCharacterFavourites call to be change with array of numbers + initialised to null)
const UpdateW12FormContext1 = React.createContext<null | React.Dispatch<React.SetStateAction<boolean>>>(null);


export function useW12FormContext() {
    return useContext(W12FormContext1)
}

export function useW12FormUpdateContext() {
    return useContext(UpdateW12FormContext1)
}

// ?children is what type?
// export function W12FormProvider({ children }) {
export function W12FormProvider({  }) {
    const [submitButton, setSubmitButton] = useState<boolean>(true);
        
    function setSubmitBtn(state : boolean) {
        setSubmitButton( state);
    }
    function getSubmitBtn() {
        return submitButton;
    }

    return (
        <>
        <W12FormContext1.Provider value={submitButton}>
            <UpdateW12FormContext1.Provider value={setSubmitButton}>
            {/* {children} */}
            </UpdateW12FormContext1.Provider>
      </W12FormContext1.Provider>
      </>
    )
}
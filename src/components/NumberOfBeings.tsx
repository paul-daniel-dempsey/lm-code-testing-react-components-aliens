import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface NumberOfBeingsProp {
    numberOfBeings : string;
    onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void; 
    //onChangeNumberOfBeings1: (count: string) => void;
}

const NumberOfBeings : React.FC<NumberOfBeingsProp> = ({numberOfBeings,onChangeNumberOfBeings}) =>  {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const validate : (value : string) => string | undefined = (value) => {

        const origLength = value.length;
        const noSpecialChars = value.replace(/[^0-9]/g, "")
        if ((noSpecialChars.length === origLength) && (origLength >= 10)) {
            return undefined;
        }
        else {
            return 'Error : Numbers ONLY. Must be at least 1,000,000,000.';
        }
    }

    return(
    <>  
        <div>
        <label htmlFor='numberOfBeings'>Number of beings: </label>
        <input  id="numberOfBeings" 
                data-testid="numberOfBeings" 
                type='text' 
                value={numberOfBeings} 
                    onChange={(e) => {
                        const errorMessage = validate(e.target.value);
                        setErrorMessage(errorMessage);
                        onChangeNumberOfBeings(e);
                    }} />
            <ErrorMessage errorMessage={errorMessage}/>   
        </div>
    </>)
}
export default NumberOfBeings;

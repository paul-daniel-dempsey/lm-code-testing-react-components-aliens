import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface WhatIsTwoPlusTwoProps { 
	whatIsTwoPlusTwo: string;
	onChangeWhatIsTwoPlusTwo: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const WhatIsTwoPlusTwo : React.FC<WhatIsTwoPlusTwoProps> = ({whatIsTwoPlusTwo, onChangeWhatIsTwoPlusTwo}) =>  {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const validate : (value : string) => string | undefined = (value) => {
        if (value === "4") {
            return undefined;
        }
        else {
            return 'Error : "4" must be selected.';
        }
    }

    return(
    <>  
        <label>What Is 2+2? </label>
        <select name="twoplustwo" 
                data-testid='twoplustwo' 
                onChange={(e) => {
                    const errorMessage = validate(e.target.value);
                    setErrorMessage(errorMessage);
                    onChangeWhatIsTwoPlusTwo(e);
                }}>
            Species Name
            <option value="4">4</option>
            <option value="Not 4">Not 4</option>    
        </select>
        <ErrorMessage errorMessage={errorMessage}/>  
    </>)
}
export default WhatIsTwoPlusTwo;
  
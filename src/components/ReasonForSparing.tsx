import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface ReasonForSparingProps { 
	reasonForSparing: string;
	onReasonForSparing: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const ReasonForSparing : React.FC<ReasonForSparingProps> = ({reasonForSparing,onReasonForSparing}) =>  {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const validate : (value : string) => string | undefined = (value) => {

        if ((value.length >= 17) && (value.length <=153)) {
            return undefined;
        }
        else {
            return 'Error : Must be between 17 and 153 characters.';
        }
    }
    return(
    <>  
        <div>
            <label>Reason for sparing: </label>
            <textarea id="reasonForSparing" 
                        data-testid='reasonForSparing' 
                        value={reasonForSparing} 
                        onChange={(e) => {
                            const errorMessage = validate(e.target.value);
                            setErrorMessage(errorMessage);
                            onReasonForSparing(e);
                    }} />
            <ErrorMessage errorMessage={errorMessage}/>   
        </div>
    </>)
}
export default ReasonForSparing;
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface SpeciesNameProps { 
	speciesName: string;
	onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const validate : (value : string) => string | undefined = (value) => {

        const origLength = value.length;
        const noSpecialChars = value.replace(/[^a-zA-Z]/g, "")
        if ((noSpecialChars.length === origLength) && (origLength >= 3) && (origLength <=23)) {
            return undefined;
        }
        else {
            return 'Error : Must be between 3 and 23 characters. No numbers or special characters allowed!';
        }
    }

    return(
    <>
        <div>
            <label htmlFor='speciesName'>Species Name: </label>
            <input id='speciesName' data-testid='speciesName' type='text' 
                    value={speciesName} 
                    onChange={(e) => {
                        const errorMessage = validate(e.target.value);
                        setErrorMessage(errorMessage);
                        onChangeSpeciesName(e);
                    }} />
            <ErrorMessage errorMessage={errorMessage}/>  
        </div>
    </>)
}
export default SpeciesName;
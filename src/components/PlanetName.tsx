import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface PlanetNameProps { 
	planetName: string;
	onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const PlanetName : React.FC<PlanetNameProps> = ({planetName,onChangePlanetName}) =>  {

    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const validate : (value : string) => string | undefined = (value) => {

        const origLength = value.length;
        const noSpecialChars = value.replace(/[^a-zA-Z0-9]/g, "")
        if ((noSpecialChars.length === origLength) && (origLength >= 2) && (origLength <=49)) {
            return undefined;
        }
        else {
            return 'Error : Must be between 2 and 49 characters. Numbers are allowed, but no special characters.';
        }
    }

    return(
    <>  
        <div>
            <label htmlFor='planetName'>Planet Name: </label>
            <input id='planetName' 
                    data-testid='planetName' 
                    type='text' 
                    value={planetName} 
                    onChange={(e) => {
                        const errorMessage = validate(e.target.value);
                        setErrorMessage(errorMessage);
                        onChangePlanetName(e);
                    }} />
            <ErrorMessage errorMessage={errorMessage}/>   
        </div>
    </>)
}
export default PlanetName;
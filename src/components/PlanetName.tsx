import { useContext, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { UpdateSubmitButtonContext } from "./W12MForm";

export interface PlanetNameProps { 
	planetName: string;
	onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const PlanetName : React.FC<PlanetNameProps> = ({planetName,onChangePlanetName}) =>  {
    
    // Consume 
    const setSubmitButton = useContext(UpdateSubmitButtonContext);
    
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const validate : (value : string) => string | undefined = (value) => {

        const origLength = value.length;
        const noSpecialChars = value.replace(/[^a-zA-Z0-9]/g, "")
        if ((noSpecialChars.length === origLength) && (origLength >= 3) && (origLength <=50)) {
            return undefined;
        }
        else {
            return 'ERROR - Must be between 2 and 49 characters. Numbers are allowed, but no special characters';
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
                        if (setSubmitButton != null){
                            setSubmitButton(((errorMessage === undefined) ? false : true));}
                        setErrorMessage(errorMessage);
                        onChangePlanetName(e);
                    }} />
            <ErrorMessage errorMessage={errorMessage}/>   
        </div>
    </>)
}
export default PlanetName;
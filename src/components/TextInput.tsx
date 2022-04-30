import { useContext, useState } from "react";
import { validate } from "../shared/validation";
import ErrorMessage from "./ErrorMessage";
import { UpdateSubmitButtonContext } from "./W12MForm";

export const TI = ['SPECIES', 'PLANET','REASON'] as const;
export type TIType = typeof TI[number];

export interface ITextInput {
    type : TIType
    value : string;
}

export interface TextInputProps { 
    textInput : ITextInput;
	onChangeTextInput: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const TextInput : React.FC<TextInputProps> = ({ textInput, onChangeTextInput }) => {
    
    // Consume 
    const setSubmitButton = useContext(UpdateSubmitButtonContext);
    
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();

    const textName = (textInput.type === "SPECIES" ? 'speciesName' : (textInput.type === "PLANET" ? 'planetName' : 'reasonForSparing'));
    return(
    <>
        <div>
            <label htmlFor={textName}>Species Name: </label>
            <input id={textName} data-testid={textName} type='text' 
                    value={textInput.value} 
                    onChange={(e) => {
                        const errorMessage = validate(e.target.value,textInput.type);
                        if (setSubmitButton != null){
                            setSubmitButton(((errorMessage === undefined) ? false : true));}
                        setErrorMessage(errorMessage);
                        onChangeTextInput(e);
                    }} />
            <ErrorMessage errorMessage={errorMessage}/>  
        </div>
    </>)
}
export default TextInput;


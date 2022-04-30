import { TIType } from "../components/TextInput";

export const validate : (value : string, tiType : TIType) => string | undefined = (value,tiType) => {

    const regExp = (tiType==="SPECIES" ? /[^a-zA-Z]/g : (tiType==="PLANET" ? /[^a-zA-Z0-9]/g : ''));
    const maxLength = (tiType==="SPECIES" ? 23 : (tiType==="PLANET" ? 50 : 153));
    const minLength = (tiType==="SPECIES" ? 3 : (tiType==="PLANET" ? 3 : 17));
    const msgError = (tiType==="SPECIES" ? 'ERROR - Species Name must be less than 23 characters' : (tiType==="PLANET" ? 'ERROR - Must be between 2 and 49 characters. Numbers are allowed, but no special characters' : 'ERROR - Must be between 17 and 153 characters')); 

    const origLength = value.length;
    const noSpecialChars = value.replace(regExp, "")
    if ((noSpecialChars.length === origLength) && 
        (origLength >= minLength) && 
        (origLength <=maxLength)) {
        return undefined;
    }
    else {
        return msgError;
    }
}
export interface ErrorMessageProps { 
	errorMessage: string | undefined;
}

const ErrorMessage : React.FC<ErrorMessageProps> = ({errorMessage}) =>  {

    return(
    <>  
        <div>
            <label htmlFor='error'>{errorMessage}</label>
            {/* <label htmlFor='error'>ERROR - Numbers ONLY. Must be at least 1,000,000,000</label>
            <label htmlFor='error'>ERROR - Must be between 2 and 49 characters. Numbers are allowed, but no special characters</label>
            <label htmlFor='error'>ERROR - Must be between 17 and 153 characters</label>
            <label htmlFor='error'>ERROR - Species Name must be less than 23 characters</label>
            <label htmlFor='error'>ERROR - "4" must be selected</label> */}
        </div>
    </>)
}
export default ErrorMessage;

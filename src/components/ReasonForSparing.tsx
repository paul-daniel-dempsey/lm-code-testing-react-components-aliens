export interface ReasonForSparingProps { 
	reasonForSparing: string;
	onReasonForSparing: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const ReasonForSparing : React.FC<ReasonForSparingProps> = ({reasonForSparing,onReasonForSparing}) =>  {

    return(
    <>  
        <div>
            <label>Reason for sparing: </label>
            <textarea id="reasonForSparing" data-testid='reasonForSparing' value={reasonForSparing} onChange={onReasonForSparing}>
            </textarea>
        </div> 
    </>)
}
export default ReasonForSparing;
interface ReasonForSparingProps { 
	reasonForSparing: string;
	onReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReasonForSparing : React.FC<ReasonForSparingProps> = ({reasonForSparing,onReasonForSparing}) =>  {

    return(
    <>  
        <div>
            <label>Reason for sparing: </label>
            <textarea id="reasonForSparing" value={reasonForSparing} onChange={onReasonForSparing}>
            </textarea>
        </div> 
    </>)
}
export default ReasonForSparing;
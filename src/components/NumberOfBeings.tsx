export interface NumberOfBeingsProp {
    numberOfBeings : string;
    onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void; 
    //onChangeNumberOfBeings1: (count: string) => void;
}

const NumberOfBeings : React.FC<NumberOfBeingsProp> = ({numberOfBeings,onChangeNumberOfBeings}) =>  {

    return(
    <>  
        <div>
        <label htmlFor='numberOfBeings'>Number of beings: </label>
        <input  id="numberOfBeings" 
                data-testid="numberOfBeings" 
                type='text' 
                value={numberOfBeings} 
                onChange={onChangeNumberOfBeings} />
        </div>
    </>)
}
export default NumberOfBeings;

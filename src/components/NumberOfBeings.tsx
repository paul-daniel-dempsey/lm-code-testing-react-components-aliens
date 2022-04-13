interface NumberOfBeingsProp {
    numberOfBeings : string;
    onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const NumberOfBeings : React.FC<NumberOfBeingsProp> = ({numberOfBeings,onChangeNumberOfBeings}) =>  {

    return(
    <>  
        <div>
        <label htmlFor='speciesName'>Number of beings: </label>
        <input id='numberOfBeings' type='text' value={numberOfBeings} onChange={onChangeNumberOfBeings} />
        </div>
    </>)
}
export default NumberOfBeings;

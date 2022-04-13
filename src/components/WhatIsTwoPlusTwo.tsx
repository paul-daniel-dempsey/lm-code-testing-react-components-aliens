interface WhatIsTwoPlusTwoProps { 
	whatIsTwoPlusTwo: string;
	onChangeWhatIsTwoPlusTwo: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const WhatIsTwoPlusTwo : React.FC<WhatIsTwoPlusTwoProps> = ({whatIsTwoPlusTwo, onChangeWhatIsTwoPlusTwo}) =>  {

    return(
    <>  
        <label>What Is 2+2? </label>
        <select name="twoplustwo" onChange={onChangeWhatIsTwoPlusTwo}>
            Species Name
            <option value="4">4</option>
            <option value="Not 4">Not 4</option>    
        </select>
    </>)
}
export default WhatIsTwoPlusTwo;
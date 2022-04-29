import { useEffect, useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import WhatIsTwoPlusTwo from './WhatIsTwoPlusTwo';
import ReasonForSparing from './ReasonForSparing';
import React from 'react';

// Create Context
export const submitButtonContext = React.createContext<boolean>(true);

// Create Context setCharacterFavourites =>
//  React.Dispatch (so can use value in Provider call) 
//  React.SetStateAction (so can link setCharacterFavourites call to be change with array of numbers + initialised to null)
export const UpdateSubmitButtonContext  = React.createContext<null | React.Dispatch<React.SetStateAction<boolean>>>(null);


const W12MForm = () => {

    const [submitButton, setSubmitButton] = useState<boolean>(true);

    const [speciesName, setSpeciesName] = useState<string>('');
    const [planetName,setPlanetName] = useState<string>('');
	const [numberOfBeings, setNumberOfBeings] = useState<string>('');
	const [twoPlusTwo,setTwoPlusTwo] = useState<string>('');
	const [reasonSpare,setReasonSpare] = useState<string>('');

	useEffect(() => {
        setSubmitButton(submitButton);
    }, [submitButton])
	
	function submitW12Form() {
		console.log(speciesName);
		console.log(planetName);
		console.log(numberOfBeings);
		console.log(twoPlusTwo);
		console.log(reasonSpare);	
	}


	return (
		<section className='w12MForm'>
			<W12MHeader />
			
			<submitButtonContext.Provider value={submitButton}>
        	<UpdateSubmitButtonContext.Provider value={setSubmitButton}>    

				<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e: any) => setSpeciesName(e.target.value)} />
				<PlanetName planetName={planetName} onChangePlanetName={(e: any) => setPlanetName(e.target.value)} />
				<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(e: any) => setNumberOfBeings(e.target.value)} />
				<WhatIsTwoPlusTwo whatIsTwoPlusTwo={twoPlusTwo} onChangeWhatIsTwoPlusTwo={(e: any) => setTwoPlusTwo(e.target.value)} />
				<ReasonForSparing reasonForSparing={reasonSpare} onReasonForSparing={(e: any) => setReasonSpare(e.target.value)} />
				<button className="w12MForm-submit-button" type="submit" onClick={submitW12Form} disabled={submitButton}>Submit</button>

			</UpdateSubmitButtonContext.Provider>
        	</submitButtonContext.Provider>
		</section>
	);
};

export default W12MForm;

import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import WhatIsTwoPlusTwo from './WhatIsTwoPlusTwo';
import ReasonForSparing from './ReasonForSparing';

const W12MForm = () => {

    const [speciesName, setSpeciesName] = useState<string>('');
    const [planetName,setPlanetName] = useState<string>('');
	const [numberOfBeings, setNumberOfBeings] = useState<string>('');
	const [twoPlusTwo,setTwoPlusTwo] = useState<string>('');
	const [reasonSpare,setReasonSpare] = useState<string>('');

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
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e: any) => setSpeciesName(e.target.value)} />
			<PlanetName planetName={planetName} onChangePlanetName={(e: any) => setPlanetName(e.target.value)} />
			<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(e: any) => setNumberOfBeings(e.target.value)} />
			<WhatIsTwoPlusTwo whatIsTwoPlusTwo={twoPlusTwo} onChangeWhatIsTwoPlusTwo={(e: any) => setTwoPlusTwo(e.target.value)} />
			<ReasonForSparing reasonForSparing={reasonSpare} onReasonForSparing={(e: any) => setReasonSpare(e.target.value)} />
			<button onClick={submitW12Form}>Submit</button>
		</section>
	);
};

export default W12MForm;

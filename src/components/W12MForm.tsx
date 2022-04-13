import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import WhatIsTwoPlusTwo from './WhatIsTwoPlusTwo';
import ReasonForSparing from './ReasonForSparing';

const W12MForm = () => {


    const [speciesName, setSpeciesName] = useState<string>('humans');
    const [planetName,setPlanetName] = useState<string>('earth');
	const [numberOfBeings, setNumberOfBeings] = useState<string>('1');
	const [twoPlusTwo,setTwoPlusTwo] = useState<string>('4');
	const [reasonSpare,setReasonSpare] = useState<string>('4');

	console.log(speciesName);
	console.log(planetName);
	console.log(numberOfBeings);
	console.log(twoPlusTwo);
	console.log(reasonSpare);	

	return (
		<section className='w12MForm'>
			<W12MHeader />
			{<>
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e: any) => setSpeciesName(e.target.value)} />
			<PlanetName planetName={planetName} onChangePlanetName={(e: any) => setPlanetName(e.target.value)} />
			<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(e: any) => setNumberOfBeings(e.target.value)} />
			<WhatIsTwoPlusTwo whatIsTwoPlusTwo={twoPlusTwo} onChangeWhatIsTwoPlusTwo={(e: any) => setTwoPlusTwo(e.target.value)} />
			<ReasonForSparing reasonForSparing={reasonSpare} onReasonForSparing={(e: any) => setReasonSpare(e.target.value)} />
			</>}
		</section>
	);
};

export default W12MForm;

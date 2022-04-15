export interface PlanetNameProps { 
	planetName: string;
	onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const PlanetName : React.FC<PlanetNameProps> = ({planetName,onChangePlanetName}) =>  {

    return(
    <>  
        <div>
            <label htmlFor='planetName'>Planet Name: </label>
            <input id='planetName' data-testid='planetName' type='text' value={planetName} onChange={onChangePlanetName} />   
        </div>
    </>)
}
export default PlanetName;
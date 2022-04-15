export interface SpeciesNameProps { 
	speciesName: string;
	onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {


    return(
    <>
        <div>
            <label htmlFor='speciesName'>Species Name: </label>
            <input id='speciesName' data-testid='speciesName' type='text' value={speciesName} onChange={onChangeSpeciesName} />
        </div>
    </>)
}
export default SpeciesName;
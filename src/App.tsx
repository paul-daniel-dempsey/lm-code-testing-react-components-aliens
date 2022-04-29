import { useState } from 'react';
import './App.css';
import W12MForm, { initial_WM12M, IW12M } from './components/W12MForm';


function App() {

	const [w12m, setW12m] = useState<IW12M>(initial_WM12M);

	return (
		<>
		<h1>W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION</h1>
		<W12MForm w12m={w12m} onChangeW12M={function (w12mObj: IW12M): void {setW12m(w12mObj);}} />
		</>
	);
}

export default App;

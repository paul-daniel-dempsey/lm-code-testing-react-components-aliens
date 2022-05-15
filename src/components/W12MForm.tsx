import { useEffect, useState } from "react";
import W12MHeader from "./W12MHeader";
import TextInput, { TIType } from "./TextInput";
import NumberOfBeings from "./NumberOfBeings";
import WhatIsTwoPlusTwo from "./WhatIsTwoPlusTwo";
import React from "react";
import { W12FormProvider } from "./W12MContext"

// Create Context
export const W12FormContext = React.createContext<boolean>(true);

// Create Context setCharacterFavourites =>
//  React.Dispatch (so can use value in Provider call)
//  React.SetStateAction (so can link setCharacterFavourites call to be change with array of numbers + initialised to null)
export const UpdateW12FormContext = React.createContext<null | React.Dispatch<React.SetStateAction<boolean>>>(null);

export const initial_WM12M: IW12M = {
  speciesNameW12M: "",
  planetNameW12M: "",
  numberOfBeingsW12M: "",
  twoPlusTwoW12M: "",
  reasonSpareW12M: "",
};

export interface IW12M {
  speciesNameW12M: string;
  planetNameW12M: string;
  numberOfBeingsW12M: string;
  twoPlusTwoW12M: string;
  reasonSpareW12M: string;
}

export interface W12MProps {
  w12m: IW12M;
  onChangeW12M: (w12mObj: IW12M) => void;
}

const W12MForm: React.FC<W12MProps> = ({ w12m, onChangeW12M }) => {
  const [submitButton, setSubmitButton] = useState<boolean>(true);

  const [speciesName, setSpeciesName] = useState<string>(w12m.speciesNameW12M);
  const [planetName, setPlanetName] = useState<string>(w12m.planetNameW12M);
  const [numberOfBeings, setNumberOfBeings] = useState<string>(
    w12m.numberOfBeingsW12M
  );
  const [twoPlusTwo, setTwoPlusTwo] = useState<string>(w12m.twoPlusTwoW12M);
  const [reasonSpare, setReasonSpare] = useState<string>(w12m.reasonSpareW12M);

  useEffect(() => {
    setSubmitButton(submitButton);
  }, [submitButton]);

  function submitW12Form() {
    onChangeW12M({
      speciesNameW12M: speciesName,
      planetNameW12M: planetName,
      numberOfBeingsW12M: numberOfBeings,
      twoPlusTwoW12M: twoPlusTwo,
      reasonSpareW12M: reasonSpare,
    });
  }

  return (
    <section className="w12MForm">
      <W12MHeader />
      
      {/* <W12FormProvider> */}
      <W12FormContext.Provider value={submitButton}>
        <UpdateW12FormContext.Provider value={setSubmitButton}>
          <TextInput
            textInput={{ type: "SPECIES" as TIType, value: speciesName }}
            onChangeTextInput={(e: any) => setSpeciesName(e.target.value)}
          />
          <TextInput
            textInput={{ type: "PLANET" as TIType, value: planetName }}
            onChangeTextInput={(e: any) => setPlanetName(e.target.value)}
          />
          <NumberOfBeings
            numberOfBeings={numberOfBeings}
            onChangeNumberOfBeings={(e: any) =>
              setNumberOfBeings(e.target.value)
            }
          />
          <WhatIsTwoPlusTwo
            whatIsTwoPlusTwo={twoPlusTwo}
            onChangeWhatIsTwoPlusTwo={(e: any) => setTwoPlusTwo(e.target.value)}
          />
          <TextInput
            textInput={{ type: "REASON" as TIType, value: reasonSpare }}
            onChangeTextInput={(e: any) => setReasonSpare(e.target.value)}
          />
          <button
            className="w12MForm-submit-button"
            type="submit"
            onClick={submitW12Form}
          >
            Submit
          </button>
        </UpdateW12FormContext.Provider>
      </W12FormContext.Provider>
      {/* </W12FormProvider> */}

      <div className="text">
        <br></br>
        [speciesName:{w12m.speciesNameW12M}]<br></br>
        [planetName:{w12m.planetNameW12M}]<br></br>
        [numberOfBeings:{w12m.numberOfBeingsW12M}]<br></br>
        [twoPlusTwo:{w12m.twoPlusTwoW12M}]<br></br>
        [reasonSpare:{w12m.reasonSpareW12M}]
      </div>
    </section>
  );
};

export default W12MForm;

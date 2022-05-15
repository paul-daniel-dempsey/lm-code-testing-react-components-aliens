import { useContext, useState } from "react";
import { validate } from "../shared/validation";
import ErrorMessage from "./ErrorMessage";
import { UpdateW12FormContext } from "./W12MForm";

export const TI = ["SPECIES", "PLANET", "REASON"] as const;
export type TIType = typeof TI[number];

export interface ITextInput {
  type: TIType;
  value: string;
}

export interface TextInputProps {
  textInput: ITextInput;
  onChangeTextInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  textInput,
  onChangeTextInput,
}) => {
  // Consume
  const setSubmitButton = useContext(UpdateW12FormContext);

  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const textName =
    textInput.type === "SPECIES"
      ? "speciesName"
      : textInput.type === "PLANET"
      ? "planetName"
      : "reasonForSparing";
  return (
    <>
      <div>
        <label htmlFor={textName}>{textName}: </label>
        <input
          id={textName}
          data-testid={textName}
          type="text"
          value={textInput.value}
          onChange={(e) => {
            let min: number;
            let max: number;
            let allowNumbers: boolean;
            let allowSpecialChars: boolean;
            switch (textInput.type) {
              case "PLANET": {
                min = 2;
                max = 49;
                allowNumbers = true;
                allowSpecialChars = false;
                break;
              }
              case "SPECIES": {
                min = 3;
                max = 23;
                allowNumbers = false;
                allowSpecialChars = false;
                break;
              }
              case "REASON": {
                min = 17;
                max = 153;
                allowNumbers = true;
                allowSpecialChars = true;
              }
            }
            const errorMessage = validate(
              e.target.value,
              allowNumbers,
              allowSpecialChars,
              min,
              max
            );
            if (setSubmitButton != null) {
              setSubmitButton(errorMessage === undefined ? false : true);
            }
            setErrorMessage(errorMessage);
            onChangeTextInput(e);
          }}
        />
        <ErrorMessage errorMessage={errorMessage} />
      </div>
    </>
  );
};
export default TextInput;

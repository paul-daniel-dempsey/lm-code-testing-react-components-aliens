import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput, { TextInputProps, TIType } from "./TextInput";


describe('SpeciesName', () => {
    test('VALID, Renders form element with TEST value', () => {
        const testField = 'HUMANS';
        const TIs : TextInputProps = {
            textInput : {type : "SPECIES" as TIType, value : testField},
            onChangeTextInput : () => {},
        }
        render(<TextInput {...TIs}/>);
        expect(screen.getByTestId('speciesName')).toBeInTheDocument();
        expect(screen.getByTestId('speciesName')).toHaveValue(testField);
    });

    test(`INVALID, Renders Error Displayed`, async () => {
        const testField = 'HUMANS?1';
        const TIs : TextInputProps = {
            textInput : {type : "SPECIES" as TIType, value : testField},
            onChangeTextInput : () => {},
        }
        render(<TextInput {...TIs}/>);
        const inputbox = screen.getByRole('textbox');
        userEvent.type(inputbox,testField);
		expect(await screen.findByText('ERROR - Field must have no special characters, greater than 2 characters, less than 24 characters, have no numbers, have no special characters')).toBeInTheDocument();
    });

    test('Does each input field call its onChange function and pass it the correct parameters', () => {
        const mockOnChange = jest.fn();
        const testField = 'HUMANS';
        const TIs : TextInputProps = {
            textInput : {type : "SPECIES" as TIType, value : testField},
            onChangeTextInput : mockOnChange,
        }
        render(<TextInput {...TIs}/>);
        const inputfield = screen.getByTestId('speciesName');
        if (inputfield){userEvent.type(inputfield,testField);}
        expect(mockOnChange).toHaveBeenCalledTimes(testField.length);
        expect(mockOnChange.mock.calls[testField.length-1][0].target.value).toBe(testField);
    });   
});

describe('Planet', () => {
    test('VALID, renders form element with TEST value', () => {
        const testField = 'JUPITER3';
        const TIs : TextInputProps = {
            textInput : {type : "PLANET" as TIType, value : testField},
            onChangeTextInput : () => {},
        }
        render(<TextInput {...TIs}/>);
        expect(screen.getByTestId('planetName')).toBeInTheDocument();
        expect(screen.getByTestId('planetName')).toHaveValue(testField);
    });

    test(`INVALID, Renders Error Displayed`, async () => {
        const testField = 'JUPITER3?';
        const TIs : TextInputProps = {
            textInput : {type : "PLANET" as TIType, value : testField},
            onChangeTextInput : () => {},
        }
        render(<TextInput {...TIs}/>);
        const inputbox = screen.getByRole('textbox');
        userEvent.type(inputbox,testField);
		expect(await screen.findByText('ERROR - Field must have no special characters, greater than 1 characters, less than 50 characters, have no special characters')).toBeInTheDocument();
    });

    test('Does each input field call its onChange function and pass it the correct parameters', () => {
        const mockOnChange = jest.fn();
        const testField = 'JUPITER3';
        const TIs : TextInputProps = {
            textInput : {type : "PLANET" as TIType, value : testField},
            onChangeTextInput : mockOnChange,
        }
        render(<TextInput {...TIs}/>);
        const inputfield = screen.getByTestId('planetName');
        if (inputfield){userEvent.type(inputfield,testField);}
        expect(mockOnChange).toHaveBeenCalledTimes(testField.length);
        expect(mockOnChange.mock.calls[testField.length-1][0].target.value).toBe(testField);
    });   
});

describe('Reason For Sparing', () => {
    test('VALID, renders form element with TEST value', () => {
        const testField = 'MUST BE CHARACTERS MORE THAN SEVENTEEN';
        const TIs : TextInputProps = {
            textInput : {type : "REASON" as TIType, value : testField},
            onChangeTextInput : () => {},
        }
        render(<TextInput {...TIs}/>);
        expect(screen.getByTestId('reasonForSparing')).toBeInTheDocument();
        expect(screen.getByTestId('reasonForSparing')).toHaveValue(testField);
    });

    test(`INVALID, Renders Error Displayed`, async () => {
        const testField = 'MUST BE';
        const TIs : TextInputProps = {
            textInput : {type : "REASON" as TIType, value : testField},
            onChangeTextInput : () => {},
        }
        render(<TextInput {...TIs}/>);
        const inputbox = screen.getByRole('textbox');
        userEvent.type(inputbox,testField);
		expect(await screen.findByText('ERROR - Field must have no special characters, greater than 16 characters, less than 154 characters')).toBeInTheDocument();
    });

    test('Does each input field call its onChange function and pass it the correct parameters', () => {
        const mockOnChange = jest.fn();
        const testField = 'MUST BE CHARACTERS MORE THAN SEVENTEEN';
        const TIs : TextInputProps = {
            textInput : {type : "REASON" as TIType, value : testField},
            onChangeTextInput : mockOnChange,
        }
        render(<TextInput {...TIs}/>);
        const inputfield = screen.getByTestId('reasonForSparing');
        if (inputfield){userEvent.type(inputfield,testField);}
        expect(mockOnChange).toHaveBeenCalledTimes(testField.length);
        expect(mockOnChange.mock.calls[testField.length-1][0].target.value).toBe(testField);
    });   
});
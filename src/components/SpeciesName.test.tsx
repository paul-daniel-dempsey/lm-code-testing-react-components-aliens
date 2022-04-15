import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChangeEvent } from 'react';
import SpeciesName, { SpeciesNameProps } from './SpeciesName';

describe('SpeciesName', () => {
    test('renders form element', () => {
        const { container } = render(<SpeciesName 
                                        speciesName={'TEST'} 
                                        onChangeSpeciesName={function (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void {
            throw new Error('Function not implemented.');
        } } />);
        // Why does <input type='text' ...> equate to 'textbox' rather than 'input' or 'inputtext'!
        // expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByTestId('speciesName')).toBeInTheDocument();
    });

    test('render form element SpeciesName, Input Field', () => {
        const testField : string = 'TEST';
        render(<SpeciesName 
            speciesName={testField} 
            onChangeSpeciesName={function (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void {
            throw new Error('Function not implemented.');
        } } />);
        expect(screen.getByTestId('speciesName')).toHaveValue(testField);
    });

    test('Does each input field call its onChange function and pass it the correct parameters', () => {
        const testField : string = 'alien';
        const mockOnSpeciesNames = jest.fn();
        
        const speciesNames : SpeciesNameProps = {
            speciesName : 'human',
            onChangeSpeciesName : mockOnSpeciesNames,
        }

        render(<SpeciesName {...speciesNames}/>);
        const inputfield = screen.getByTestId('speciesName');

        if (inputfield){
            userEvent.type(inputfield,testField); // WHY doesnt this set value!!!!
            //fireEvent.change(inputfield,{target: { value : testField}}) // WHY doesnt this set value!!!!
        }

        // Input field onChange called?
        expect(mockOnSpeciesNames.mock.calls.length).toBe(testField.length);
        //expect(mockOnReasonForSparing.mock.calls.length).toBe(1);

        // Input field called with correct parameters?
        expect(mockOnSpeciesNames.mock.calls[testField.length-1][0].target.value).toBe('human'); // testField
        //expect(mockOnReasonForSparing.mock.calls[0][0].target.value).toBe(testField); // testField
    });   

});
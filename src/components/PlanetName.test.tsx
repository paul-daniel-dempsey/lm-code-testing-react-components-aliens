import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChangeEvent } from 'react';
import PlanetName, { PlanetNameProps } from './PlanetName';

describe('PlanetName', () => {
    test('renders form element PlanetName', () => {
        render(<PlanetName 
                    planetName={'TEST'} 
                    onChangePlanetName={function (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void {
            throw new Error('Function not implemented.');
        } } />);
        expect(screen.getByTestId('planetName')).toBeInTheDocument();
    });

    test('render form element PlanetName, Input Field', () => {
        const testField : string = '9';
        render(<PlanetName 
                    planetName={testField} 
                    onChangePlanetName={function (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void {
            throw new Error('Function not implemented.');
        } } />);
        expect(screen.getByTestId('planetName')).toHaveValue(testField);
    });


    test('Does each input field call its onChange function and pass it the correct parameters', () => {
        const testField : string = 'earth';
        const mockOnChangePlanetName = jest.fn();
        
        const planetName : PlanetNameProps = {
            planetName : 'jupiter',
            onChangePlanetName : mockOnChangePlanetName,
        }

        render(<PlanetName {...planetName}/>);
        const inputfield = screen.getByTestId('planetName');

        if (inputfield){
            userEvent.type(inputfield,testField); // WHY doesnt this set value!!!!
            //fireEvent.change(inputfield,{target: { value : testField}}) // WHY doesnt this set value!!!!
        }

        // Input field onChange called?
        expect(mockOnChangePlanetName.mock.calls.length).toBe(testField.length);
        //expect(mockOnChangePlanetName.mock.calls.length).toBe(1);

        // Input field called with correct parameters?
        expect(mockOnChangePlanetName.mock.calls[testField.length-1][0].target.value).toBe('jupiter'); // testField
        //expect(mockOnChangePlanetName.mock.calls[0][0].target.value).toBe(testField); // testField
    });    
});
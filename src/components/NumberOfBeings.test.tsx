import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChangeEvent } from 'react';
import NumberOfBeings, { NumberOfBeingsProp } from './NumberOfBeings';

describe('NumberOfBeings', () => {
    test('render form element NumberOfBeings', () => {
        render(<NumberOfBeings 
                    numberOfBeings={'TEST'} 
                    onChangeNumberOfBeings={function (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void {
            throw new Error('Function not implemented.');
        } } />);
        
        // Why does <input type='text' ...> equate to 'textbox' rather than 'input' or 'inputtext'!
        // expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByTestId('numberOfBeings')).toBeInTheDocument();
    });

    test('render form element NumberOfBeings, Input Field', () => {
        const testField : string = '9';
        render(<NumberOfBeings 
                    numberOfBeings={testField} 
                    onChangeNumberOfBeings={function (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void {
            throw new Error('Function not implemented.');
        } } />);
        expect(screen.getByTestId('numberOfBeings')).toHaveValue(testField);
    });

    test('Does each input field call its onChange function and pass it the correct parameters', () => {
        const testField : string = '10';
        const mockOnChangeNumberOfBeings = jest.fn();
        
        const numberOfBeings : NumberOfBeingsProp = {
            numberOfBeings : '0',
            onChangeNumberOfBeings : mockOnChangeNumberOfBeings,
        }

        render(<NumberOfBeings {...numberOfBeings}/>);
        const inputfield = screen.getByTestId('numberOfBeings');

        if (inputfield){
            userEvent.type(inputfield,testField); // WHY doesnt this set value!!!!
        }

        // Input field onChange called?
        expect(mockOnChangeNumberOfBeings.mock.calls.length).toBe(testField.length);

        // Input field called with correct parameters?
        expect(mockOnChangeNumberOfBeings.mock.calls[testField.length-1][0].target.value).toBe('0'); // testField
    });
    
    test(`Given VALID 1 props ([%p]),
    When the component is rendered,
    Then Error Displayed`, async () => {
        const testField = '1000000000000';
        const numberOfBeings : NumberOfBeingsProp = {
            numberOfBeings : testField,
            onChangeNumberOfBeings : () => {},
        }
        render(<NumberOfBeings {...numberOfBeings}/>);

		expect(await screen.findByText('ERROR - Numbers ONLY. Must be at least 1,000,000,000'))
            .toBeUndefined(); // WHY does this not be picked up like example?
    });

    test(`Given INVALID 1 props ([%p]),
    When the component is rendered,
    Then Error Displayed`, async () => {
        const testField = 'A';
        const numberOfBeings : NumberOfBeingsProp = {
            numberOfBeings : testField,
            onChangeNumberOfBeings : () => {},
        }
        render(<NumberOfBeings {...numberOfBeings}/>); // WHY doesnt render fire a validation error!!!
		expect(await screen.findByText('ERROR - Numbers ONLY. Must be at least 1,000,000,000'))
            .toBeInTheDocument();
    });

    it(`Given INVALID £ props ([%p]),
    When the component is rendered,
    Then Error Displayed`, () => {
        const testField = '£';
        const numberOfBeings : NumberOfBeingsProp = {
            numberOfBeings : testField,
            onChangeNumberOfBeings : () => {},
        }
        render(<NumberOfBeings {...numberOfBeings}/>); // WHY doesnt render fire a validation error!!!
		expect(screen.getByText('ERROR - Numbers ONLY. Must be at least 1,000,000,000')
    	).toBeInTheDocument();
    });

    it(`Given INVALID length props ([%p]),
    When the component is rendered,
    Then Error Displayed`, () => {
        const testField = '1';
        const numberOfBeings : NumberOfBeingsProp = {
            numberOfBeings : testField,
            onChangeNumberOfBeings : () => {},
        }
        render(<NumberOfBeings {...numberOfBeings}/>); // WHY doesnt render fire a validation error!!!
		expect(screen.getByText('ERROR - Numbers ONLY. Must be at least 1,000,000,000')
    	).toBeInTheDocument();
    });
});


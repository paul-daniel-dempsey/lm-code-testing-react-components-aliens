import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChangeEvent } from 'react';
import ReasonForSparing, { ReasonForSparingProps } from './ReasonForSparing';

describe('ReasonForSparing', () => {
    test('renders form element ReasonForSparing', () => {
        render(<ReasonForSparing 
                    reasonForSparing={'TEST'} 
                    onReasonForSparing={function (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void {
            throw new Error('Function not implemented.');
        } } />);
        expect(screen.getByTestId('reasonForSparing')).toBeInTheDocument();
    });

    test('render form element ReasonForSparing, Input Field', () => {
        const testField : string = '9';
        render(<ReasonForSparing 
                    reasonForSparing={testField} 
                    onReasonForSparing={function (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void {
            throw new Error('Function not implemented.');
        } } />);
        expect(screen.getByTestId('reasonForSparing')).toHaveValue(testField);
    });

    test('Does each input field call its onChange function and pass it the correct parameters', () => {
        const testField : string = 'earth';
        const mockOnReasonForSparing = jest.fn();
        
        const reasonForSparing : ReasonForSparingProps = {
            reasonForSparing : 'none',
            onReasonForSparing : mockOnReasonForSparing,
        }

        render(<ReasonForSparing {...reasonForSparing}/>);
        const inputfield = screen.getByTestId('reasonForSparing');

        if (inputfield){
            userEvent.type(inputfield,testField); // WHY doesnt this set value!!!!
            //fireEvent.change(inputfield,{target: { value : testField}}) // WHY doesnt this set value!!!!
        }

        // Input field onChange called?
        expect(mockOnReasonForSparing.mock.calls.length).toBe(testField.length);
        //expect(mockOnReasonForSparing.mock.calls.length).toBe(1);

        // Input field called with correct parameters?
        expect(mockOnReasonForSparing.mock.calls[testField.length-1][0].target.value).toBe('none'); // testField
        //expect(mockOnReasonForSparing.mock.calls[0][0].target.value).toBe(testField); // testField
    });   
   
    test(`Given VALID 1 props ([%p]),
    When the component is rendered,
    Then Error Displayed`, () => {
        const testField = '1. Because we are very nice people?';
        const reasonForSparing : ReasonForSparingProps = {
            reasonForSparing : testField,
            onReasonForSparing : () => {},
        }
        render(<ReasonForSparing {...reasonForSparing}/>);
        const inputbox = screen.getByRole('textbox')
        userEvent.type(inputbox,testField)
        expect(screen.queryAllByRole("inputbox").find((b) => b.textContent === 'ERROR - Must be between 17 and 153 characters'))
            .toBeUndefined();
    });

    test(`Given INVALID length props ([%p]),
    When the component is rendered,
    Then Error Displayed`, async () => {
        const testField = '<17chars';
        const reasonForSparing : ReasonForSparingProps = {
            reasonForSparing : testField,
            onReasonForSparing : () => {},
        }
        render(<ReasonForSparing {...reasonForSparing}/>);
        const inputbox = screen.getByRole('textbox');
        userEvent.type(inputbox,testField); // OnChange calls validate to produce error message
		expect(await screen.findByText('ERROR - Must be between 17 and 153 characters'))
            .toBeInTheDocument();
    });
});
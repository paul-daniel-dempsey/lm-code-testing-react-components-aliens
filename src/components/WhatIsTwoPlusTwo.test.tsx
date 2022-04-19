import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChangeEvent } from 'react';
import WhatIsTwoPlusTwo, { WhatIsTwoPlusTwoProps } from './WhatIsTwoPlusTwo';

describe('WhatIsTwoPlusTwo', () => {
    test('renders form element WhatIsTwoPlusTwo', () => {
        render(<WhatIsTwoPlusTwo 
                    whatIsTwoPlusTwo={'TEST'} 
                    onChangeWhatIsTwoPlusTwo={function (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void {
            throw new Error('Function not implemented.');
        } } />);
        expect(screen.getByTestId('twoplustwo')).toBeInTheDocument();
    });

    test('render form element WhatIsTwoPlusTwo, Input Field', () => {
        const testField : string = '4';
        render(<WhatIsTwoPlusTwo 
                    whatIsTwoPlusTwo={testField} 
                    onChangeWhatIsTwoPlusTwo={function (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void {
            throw new Error('Function not implemented.');
        } } />);
        expect(screen.getByTestId('twoplustwo')).toHaveValue(testField);
    });


    test('Does each input field call its onChange function and pass it the correct parameters', () => {
        const testField : string = 'Not 4';
        const mockOnChangeTwoPlusTwo = jest.fn();
        
        const twoplustwo : WhatIsTwoPlusTwoProps = {
            whatIsTwoPlusTwo : '4',
            onChangeWhatIsTwoPlusTwo : mockOnChangeTwoPlusTwo,
        }

        render(<WhatIsTwoPlusTwo {...twoplustwo}/>);
        const inputfield = screen.getByTestId('twoplustwo');

        if (inputfield){
            fireEvent.change(inputfield,{target: { value : testField}})
        }

        // Input field onChange called?
        expect(mockOnChangeTwoPlusTwo.mock.calls.length).toBe(1);

        // Input field called with correct parameters?
        expect(mockOnChangeTwoPlusTwo.mock.calls[0][0].target.value).toBe(testField);
    });
   
    // test(`Given VALID 1 props ([%p]),
    // When the component is rendered,
    // Then Error Displayed`, async () => {
    //     const testField = '4';
    //     const whatIsTwoPlusTwo : WhatIsTwoPlusTwoProps = {
    //         whatIsTwoPlusTwo : testField,
    //         onChangeWhatIsTwoPlusTwo : () => {},
    //     }
    //     render(<WhatIsTwoPlusTwo {...whatIsTwoPlusTwo}/>);
	// 	expect(await screen.findByText('ERROR - "4" must be selected'))
    //         .toBeUndefined();  // WHY does this not be picked up like example?
    // });

    test(`Given INVALID length props ([%p]),
    When the component is rendered,
    Then Error Displayed`, async () => {
        const testField = 'Not 4';
        const whatIsTwoPlusTwo : WhatIsTwoPlusTwoProps = {
            whatIsTwoPlusTwo : testField,
            onChangeWhatIsTwoPlusTwo : () => {},
        }
        render(<WhatIsTwoPlusTwo {...whatIsTwoPlusTwo}/>);
        const inputbox = screen.getByTestId('twoplustwo')
        userEvent.selectOptions(inputbox,testField)
		expect(await screen.findByText('ERROR - "4" must be selected'))
            .toBeInTheDocument();
    });    
});
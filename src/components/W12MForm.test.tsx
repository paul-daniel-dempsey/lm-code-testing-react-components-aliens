import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import W12MForm from './W12MForm';

describe('W12Form', () => {

    test('Does the submit button call its handler function and pass it the correct parameters?', () => {
        
        const mockOnChange = jest.fn();
        const test_W12m = {
            speciesNameW12M : 'AAAA',
            planetNameW12M : 'AAAA',
            numberOfBeingsW12M : '1000000000000',
            twoPlusTwoW12M : '4',
            reasonSpareW12M : 'Any Reason At All I Can Think Of Today In England',	
		};
        render(<W12MForm w12m={test_W12m} onChangeW12M={mockOnChange}/>);
        const buttonSubmit = screen.getAllByRole('button').find(a => a.textContent === 'Submit');
        expect(buttonSubmit).toBeInTheDocument();
		if (buttonSubmit){
            userEvent.click(buttonSubmit);
        }
		expect(mockOnChange).toHaveBeenCalledTimes(1);
		expect(mockOnChange).toHaveBeenCalledWith(test_W12m);
    });
});


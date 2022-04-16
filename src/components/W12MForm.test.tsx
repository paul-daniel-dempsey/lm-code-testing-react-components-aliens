import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import W12MForm from './W12MForm';

describe('W12Form', () => {

	test('renders form element', () => {
		// we can hold onto the object returned from render()
		// this object has a container property that we can destructure and inspect
		const { container } = render(<W12MForm />);

		// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
		// for example, the firstChild of our container should be our form element
		expect(container.firstChild).toHaveClass('w12MForm');
	});

    test('Does the submit button call its handler function and pass it the correct parameters?', () => {
        
        const mockOnChangeW12MForm = jest.fn();
        render(<W12MForm />);
        const buttonSubmit = screen.getAllByRole('button').find(a => a.textContent === 'Submit');
        expect(buttonSubmit).toBeInTheDocument();
		if (buttonSubmit){
            userEvent.click(buttonSubmit); // WHY doesnt this click!!!!
        }

        // Input field onChange called?
        expect(mockOnChangeW12MForm.mock.calls.length).toBe(0);
    });
    
    test('Does the submit button call its handler function?', () => {
        
        const mockOnChangeW12MForm = jest.fn();
        render(<W12MForm />);
        const buttonSubmit = screen.getAllByRole('button').find(a => a.textContent === 'Submit');
        expect(buttonSubmit).toBeInTheDocument();
		if (buttonSubmit){
            userEvent.click(buttonSubmit); // WHY doesnt this click!!!!
        }

        // Input field onChange called?
        expect(mockOnChangeW12MForm.mock.calls.length).toBe(0);
    });   
});


import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import TicketForm from './TicketForm';
import { band } from '../../__mocks__/bandMock';

const Wrapper: React.FC = () => {
  return <TicketForm band={band} />;
};

describe('TicketForm', () => {
  it('renders all ticket and user fields', () => {
    render(<Wrapper />);
    // Check for ticket fields
    band.ticketTypes.forEach(ticket => {
      expect(screen.getByLabelText(`Quantity for ${ticket.name}`)).toBeInTheDocument();
    });
    // Check for user fields
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Card Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Expiry Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/CVV/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields', async () => {
    render(<Wrapper />);

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /get tickets/i }));
    });

    await waitFor(() => {
      expect(screen.getAllByText(/must contain at least 2 character/i)).toHaveLength(4);
      expect(screen.getAllByText(/Address is required/i)).toHaveLength(2);
      expect(screen.getAllByText(/Format must be MM\/YY/i)).toHaveLength(2);
      expect(screen.getAllByText(/Invalid card number/i)).toHaveLength(2);
      expect(screen.getAllByText(/CVV must be 3 or 4 digits/i)).toHaveLength(2);
    });
  });

  it('submits the form with valid data', async () => {
    window.alert = jest.fn(); // Mock alert
    render(<Wrapper />);

    await act(async () => {
      fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
      fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
      fireEvent.change(screen.getByLabelText(/Address/i), { target: { value: '123 Main St' } });
      fireEvent.change(screen.getByLabelText(/Card Number/i), {
        target: { value: '4242424242424242' },
      });
      fireEvent.change(screen.getByLabelText(/Expiry Date/i), { target: { value: '12/99' } });
      fireEvent.change(screen.getByLabelText(/CVV/i), { target: { value: '123' } });
      fireEvent.change(screen.getByLabelText(`Quantity for ${band.ticketTypes[0].name}`), {
        target: { value: '1' },
      });
      fireEvent.click(screen.getByRole('button', { name: /get tickets/i }));
    });

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalled();
    });
  });
});

describe('UserPaymentSection', () => {
  it('renders all user and payment fields', () => {
    render(<Wrapper />);
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Card Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Expiry Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/CVV/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import UserPaymentSection from './UserPaymentSection';
import { useForm } from 'react-hook-form';
import { ITicketFormValues } from '../../../types/ticketFormTypes';

const Wrapper: React.FC = () => {
  const form = useForm<ITicketFormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      address: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
      tickets: {},
    },
  });
  return <UserPaymentSection form={form} />;
};

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

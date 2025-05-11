import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TicketSection from './TicketSection';
import { band } from '../../../__mocks__/bandMock';
import { useForm, UseFormReturn } from 'react-hook-form';
import { ITicketFormValues } from '../../../types/ticketFormTypes';

type FormType = UseFormReturn<ITicketFormValues>;
const Wrapper: React.FC<{ children: (form: FormType) => React.ReactNode }> = ({ children }) => {
  const form = useForm<ITicketFormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      address: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
      tickets: Object.fromEntries(band.ticketTypes.map(t => [t.type, 0])),
    },
  });
  return <form>{children(form)}</form>;
};

describe('TicketSection', () => {
  it('renders all ticket types', () => {
    render(<Wrapper>{form => <TicketSection band={band} form={form} />}</Wrapper>);
    band.ticketTypes.forEach(ticket => {
      expect(screen.getByLabelText(`Quantity for ${ticket.name}`)).toBeInTheDocument();
      expect(screen.getByText(ticket.name)).toBeInTheDocument();
      expect(screen.getByText(ticket.description)).toBeInTheDocument();
    });
  });

  it('updates value when ticket quantity changes', () => {
    render(<Wrapper>{form => <TicketSection band={band} form={form} />}</Wrapper>);
    const input = screen.getByLabelText(
      `Quantity for ${band.ticketTypes[0].name}`
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: '2' } });
    expect(input.value).toBe('2');
  });
});

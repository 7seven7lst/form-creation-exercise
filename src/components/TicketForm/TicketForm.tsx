import React, { useCallback } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { IBandInfo } from '../../types/band';
import { useTicketForm } from '../../hooks/useTicketForm';
import TicketSection from './TicketSection/TicketSection';
import UserPaymentSection from './UserPaymentSection/UserPaymentSection';
import FormButtons from './TicketFormButtons';
import TotalDisplay from './TicketSection/TotalDisplay';

function TicketForm({ band }: { band: IBandInfo }) {
  const { form, onSubmit } = useTicketForm(band);
  const {
    reset,
    formState: { isSubmitting },
  } = form;

  const handleReset = useCallback(() => {
    reset({
      firstName: '',
      lastName: '',
      address: '',
      cardNumber: '',
      tickets: Object.fromEntries(band.ticketTypes.map(t => [t.type, 0])),
      expiry: '',
      cvv: '',
    });
  }, [reset, band.ticketTypes]);

  return (
    <div className="ticket-form-container">
      <Card as="section" aria-labelledby="ticket-form-heading" className="m-2">
        <Card.Body>
          <Form onSubmit={onSubmit} aria-describedby="ticket-form-desc form-instructions">
            <TicketSection band={band} form={form} />
            <TotalDisplay band={band} form={form} />
            <hr />
            <UserPaymentSection form={form} />
            <FormButtons isSubmitting={isSubmitting} onReset={handleReset} />
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default React.memo(TicketForm);

import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { IBandInfo } from '../../../types/band';
import { ITicketFormValues } from '../../../types/ticketFormTypes';
import { centsToDollars } from '../../../utils';

interface ITicketSectionProps {
  band: IBandInfo;
  form: UseFormReturn<ITicketFormValues>;
}

const TicketSection = ({ band, form }: ITicketSectionProps) => {
  const { register } = form;

  return (
    <section aria-labelledby="ticket-section-heading">
      <h2 id="ticket-section-heading" className="h4">
        Select Tickets
      </h2>
      {band.ticketTypes.map(ticket => (
        <Form.Group key={ticket.type} className="mb-4">
          <div className="d-flex align-items-center" style={{ gap: '1rem' }}>
            <Form.Label htmlFor={ticket.type} className="mb-0 flex-grow-1" style={{ minWidth: 0 }}>
              {ticket.name}
            </Form.Label>
            <Form.Control
              {...register(`tickets.${ticket.type}`, {
                valueAsNumber: true,
                min: 0,
              })}
              id={ticket.type}
              type="number"
              min={0}
              style={{ width: '100px' }}
              aria-label={`Quantity for ${ticket.name}`}
            />
          </div>
          <Form.Text className="text-muted" style={{ display: 'block', marginLeft: 0 }}>
            {ticket.description}
          </Form.Text>
          <div className="fw-bold mt-1">{centsToDollars(ticket.cost)}</div>
          <hr />
        </Form.Group>
      ))}
    </section>
  );
};

export default React.memo(TicketSection);

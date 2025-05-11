import React from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { centsToDollars } from '../../../utils';
import { IBandInfo } from '../../../types/band';
import { ITicketFormValues } from '../../../types/ticketFormTypes';

const TotalDisplay = ({
  band,
  form,
}: {
  band: IBandInfo;
  form: UseFormReturn<ITicketFormValues>;
}) => {
  const tickets = useWatch({
    control: form.control,
    name: 'tickets',
  });

  const total = React.useMemo(() => {
    return Object.entries(tickets || {}).reduce((total, [ticketType, quantity]) => {
      const ticket = band.ticketTypes.find(t => t.type === ticketType);
      return total + (ticket?.cost || 0) * (quantity as number);
    }, 0);
  }, [tickets, band.ticketTypes]);

  return (
    <div className="ticket-form-total">
      <div className="fw-bold fs-5 d-flex justify-content-between my-3" aria-live="polite">
        <span>TOTAL</span>
        <span>{centsToDollars(total)}</span>
      </div>
    </div>
  );
};

export default React.memo(TotalDisplay);

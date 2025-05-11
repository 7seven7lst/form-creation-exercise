import React from 'react';
import Button from 'react-bootstrap/Button';

interface TicketFormButtonsProps {
  isSubmitting: boolean;
  onReset: () => void;
}

const TicketFormButtons: React.FC<TicketFormButtonsProps> = ({ isSubmitting, onReset }) => (
  <div className="d-flex flex-column gap-2">
    <Button
      type="submit"
      variant="primary"
      className="w-100 fw-bold fs-5"
      disabled={isSubmitting}
      aria-busy={isSubmitting}
    >
      {isSubmitting ? 'Processing...' : 'Get Tickets'}
    </Button>
    <Button type="button" variant="secondary" className="w-100 fw-bold fs-5" onClick={onReset}>
      Reset Form
    </Button>
  </div>
);

export default React.memo(TicketFormButtons);

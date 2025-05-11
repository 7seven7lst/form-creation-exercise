import React, { useMemo } from 'react';
import { UseFormReturn } from 'react-hook-form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormField } from '../FormField';
import { ITicketFormValues } from '../../../types/ticketFormTypes';

interface IUserPaymentSectionProps {
  form: UseFormReturn<ITicketFormValues>;
}

const UserPaymentSection = React.memo(({ form }: IUserPaymentSectionProps) => {
  const fieldConfigs = useMemo(
    () => [
      { fieldName: 'firstName', label: 'First Name', placeholder: 'Enter first name' },
      { fieldName: 'lastName', label: 'Last Name', placeholder: 'Enter last name' },
      { fieldName: 'address', label: 'Address', placeholder: 'Enter address' },
      {
        fieldName: 'cardNumber',
        label: 'Card Number',
        placeholder: 'Enter card number',
      },
      { fieldName: 'expiry', label: 'Expiry Date', placeholder: 'MM/YY' },
      { fieldName: 'cvv', label: 'CVV', placeholder: 'Enter CVV' },
    ],
    []
  );

  return (
    <section aria-labelledby="user-form-heading">
      <h2 id="user-form-heading" className="h4">
        Payment Information
      </h2>

      <Row className="g-3">
        <Col md={6}>
          <FormField {...fieldConfigs[0]} form={form} />
        </Col>
        <Col md={6}>
          <FormField {...fieldConfigs[1]} form={form} />
        </Col>
      </Row>

      <FormField className="mt-3" {...fieldConfigs[2]} form={form} />
      <FormField className="mt-3" {...fieldConfigs[3]} form={form} />

      <Row className="g-3 my-3">
        <Col md={6}>
          <FormField {...fieldConfigs[4]} form={form} />
        </Col>
        <Col md={6}>
          <FormField {...fieldConfigs[5]} form={form} />
        </Col>
      </Row>
    </section>
  );
});

UserPaymentSection.displayName = 'UserPaymentSection';

export default UserPaymentSection;

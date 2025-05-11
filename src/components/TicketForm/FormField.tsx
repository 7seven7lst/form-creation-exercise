import React from 'react';
import { UseFormReturn, Controller } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { ITicketFormValues } from '../../types/ticketFormTypes';

interface IFormFieldProps {
  fieldName: string;
  label: string;
  placeholder: string;
  type?: string;
  form: UseFormReturn<ITicketFormValues>;
  autoFocus?: boolean;
  description?: string;
  className?: string;
}

export const FormField: React.FC<IFormFieldProps> = ({
  fieldName,
  label,
  placeholder,
  type = 'text',
  form,
  autoFocus,
  description,
  className,
}) => {
  const { control } = form;

  return (
    <Form.Group className={className}>
      <Form.Label htmlFor={fieldName}>{label}</Form.Label>
      <Controller
        name={fieldName as keyof ITicketFormValues}
        control={control}
        render={({ field: { value, ...field }, fieldState: { error } }) => (
          <>
            <Form.Control
              {...field}
              value={value?.toString() ?? ''}
              id={fieldName}
              type={type}
              placeholder={placeholder}
              isInvalid={!!error}
              autoFocus={autoFocus}
            />
            <Form.Control.Feedback type="invalid">{error?.message}</Form.Control.Feedback>
          </>
        )}
      />
      {description && <Form.Text className="text-muted">{description}</Form.Text>}
    </Form.Group>
  );
};

export default React.memo(FormField);

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ITicketFormValues } from '../types/ticketFormTypes';
import TicketFormSchema from '../schema/TicketFormSchema';
import { IBandInfo } from '../types/band';

export const useTicketForm = (band: IBandInfo) => {
  const initialValues: ITicketFormValues = {
    firstName: '',
    lastName: '',
    address: '',
    cardNumber: '',
    tickets: Object.fromEntries(band.ticketTypes.map(t => [t.type, 0])),
    expiry: '',
    cvv: '',
  };

  const form = useForm<ITicketFormValues>({
    defaultValues: initialValues,
    resolver: zodResolver(TicketFormSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (values: ITicketFormValues) => {
    try {
      // API call or form submission logic
      alert('Form submitted!\n' + JSON.stringify(values));
      form.reset(initialValues); // Reset form after successful submission
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
  };
};

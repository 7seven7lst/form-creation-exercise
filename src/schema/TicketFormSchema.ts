// Zod schema for validation
import { z } from 'zod';

const nameRegex = /^[a-zA-Z '-]{2,}$/;
const cvvRegex = /^\d{3,4}$/;

function validateCreditCardNumber(cardNumber: string) {
  // Check the length of the card number
  const length = cardNumber.length;
  if (length < 13 || length > 19) return false;

  // Apply the Luhn algorithm
  let sum = 0;
  let shouldDouble = false;
  for (let i = length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i], 10);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }

  // Check if the sum is divisible by 10
  return sum % 10 === 0;
}

const TicketFormSchema = z.object({
  firstName: z.string().min(2).regex(nameRegex, 'Enter a valid name'),
  lastName: z.string().min(2).regex(nameRegex, 'Enter a valid name'),
  address: z.string().min(1, 'Address is required'),
  cardNumber: z.string().refine((val: string) => {
    const digitsOnly = val.replace(/\s/g, '');
    if (!/^\d+$/.test(digitsOnly)) {
      return false;
    }
    return validateCreditCardNumber(digitsOnly);
  }, 'Invalid card number'),
  expiry: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Format must be MM/YY')
    .refine(val => {
      const [month, year] = val.split('/');
      const expDate = new Date(Number(`20${year}`), Number(month) - 1);
      const now = new Date();
      return expDate > now;
    }, 'Card expired'),
  cvv: z.string().refine(val => cvvRegex.test(val), 'CVV must be 3 or 4 digits'),
  tickets: z.record(z.number().min(0)),
});

export default TicketFormSchema;

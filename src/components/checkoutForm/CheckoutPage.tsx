import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Define the form data type based on your Zod schema
type FormData = {
  nameOnCard: string;
  creditCardNumber: string;
  expMonth: string;
  cvv: string;
  expYear: string;
};

const formatCreditCardNumber = (value: string) => {
  const cleanValue = typeof value === 'string' ? value.replace(/\D/g, '') : '';
  const formattedValue = cleanValue.replace(/(\d{4})(?=\d)/g, '$1-');
  return formattedValue;
};

const CheckoutPage: React.FC = () => {
  const schema = z.object({
    nameOnCard: z.string().min(2, { message: 'Minimum 2 characters' }),
    creditCardNumber: z.string().min(19, { message: 'Invalid credit card number' }),
    expMonth: z.string().length(2, { message: 'Invalid expiration month' }),
    cvv: z.string().length(3, { message: 'Invalid CVV' }),
    expYear: z.string().length(4, { message: 'Invalid expiration year' }),
  });

  const { handleSubmit, control, formState: { errors }, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nameOnCard: '',
      creditCardNumber: '',
      expMonth: '',
      cvv: '',
      expYear: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div>
      {/* title */}
      <div>
        <h1>Payment</h1>
        <p>Accepted Cards</p>
        <div>
          <h1>Card1</h1>
          <h1>Card2</h1>
          <h1>Card3</h1>
          <h1>Card4</h1>
        </div>
      </div>
      {/* title */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="ncard">Name on Card</label>
          <Controller
            name="nameOnCard"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                id="ncard"
                value={field.value || ''}
                onChange={(e) => {
                  setValue('nameOnCard', e.target.value);
                }}
              />
            )}
          />
          <span>{errors.nameOnCard?.message}</span>
        </div>
        <div>
          <label htmlFor="cnumber">Credit card number</label>
          <Controller
            name="creditCardNumber"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                id="cnumber"
                value={field.value || ''}
                onChange={(e) => {
                  setValue('creditCardNumber', formatCreditCardNumber(e.target.value));
                }}
                maxLength={19}
              />
            )}
          />
          <span>{errors.creditCardNumber?.message}</span>
        </div>
        <div>
          <label htmlFor="expMonth">Exp Month</label>
          <Controller
            name="expMonth"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                id="expMonth"
                value={field.value || ''}
                onChange={(e) => {
                  setValue('expMonth', e.target.value);
                }}
              />
            )}
          />
          <span>{errors.expMonth?.message}</span>
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <Controller
            name="cvv"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                id="cvv"
                value={field.value || ''}
                onChange={(e) => {
                  setValue('cvv', e.target.value);
                }}
              />
            )}
          />
          <span>{errors.cvv?.message}</span>
        </div>
        <div>
          <label htmlFor="expYear">Exp Year</label>
          <Controller
            name="expYear"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                id="expYear"
                value={field.value || ''}
                onChange={(e) => {
                  setValue('expYear', e.target.value);
                }}
              />
            )}
          />
          <span>{errors.expYear?.message}</span>
        </div>
        <button type="submit">Continue to checkout</button>
      </form>
    </div>
  );
};

export default CheckoutPage;

import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SmileOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';
import { FormErrorMessage } from '../styledComponents/InputFields';
import masterCard from "../../../public/checkout/mastercard.png"
import visaCard from "../../../public/checkout/visa.png"
import discorverCard from "../../../public/checkout/discorver-card.png"
// import styled from 'styled-components';

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
  const [api, contextHolder] = notification.useNotification();

  const schema = z.object({
    nameOnCard: z.string().min(2, { message: 'Minimum 2 characters' }),
    creditCardNumber: z.string().min(19, { message: 'Invalid credit card number' }),
    expMonth: z.string().length(2, { message: 'Invalid expiration month' }),
    cvv: z.string().length(3, { message: 'Invalid CVV' }),
    expYear: z.string().length(4, { message: 'Invalid expiration year' }),
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<FormData>({
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
    console.log(data);
  };

  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'Checkout confirmation for card is done, thanks for choosing our company.',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };

  return (
    <div>
      {/* title */}
      <div>
        <h1>Payment</h1>
        <p>Accepted Cards</p>
        <div>
          <img src={masterCard} alt="masterCard" />
          <img src={visaCard} alt="visaCard" />
          <img src={discorverCard} alt="discorverCard" />
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
          <FormErrorMessage>{errors.nameOnCard?.message}</FormErrorMessage>
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
          <FormErrorMessage>{errors.creditCardNumber?.message}</FormErrorMessage>
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
          <FormErrorMessage>{errors.expMonth?.message}</FormErrorMessage>
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
          <FormErrorMessage>{errors.cvv?.message}</FormErrorMessage>
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
          <FormErrorMessage>{errors.expYear?.message}</FormErrorMessage>
        </div>
        {contextHolder}
        <Button type="primary" htmlType="submit" onClick={openNotification} disabled={!isValid}>
          Continue checkout
        </Button>
      </form>
    </div>
  );
};

export default CheckoutPage;

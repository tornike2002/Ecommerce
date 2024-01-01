import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SmileOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import { FormErrorMessage } from "../styledComponents/InputFields";
import masterCard from "../../assets/checkout/mastercard.png"
import visaCard from "../../assets/checkout/visa.png";
import discorverCard from "../../assets/checkout/discorver-card.png";
import { CheckoutIcon } from "../styledComponents/images";
import styled from "styled-components";

type FormData = {
  nameOnCard: string;
  creditCardNumber: string;
  expMonth: string;
  cvv: string;
  expYear: string;
};

const formatCreditCardNumber = (value: string) => {
  const cleanValue = typeof value === "string" ? value.replace(/\D/g, "") : "";
  const formattedValue = cleanValue.replace(/(\d{4})(?=\d)/g, "$1-");
  return formattedValue;
};

const CheckoutPage: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const schema = z.object({
    nameOnCard: z.string().min(2, { message: "Minimum 2 characters" }),
    creditCardNumber: z
      .string()
      .min(19, { message: "Invalid credit card number" }),
    expMonth: z.string().length(2, { message: "Invalid expiration month" }),
    cvv: z.string().length(3, { message: "Invalid CVV" }),
    expYear: z.string().length(4, { message: "Invalid expiration year" }),
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nameOnCard: "",
      creditCardNumber: "",
      expMonth: "",
      cvv: "",
      expYear: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const openNotification = () => {
    api.open({
      message: "Notification Title",
      description:
        "Checkout confirmation for card is done, thanks for choosing our company.",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  return (
    <CheckoutMainDiv>
      {/* title */}
      <CheckoutTitleWrapper>
        <h1>Payment</h1>
        <p>Accepted Cards</p>
        <div>
          <CheckoutIcon src={masterCard} alt="masterCard" />
          <CheckoutIcon src={visaCard} alt="visaCard" />
          <CheckoutIcon src={discorverCard} alt="discorverCard" />
        </div>
      </CheckoutTitleWrapper>
      {/* title */}
      <CheckoutForm onSubmit={handleSubmit(onSubmit)}>
        <CheckoutInputWrapper>
          <label htmlFor="ncard">Name on Card</label>
          <Controller
            name="nameOnCard"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                id="ncard"
                value={field.value || ""}
                onChange={(e) => {
                  setValue("nameOnCard", e.target.value);
                }}
              />
            )}
          />
          <FormErrorMessage>{errors.nameOnCard?.message}</FormErrorMessage>
        </CheckoutInputWrapper>
        <CheckoutInputWrapper>
          <label htmlFor="cnumber">Credit card number</label>
          <Controller
            name="creditCardNumber"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                id="cnumber"
                value={field.value || ""}
                onChange={(e) => {
                  setValue(
                    "creditCardNumber",
                    formatCreditCardNumber(e.target.value)
                  );
                }}
                maxLength={19}
              />
            )}
          />
          <FormErrorMessage>
            {errors.creditCardNumber?.message}
          </FormErrorMessage>
        </CheckoutInputWrapper>
        <CheckoutInputWrapper>
          <label htmlFor="expMonth">Exp Month</label>
          <Controller
            name="expMonth"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                id="expMonth"
                value={field.value || ""}
                onChange={(e) => {
                  setValue("expMonth", e.target.value);
                }}
              />
            )}
          />
          <FormErrorMessage>{errors.expMonth?.message}</FormErrorMessage>
        </CheckoutInputWrapper>
        <CheckoutInputWrapper>
          <label htmlFor="cvv">CVV</label>
          <Controller
            name="cvv"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                id="cvv"
                value={field.value || ""}
                onChange={(e) => {
                  setValue("cvv", e.target.value);
                }}
              />
            )}
          />
          <FormErrorMessage>{errors.cvv?.message}</FormErrorMessage>
        </CheckoutInputWrapper>
        <CheckoutInputWrapper>
          <label htmlFor="expYear">Exp Year</label>
          <Controller
            name="expYear"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                id="expYear"
                value={field.value || ""}
                onChange={(e) => {
                  setValue("expYear", e.target.value);
                }}
              />
            )}
          />
          <FormErrorMessage>{errors.expYear?.message}</FormErrorMessage>
        </CheckoutInputWrapper>
        {contextHolder}
        <Button
          type="primary"
          htmlType="submit"
          onClick={openNotification}
          disabled={!isValid}
        >
          Continue checkout
        </Button>
      </CheckoutForm>
    </CheckoutMainDiv>
  );
};

const CheckoutMainDiv = styled.div`
  background-color: #f2f2f2;
  padding: 40px 40px 40px 50px;
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 568px){
    padding: 25px 25px 25px 20px;
    margin: 10px
  }
`;
const CheckoutTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  & h1 {
    font-size: 30px;
    font-weight: 300;
    line-height: 1.5;
  }

  & p {
    font-size: 14px;
    font-weight: 500;
  }
  & div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 15px;
  }
`;

// inputs
const CheckoutInputWrapper = styled.div`
width: 100%;
max-width: 100%;
  & label {
    font-size: 16px;
    font-weight: 300;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
  }
  & input {
    font-family: "Roboto", sans-serif;
    padding: 7px 45px;
    font-size: 15px;
    font-weight: 300;
    max-width: 100%;
  }
`;
const CheckoutForm = styled.form`
  & button {
    margin-top: 15px;
    background-color: black;
    border-radius: 5px;
  }
  & button:disabled {
    background-color: gray;
    color: black;
  }
`;
export default CheckoutPage;

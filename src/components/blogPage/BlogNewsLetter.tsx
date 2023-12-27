import React, { useState } from "react";
import styled from "styled-components";
import { Divider, message, Button } from "antd";

const BlogNewsLetter: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [blogEmail, setBlogEmail] = useState("");

  const blogEmailValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlogEmail(event.target.value);
  };

  const success = () => {
    messageApi
      .open({
        type: 'loading',
        content: 'Subscribing to News',
        duration: 2.5,
      })
      .then(() => message.success('Subscribed Successfully', 2.5))
      .then(() => message.info('Subscribed Successfully', 2.5));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    success();
    setBlogEmail("")
  };

  const isEmailValid = (email: string): boolean => {
    return email.includes('@');
  };

  return (
    <BlogNewsLetterBackground>
      <BlogTitleWrapper>
        <h1>Newsletter</h1>
        <Divider />
      </BlogTitleWrapper>
      <BlogNewsForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Email..."
          value={blogEmail}
          onChange={blogEmailValue}
        />
        {contextHolder}
        <Button htmlType="submit" disabled={!isEmailValid(blogEmail)}>
          Subscribe
        </Button>
      </BlogNewsForm>
    </BlogNewsLetterBackground>
  );
};

export default BlogNewsLetter;

const BlogNewsLetterBackground = styled.div`
margin-top: 20px;
  background-color: #fbf9ff;
  padding: 20px 20px;
  margin-left: 10px;
`;

const BlogTitleWrapper = styled.div`
  text-align: center;
  padding-bottom: 10px;
  color: #2d2d2d;
  font-family: "Playfair Display", serif;

  & h1 {
    font-weight: 500;
    font-size: 20px;
  }
`;

const BlogNewsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & input {
    padding: 10px 40px;
    color: #ccc;
  }
`;

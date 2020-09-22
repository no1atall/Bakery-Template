import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import tw from "tailwind.macro";

const MyForm = styled.form`
  ${tw`absolute flex justify-center flex-col mx-2 sm:mx-auto px-4  lg:px-24
    max-w-screen-sm lg:max-w-screen-md mb-24 border-solid border-2 rounded border-gray-300 shadow-lg bg-white opacity-75`}
`;

const Heading = styled.h1`
  ${tw`text-center my-6  text-xl md:text-3xl md:text-5xl text-gray-900`}
  p {
    ${tw`text-2xl md:text-4xl   md:mt-2`}
  }

  div {
    ${tw`text-xl md:text-5xl text-gray-900 hover:text-yellow-600 `}
  }
`;

const Input = styled.input`
  ${tw`text-xl lg:text-3xl mb-4 rounded-md border`}
`;

const TextArea = styled.textarea`
  ${tw`text-xl lg:text-2xl rounded-md border h-32 md:h-48`}
`;

const MyButton = styled.button`
  ${tw`px-8 py-4 mt-12 text-lg mb-10 text-white text-xl  md:text-3xl no-underline border rounded-full hover:bg-yellow-600`}
  background-color: #954535;
`;

const KEY = process.env.REACT_APP_EMAILJS_API_KEY;

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    setDisabled({
      disabled: true,
    });

    emailjs.sendForm("gmail", "template_ykr6vvc", e.target, KEY).then(
      (result) => {
        console.log(result.text);
        alert("Your Email has been sent. I will get back to you shortly.");
      },
      (error) => {
        console.log(error.text);
        alert(
          "Your Email failed to send. Please Check your infomation and try again."
        );
      }
    );
  };

  return (
    <MyForm onSubmit={handleSubmit}>
      <Heading>
        Email Us
        <p>or</p>
        <div>Come Visit!</div>
      </Heading>
      <Input
        name="name"
        id="name"
        type="text"
        placeholder="Name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <Input
        name="email"
        id="email"
        type="email"
        placeholder="Your Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <Input
        name="subject"
        id="subject"
        type="text"
        placeholder="Subject"
        value={subject}
        required
        onChange={(e) => setSubject(e.target.value)}
      ></Input>
      <TextArea
        name="message"
        id="message"
        type="text"
        placeholder="Message"
        value={message}
        required
        onChange={(e) => setMessage(e.target.value)}
      />
      <MyButton type="submit" value="send" disabled={disabled}>
        Get In Touch
      </MyButton>
    </MyForm>
  );
};

export default Form;

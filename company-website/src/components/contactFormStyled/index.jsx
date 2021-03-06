import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled, { css } from "styled-components";
import { theme } from "../../theme";
import ContactInfoPanel from "../contactInfoPanel";
const OuterWrapper = styled.div`
  width: 80%;
  bottom: 0;
  //height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  //align-items: center;
  padding: 100px 0;
  //padding: y x;
  //padding: top right bot left ;
  //padding: xy;
  //padding: top x bot;
  //padding: top x bot;
  @media screen and (max-width: 900px) {
    width: 95%;
    flex-direction: column;
  }
`;

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 55%;
  //height: 100vh;
  padding: 0 0 0 0;
  resize: none;
  flex-flow: column nowrap;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
  resize: none;
`;
const StyledForm = styled.form`
  width: 100%;
  //max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  //height: 80%;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 900px) {
    padding: 40px;
  }
`;
const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  max-height: 200px;
  resize: none;
  ${sharedStyles}
`;
const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledButton = styled.button`
  display: block;
  background-color: ${theme.logo_darkest};
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;
const StyledError = styled.div`
  color: #c21d1dc1;
  font-weight: 800;
  margin: 0 0 40px 0;
`;
const mappingErrState = {
  company: "Företag saknas",
  name: "Kontaktperson saknas",
  email: "Email har fel format/saknas",
  tel: "Tel.nr saknas",
  service: "Typ av tjänst saknas",
  note: "",
};
const initalState = {
  company: "",
  name: "",
  email: "",
  tel: "",
  service: "",
  note: "",
};
//Formik YUP
export default function ContactFormStyled() {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
    console.log(state);
    for (let key in state) {
      if (`${key}` === `note`) {
      } else if (state[key] === "") {
        setError(` ${mappingErrState[key]}`);
        return;
      }
    }
    setError("");
    // const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // const test = regex.test(state.email);
    // console.log(test);

    //Does work
    sendEmail(e);
    console.log("Form Succeeded and sent");
    for (let key in state) {
      setState((prev) => ({ ...prev, [key]: "" }));
    }
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3wmszwm",
        "template_dq2eysn",
        e.target,
        "user_yutbclROayrjPXZC0f7dC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <OuterWrapper>
      <ContactInfoPanel></ContactInfoPanel>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit} id="contact-form">
          <h2>Kontakta oss via mail</h2>
          <label htmlFor="company">Företag</label>

          <StyledInput
            type="text"
            name="company"
            id="company"
            value={state.company}
            onChange={handleInput}
          />

          <label htmlFor="name">Namn på Kontaktperson</label>
          <StyledInput
            type="text"
            name="name"
            id="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            id="email"
            value={state.email}
            onChange={handleInput}
          />
          <label htmlFor="tel">Tel.nr</label>

          <StyledInput
            type="text"
            name="tel"
            id="tel"
            value={state.tel}
            onChange={handleInput}
          />
          <label htmlFor="service">Typ av tjänst</label>

          <StyledInput
            type="text"
            name="service"
            id="service"
            value={state.service}
            onChange={handleInput}
          />
          <label htmlFor="note">Övrig information/frågor</label>
          <StyledTextArea
            name="note"
            id="note"
            value={state.note}
            onChange={handleInput}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type="submit">Skicka</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </OuterWrapper>
  );
}

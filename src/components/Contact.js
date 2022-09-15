//Resize the browser window to see the effect. When the screen is less than 768px wide, make the two columns stack on top of each other instead of next to each other. With first name last name email and text area.

import React from "react"
import styled from "styled-components"
import { Button } from "./Button"

const Input = styled.input`
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
  outline: none;
  width: 500px;
  border: none;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid #ccc;

  &::placeholder {
    color: #b9b9b9;
  }
`
// const Label = styled.label`
//   margin-bottom: 0.5rem;
//   font-size: 14px;
//   color: #242424;
// `

const TextArea = styled.textarea`
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
  outline: none;
  width: 100%;
  border: none;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid #ccc;

  &::placeholder {
    color: #b9b9b9;
  }

  @media screen and (max-width: 768px) {
    height: 100px;
  }
`

const SignUpContainer = styled.div`
  background: #f9f9f9;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #000;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem;
  }
`

const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 768px;
  padding: 1rem;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
  }

  p {
    text-align: center;
    margin-bottom: 2rem;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
  }

  form {
    z-index: 10;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem 1rem;
  }
`

const SignUpWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`

const ContactForm = () => {
  return (
    <SignUpContainer>
      <SignUpContent>
        <h1>
          contact me for more information about my work and how we can work
          together.
        </h1>
        <p>You can unsubscribe at any time.</p>
        <form action="#">
          <SignUpWrap>
            <Input type="text" placeholder="First Name" />
            <Input type="text" id="last-name" placeholder="Last Name" />
            <Input type="email" id="email" placeholder="Email" />
            <TextArea
              name="text-area"
              id="text-area"
              cols="30"
              rows="10"
              placeholder="Text Area"
            ></TextArea>
            <Button
              as="button"
              type="submit"
              primary="true"
              round="true"
              css={`
                height: 48px;
              `}
            >
              Join Now
            </Button>
          </SignUpWrap>
        </form>
      </SignUpContent>
    </SignUpContainer>
  )
}

export default ContactForm

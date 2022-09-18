import styled from "styled-components"


export const Input = styled.input`
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
  outline: none;
  width: 700px;
  border: none;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid #ccc;

  &::placeholder {
    color: #b9b9b9;
  }

    @media screen and (max-width: 768px) {
    width: 100%;
    }
`

export const TextArea = styled.textarea`
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

export const ContactContainer = styled.div`
  background: #f9f9f9;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #000;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem;
  }
`

export const ContactContent = styled.div`
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
    color: #252069;
  }

  p {
    text-align: center;
    margin-bottom: 2rem;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: #251061;
  }

  form {
    z-index: 10;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem 1rem;
  }
`

export const ContactWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;

    @media screen and (max-width: 768px) {
    padding: 0 1rem;
    }
`
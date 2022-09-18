//Resize the browser window to see the effect. When the screen is less than 768px wide, make the two columns stack on top of each other instead of next to each other. With first name last name email and text area.

import React from "react"
import {
  Input,
  TextArea,
  ContactContainer,
  ContactContent,
  ContactWrap,
} from "../styles/contact_page_styles/ContactStyles"
import { Button } from "../Button"


const ContactForm = () => {
  return (
    <ContactContainer>
      <ContactContent>
        <h1>
          Contact me for more information about my work and how we can work
          together.
        </h1>
        <p>You can unsubscribe at any time.</p>
        <form action="#">
          <ContactWrap>
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
          </ContactWrap>
        </form>
      </ContactContent>
    </ContactContainer>
  )
}

export default ContactForm

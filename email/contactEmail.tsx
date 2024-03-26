import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Heading,
} from "@react-email/components";
import * as React from "react";
import { Tailwind } from "@react-email/tailwind";

type ContactEmail = {
  message: string;
  senderEmail: string;
}

export default function ContactEmail({message, senderEmail}:ContactEmail) {
  return (
  <Html>
    <Head />
    <Preview> New Message from Portfolio </Preview>
    <Tailwind> 
      <Body className="bg-sky-200 text-black">
      <Container>
        <Section className=" bg-gradient-to-tr from-purple-300 to-sky-300">
          <Heading className=" leading-tight">Recived a message from Portfolio</Heading>
          <Text>{message}</Text>
          <Hr />
          <Text>Email from : {senderEmail} </Text>
        </Section>
      </Container>
      </Body>
    </Tailwind>
  </Html>
  )
}

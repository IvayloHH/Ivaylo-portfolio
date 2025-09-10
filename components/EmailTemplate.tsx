import { Html, Body, Container, Text } from '@react-email/components';

declare type EmailTemplateProps = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  country: string;
  dialCode: string;
  option: string;
  phone: string;
};

export function EmailTemplate({
  firstName,
  lastName,
  email,
  message,
  country,
  dialCode,
  option,
  phone,
}: EmailTemplateProps) {
  return (
    <Html>
      <Body>
        <Container>
          Hi Ivaylo, You just received a new message from the portfolio.
          <Text>
            <strong>Name:</strong> {firstName} {lastName}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Phone:</strong> {phone}
          </Text>
          <Text>
            <strong>Message:</strong> {message}
          </Text>
          <Text>
            <strong>country:</strong> {country}
          </Text>
          <Text>
            <strong>dialCode:</strong> {dialCode}
          </Text>
          <Text>
            <strong>option:</strong> {option}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

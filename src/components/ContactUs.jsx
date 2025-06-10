import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

const Section = styled.section`
  background-color: #000000;
  min-height: 50vh;
  // top: 100px;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(30, 30, 30, 0.3) 0%, transparent 70%);
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 60px;
  letter-spacing: -0.02em;
  animation: ${fadeInUp} 0.8s ease-out;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 40px;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 40px;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

const ContactText = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
  font-weight: 500;
  letter-spacing: 0.02em;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  margin-bottom: 50px;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 40px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 20px 25px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  box-sizing: border-box;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
    transition: all 0.3s ease;
  }
  
  &:focus {
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    animation: ${pulse} 2s infinite;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
      transform: translateY(-2px);
    }
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-1px);
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
  margin: 20px 0;
  
  @media (max-width: 768px) {
    text-align: left;
    justify-content: flex-start;
  }
`;

const CheckboxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const CustomCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  
  &::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    color: white;
    font-size: 12px;
    font-weight: bold;
    transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  .hidden-checkbox:checked + & {
    border-color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.1);
    
    &::after {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  
  .hidden-checkbox:focus + & {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.05);
  }
`;

const CheckboxLabel = styled.label`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  cursor: pointer;
  margin-left: 15px;
  transition: color 0.3s ease;
  
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SubmitButton = styled.button`
  padding: 18px 50px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-width: 150px;
  align-self: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    letter-spacing: 0.02em;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

const SuccessMessage = styled.div`
  color: #10b981;
  font-size: 1rem;
  margin-top: 20px;
  opacity: ${props => props.show ? 1 : 0};
  transform: translateY(${props => props.show ? 0 : 20}px);
  transition: all 0.3s ease;
`;

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !agreed) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Save to localStorage
      const contactEmails = JSON.parse(localStorage.getItem('contactEmails') || '[]');
      if (!contactEmails.includes(email)) {
        contactEmails.push({
          email,
          timestamp: new Date().toISOString(),
          agreed
        });
        localStorage.setItem('contactEmails', JSON.stringify(contactEmails));
      }

      setIsSubmitting(false);
      setShowSuccess(true);
      setEmail('');
      setAgreed(false);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <Section>
      <Container>
        <Title>Contact us</Title>

        <ContactInfo>
          <ContactText>hello@btq360.com / +358 44 537 9042</ContactText>
        </ContactInfo>

        <Description>
          or leave your email address and we'll reach out within 24 hours to discuss your vision.
        </Description>

        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <EmailInput
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputContainer>

          <CheckboxContainer>
            <CheckboxWrapper>
              <HiddenCheckbox
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
                className="hidden-checkbox"
              />
              <CustomCheckbox />
              <CheckboxLabel>
                I agree to be contacted about boutique360 services
              </CheckboxLabel>
            </CheckboxWrapper>
          </CheckboxContainer>

          <SubmitButton
            type="submit"
            disabled={!email || !agreed || isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </SubmitButton>

          <SuccessMessage show={showSuccess}>
            Thank you! We'll reach out within 24 hours.
          </SuccessMessage>
        </Form>
      </Container>
    </Section>
  );
};

export default ContactUs; 
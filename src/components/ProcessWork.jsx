import React from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  background-color: #0a0a0a;
  padding: 100px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: white;
  text-align: center;
  font-weight: 400;
  margin-bottom: 80px;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 60px;
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 60px;
  }
`;

const ProcessCard = styled.div`
  background: rgba(15, 15, 15, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 40px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.005) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-8px);
    border-color: #fbbf24;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    
    &::before {
      opacity: 1;
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(245, 158, 11, 0.02) 100%);
    }
    
    .process-number {
      transform: scale(1.1);
      color: #fbbf24;
    }
    
    .process-title {
      color: #fbbf24;
    }
    
    .process-description {
      color: rgba(255, 255, 255, 0.95);
    }
  }
`;

const ProcessNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 20px;
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
`;

const ProcessTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProcessDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const BottomSection = styled.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`;

const DeliveryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
  
  .highlight {
    color: #fbbf24;
  }
`;

const DeliveryDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const processSteps = [
    {
        number: '01',
        title: 'Consultation',
        description: "We begin by understanding your property's unique features and identifying which viewpoints and lighting scenarios will showcase your space best.",
        isHighlight: false
    },
    {
        number: '02',
        title: 'Capture',
        description: 'Our specialists visit your location in person to capture high-resolution 360° images or videos using professional equipment, ensuring every detail is preserved.',
        isHighlight: false
    },
    {
        number: '03',
        title: 'Enhancement',
        description: 'We process the materials and build interactive elements, optimize for all devices, and ensure seamless navigation between viewpoints.',
        isHighlight: false
    },
    {
        number: '04',
        title: 'Live',
        description: 'We deliver the final product with simple implementation instructions and full technical support for integration into your booking system, website, and marketing materials.',
        isHighlight: false
    }
];

const ProcessWork = () => {
    return (
        <Section>
            <Container>
                <Title>Our process</Title>

                <ProcessGrid>
                    {processSteps.map((step, index) => (
                        <ProcessCard key={index}>
                            <ProcessNumber className="process-number">
                                {step.number}
                            </ProcessNumber>
                            <ProcessTitle className="process-title">
                                {step.title}
                            </ProcessTitle>
                            <ProcessDescription className="process-description">
                                {step.description}
                            </ProcessDescription>
                        </ProcessCard>
                    ))}
                </ProcessGrid>

                <BottomSection>
                    <DeliveryTitle>
                        <span className="highlight">14-day delivery, zero hassle.</span>
                    </DeliveryTitle>
                    <DeliveryDescription>
                        Our turnkey solution includes technical support and customizations – everything you need to showcase your property professionally and in alignment with your brand. From capture to driving more business in less than two weeks.
                    </DeliveryDescription>
                </BottomSection>
            </Container>
        </Section>
    );
};

export default ProcessWork; 
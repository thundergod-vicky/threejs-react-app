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
  max-width: 1400px;
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

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 60px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 30px;
    max-width: 500px;
    margin: 0 auto 60px auto;
  }
`;

const PackageCard = styled.div`
  background: rgba(15, 15, 15, 0.8);
  border: 2px solid ${props => props.isHighlighted ? '#fbbf24' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 16px;
  padding: 40px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: fit-content;
  
  ${props => props.isHighlighted && `
    transform: scale(1.05);
    box-shadow: 0 25px 50px rgba(251, 191, 36, 0.2);
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.isHighlighted
        ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.05) 0%, rgba(251, 191, 36, 0.02) 100%)'
        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.005) 100%)'
    };
    opacity: ${props => props.isHighlighted ? 1 : 0};
    transition: opacity 0.4s ease;
    z-index: 1;
  }
  
  &:hover {
    transform: ${props => props.isHighlighted ? 'scale(1.08)' : 'translateY(-10px) scale(1.02)'};
    border-color: #fbbf24;
    box-shadow: 0 25px 50px rgba(251, 191, 36, 0.15);
    
    &::before {
      opacity: 1;
      background: linear-gradient(135deg, rgba(251, 191, 36, 0.05) 0%, rgba(251, 191, 36, 0.02) 100%);
    }
  }
`;

const PackageTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const PricingSection = styled.div`
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
`;

const OriginalPrice = styled.div`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: line-through;
  margin-bottom: 8px;
`;

const CurrentPrice = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #fbbf24;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CustomPricing = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #fbbf24;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  position: relative;
  z-index: 2;
`;

const FeatureItem = styled.li`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 16px;
  position: relative;
  padding-left: 20px;
  line-height: 1.4;
  
  &::before {
    content: '•';
    color: #10b981;
    position: absolute;
    left: 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const IdealForSection = styled.div`
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
`;

const IdealForTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #fbbf24;
  margin-bottom: 10px;
`;

const IdealForText = styled.div`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
`;

const ActionButton = styled.button`
  width: 100%;
  background: ${props => props.variant === 'primary' ? '#fbbf24' : 'rgba(255, 255, 255, 0.1)'};
  border: 1px solid ${props => props.variant === 'primary' ? '#fbbf24' : 'rgba(255, 255, 255, 0.2)'};
  color: ${props => props.variant === 'primary' ? '#000' : 'white'};
  padding: 16px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: ${props => props.variant === 'primary' ? '#f59e0b' : 'rgba(255, 255, 255, 0.2)'};
    border-color: ${props => props.variant === 'primary' ? '#f59e0b' : 'rgba(255, 255, 255, 0.3)'};
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`;

const DisclaimerText = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  margin: 0;
  max-width: 800px;
  margin: 0 auto;
`;

const packages = [
    {
        title: '360° Image Tour',
        originalPrice: '€1,200',
        currentPrice: '€840',
        features: [
            '1-3 viewpoints',
            'Up to four lighting scenarios',
            'Basic website integration',
            'Basic branding elements',
            '3-month hosting'
        ],
        idealFor: 'small spaces, boutique hoteliers, airbnb hosts, real estate',
        buttonText: 'See example',
        buttonVariant: 'secondary',
        isHighlighted: false
    },
    {
        title: '360° Video Tour',
        originalPrice: '€2,800',
        currentPrice: '€1,960',
        features: [
            '3-5 viewpoints',
            'Up to 4 setups each',
            'Full integration support',
            'Custom branding elements',
            '6-month hosting'
        ],
        idealFor: 'large spaces, event venues, luxury properties, amenities, atmosphere',
        buttonText: 'See example',
        buttonVariant: 'primary',
        isHighlighted: true
    },
    {
        title: '360° Custom Tour',
        customPricing: 'Custom pricing',
        features: [
            'Tailored and unique experience',
            'Full integration support',
            'Custom branding elements',
            'Custom interactive elements',
            'Custom hosting options'
        ],
        idealFor: 'any business looking to grow and differentiate',
        buttonText: 'Contact us',
        buttonVariant: 'secondary',
        isHighlighted: false
    }
];

const VirtualTourPackages = () => {
    return (
        <Section>
            <Container>
                <Title>360° Virtual Tour packages</Title>

                <PackagesGrid>
                    {packages.map((pkg, index) => (
                        <PackageCard key={index} isHighlighted={pkg.isHighlighted}>
                            <PackageTitle>{pkg.title}</PackageTitle>

                            <PricingSection>
                                {pkg.originalPrice && (
                                    <OriginalPrice>{pkg.originalPrice}</OriginalPrice>
                                )}
                                {pkg.currentPrice ? (
                                    <CurrentPrice>{pkg.currentPrice}</CurrentPrice>
                                ) : (
                                    <CustomPricing>{pkg.customPricing}</CustomPricing>
                                )}
                            </PricingSection>

                            <FeaturesList>
                                {pkg.features.map((feature, featureIndex) => (
                                    <FeatureItem key={featureIndex}>{feature}</FeatureItem>
                                ))}
                            </FeaturesList>

                            <IdealForSection>
                                <IdealForTitle>Ideal for:</IdealForTitle>
                                <IdealForText>{pkg.idealFor}</IdealForText>
                            </IdealForSection>

                            <ActionButton variant={pkg.buttonVariant}>
                                {pkg.buttonText}
                            </ActionButton>
                        </PackageCard>
                    ))}
                </PackagesGrid>

                <DisclaimerText>
                    All prices shown are excluding VAT and travel expenses. 30% off is valid until 30th of June 2025
                </DisclaimerText>
            </Container>
        </Section>
    );
};

export default VirtualTourPackages; 
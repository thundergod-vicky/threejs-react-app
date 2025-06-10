import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const Section = styled.section`
  background-color: #0a0a0a;
  padding: 80px 0;
  color: white;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: white;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1200px) {
    padding: 0 40px;
  }
`;

const Card = styled(motion.div)`
  background: ${props => props.expanded ? (props.bgColor?.expanded || 'transparent') : (props.bgColor?.collapsed || 'transparent')};
  border: 1px solid ${props => props.expanded ? (props.bgColor?.borderExpanded || 'rgba(255, 255, 255, 0.1)') : (props.bgColor?.borderCollapsed || 'rgba(255, 255, 255, 0.1)')};
  border-radius: 15px;
  width: 320px;
  min-height: ${props => props.expanded ? '400px' : '280px'};
  padding: 30px;
  display: flex;
  flex-direction: column;
  perspective: 1000px;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(184, 134, 11, 0.5);
    transform: translateY(-5px);
  }
`;

const CardInner = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${props => props.expanded ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

const CardFront = styled.div`
  position: ${props => props.expanded ? 'absolute' : 'relative'};
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  opacity: ${props => props.expanded ? 0 : 1};
  transform: ${props => props.expanded ? 'scale(0.8)' : 'scale(1)'};
  transition: all 0.4s ease;
`;

const CardBack = styled.div`
  position: ${props => props.expanded ? 'relative' : 'absolute'};
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  opacity: ${props => props.expanded ? 1 : 0};
  transform: ${props => props.expanded ? 'rotateY(180deg) scale(1)' : 'rotateY(180deg) scale(0.8)'};
  transition: all 0.4s ease;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 25px;
`;

const IconBox = styled.div`
  background: transparent;
  border: 1px solid ${props => props.themeColor || '#b8860b'};
  border-radius: 15px;
  padding: 25px;
  display: ${props => props.expanded ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
`;

const Icon = styled.i`
  font-size: 3rem;
  color: ${props => props.themeColor || '#b8860b'};
`;

const ToggleButton = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 2px solid ${props => props.themeColor || '#b8860b'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: ${props => props.themeColor ? `${props.themeColor}1a` : 'rgba(184, 134, 11, 0.1)'};
    transform: scale(1.1);
  }
`;

const ToggleIcon = styled(motion.span)`
  color: ${props => props.themeColor || '#b8860b'};
  font-size: 1.8rem;
  font-weight: bold;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-size: 2.2rem;
  margin-bottom: ${props => props.expanded ? '25px' : '0'};
  color: white;
  font-weight: 600;
  margin-top: ${props => props.expanded ? '0' : 'auto'};
`;

const Description = styled(motion.p)`
  color: #ccc;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-top: 25px;
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 60px;
  color: #999;
  font-size: 1.2rem;
  padding: 0 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const useCases = [
  {
    id: 1,
    icon: "bi bi-building",
    title: "Hospitality",
    description: "Don't let your guests do their research on TripAdvisor or Booking.com. 360° tours capture attention and differentiate, leading to more direct bookings and fewer price-based decisions.",
    bgColor: {
      expanded: 'rgba(255, 165, 0, 0.15)',
      collapsed: 'rgba(255, 165, 0, 0.05)',
      borderExpanded: '#ff8c00',
      borderCollapsed: 'rgba(255, 165, 0, 0.3)'
    }
  },
  {
    id: 2,
    icon: "bi bi-calendar-event",
    title: "Event Venues",
    description: "360° tours showcase your space's versatility with different layouts and lighting, generating more qualified inquiries by helping planners visualize possibilities before contacting you.",
    bgColor: {
      expanded: 'rgba(34, 139, 34, 0.15)',
      collapsed: 'rgba(34, 139, 34, 0.05)',
      borderExpanded: '#32cd32',
      borderCollapsed: 'rgba(34, 139, 34, 0.3)'
    }
  },
  {
    id: 3,
    icon: "bi bi-house-door",
    title: "Real Estate",
    description: "Give potential buyers a realistic view of properties, saving time on showings and attracting serious buyers who have already experienced the space virtually.",
    bgColor: {
      expanded: 'rgba(220, 20, 60, 0.15)',
      collapsed: 'rgba(220, 20, 60, 0.05)',
      borderExpanded: '#dc143c',
      borderCollapsed: 'rgba(220, 20, 60, 0.3)'
    }
  },
  {
    id: 4,
    icon: "bi bi-shop",
    title: "Airbnb Hosts",
    description: "Stand out in the marketplace with virtual tours that give guests confidence in their booking decisions and reduce cancellations due to unmet expectations.",
    bgColor: {
      expanded: 'rgba(138, 43, 226, 0.15)',
      collapsed: 'rgba(138, 43, 226, 0.05)',
      borderExpanded: '#9932cc',
      borderCollapsed: 'rgba(138, 43, 226, 0.3)'
    }
  }
];

const UseCases = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <Section>
      <Title>360° Use Cases</Title>
      <CardsContainer>
        {useCases.map((useCase) => {
          const isExpanded = expandedId === useCase.id;
          return (
            <Card
              key={useCase.id}
              layout
              expanded={isExpanded}
              bgColor={useCase.bgColor}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: useCase.id * 0.1
              }}
            >
              <CardInner expanded={isExpanded}>
                <CardFront expanded={isExpanded}>
                  <IconContainer>
                    <IconBox expanded={isExpanded} themeColor={useCase.bgColor?.borderExpanded}>
                      <Icon className={useCase.icon} themeColor={useCase.bgColor?.borderExpanded} />
                    </IconBox>
                    <ToggleButton
                      onClick={() => setExpandedId(isExpanded ? null : useCase.id)}
                      themeColor={useCase.bgColor?.borderExpanded}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ToggleIcon
                        themeColor={useCase.bgColor?.borderExpanded}
                        animate={{
                          rotate: isExpanded ? 180 : 0,
                          scale: isExpanded ? 1.2 : 1
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {isExpanded ? '×' : '+'}
                      </ToggleIcon>
                    </ToggleButton>
                  </IconContainer>
                  <CardTitle expanded={isExpanded}>{useCase.title}</CardTitle>
                </CardFront>

                <CardBack expanded={isExpanded}>
                  <IconContainer>
                    <div></div>
                    <ToggleButton
                      onClick={() => setExpandedId(isExpanded ? null : useCase.id)}
                      themeColor={useCase.bgColor?.borderExpanded}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ToggleIcon
                        themeColor={useCase.bgColor?.borderExpanded}
                        animate={{
                          rotate: isExpanded ? 180 : 0,
                          scale: isExpanded ? 1.2 : 1
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {isExpanded ? '×' : '+'}
                      </ToggleIcon>
                    </ToggleButton>
                  </IconContainer>
                  <CardTitle expanded={isExpanded}>{useCase.title}</CardTitle>
                  <Description
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {useCase.description}
                  </Description>
                </CardBack>
              </CardInner>
            </Card>
          );
        })}
      </CardsContainer>
      <Footer>
        <p>And more... From restaurants and yoga studios to coworking spaces and boutique shops – any space with real character can benefit from 360° solutions.</p>
      </Footer>
    </Section>
  );
};

export default UseCases;

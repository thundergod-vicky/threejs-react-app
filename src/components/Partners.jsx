import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const scrollLeft = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Section = styled.section`
  background-color: #0a0a0a;
  padding: 80px 0;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(10, 10, 10, 0.9) 0%,
      rgba(20, 20, 20, 0.8) 50%,
      rgba(10, 10, 10, 0.9) 100%
    );
    z-index: 1;
  }
`;

const Title = styled.h2`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: white;
  font-weight: 600;
  position: relative;
  z-index: 2;
`;

const ScrollContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 2;
`;

const LogosWrapper = styled.div`
  display: flex;
  animation: ${scrollLeft} 25s linear infinite;
  gap: 60px;
  align-items: center;
  white-space: nowrap;
  width: fit-content;
`;

const LogoItem = styled.div`
  flex-shrink: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  padding: 0 20px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const LogoImage = styled.img`
  max-height: 60px;
  max-width: 160px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: brightness(0.8) contrast(1.2);
  transition: all 0.3s ease;
  
  &:hover {
    filter: brightness(1) contrast(1.3);
  }
`;

const Partners = () => {
    const partners = [
        { name: 'Tiger Hotel', url: 'https://picsum.photos/200/80?random=1' },
        { name: 'Lion Suites', url: 'https://picsum.photos/200/80?random=2' },
        { name: 'Eagle Resort', url: 'https://picsum.photos/200/80?random=3' },
        { name: 'Dolphin Stays', url: 'https://picsum.photos/200/80?random=4' },
        { name: 'Wolf Lodge', url: 'https://picsum.photos/200/80?random=5' },
        { name: 'Bear Hotels', url: 'https://picsum.photos/200/80?random=6' },
        { name: 'Fox Inns', url: 'https://picsum.photos/200/80?random=7' },
        { name: 'Owl Resorts', url: 'https://picsum.photos/200/80?random=8' },
    ];

    // Triple the partners array to ensure seamless infinite loop and fill the screen
    const triplePartners = [...partners, ...partners, ...partners];

    return (
        <Section>
            <Title>Trusted by</Title>
            <ScrollContainer>
                <LogosWrapper>
                    {triplePartners.map((partner, index) => (
                        <LogoItem key={`${partner.name}-${index}`}>
                            <LogoImage
                                src={partner.url}
                                alt={partner.name}
                                loading="lazy"
                            />
                        </LogoItem>
                    ))}
                </LogosWrapper>
            </ScrollContainer>
        </Section>
    );
};

export default Partners; 
import React from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  background-color: #0a0a0a;
  padding: 100px 0;
  min-height: 100vh;
`;

const MainHeading = styled.h1`
  font-size: 5rem;
  font-weight: 400;
  color: white;
  text-align: center;
  margin-bottom: 80px;
  line-height: 1.2;
  
  .highlight {
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 10px;
      left: 0;
      width: 100%;
      height: 6px;
      background: #4ade80;
      z-index: -1;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 60px;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
`;

const IconsContainer = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
`;

const IconItem = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  animation: float 6s ease-in-out infinite;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
    animation-play-state: paused;
  }
  
  i {
    font-size: 2rem;
    color: ${props => props.iconColor || '#4a90e2'};
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const VideoIcon = styled(IconItem)`
  top: 30px;
  left: 60px;
  background: rgba(46, 125, 50, 0.3);
  border-color: rgba(46, 125, 50, 0.4);
  animation-delay: 0s;
`;

const TabletIcon = styled(IconItem)`
  top: 80px;
  right: 80px;
  background: rgba(139, 69, 19, 0.3);
  border-color: rgba(139, 69, 19, 0.4);
  animation-delay: 1s;
`;

const TikTokIcon = styled(IconItem)`
  top: 200px;
  left: 20px;
  background: rgba(139, 69, 19, 0.3);
  border-color: rgba(139, 69, 19, 0.4);
  animation-delay: 2s;
`;

const PhoneIcon = styled(IconItem)`
  top: 160px;
  left: 180px;
  background: rgba(25, 25, 112, 0.3);
  border-color: rgba(25, 25, 112, 0.4);
  animation-delay: 0.5s;
`;

const MobileIcon = styled(IconItem)`
  top: 250px;
  right: 60px;
  background: rgba(30, 144, 255, 0.3);
  border-color: rgba(30, 144, 255, 0.4);
  animation-delay: 1.5s;
`;

const DesktopIcon = styled(IconItem)`
  top: 380px;
  left: 40px;
  background: rgba(75, 0, 130, 0.3);
  border-color: rgba(75, 0, 130, 0.4);
  animation-delay: 3s;
`;

const GoogleIcon = styled(IconItem)`
  top: 420px;
  left: 170px;
  background: rgba(46, 125, 50, 0.3);
  border-color: rgba(46, 125, 50, 0.4);
  animation-delay: 2.5s;
`;

const CameraIcon = styled(IconItem)`
  top: 340px;
  right: 120px;
  background: rgba(64, 64, 64, 0.3);
  border-color: rgba(64, 64, 64, 0.4);
  animation-delay: 4s;
`;

const LinkedInIcon = styled(IconItem)`
  top: 460px;
  right: 40px;
  background: rgba(139, 69, 19, 0.3);
  border-color: rgba(139, 69, 19, 0.4);
  animation-delay: 3.5s;
`;

const ContentSection = styled.div`
  color: white;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 50px;
  max-width: 500px;
`;

const GreatForSection = styled.div`
  margin-top: 20px;
`;

const GreatForTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 25px;
  color: white;
`;

const GreatForList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const GreatForItem = styled.li`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
  position: relative;
  padding-left: 25px;
  
  &::before {
    content: '•';
    color: #4ade80;
    position: absolute;
    left: 0;
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

const ShareAnywhere = () => {
    return (
        <Section>
            <MainHeading>
                Share <span className="highlight">anywhere</span>
            </MainHeading>

            <Container>
                <IconsContainer>
                    <VideoIcon>
                        <i className="bi bi-play-circle"></i>
                    </VideoIcon>
                    <TabletIcon>
                        <i className="bi bi-tablet"></i>
                    </TabletIcon>
                    <MobileIcon>
                        <i className="bi bi-phone"></i>
                    </MobileIcon>
                    <DesktopIcon>
                        <i className="bi bi-display"></i>
                    </DesktopIcon>
                    <CameraIcon>
                        <i className="bi bi-camera"></i>
                    </CameraIcon>
                    <LinkedInIcon>
                        <i className="bi bi-linkedin"></i>
                    </LinkedInIcon>
                    <TikTokIcon>
                        <i className="bi bi-tiktok"></i>
                    </TikTokIcon>
                    <GoogleIcon>
                        <i className="bi bi-google"></i>
                    </GoogleIcon>
                    <PhoneIcon>
                        <i className="bi bi-telephone"></i>
                    </PhoneIcon>
                </IconsContainer>

                <ContentSection>
                    <Title>Instant access with any device</Title>

                    <Description>
                        Our 360° experiences work across all modern devices. Your
                        audience can explore your location instantly on desktop, tablet, or
                        mobile - no downloads or special apps required.
                    </Description>

                    <GreatForSection>
                        <GreatForTitle>Great for:</GreatForTitle>
                        <GreatForList>
                            <GreatForItem>Embedding in your website</GreatForItem>
                            <GreatForItem>Trade shows and info screens</GreatForItem>
                            <GreatForItem>Sharing across marketing channels</GreatForItem>
                            <GreatForItem>Sending directly to potential clients</GreatForItem>
                        </GreatForList>
                    </GreatForSection>
                </ContentSection>
            </Container>
        </Section>
    );
};

export default ShareAnywhere; 
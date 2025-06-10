import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
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

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const iconGlow = keyframes`
  0% {
    box-shadow: 0 0 20px rgba(255, 193, 7, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 193, 7, 0.5);
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 193, 7, 0.3);
  }
`;

const Section = styled.section`
  background-color: #000000;
  min-height: 100vh;
  padding: 100px 40px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 40%, rgba(30, 30, 30, 0.4) 0%, transparent 50%);
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  animation: ${fadeIn} 1.2s ease-out;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 100px;
  letter-spacing: -0.02em;
  animation: ${fadeInUp} 0.8s ease-out;
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 60px;
  }
`;

const StoryTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 60px;
    top: 100px;
    bottom: 100px;
    width: 2px;
    background: linear-gradient(to bottom, 
      rgba(255, 193, 7, 0.8) 0%,
      rgba(255, 193, 7, 0.6) 33%,
      rgba(255, 193, 7, 0.4) 66%,
      rgba(255, 193, 7, 0.2) 100%
    );
    z-index: 1;
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
  
  @media (max-width: 768px) {
    gap: 60px;
  }
`;

const StoryItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  position: relative;
  z-index: 2;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : 40}px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${props => props.delay}s;
  
  &:hover .story-title {
    color: #ffc107;
  }
  
  &:hover .story-description {
    color: rgba(255, 255, 255, 0.95);
  }
  
  @media (max-width: 768px) {
    gap: 25px;
  }
`;

const IconContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(40, 40, 40, 0.8);
  border: 2px solid rgba(255, 193, 7, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: scale(1.1);
    border-color: rgba(255, 193, 7, 0.8);
    animation: ${iconGlow} 2s infinite;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: linear-gradient(45deg, 
      rgba(255, 193, 7, 0.2), 
      rgba(255, 193, 7, 0.1), 
      rgba(255, 193, 7, 0.2)
    );
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  color: #ffc107;
  transition: all 0.3s ease;
  
  .icon-bulb::before {
    content: '💡';
  }
  
  .icon-search::before {
    content: '🔍';
  }
  
  .icon-rocket::before {
    content: '🚀';
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  padding-top: 10px;
`;

const StoryTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 25px;
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

const StoryDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  transition: color 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const OurStory = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const itemRefs = useRef([]);

    const storyData = [
        {
            id: 1,
            title: "The Concept",
            description: "While working in hospitality tech, we needed to showcase the dramatic impact of well-designed lighting scenes in hotel rooms. The challenge was how could we show this online?",
            icon: "icon-bulb",
            delay: 0.2
        },
        {
            id: 2,
            title: "The Insight",
            description: "We realized that many carefully designed spaces look incredible in person, but photos fail to capture the experience. This disconnect sends potential customers to third-party review sites, taking them away from your carefully crafted brand experience.",
            icon: "icon-search",
            delay: 0.4
        },
        {
            id: 3,
            title: "The Solution",
            description: "Since 2020, we've been developing 360° technology and shooting hotels across Europe. Now we're making our expertise available to businesses beyond hospitality. Our mission is to help distinctive independent spaces showcase their unique atmosphere and connect with customers before they even visit.",
            icon: "icon-rocket",
            delay: 0.6
        }
    ];

    useEffect(() => {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const itemId = parseInt(entry.target.dataset.itemId);
                if (entry.isIntersecting) {
                    setVisibleItems(prev => new Set([...prev, itemId]));
                }
            });
        }, observerOptions);

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            itemRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <Section>
            <Container>
                <Title>Our story</Title>

                <StoryTimeline>
                    {storyData.map((story, index) => (
                        <StoryItem
                            key={story.id}
                            ref={el => itemRefs.current[index] = el}
                            data-item-id={story.id}
                            isVisible={visibleItems.has(story.id)}
                            delay={story.delay}
                        >
                            <IconContainer>
                                <Icon>
                                    <span className={story.icon}></span>
                                </Icon>
                            </IconContainer>

                            <ContentContainer>
                                <StoryTitle className="story-title">{story.title}</StoryTitle>
                                <StoryDescription className="story-description">{story.description}</StoryDescription>
                            </ContentContainer>
                        </StoryItem>
                    ))}
                </StoryTimeline>
            </Container>
        </Section>
    );
};

export default OurStory; 
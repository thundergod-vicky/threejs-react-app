import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
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
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
  }
`;

const FooterSection = styled.footer`
  background-color: #000000;
  color: white;
  padding: 80px 40px 40px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.3) 20%, 
      rgba(255, 255, 255, 0.6) 50%, 
      rgba(255, 255, 255, 0.3) 80%, 
      transparent 100%
    );
    animation: ${glow} 3s infinite;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease-out;
`;

const MainFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  animation: ${slideInLeft} 0.8s ease-out 0.2s both;
`;

const Brand = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    color: #ffc107;
    transform: translateY(-2px);
    animation: ${pulse} 1s ease-in-out;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #ffc107, #ff9800);
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const AddressSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AddressLine = styled.p`
  margin: 0;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  transition: all 0.3s ease;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : 20}px);
  transition-delay: ${props => props.delay}s;
  
  &:hover {
    color: rgba(255, 255, 255, 1);
    transform: translateX(5px);
  }
`;

const EmailLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1rem;
  margin-top: 20px;
  display: inline-block;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : 20}px);
  transition-delay: 0.6s;
  
  &:hover {
    color: #ffc107;
    transform: translateY(-2px);
    
    &::before {
      width: 100%;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: #ffc107;
    transition: width 0.3s ease;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
  animation: ${slideInRight} 0.8s ease-out 0.4s both;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 40px;
  
  @media (max-width: 768px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? 0 : 20}px);
  transition-delay: ${props => props.delay}s;
  
  &:hover {
    color: white;
    transform: translateY(-3px);
    
    &::after {
      transform: scaleX(1);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #ffc107, #ff9800);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: scale(${props => props.isVisible ? 1 : 0.5});
  transition-delay: ${props => props.delay}s;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: scale(1.15) rotate(5deg);
    background: rgba(255, 193, 7, 0.2);
    border-color: rgba(255, 193, 7, 0.6);
    color: #ffc107;
    box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: scale(1.05);
  }
`;

const BottomSection = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  animation: ${fadeInUp} 0.8s ease-out 0.8s both;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
`;

const Copyright = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: rgba(255, 255, 255, 0.9);
    
    &::after {
      width: 100%;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.6);
    transition: width 0.3s ease;
  }
  
  &:not(:last-child)::before {
    content: '|';
    position: absolute;
    right: -15px;
    color: rgba(255, 255, 255, 0.3);
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const LanguageOption = styled.span`
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.6)'};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${props => props.active ? '600' : '400'};
  
  &:hover {
    color: white;
    transform: scale(1.05);
  }
  
  &:not(:last-child)::after {
    content: '/';
    margin-left: 8px;
    color: rgba(255, 255, 255, 0.4);
  }
`;

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeLanguage, setActiveLanguage] = useState('EN');
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    const navLinks = [
        { name: 'Showcase', href: '#showcase', delay: 0.1 },
        { name: 'Contact', href: '#contact', delay: 0.2 },
        { name: 'petsq.works', href: 'https://petsq.works', delay: 0.3 }
    ];

    const socialLinks = [
        { icon: '𝕏', href: 'https://linkedin.com', delay: 0.4 },
        { icon: '📷', href: 'https://instagram.com', delay: 0.5 }
    ];

    return (
        <FooterSection ref={footerRef}>
            <Container>
                <MainFooter>
                    <LeftSection>
                        <Brand>boutique360</Brand>

                        <AddressSection>
                            <AddressLine isVisible={isVisible} delay={0.2}>
                                Schiekade 189
                            </AddressLine>
                            <AddressLine isVisible={isVisible} delay={0.3}>
                                3013 BR Rotterdam
                            </AddressLine>
                            <AddressLine isVisible={isVisible} delay={0.4}>
                                The Netherlands
                            </AddressLine>
                        </AddressSection>

                        <EmailLink
                            href="mailto:hello@btq360.com"
                            isVisible={isVisible}
                        >
                            hello@btq360.com
                        </EmailLink>
                    </LeftSection>

                    <RightSection>
                        <Navigation>
                            {navLinks.map((link, index) => (
                                <NavLink
                                    key={link.name}
                                    href={link.href}
                                    isVisible={isVisible}
                                    delay={link.delay}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </Navigation>

                        <SocialIcons>
                            {socialLinks.map((social, index) => (
                                <SocialIcon
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    isVisible={isVisible}
                                    delay={social.delay}
                                >
                                    {social.icon}
                                </SocialIcon>
                            ))}
                        </SocialIcons>
                    </RightSection>
                </MainFooter>

                <BottomSection>
                    <Copyright>© 2025 boutique360</Copyright>

                    <FooterLinks>
                        <FooterLink href="#terms">Terms & Conditions</FooterLink>
                        <FooterLink href="#privacy">Privacy Policy</FooterLink>
                        <FooterLink href="#sitemap">Sitemap</FooterLink>
                    </FooterLinks>

                    <LanguageSelector>
                        <LanguageOption
                            active={activeLanguage === 'EN'}
                            onClick={() => setActiveLanguage('EN')}
                        >
                            EN
                        </LanguageOption>
                        <LanguageOption
                            active={activeLanguage === 'NL'}
                            onClick={() => setActiveLanguage('NL')}
                        >
                            NL
                        </LanguageOption>
                    </LanguageSelector>
                </BottomSection>
            </Container>
        </FooterSection>
    );
};

export default Footer; 
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInStagger = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulseGlow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 193, 7, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 193, 7, 0.6);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 193, 7, 0.3);
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 40px;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(${props => props.isVisible ? '0' : '-100%'});
  opacity: ${props => props.isVisible ? 1 : 0};
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 193, 7, 0.3) 20%, 
      rgba(255, 193, 7, 0.6) 50%, 
      rgba(255, 193, 7, 0.3) 80%, 
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeIn} 0.8s ease-out 0.2s both;
  
  &:hover {
    transform: scale(1.05);
    
    .logo-icon {
      animation: ${rotate360} 1s ease-in-out;
    }
  }
`;

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ffc107, #ff9800);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '360°';
    font-size: 8px;
    font-weight: bold;
    color: white;
    position: absolute;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    background: conic-gradient(transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: ${rotate360} 3s linear infinite;
  }
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  animation: ${fadeIn} 0.8s ease-out 0.4s both;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const LanguageOption = styled.span`
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.7)'};
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
    color: rgba(255, 255, 255, 0.5);
  }
`;

const OfferBadge = styled.div`
  background: linear-gradient(135deg, #ffc107, #ff9800);
  color: #000;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${pulseGlow} 3s infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(255, 193, 7, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
`;

const MenuLine = styled.div`
  width: 24px;
  height: 2px;
  background: white;
  margin: 6px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  
  &:nth-of-type(1) {
    transform: ${props => props.isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
  }
  
  &:nth-of-type(2) {
    opacity: ${props => props.isOpen ? '0' : '1'};
    transform: ${props => props.isOpen ? 'scale(0)' : 'scale(1)'};
  }
  
  &:nth-of-type(3) {
    transform: ${props => props.isOpen ? 'rotate(-45deg) translate(8px, -8px)' : 'none'};
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(20px);
  z-index: 999;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 193, 7, 0.05) 0%, transparent 70%);
  }
`;

const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
  opacity: ${props => props.isOpen ? 1 : 0};
  transform: translateY(${props => props.isOpen ? 0 : 50}px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${props => props.isOpen ? '0.2s' : '0s'};
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateX(${props => props.isVisible ? 0 : -50}px);
  transition-delay: ${props => props.delay}s;
  
  &:hover {
    color: #ffc107;
    transform: scale(1.1) translateY(-5px);
    text-shadow: 0 0 30px rgba(255, 193, 7, 0.6);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #ffc107, #ff9800);
    border-radius: 2px;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const OverlayOfferBadge = styled.div`
  background: linear-gradient(135deg, #ffc107, #ff9800);
  color: #000;
  padding: 16px 32px;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: 700;
  animation: ${scaleIn} 0.6s ease-out 1s both;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(255, 193, 7, 0.5);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 12px 24px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 40px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1) rotate(90deg);
  }
  
  @media (max-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('EN');
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show header after scrolling past 80% of the viewport height
      // Hide header when at the very top
      if (currentScrollY > windowHeight * 0.8) {
        setIsHeaderVisible(true);
      } else if (currentScrollY < windowHeight * 0.1) {
        setIsHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navigationItems = [
    { name: 'home', href: '#home', delay: 0.1 },
    { name: 'use cases', href: '#use-cases', delay: 0.2 },
    { name: 'references', href: '#references', delay: 0.3 },
    { name: 'process', href: '#process', delay: 0.4 },
    { name: 'pricing', href: '#pricing', delay: 0.5 },
    { name: 'faq', href: '#faq', delay: 0.6 },
    { name: 'contact', href: '#contact', delay: 0.7 }
  ];

  const smoothScrollTo = (elementId) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(elementId.replace('#', ''));
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(elementId.replace('#', ''));
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      smoothScrollTo('#home');
    }
  };

  return (
    <>
      <HeaderContainer isVisible={isHeaderVisible}>
        <HeaderContent>
          <Logo onClick={handleLogoClick}>
            <LogoIcon className="logo-icon" />
            <LogoText>boutique360</LogoText>
          </Logo>

          <RightSection>
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

            <OfferBadge>30% off</OfferBadge>

            <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MenuLine isOpen={isMenuOpen} />
              <MenuLine isOpen={isMenuOpen} />
              <MenuLine isOpen={isMenuOpen} />
            </MenuButton>
          </RightSection>
        </HeaderContent>
      </HeaderContainer>

      <Overlay isOpen={isMenuOpen}>
        <CloseButton onClick={() => setIsMenuOpen(false)}>
          ×
        </CloseButton>

        <OverlayContent isOpen={isMenuOpen}>
          <NavList>
            {navigationItems.map((item, index) => (
              <NavItem
                key={item.name}
                href={item.href}
                isVisible={isMenuOpen}
                delay={item.delay}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(item.href);
                }}
              >
                {item.name}
              </NavItem>
            ))}
          </NavList>

          <OverlayOfferBadge>
            30% off until 30th June
          </OverlayOfferBadge>
        </OverlayContent>
      </Overlay>
    </>
  );
};

export default Header; 
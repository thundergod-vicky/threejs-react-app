import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import * as THREE from 'three';
import room1Image from '../assets/room1.jpg';

const Section = styled.section`
  position: relative;
  min-height: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: white;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

const Container = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  width: 100%;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`;

const ContentLeft = styled.div`
  flex: 1;
  max-width: 500px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  line-height: 1.1;
  
  .highlight {
    color: #10b981;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CountdownContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const CountdownBox = styled.div`
  background: rgba(120, 113, 108, 0.9);
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: 12px;
  padding: 20px;
  min-width: 100px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #fbbf24;
    box-shadow: 0 10px 30px rgba(251, 191, 36, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 15px;
    min-width: 80px;
  }
`;

const CountdownNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 5px;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const CountdownLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: lowercase;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const EmailSection = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 15px 20px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  backdrop-filter: blur(10px);
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #fbbf24;
    box-shadow: 0 0 20px rgba(251, 191, 36, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(251, 191, 36, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const CountdownOffer = () => {
    const canvasRef = useRef(null);
    const sceneRef = useRef(null);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [email, setEmail] = useState('');

    // Target date: End of June 2025
    const targetDate = new Date('2025-06-30T23:59:59').getTime();

    // Three.js 360° background effect
    useEffect(() => {
        if (!canvasRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            canvasRef.current.offsetWidth / canvasRef.current.offsetHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 0.1);

        // Renderer setup with error handling
        let renderer;
        try {
            renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
                preserveDrawingBuffer: false,
                powerPreference: "high-performance"
            });
            renderer.setSize(canvasRef.current.offsetWidth, canvasRef.current.offsetHeight);
            canvasRef.current.appendChild(renderer.domElement);
        } catch (error) {
            console.error('WebGL initialization failed:', error);
            canvasRef.current.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; background: #333;">WebGL not supported</div>';
            return;
        }

        // Create sphere for 360° background
        const geometry = new THREE.SphereGeometry(500, 60, 40);
        geometry.scale(-1, 1, 1);

        // Load texture
        const textureLoader = new THREE.TextureLoader();
        const material = new THREE.MeshBasicMaterial();

        textureLoader.load(
            room1Image,
            (texture) => {
                material.map = texture;
                material.needsUpdate = true;
            },
            undefined,
            (error) => {
                console.error('Error loading texture:', error);
            }
        );

        const sphereMesh = new THREE.Mesh(geometry, material);
        scene.add(sphereMesh);

        // Animation loop with continuous rotation
        let frameId;
        const animate = () => {
            frameId = requestAnimationFrame(animate);

            // Continuous horizontal rotation
            sphereMesh.rotation.y += 0.001;

            renderer.render(scene, camera);
        };
        animate();

        // Handle resize
        const handleResize = () => {
            if (canvasRef.current) {
                const width = canvasRef.current.offsetWidth;
                const height = canvasRef.current.offsetHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            }
        };
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            if (frameId) {
                cancelAnimationFrame(frameId);
            }
            window.removeEventListener('resize', handleResize);
            if (canvasRef.current && renderer.domElement) {
                canvasRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            if (material.map) material.map.dispose();
            renderer.dispose();
        };
    }, []);

    // Countdown timer logic
    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                const newTimeLeft = { days, hours, minutes, seconds };

                // Save to localStorage
                localStorage.setItem('countdownTimer', JSON.stringify({
                    timeLeft: newTimeLeft,
                    lastUpdated: now
                }));

                setTimeLeft(newTimeLeft);
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        // Load from localStorage on component mount
        const savedData = localStorage.getItem('countdownTimer');
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                const timeDiff = new Date().getTime() - parsed.lastUpdated;

                // If data is recent (less than 2 seconds old), use it
                if (timeDiff < 2000) {
                    setTimeLeft(parsed.timeLeft);
                }
            } catch (error) {
                console.error('Error parsing localStorage data:', error);
            }
        }

        // Calculate immediately
        calculateTimeLeft();

        // Update every second
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (email) {
            // Save email to localStorage
            const savedEmails = JSON.parse(localStorage.getItem('prelaunchEmails') || '[]');
            if (!savedEmails.includes(email)) {
                savedEmails.push(email);
                localStorage.setItem('prelaunchEmails', JSON.stringify(savedEmails));
            }

            alert('Thank you! We\'ll notify you about the exclusive pre-launch pricing.');
            setEmail('');
        }
    };

    return (
        <Section>
            <BackgroundContainer ref={canvasRef} />
            <Overlay />
            <Container>
                <ContentLeft>
                    <Title>
                        Limited time <span className="highlight">offer</span>
                    </Title>
                    <Description>
                        boutique360 pre-launch pricing is available exclusively for all
                        orders received before the end of June 2025. Redeem your
                        discount by submitting your email address below.
                    </Description>

                    <form onSubmit={handleEmailSubmit}>
                        <EmailSection>
                            <EmailInput
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <SubmitButton type="submit">
                                Get Discount
                            </SubmitButton>
                        </EmailSection>
                    </form>
                </ContentLeft>

                <CountdownContainer>
                    <CountdownBox>
                        <CountdownNumber>{timeLeft.days}</CountdownNumber>
                        <CountdownLabel>days</CountdownLabel>
                    </CountdownBox>
                    <CountdownBox>
                        <CountdownNumber>{timeLeft.hours}</CountdownNumber>
                        <CountdownLabel>hours</CountdownLabel>
                    </CountdownBox>
                    <CountdownBox>
                        <CountdownNumber>{timeLeft.minutes}</CountdownNumber>
                        <CountdownLabel>minutes</CountdownLabel>
                    </CountdownBox>
                    <CountdownBox>
                        <CountdownNumber>{timeLeft.seconds}</CountdownNumber>
                        <CountdownLabel>seconds</CountdownLabel>
                    </CountdownBox>
                </CountdownContainer>
            </Container>
        </Section>
    );
};

export default CountdownOffer; 
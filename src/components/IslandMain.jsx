import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';

// Import the background image and audio
import room1 from '../assets/room1.jpg';
import ambientAudio from '../assets/chirping-birds-ambience-217410.mp3';

// Import Island1 component
import Island1 from './Islands/Island1';

// WebGL Detection
const detectWebGL = () => {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        return !!gl;
    } catch (e) {
        return false;
    }
};

// Styled Components
const ViewerContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background: #000;
    overflow: hidden;
    cursor: grab;
    
    &:active {
        cursor: grabbing;
    }
    
    canvas {
        cursor: grab;
        
        &:active {
            cursor: grabbing;
        }
    }
`;

const UIOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 100;
    
`;

const MuteButton = styled.button`
    position: absolute;
    top: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(0, 0, 0, 0.7);
        border-color: rgba(255, 255, 255, 0.5);
    }
`;

const BackButton = styled.button`
    position: absolute;
    top: 30px;
    left: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(0, 0, 0, 0.7);
        border-color: rgba(255, 255, 255, 0.5);
    }
`;

const InfoButton = styled.button`
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(0, 0, 0, 0.7);
        border-color: rgba(255, 255, 255, 0.5);
    }
`;

const InfoPopup = styled.div`
    position: absolute;
    bottom: 100px;
    right: 30px;
    background: transparent;
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 30px;
    color: black;
    max-width: 400px;
    min-width: 350px;
    pointer-events: all;
    border: 1px solid rgba(255, 255, 255, 0.1);
    opacity: ${props => props.show ? 1 : 0};
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    transform: ${props => props.show ? 'translateY(0)' : 'translateY(20px)'};
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const InfoTitle = styled.h3`
    font-size: 22px;
    font-weight: 400;
    margin: 0 0 20px 0;
    color: black;
`;

const InfoText = styled.p`
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    color: black;
`;

const InfoLink = styled.a`
    color: black;
    text-decoration: underline;
    cursor: pointer;
    
    &:hover {
        color: #ffd700;
    }
`;

const CentralOverlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 40px;
    text-align: center;
    color: white;
    max-width: 500px;
    pointer-events: all;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
    font-size: 48px;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 300;
    letter-spacing: 3px;
    margin: 0 0 20px 0;
    text-transform: uppercase;
`;

const Description = styled.p`
    font-size: 16px;
    color: rgba(0, 0, 0, 0.9);
    line-height: 1.6;
    margin: 0 0 40px 0;
    opacity: 0.9;
    font-weight: 300;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    
`;

const ExperienceButton = styled.button`
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 15px 25px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    min-width: 140px;
    backdrop-filter: blur(10px);

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.5);
    }
`;

const ButtonNumber = styled.span`
    font-size: 14px;
    opacity: 0.8;
`;

const ButtonIcon = styled.span`
    font-size: 24px;
`;

const ButtonLabel = styled.span`
    font-size: 12px;
    text-align: center;
    line-height: 1.2;
    color: black;
`;

const IslandMain = ({ onExperienceSelect }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const sphereRef = useRef(null);
    const cameraRef = useRef(null);
    const animationIdRef = useRef(null);
    const audioRef = useRef(null);

    const [webGLSupported, setWebGLSupported] = useState(true);
    const [autoRotate, setAutoRotate] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [showInfoPopup, setShowInfoPopup] = useState(false);
    const [audioLoaded, setAudioLoaded] = useState(false);

    // Initialize the 3D scene
    useEffect(() => {
        if (!detectWebGL()) {
            console.error('WebGL not supported');
            setWebGLSupported(false);
            return;
        }

        const initScene = () => {
            try {
                console.log('🚀 Initializing Island 3D scene...');

                // Scene setup
                const scene = new THREE.Scene();
                sceneRef.current = scene;

                // Camera setup
                const camera = new THREE.PerspectiveCamera(
                    75,
                    window.innerWidth / window.innerHeight,
                    0.1,
                    1000
                );
                camera.position.set(0, 0, 0.1);
                cameraRef.current = camera;

                // Renderer setup
                const renderer = new THREE.WebGLRenderer({
                    antialias: true,
                    powerPreference: "high-performance"
                });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                rendererRef.current = renderer;

                if (mountRef.current) {
                    mountRef.current.appendChild(renderer.domElement);
                }

                // Create 360° sphere geometry
                const geometry = new THREE.SphereGeometry(1000, 60, 40);
                geometry.scale(-1, 1, 1);

                // Load and apply texture
                const textureLoader = new THREE.TextureLoader();
                let material = new THREE.MeshBasicMaterial({});

                textureLoader.load(
                    room1,
                    (texture) => {
                        console.log('✅ Texture loaded successfully');
                        material.map = texture;
                        material.needsUpdate = true;
                    },
                    (progress) => {
                        console.log('📊 Loading progress:', progress);
                    },
                    (error) => {
                        console.error('❌ Error loading texture:', error);
                    }
                );

                const sphere = new THREE.Mesh(geometry, material);
                scene.add(sphere);
                sphereRef.current = sphere;

                // Setup controls
                setupControls();

                // Start animation loop
                animate();

                console.log('🎉 Island scene initialization complete');

            } catch (error) {
                console.error('❌ Failed to initialize Island 3D scene:', error);
                setWebGLSupported(false);
            }
        };

        initScene();

        return () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
            cleanup();
        };
    }, []);

    // Initialize audio
    useEffect(() => {
        const audio = new Audio(ambientAudio);
        audio.loop = true;
        audio.volume = 0.3; // Set a comfortable volume level
        audio.preload = 'auto';

        const handleCanPlayThrough = () => {
            setAudioLoaded(true);
            console.log('🎵 Audio loaded and ready to play');
        };

        const handleError = (error) => {
            console.error('❌ Audio loading error:', error);
        };

        audio.addEventListener('canplaythrough', handleCanPlayThrough);
        audio.addEventListener('error', handleError);

        audioRef.current = audio;

        return () => {
            audio.removeEventListener('canplaythrough', handleCanPlayThrough);
            audio.removeEventListener('error', handleError);
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    // Setup mouse and touch controls
    const setupControls = () => {
        const canvas = rendererRef.current?.domElement;
        if (!canvas) return;

        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };

        const onMouseDown = (event) => {
            isDragging = true;
            setAutoRotate(false);
            previousMousePosition = {
                x: event.clientX,
                y: event.clientY
            };
        };

        const onMouseMove = (event) => {
            if (isDragging && sphereRef.current) {
                const deltaMove = {
                    x: event.clientX - previousMousePosition.x,
                    y: event.clientY - previousMousePosition.y
                };

                sphereRef.current.rotation.y += deltaMove.x * 0.005;
                sphereRef.current.rotation.x += deltaMove.y * 0.005;

                sphereRef.current.rotation.x = Math.max(
                    -Math.PI / 3,
                    Math.min(Math.PI / 3, sphereRef.current.rotation.x)
                );

                previousMousePosition = {
                    x: event.clientX,
                    y: event.clientY
                };
            }
        };

        const onMouseUp = () => {
            isDragging = false;
            setTimeout(() => setAutoRotate(true), 2000);
        };

        const onTouchStart = (event) => {
            if (event.touches.length === 1) {
                isDragging = true;
                setAutoRotate(false);
                previousMousePosition = {
                    x: event.touches[0].clientX,
                    y: event.touches[0].clientY
                };
            }
        };

        const onTouchMove = (event) => {
            if (isDragging && event.touches.length === 1 && sphereRef.current) {
                event.preventDefault();

                const deltaMove = {
                    x: event.touches[0].clientX - previousMousePosition.x,
                    y: event.touches[0].clientY - previousMousePosition.y
                };

                sphereRef.current.rotation.y += deltaMove.x * 0.005;
                sphereRef.current.rotation.x += deltaMove.y * 0.005;

                sphereRef.current.rotation.x = Math.max(
                    -Math.PI / 3,
                    Math.min(Math.PI / 3, sphereRef.current.rotation.x)
                );

                previousMousePosition = {
                    x: event.touches[0].clientX,
                    y: event.touches[0].clientY
                };
            }
        };

        const onTouchEnd = () => {
            isDragging = false;
            setTimeout(() => setAutoRotate(true), 2000);
        };

        canvas.addEventListener('mousedown', onMouseDown);
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseup', onMouseUp);
        canvas.addEventListener('mouseleave', onMouseUp);
        canvas.addEventListener('touchstart', onTouchStart, { passive: false });
        canvas.addEventListener('touchmove', onTouchMove, { passive: false });
        canvas.addEventListener('touchend', onTouchEnd);

        return () => {
            canvas.removeEventListener('mousedown', onMouseDown);
            canvas.removeEventListener('mousemove', onMouseMove);
            canvas.removeEventListener('mouseup', onMouseUp);
            canvas.removeEventListener('mouseleave', onMouseUp);
            canvas.removeEventListener('touchstart', onTouchStart);
            canvas.removeEventListener('touchmove', onTouchMove);
            canvas.removeEventListener('touchend', onTouchEnd);
        };
    };

    // Animation loop
    const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);

        if (sphereRef.current && autoRotate) {
            sphereRef.current.rotation.y += 0.001; // Continuous rotation
        }

        if (rendererRef.current && sceneRef.current && cameraRef.current) {
            rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
    };

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            if (cameraRef.current && rendererRef.current) {
                cameraRef.current.aspect = window.innerWidth / window.innerHeight;
                cameraRef.current.updateProjectionMatrix();
                rendererRef.current.setSize(window.innerWidth, window.innerHeight);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Cleanup function
    const cleanup = () => {
        if (mountRef.current && rendererRef.current) {
            const canvas = rendererRef.current.domElement;
            if (canvas && canvas.parentNode) {
                canvas.parentNode.removeChild(canvas);
            }
        }

        if (sceneRef.current) {
            sceneRef.current.traverse((object) => {
                if (object.geometry) object.geometry.dispose();
                if (object.material) {
                    if (object.material.map) object.material.map.dispose();
                    object.material.dispose();
                }
            });
        }

        if (rendererRef.current) {
            rendererRef.current.dispose();
        }
    };

    const handleIslandExperience = () => {
        // Use the callback prop instead of navigation
        if (onExperienceSelect) {
            onExperienceSelect('island');
        }
    };

    const handleOldPilotHouse = () => {
        // Use the callback prop for future house experience
        if (onExperienceSelect) {
            onExperienceSelect('house');
        }
    };

    const toggleMute = () => {
        const newMutedState = !isMuted;
        setIsMuted(newMutedState);

        if (audioRef.current && audioLoaded) {
            if (newMutedState) {
                // Mute - pause the audio
                audioRef.current.pause();
                console.log('🔇 Audio muted');
            } else {
                // Unmute - play the audio
                audioRef.current.play().catch(error => {
                    console.error('❌ Error playing audio:', error);
                    // Some browsers require user interaction before playing audio
                    console.log('ℹ️ Audio play blocked - user interaction may be required');
                });
                console.log('🔊 Audio unmuted');
            }
        }
    };

    const showInfo = () => {
        setShowInfoPopup(!showInfoPopup);
    };

    const goBackHome = () => {
        navigate('/');
    };

    return (
        <ViewerContainer>
            {webGLSupported && (
                <div ref={mountRef} />
            )}

            <UIOverlay>
                <BackButton onClick={goBackHome}>
                    ←
                </BackButton>

                <MuteButton onClick={toggleMute}>
                    {isMuted ? '🔇' : '🔊'}
                </MuteButton>

                <CentralOverlay>
                    <Title>ISOKARI 360°</Title>
                    <Description>
                        Journey to Finland's edge where lighthouse keepers once watched over the Gulf of Bothnia.
                        Experience Isokari island's raw beauty and learn about nature and history in immersive 360°.
                    </Description>
                    <ButtonContainer>
                        <ExperienceButton onClick={handleIslandExperience}>
                            {/* <ButtonNumber>1)</ButtonNumber> */}
                            <ButtonIcon>⚡</ButtonIcon>
                            <ButtonLabel>Island<br />Experience</ButtonLabel>
                        </ExperienceButton>
                        <ExperienceButton onClick={handleOldPilotHouse}>
                            {/* <ButtonNumber>2)</ButtonNumber> */}
                            <ButtonIcon>🏠</ButtonIcon>
                            <ButtonLabel>Old Pilot House</ButtonLabel>
                        </ExperienceButton>
                    </ButtonContainer>
                </CentralOverlay>

                <InfoButton onClick={showInfo}>
                    ℹ
                </InfoButton>

                <InfoPopup show={showInfoPopup}>
                    <InfoTitle>About Isokari 360°</InfoTitle>
                    <InfoText>
                        This interactive experience is provided by{' '}
                        <InfoLink href="https://boutique360.com" target="_blank" rel="noopener noreferrer">
                            boutique360
                        </InfoLink>
                        . Learn more about Isokari at{' '}
                        <InfoLink href="https://isokari.fi" target="_blank" rel="noopener noreferrer">
                            isokari.fi
                        </InfoLink>
                        .
                    </InfoText>
                </InfoPopup>
            </UIOverlay>
        </ViewerContainer>
    );
};

export default IslandMain; 
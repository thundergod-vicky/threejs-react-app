import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

// Import the panoramic images
import room1 from '../assets/room1.jpg';       // Day
import room2 from '../assets/room2.png';       // Evening  
import roomview3 from '../assets/roomview3.png'; // Night

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

// Animations
const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
    0%, 100% { box-shadow: 0 0 20px rgba(255, 193, 7, 0.3); }
    50% { box-shadow: 0 0 40px rgba(255, 193, 7, 0.8); }
`;

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

const CanvasWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
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

const HeaderSection = styled.div`
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 60px;
    pointer-events: all;
`;

const BackButton = styled.button`
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
    backdrop-filter: blur(20px);
    border-radius: 8px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
        background: rgba(0, 0, 0, 0.9);
        border-color: #ffd700;
        transform: translateY(-2px);
    }
`;

const HotelInfo = styled.div`
    text-align: center;
    color: white;
`;

const HotelTitle = styled.h1`
    font-size: 42px;
    font-weight: 100;
    letter-spacing: 8px;
    margin: 0;
    text-transform: uppercase;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
    font-family: 'Oregon LDO Book', sans-serif;
`;

const Coordinates = styled.div`
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 2px;
    opacity: 0.8;
    margin-top: 8px;
`;

const ControlsSection = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    gap: 16px;
    pointer-events: all;
`;

const TimeButton = styled.button`
    background: ${props =>
        props.active ? 'rgba(255, 215, 0, 0.95)' : 'rgba(0, 0, 0, 0.7)'
    };
    color: ${props => props.active ? '#000' : 'white'};
    border: 1px solid ${props =>
        props.active ? '#ffd700' : 'rgba(255, 255, 255, 0.2)'
    };
    padding: 16px 24px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    backdrop-filter: blur(20px);
    border-radius: 12px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: ${props => props.disabled ? 0.4 : 1};
    min-width: 90px;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }

    &:hover:not(:disabled) {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        border-color: #ffd700;
        
        &::before {
            left: 100%;
        }
    }

    &:active:not(:disabled) {
        transform: translateY(-1px);
    }

    ${props => props.active && css`
        animation: ${pulse} 2s infinite;
    `}
`;

const LoadingScreen = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 200;
    opacity: ${props => props.show ? 1 : 0};
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    transition: all 0.6s ease;
`;

const LoadingSpinner = styled.div`
    width: 60px;
    height: 60px;
    border: 3px solid rgba(255, 215, 0, 0.1);
    border-top: 3px solid #ffd700;
    border-radius: 50%;
    animation: spin 1.2s linear infinite;
    margin-bottom: 30px;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const LoadingText = styled.div`
    color: white;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
`;

const StatusDisplay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px 40px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 215, 0, 0.3);
    opacity: ${props => props.show ? 1 : 0};
    transition: opacity 0.3s ease;
    pointer-events: none;
`;

// Time settings configuration
const TIME_SETTINGS = {
    day: {
        label: 'Day',
        image: room1,
        lightIntensity: 1.2,
        ambientColor: 0xffffff,
        fogColor: 0xf0f8ff
    },
    evening: {
        label: 'Evening',
        image: room2,
        lightIntensity: 0.8,
        ambientColor: 0xffd4a3,
        fogColor: 0x2c1810
    },
    night: {
        label: 'Night',
        image: roomview3,
        lightIntensity: 0.3,
        ambientColor: 0x1a3d5c,
        fogColor: 0x0a0a1a
    },
    off: {
        label: 'Off',
        image: null,
        lightIntensity: 0,
        ambientColor: 0x000000,
        fogColor: 0x000000
    }
};

const RoomView = () => {
    const navigate = useNavigate();
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const sphereRef = useRef(null);
    const cameraRef = useRef(null);
    const animationIdRef = useRef(null);

    const [currentTime, setCurrentTime] = useState('day');
    const [isLoading, setIsLoading] = useState(true);
    const [webGLSupported, setWebGLSupported] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Interaction state
    const [autoRotate, setAutoRotate] = useState(true);

    // Initialize the 3D scene
    useEffect(() => {
        if (!detectWebGL()) {
            console.error('WebGL not supported');
            setWebGLSupported(false);
            setIsLoading(false);
            return;
        }

        const initScene = () => {
            try {
                console.log('🚀 Initializing 3D scene...');

                // Scene setup
                const scene = new THREE.Scene();
                sceneRef.current = scene;
                console.log('✅ Scene created');

                // Camera setup
                const camera = new THREE.PerspectiveCamera(
                    75,
                    window.innerWidth / window.innerHeight,
                    0.1,
                    1000
                );
                camera.position.set(0, 0, 0.1);
                cameraRef.current = camera;
                console.log('✅ Camera created');

                // Renderer setup
                const renderer = new THREE.WebGLRenderer({
                    antialias: true,
                    powerPreference: "high-performance"
                });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                rendererRef.current = renderer;
                console.log('✅ Renderer created');

                if (mountRef.current) {
                    mountRef.current.appendChild(renderer.domElement);
                    console.log('✅ Canvas added to DOM');
                }

                // Create 360° sphere geometry
                const geometry = new THREE.SphereGeometry(1000, 60, 40);
                geometry.scale(-1, 1, 1);
                console.log('✅ Sphere geometry created');

                // Load and apply texture (Landing.jsx method)
                const textureLoader = new THREE.TextureLoader();

                // Create a fallback material first
                let material = new THREE.MeshBasicMaterial({});

                // Add error handling for texture loading
                const texture = textureLoader.load(
                    TIME_SETTINGS.day.image,
                    (texture) => {
                        console.log('✅ Texture loaded successfully');
                        console.log('📏 Texture dimensions:', texture.image.width, 'x', texture.image.height);
                        // Update material with texture
                        material.map = texture;
                        material.needsUpdate = true;
                    },
                    (progress) => {
                        console.log('📊 Loading progress:', progress);
                    },
                    (error) => {
                        console.error('❌ Error loading texture:', error);
                        console.log('Using fallback color material');
                    }
                );

                const sphere = new THREE.Mesh(geometry, material);
                scene.add(sphere);
                sphereRef.current = sphere;
                console.log('✅ Sphere mesh created and added to scene');

                // Setup controls
                setupControls();

                // Start animation loop
                animate();

                setIsLoading(false);
                console.log('🎉 Scene initialization complete');

            } catch (error) {
                console.error('❌ Failed to initialize 3D scene:', error);
                setWebGLSupported(false);
                setIsLoading(false);
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

    // Setup mouse and touch controls
    const setupControls = () => {
        const canvas = rendererRef.current?.domElement;
        if (!canvas) return;

        // Interaction state
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };

        // Mouse events
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

                // Limit vertical rotation to prevent flipping
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
            setTimeout(() => setAutoRotate(true), 2000); // Resume auto-rotation after 2s
        };

        // Touch events for mobile
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

                // Limit vertical rotation
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

        // Add event listeners
        canvas.addEventListener('mousedown', onMouseDown);
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseup', onMouseUp);
        canvas.addEventListener('mouseleave', onMouseUp); // Stop dragging when leaving canvas
        canvas.addEventListener('touchstart', onTouchStart, { passive: false });
        canvas.addEventListener('touchmove', onTouchMove, { passive: false });
        canvas.addEventListener('touchend', onTouchEnd);

        // Cleanup function
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
            sphereRef.current.rotation.y += 0.001; // Slow continuous rotation
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

    // Change time of day with smooth transition
    const changeTimeOfDay = (newTime) => {
        console.log('🔄 Changing time to:', newTime);

        if (newTime === currentTime || isTransitioning || !sphereRef.current) {
            console.log('⏭️ Skipping change - same time or transitioning or no sphere');
            return;
        }

        setIsTransitioning(true);
        console.log('🔄 Starting transition...');

        try {
            const timeConfig = TIME_SETTINGS[newTime];
            console.log('⚙️ Time config:', timeConfig);

            if (newTime === 'off') {
                console.log('⚫ Setting OFF mode');
                // Fade to black
                const material = sphereRef.current.material;
                material.color.setHex(0x000000);
                material.map = null;
                material.needsUpdate = true;

                setCurrentTime(newTime);
                setIsTransitioning(false);
                return;
            }

            // Load new texture (Landing.jsx method)
            console.log('📥 Loading new texture for:', newTime);
            const textureLoader = new THREE.TextureLoader();

            textureLoader.load(
                timeConfig.image,
                (newTexture) => {
                    console.log('✅ New texture loaded successfully');
                    console.log('📏 Texture dimensions:', newTexture.image.width, 'x', newTexture.image.height);

                    // Get current material
                    const material = sphereRef.current.material;
                    const oldTexture = material.map;

                    // Update material with new texture
                    material.map = newTexture;
                    material.color.setHex(0xffffff); // Reset color
                    material.needsUpdate = true;
                    console.log('🔄 Material updated with new texture');

                    // Cleanup old texture
                    if (oldTexture) {
                        oldTexture.dispose();
                        console.log('🗑️ Old texture disposed');
                    }

                    setCurrentTime(newTime);
                    setIsTransitioning(false);
                    console.log('✅ Time change completed successfully');
                },
                (progress) => {
                    console.log('📊 Loading progress:', progress);
                },
                (error) => {
                    console.error('❌ Failed to change time:', error);
                    setIsTransitioning(false);
                }
            );

        } catch (error) {
            console.error('❌ Failed to change time:', error);
            setIsTransitioning(false);
        }
    };

    // Cleanup function
    const cleanup = () => {
        // Remove canvas from DOM if it exists
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

    return (
        <ViewerContainer>
            <LoadingScreen show={isLoading}>
                <LoadingSpinner />
                <LoadingText>Loading Panoramic Experience</LoadingText>
            </LoadingScreen>

            {webGLSupported && (
                <CanvasWrapper ref={mountRef} />
            )}

            <UIOverlay>
                <HeaderSection>
                    <BackButton onClick={() => navigate('/')}>
                        ← Back to Home
                    </BackButton>

                    <HotelInfo>
                        <HotelTitle>THE OVERLOOK HOTEL</HotelTitle>
                        <Coordinates>39.7392° N, 105.9903° E</Coordinates>
                    </HotelInfo>

                    <div style={{ width: '140px' }} /> {/* Spacer for centering */}
                </HeaderSection>

                <ControlsSection>
                    {Object.keys(TIME_SETTINGS).map((timeKey) => (
                        <TimeButton
                            key={timeKey}
                            active={currentTime === timeKey}
                            disabled={isLoading || isTransitioning || !webGLSupported}
                            onClick={() => changeTimeOfDay(timeKey)}
                        >
                            {TIME_SETTINGS[timeKey].label}
                        </TimeButton>
                    ))}
                </ControlsSection>

                {!webGLSupported && (
                    <StatusDisplay show={true}>
                        WebGL not supported - Please use a modern browser
                    </StatusDisplay>
                )}
            </UIOverlay>
        </ViewerContainer>
    );
};

export default RoomView; 
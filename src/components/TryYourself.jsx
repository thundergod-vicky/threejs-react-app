import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import styled from '@emotion/styled';
import room1Image from '../assets/room1.jpg';

// WebGL detection function
const detectWebGL = () => {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        return !!gl;
    } catch (e) {
        return false;
    }
};

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
  font-weight: 600;
`;

const ViewerContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  height: 600px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  background: ${props => props.fallback ? `url(${room1Image}) center/cover` : 'transparent'};
`;

const FallbackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  gap: 20px;
`;

const FallbackTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const FallbackText = styled.p`
  font-size: 1.1rem;
  max-width: 500px;
  line-height: 1.6;
  opacity: 0.9;
`;

const Canvas = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ControlsContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 10;
`;

const ControlButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }

  &.active {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.8);
  }
`;

const DragInstruction = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const CenterOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: all 0.4s ease;
  pointer-events: ${props => props.show ? 'all' : 'none'};
`;

const TryItButton = styled.button`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid rgba(255, 255, 255, 0.4);
  color: white;
  padding: 20px 40px;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.6);
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const TryYourself = () => {
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const [isAutoRotating, setIsAutoRotating] = useState(true);
    const [isDragMode, setIsDragMode] = useState(false);
    const [showCenterButton, setShowCenterButton] = useState(true);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const [webGLSupported, setWebGLSupported] = useState(true);
    const zoomLevel = useRef(1);
    const inactivityTimer = useRef(null);

    useEffect(() => {
        // Check WebGL support first
        if (!detectWebGL()) {
            console.warn('WebGL is not supported. Falling back to static image.');
            setWebGLSupported(false);
            return;
        }

        let scene, camera, renderer, sphereMesh;
        let frameId;
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };

        const init = () => {
            try {
                // Scene setup
                scene = new THREE.Scene();
                sceneRef.current = scene;

                // Camera setup
                camera = new THREE.PerspectiveCamera(
                    75,
                    mountRef.current.clientWidth / mountRef.current.clientHeight,
                    0.1,
                    1000
                );
                camera.position.set(0, 0, 0.1);
                cameraRef.current = camera;

                // Renderer setup with error handling
                renderer = new THREE.WebGLRenderer({
                    antialias: true,
                    powerPreference: "high-performance"
                });
                renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
                mountRef.current.appendChild(renderer.domElement);

                // Create sphere for 360 background
                const geometry = new THREE.SphereGeometry(1000, 60, 40);
                geometry.scale(-1, 1, 1);

                // Load and apply texture
                const textureLoader = new THREE.TextureLoader();
                const material = new THREE.MeshBasicMaterial({});

                const texture = textureLoader.load(
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

                sphereMesh = new THREE.Mesh(geometry, material);
                scene.add(sphereMesh);

                // Reset to auto-rotate after inactivity
                const resetToAutoRotate = () => {
                    setIsAutoRotating(true);
                    setIsDragMode(false);
                    setIsUserInteracting(false);
                    setShowCenterButton(true);
                };

                // Mouse controls
                const onMouseDown = (event) => {
                    if (isDragMode) {
                        isDragging = true;
                        setIsAutoRotating(false);
                        setIsUserInteracting(true);
                        setShowCenterButton(false);

                        if (inactivityTimer.current) {
                            clearTimeout(inactivityTimer.current);
                        }

                        previousMousePosition = {
                            x: event.clientX,
                            y: event.clientY,
                        };
                    }
                };

                const onMouseMove = (event) => {
                    if (isDragging && isDragMode) {
                        const deltaMove = {
                            x: event.clientX - previousMousePosition.x,
                            y: event.clientY - previousMousePosition.y,
                        };

                        sphereMesh.rotation.y += deltaMove.x * 0.005;
                        sphereMesh.rotation.x += deltaMove.y * 0.005;

                        previousMousePosition = {
                            x: event.clientX,
                            y: event.clientY,
                        };
                    }
                };

                const onMouseUp = () => {
                    if (isDragging) {
                        isDragging = false;
                        inactivityTimer.current = setTimeout(resetToAutoRotate, 2000);
                    }
                };

                const onMouseLeave = () => {
                    if (isDragging) {
                        isDragging = false;
                        resetToAutoRotate();
                    }
                };

                // Touch controls for mobile
                const onTouchStart = (event) => {
                    if (isDragMode && event.touches.length === 1) {
                        isDragging = true;
                        setIsAutoRotating(false);
                        setIsUserInteracting(true);
                        setShowCenterButton(false);

                        if (inactivityTimer.current) {
                            clearTimeout(inactivityTimer.current);
                        }

                        previousMousePosition = {
                            x: event.touches[0].clientX,
                            y: event.touches[0].clientY,
                        };
                    }
                };

                const onTouchMove = (event) => {
                    if (isDragging && isDragMode && event.touches.length === 1) {
                        const deltaMove = {
                            x: event.touches[0].clientX - previousMousePosition.x,
                            y: event.touches[0].clientY - previousMousePosition.y,
                        };

                        sphereMesh.rotation.y += deltaMove.x * 0.005;
                        sphereMesh.rotation.x += deltaMove.y * 0.005;

                        previousMousePosition = {
                            x: event.touches[0].clientX,
                            y: event.touches[0].clientY,
                        };
                    }
                };

                const onTouchEnd = () => {
                    if (isDragging) {
                        isDragging = false;
                        inactivityTimer.current = setTimeout(resetToAutoRotate, 2000);
                    }
                };

                // Add event listeners
                if (mountRef.current) {
                    mountRef.current.addEventListener('mousedown', onMouseDown);
                    mountRef.current.addEventListener('mousemove', onMouseMove);
                    mountRef.current.addEventListener('mouseup', onMouseUp);
                    mountRef.current.addEventListener('mouseleave', onMouseLeave);
                    mountRef.current.addEventListener('touchstart', onTouchStart);
                    mountRef.current.addEventListener('touchmove', onTouchMove);
                    mountRef.current.addEventListener('touchend', onTouchEnd);
                }

                // Animation loop
                const animate = () => {
                    frameId = requestAnimationFrame(animate);

                    if (isAutoRotating && !isDragging) {
                        sphereMesh.rotation.y += 0.003;
                    }

                    renderer.render(scene, camera);
                };
                animate();

                // Handle resize
                const handleResize = () => {
                    if (mountRef.current && camera && renderer) {
                        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
                        camera.updateProjectionMatrix();
                        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
                    }
                };
                window.addEventListener('resize', handleResize);

                return () => {
                    window.removeEventListener('resize', handleResize);
                    if (inactivityTimer.current) {
                        clearTimeout(inactivityTimer.current);
                    }
                    if (mountRef.current) {
                        mountRef.current.removeEventListener('mousedown', onMouseDown);
                        mountRef.current.removeEventListener('mousemove', onMouseMove);
                        mountRef.current.removeEventListener('mouseup', onMouseUp);
                        mountRef.current.removeEventListener('mouseleave', onMouseLeave);
                        mountRef.current.removeEventListener('touchstart', onTouchStart);
                        mountRef.current.removeEventListener('touchmove', onTouchMove);
                        mountRef.current.removeEventListener('touchend', onTouchEnd);
                    }
                };
            } catch (error) {
                console.error('Error initializing Three.js scene:', error);
                setWebGLSupported(false);
                return () => { };
            }
        };

        const cleanup = init();

        return () => {
            if (frameId) {
                cancelAnimationFrame(frameId);
            }
            if (inactivityTimer.current) {
                clearTimeout(inactivityTimer.current);
            }
            if (mountRef.current && mountRef.current.firstChild) {
                try {
                    mountRef.current.removeChild(mountRef.current.firstChild);
                } catch (e) {
                    console.warn('Error removing canvas:', e);
                }
            }
            if (cleanup) cleanup();
            if (sceneRef.current) {
                sceneRef.current.traverse((object) => {
                    if (object.geometry) object.geometry.dispose();
                    if (object.material) {
                        if (object.material.map) object.material.map.dispose();
                        object.material.dispose();
                    }
                });
            }
        };
    }, [isAutoRotating, isDragMode, webGLSupported]);

    // Clean up timer on unmount
    useEffect(() => {
        return () => {
            if (inactivityTimer.current) {
                clearTimeout(inactivityTimer.current);
            }
        };
    }, []);

    const handleCenterButtonClick = () => {
        if (webGLSupported) {
            setIsDragMode(true);
            setIsAutoRotating(false);
            setShowCenterButton(false);
            setIsUserInteracting(true);
        }
    };

    const handleZoomIn = () => {
        if (cameraRef.current && zoomLevel.current < 3) {
            zoomLevel.current += 0.2;
            cameraRef.current.fov = 75 / zoomLevel.current;
            cameraRef.current.updateProjectionMatrix();
        }
    };

    const handleZoomOut = () => {
        if (cameraRef.current && zoomLevel.current > 0.5) {
            zoomLevel.current -= 0.2;
            cameraRef.current.fov = 75 / zoomLevel.current;
            cameraRef.current.updateProjectionMatrix();
        }
    };

    const toggleDragMode = () => {
        if (!webGLSupported) return;

        setIsDragMode(!isDragMode);
        if (!isDragMode) {
            setIsAutoRotating(false);
            setShowCenterButton(false);
        } else {
            setIsAutoRotating(true);
            setShowCenterButton(true);
        }
    };

    return (
        <Section>
            <Title>Try it yourself</Title>
            <ViewerContainer fallback={!webGLSupported}>
                {webGLSupported ? (
                    <>
                        <Canvas ref={mountRef} />

                        <CenterOverlay show={showCenterButton && !isUserInteracting}>
                            <TryItButton onClick={handleCenterButtonClick}>
                                <i className="bi bi-hand-index"></i>
                                Try it yourself
                            </TryItButton>
                        </CenterOverlay>

                        <DragInstruction show={isDragMode && isUserInteracting}>
                            <i className="bi bi-cursor-fill"></i>
                            Drag to explore
                        </DragInstruction>

                        <ControlsContainer>
                            <ControlButton onClick={handleZoomIn} title="Zoom In">
                                <i className="bi bi-zoom-in"></i>
                            </ControlButton>

                            <ControlButton onClick={handleZoomOut} title="Zoom Out">
                                <i className="bi bi-zoom-out"></i>
                            </ControlButton>

                            <ControlButton
                                onClick={toggleDragMode}
                                className={isDragMode ? 'active' : ''}
                                title={isDragMode ? 'Auto Rotate' : 'Drag Mode'}
                            >
                                <i className={isDragMode ? 'bi bi-play-fill' : 'bi bi-hand-index'}></i>
                            </ControlButton>
                        </ControlsContainer>
                    </>
                ) : (
                    <FallbackContainer>
                        <FallbackTitle>360° Room View</FallbackTitle>
                        <FallbackText>
                            Experience our immersive virtual tours with interactive 360° room exploration.
                            This preview shows the beautiful room design that can be fully explored with
                            WebGL-enabled browsers.
                        </FallbackText>
                        <FallbackText style={{ opacity: 0.7, fontSize: '0.9rem' }}>
                            For the full interactive experience, please use a modern browser with WebGL support.
                        </FallbackText>
                    </FallbackContainer>
                )}
            </ViewerContainer>
        </Section>
    );
};

export default TryYourself; 
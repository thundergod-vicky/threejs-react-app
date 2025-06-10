import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import room1Image from '../assets/room1.jpg';
import officeVideo from '../assets/office_sample.mp4';

const Section = styled.section`
  background-color: #0a0a0a;
  padding: 80px 0;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: white;
  text-align: center;
  font-weight: 400;
  margin-bottom: 80px;
  letter-spacing: -0.02em;
`;

const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ShowcaseItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 40px;
  background: #1a1a1a;
  cursor: grab;
  transition: all 0.3s ease;
  
  &:active {
    cursor: grabbing;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
  
  &:hover .hover-overlay {
    opacity: 1;
    visibility: visible;
  }
  
  &:hover .step-in-button {
    opacity: 1;
  }
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  
  canvas {
    width: 100% !important;
    height: 100% !important;
    border-radius: 12px;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  z-index: 10;
  pointer-events: none;
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 15;
  pointer-events: none;
  border-radius: 12px;
`;

const StepInButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 1.5rem 3rem;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 4px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  opacity: 0;
  z-index: 20;
  pointer-events: auto;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%) translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
`;

const ContentSection = styled.div`
  color: white;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 20px;
  color: white;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
  
  strong {
    color: white;
  }
`;

const GreatForSection = styled.div`
  margin-top: 30px;
`;

const GreatForTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 20px;
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
  margin-bottom: 12px;
  position: relative;
  padding-left: 20px;
  
  &::before {
    content: '•';
    color: #4a90e2;
    position: absolute;
    left: 0;
    font-size: 1.2rem;
  }
`;

const ShowCase = () => {
  const leftCanvasRef = useRef(null);
  const rightCanvasRef = useRef(null);
  const leftSceneRef = useRef(null);
  const rightSceneRef = useRef(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handleStepIn = (isVideo) => {
    navigate('/roomview');
  };

  const initializeScene = (canvasRef, sceneRef, isVideo = false) => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

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
      // Fallback to canvas if WebGL fails
      canvasRef.current.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; background: #333;">WebGL not supported</div>';
      return () => { };
    }

    // Create sphere for 360° background
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    let material;
    let sphereMesh;

    if (isVideo) {
      // Create video element
      const video = document.createElement('video');
      video.src = officeVideo;
      video.crossOrigin = 'anonymous';
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      videoRef.current = video;

      // Create video texture
      const videoTexture = new THREE.VideoTexture(video);
      videoTexture.minFilter = THREE.LinearFilter;
      videoTexture.magFilter = THREE.LinearFilter;
      videoTexture.format = THREE.RGBAFormat;

      material = new THREE.MeshBasicMaterial({ map: videoTexture });

      // Start video playback
      video.play().catch(error => {
        console.log('Auto-play was prevented:', error);
        // Auto-play was prevented, user interaction required
      });
    } else {
      // Load static image texture
      const textureLoader = new THREE.TextureLoader();
      material = new THREE.MeshBasicMaterial();

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
    }

    sphereMesh = new THREE.Mesh(geometry, material);
    scene.add(sphereMesh);

    // Animation variables
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let autoRotate = true;
    let rotationSpeed = isVideo ? 0.003 : 0.002;

    // Mouse/touch event handlers
    const onPointerDown = (event) => {
      isDragging = true;
      autoRotate = false;
      const clientX = event.clientX !== undefined ? event.clientX : event.touches[0].clientX;
      const clientY = event.clientY !== undefined ? event.clientY : event.touches[0].clientY;
      previousMousePosition = { x: clientX, y: clientY };

      // Play video on interaction if it's paused
      if (isVideo && videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(error => {
          console.log('Video play failed:', error);
        });
      }
    };

    const onPointerMove = (event) => {
      if (!isDragging) return;

      const clientX = event.clientX !== undefined ? event.clientX : event.touches[0].clientX;
      const clientY = event.clientY !== undefined ? event.clientY : event.touches[0].clientY;

      const deltaMove = {
        x: clientX - previousMousePosition.x,
        y: clientY - previousMousePosition.y,
      };

      sphereMesh.rotation.y += deltaMove.x * 0.005;
      sphereMesh.rotation.x += deltaMove.y * 0.005;

      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
      // Resume auto-rotation after 2 seconds of no interaction
      setTimeout(() => {
        if (!isDragging) {
          autoRotate = true;
        }
      }, 2000);
    };

    // Add event listeners
    const canvas = renderer.domElement;
    canvas.addEventListener('mousedown', onPointerDown);
    canvas.addEventListener('mousemove', onPointerMove);
    canvas.addEventListener('mouseup', onPointerUp);
    canvas.addEventListener('mouseleave', onPointerUp);
    canvas.addEventListener('touchstart', onPointerDown);
    canvas.addEventListener('touchmove', onPointerMove);
    canvas.addEventListener('touchend', onPointerUp);

    // Animation loop
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      if (autoRotate && !isDragging) {
        sphereMesh.rotation.y += rotationSpeed;
      }

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

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onPointerDown);
      canvas.removeEventListener('mousemove', onPointerMove);
      canvas.removeEventListener('mouseup', onPointerUp);
      canvas.removeEventListener('mouseleave', onPointerUp);
      canvas.removeEventListener('touchstart', onPointerDown);
      canvas.removeEventListener('touchmove', onPointerMove);
      canvas.removeEventListener('touchend', onPointerUp);
      if (canvasRef.current && renderer.domElement) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      if (material.map) material.map.dispose();
      renderer.dispose();

      // Clean up video
      if (isVideo && videoRef.current) {
        videoRef.current.pause();
        videoRef.current = null;
      }
    };
  };

  useEffect(() => {
    const cleanupLeft = initializeScene(leftCanvasRef, leftSceneRef, false);
    const cleanupRight = initializeScene(rightCanvasRef, rightSceneRef, true);

    return () => {
      if (cleanupLeft) cleanupLeft();
      if (cleanupRight) cleanupRight();
    };
  }, []);

  return (
    <Section>
      <Container>
        <Title>Showcase</Title>

        <ShowcaseGrid>
          <ShowcaseItem>
            <ImageContainer>
              <CanvasContainer ref={leftCanvasRef} />
              <ImageOverlay>The Overlook Hotel</ImageOverlay>
              <HoverOverlay className="hover-overlay" />
              <StepInButton
                className="step-in-button"
                onClick={() => handleStepIn(false)}
              >
                Step In
              </StepInButton>
            </ImageContainer>

            <ContentSection>
              <SectionTitle>360° Images</SectionTitle>
              <Description>
                A basic version of a <strong>virtual tour with images</strong> in a hotel room. Including
                four different lighting scenes with smooth transitions, branding
                elements, auto-rotation toggle, and show/hide user interface
                functionality.
              </Description>

              <GreatForSection>
                <GreatForTitle>Great for:</GreatForTitle>
                <GreatForList>
                  <GreatForItem>Small locations</GreatForItem>
                  <GreatForItem>Airbnb hosts and real estate</GreatForItem>
                  <GreatForItem>Showing the space without people</GreatForItem>
                </GreatForList>
              </GreatForSection>
            </ContentSection>
          </ShowcaseItem>

          <ShowcaseItem>
            <ImageContainer>
              <CanvasContainer ref={rightCanvasRef} />
              <ImageOverlay>Van 't Hof Foodgroup</ImageOverlay>
              <HoverOverlay className="hover-overlay" />
              <StepInButton
                className="step-in-button"
                onClick={() => handleStepIn(true)}
              >
                Step In
              </StepInButton>
            </ImageContainer>

            <ContentSection>
              <SectionTitle>360° Videos</SectionTitle>
              <Description>
                A basic version of a <strong>virtual tour with videos</strong> in a production line of a
                dutch spring roll manufacturing company Van 't Hof. Including five
                different viewpoints with smooth transitions, branding elements, auto-rotation toggle, and show/hide user interface functionality.
              </Description>

              <GreatForSection>
                <GreatForTitle>Great for:</GreatForTitle>
                <GreatForList>
                  <GreatForItem>Large locations</GreatForItem>
                  <GreatForItem>Hospitality and event venues</GreatForItem>
                  <GreatForItem>Showing the space with people</GreatForItem>
                </GreatForList>
              </GreatForSection>
            </ContentSection>
          </ShowcaseItem>
        </ShowcaseGrid>
      </Container>
    </Section>
  );
};

export default ShowCase; 
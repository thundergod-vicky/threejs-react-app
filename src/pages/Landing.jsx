import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import Header from '../components/Header';
import UseCases from '../components/UseCases';
import ShowCase from '../components/ShowCase';
import TryYourself from '../components/TryYourself';
import Partners from '../components/Partners';
import 'bootstrap-icons/font/bootstrap-icons.css';
import room1Image from '../assets/room1.jpg';
import ShareAnywhere from '../components/ShareAnywhere';
import Results from '../components/Results';
import Process from '../components/ProcessWork';
import VirtualTourPackages from '../components/VirtualTourPackages';
import FAQ from '../components/FAQ';
import CountdownOffer from '../components/CountdownOffer';
import ContactUs from '../components/ContactUs';
import OurStory from '../components/OurStory';
import Footer from '../components/Footer';
// Global styles to fix viewport issues
const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://db.onlinewebfonts.com/c/ceaab1dfa6450f0f06256aa859882c8d?family=Oregon+LDO+Book');
      
      * {
        box-sizing: border-box;
      }
      
      
      html, body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        width: 100%;
        font-family: 'Oregon LDO Book', sans-serif;
      }
      
      #root {
        width: 100%;
        overflow-x: hidden;
        font-family: 'Oregon LDO Book', sans-serif;
      }
      
      * {
        font-family: 'Oregon LDO Book', sans-serif !important;
      }
    `}
  />
);

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

const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  position: relative;
  background: ${props => props.fallback ? `url(${room1Image}) center/cover` : 'black'};
  overflow: hidden;
`;

const FallbackOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: ${props => props.show ? 'block' : 'none'};
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  max-width: 600px;
  color: white;
  z-index: 1;
`;

const Title = styled.h1`
  color: rgba(35, 35, 35, 0.9);
  padding: 0.5rem 1rem;
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 1.2;
`;

const Description = styled.p`
  color: rgba(35, 35, 35, 0.9);
  padding: 1rem;
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const LearnMoreButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: black;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
`;

const Landing = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check WebGL support first
    if (!detectWebGL()) {
      console.warn('WebGL is not supported. Falling back to static background.');
      setWebGLSupported(false);
      return;
    }

    let scene, camera, renderer, sphereMesh;
    let frameId;

    const init = () => {
      try {
        console.log('Initializing Three.js scene...');

        // Scene setup
        scene = new THREE.Scene();
        sceneRef.current = scene;
        console.log('Scene created');

        // Camera setup
        camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.set(0, 0, 0.1);
        console.log('Camera created');

        // Renderer setup with better error handling
        renderer = new THREE.WebGLRenderer({
          antialias: true,
          powerPreference: "high-performance"
        });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Check if mountRef.current exists
        if (!mountRef.current) {
          console.error('mountRef.current is null');
          setWebGLSupported(false);
          return;
        }

        mountRef.current.appendChild(renderer.domElement);
        console.log('Renderer created and added to DOM');

        // Create sphere for 360 background
        const geometry = new THREE.SphereGeometry(1000, 60, 40);
        geometry.scale(-1, 1, 1);
        console.log('Geometry created');

        // Load and apply texture
        const textureLoader = new THREE.TextureLoader();

        // Create a fallback material first
        let material = new THREE.MeshBasicMaterial({});

        // Add error handling for texture loading
        const texture = textureLoader.load(
          room1Image,
          (texture) => {
            console.log('Texture loaded successfully');
            console.log('Texture dimensions:', texture.image.width, 'x', texture.image.height);
            // Update material with texture
            material.map = texture;
            material.needsUpdate = true;
          },
          (progress) => {
            console.log('Loading progress:', progress);
          },
          (error) => {
            console.error('Error loading texture:', error);
            console.log('Using fallback color material');
          }
        );

        sphereMesh = new THREE.Mesh(geometry, material);
        scene.add(sphereMesh);
        console.log('Sphere mesh created and added to scene');

        // Handle window resize
        const handleResize = () => {
          if (camera && renderer) {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
          }
        };
        window.addEventListener('resize', handleResize);

        // Animation
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };
        let rotationSpeed = 0.001;

        const onMouseDown = (event) => {
          isDragging = true;
          previousMousePosition = {
            x: event.clientX,
            y: event.clientY,
          };
        };

        const onMouseMove = (event) => {
          if (isDragging) {
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
          isDragging = false;
        };

        if (mountRef.current) {
          mountRef.current.addEventListener('mousedown', onMouseDown);
          mountRef.current.addEventListener('mousemove', onMouseMove);
          mountRef.current.addEventListener('mouseup', onMouseUp);
          mountRef.current.addEventListener('mouseleave', onMouseUp);
        }

        const animate = () => {
          frameId = requestAnimationFrame(animate);
          if (!isDragging) {
            sphereMesh.rotation.y += rotationSpeed; // Continuous automatic rotation when not dragging
          }
          renderer.render(scene, camera);
        };
        animate();

        return () => {
          window.removeEventListener('resize', handleResize);
          if (mountRef.current) {
            mountRef.current.removeEventListener('mousedown', onMouseDown);
            mountRef.current.removeEventListener('mousemove', onMouseMove);
            mountRef.current.removeEventListener('mouseup', onMouseUp);
            mountRef.current.removeEventListener('mouseleave', onMouseUp);
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
      if (mountRef.current && mountRef.current.firstChild) {
        try {
          mountRef.current.removeChild(mountRef.current.firstChild);
        } catch (e) {
          console.warn('Error removing canvas:', e);
        }
      }
      if (cleanup) cleanup();
      if (sceneRef.current) {
        // Clean up scene
        sceneRef.current.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (object.material.map) object.material.map.dispose();
            object.material.dispose();
          }
        });
      }
    };
  }, [webGLSupported]);

  const handleLearnMore = () => {
    navigate('/IslandExp');
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <Container fallback={!webGLSupported} id="home">
        {webGLSupported && <div ref={mountRef} />}
        <FallbackOverlay show={!webGLSupported} />
        <TextOverlay>
          <Title>Immersive 360° solutions for spaces worth experiencing</Title>
          <Description>
            Our interactive, high-quality virtual tours eliminate doubt and boost direct bookings.
            Designed for independent spaces, simple to implement, ready in days.
          </Description>
          <LearnMoreButton onClick={handleLearnMore}>Learn more</LearnMoreButton>
        </TextOverlay>
      </Container>
      <div id="use-cases">
        <UseCases />
      </div>
      <TryYourself />
      <Partners />
      <div id="references">
        <ShowCase />
      </div>
      <ShareAnywhere />
      <Results />
      <div id="process">
        <Process />
      </div>
      <div id="pricing">
        <VirtualTourPackages />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <CountdownOffer />
      <div id="contact">
        <ContactUs />
      </div>
      <OurStory />
      <Footer />
    </>
  );
};

export default Landing;

import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import * as THREE from 'three';
import room1Image from '../assets/room1.jpg';

const Section = styled.section`
  position: relative;
  height: 55vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 40px;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 40px;
  color: white;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 30px;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30px;
  
  .highlight {
    color: #fbbf24;
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Source = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  margin: 0;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: underline;
    
    &:hover {
      color: rgba(255, 255, 255, 0.9);
    }
  }
`;

const Results = () => {
    const canvasRef = useRef(null);
    const sceneRef = useRef(null);

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

    return (
        <Section>
            <BackgroundContainer ref={canvasRef} />
            <Overlay />
            <Content>
                <Title>Proven results</Title>
                <Description>
                    Studies show that interactive 360° visualizations can increase
                    booking rates by <span className="highlight">up to 67%*</span>. We bring these results to
                    independent spaces with character.
                </Description>
                <Source>
                    *Source: <a href="#" target="_blank" rel="noopener noreferrer">thevivestrg.com</a>
                </Source>
            </Content>
        </Section>
    );
};

export default Results; 
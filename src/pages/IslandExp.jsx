import React, { useState } from 'react';
import styled from '@emotion/styled';
import IslandMain from '../components/IslandMain';
import Island1 from '../components/Islands/Island1';
import Island2 from '../components/Islands/Island2';
import Island3 from '../components/Islands/Island3';

// Styled component for transition container
const TransitionContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: #000;
`;

const IslandWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${props => props.isVisible ? 1 : 0};
    transition: opacity 0.5s ease-in-out;
    pointer-events: ${props => props.isVisible ? 'all' : 'none'};
`;

const IslandExp = () => {
    const [currentView, setCurrentView] = useState('main'); // 'main', 'island1', 'island2', 'island3'
    const [currentIsland, setCurrentIsland] = useState(1); // For tracking which island we're on
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleExperienceSelect = (experience) => {
        if (experience === 'island') {
            setIsTransitioning(true);

            // Start fade out
            setTimeout(() => {
                setCurrentView('island1');
                setCurrentIsland(1);

                // End transition after fade in completes
                setTimeout(() => {
                    setIsTransitioning(false);
                }, 250); // Half of the transition duration for fade in
            }, 250); // Half of the transition duration for fade out
        } else if (experience === 'house') {
            // Future implementation for house experience
            console.log('House experience selected');
        }
    };

    const handleBackToMain = () => {
        setIsTransitioning(true);

        // Start fade out
        setTimeout(() => {
            setCurrentView('main');
            setCurrentIsland(1);

            // End transition after fade in completes
            setTimeout(() => {
                setIsTransitioning(false);
            }, 250); // Half of the transition duration for fade in
        }, 250); // Half of the transition duration for fade out
    };

    const handleIslandNavigation = (direction) => {
        if (isTransitioning) return; // Prevent navigation during transition

        setIsTransitioning(true);

        // Start fade out
        setTimeout(() => {
            // Change the island after fade out
            if (direction === 'next') {
                if (currentIsland === 1) {
                    setCurrentView('island2');
                    setCurrentIsland(2);
                } else if (currentIsland === 2) {
                    setCurrentView('island3');
                    setCurrentIsland(3);
                }
                // If on island 3, could loop back to island 1 or add more islands
            } else if (direction === 'prev') {
                if (currentIsland === 2) {
                    setCurrentView('island1');
                    setCurrentIsland(1);
                } else if (currentIsland === 3) {
                    setCurrentView('island2');
                    setCurrentIsland(2);
                }
                // If on island 1, could go to last island or stay
            }

            // End transition after fade in completes
            setTimeout(() => {
                setIsTransitioning(false);
            }, 250); // Half of the transition duration for fade in
        }, 250); // Half of the transition duration for fade out
    };

    return (
        <TransitionContainer>
            <IslandWrapper isVisible={currentView === 'main' && !isTransitioning}>
                <IslandMain onExperienceSelect={handleExperienceSelect} />
            </IslandWrapper>

            <IslandWrapper isVisible={currentView === 'island1' && !isTransitioning}>
                <Island1 onNavigate={handleIslandNavigation} onBack={handleBackToMain} />
            </IslandWrapper>

            <IslandWrapper isVisible={currentView === 'island2' && !isTransitioning}>
                <Island2 onNavigate={handleIslandNavigation} onBack={handleBackToMain} />
            </IslandWrapper>

            <IslandWrapper isVisible={currentView === 'island3' && !isTransitioning}>
                <Island3 onNavigate={handleIslandNavigation} onBack={handleBackToMain} />
            </IslandWrapper>
        </TransitionContainer>
    );
};

export default IslandExp; 
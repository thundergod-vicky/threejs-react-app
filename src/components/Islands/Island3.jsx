import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

// Import assets
import video3 from '../../assets/video3.mp4';
import ambientAudio from '../../assets/chirping-birds-ambience-217410.mp3';

// Styled Components
const IslandContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background: #000;
    overflow: hidden;
`;

const VideoBackground = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
`;

const UIOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    pointer-events: none;
`;

const BackButton = styled.button`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        top: 15px;
        left: 15px;
        width: 44px;
        height: 44px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        top: 10px;
        left: 10px;
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
`;

const InfoButton = styled.button`
    position: absolute;
    top: 20px;
    right: 80px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        top: 15px;
        right: 70px;
        width: 44px;
        height: 44px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        top: 10px;
        right: 60px;
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
`;

const MuteButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        top: 15px;
        right: 15px;
        width: 44px;
        height: 44px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        top: 10px;
        right: 10px;
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
`;

const MapContainer = styled.div`
    position: absolute;
    bottom: ${props => props.footerVisible ? '220px' : '40px'};
    left: 40px;
    width: 280px;
    height: 200px;
    background: transparent;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    pointer-events: all;
    backdrop-filter: blur(10px);
    transition: bottom 0.3s ease;

    @media (max-width: 768px) {
        width: 240px;
        height: 170px;
        left: 20px;
        padding: 15px;
        bottom: ${props => props.footerVisible ? '200px' : '20px'};
    }

    @media (max-width: 480px) {
        width: 200px;
        height: 140px;
        left: 10px;
        padding: 10px;
        bottom: ${props => props.footerVisible ? '180px' : '10px'};
        border-radius: 10px;
    }
`;

const MapSVG = styled.svg`
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const InfoPanel = styled.div`
    position: absolute;
    bottom: ${props => props.show ? '0' : '-200px'};
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(20px);
    padding: 30px 40px;
    color: white;
    pointer-events: all;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    transition: bottom 0.3s ease;
    z-index: 15;

    @media (max-width: 768px) {
        padding: 20px 25px;
        bottom: ${props => props.show ? '0' : '-180px'};
    }

    @media (max-width: 480px) {
        padding: 15px 20px;
        bottom: ${props => props.show ? '0' : '-160px'};
    }
`;

const InfoContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 40px;
    align-items: start;
    position: relative;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 200px;
        gap: 20px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 15px;
    }
`;

const InfoTextSection = styled.div`
    flex: 1;
`;

const InfoTitle = styled.h2`
    font-size: 32px;
    font-weight: 400;
    margin: 0 0 20px 0;
    color: white;

    @media (max-width: 768px) {
        font-size: 24px;
        margin: 0 0 15px 0;
    }

    @media (max-width: 480px) {
        font-size: 20px;
        margin: 0 0 10px 0;
    }
`;

const InfoDescription = styled.p`
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
    color: rgba(255, 255, 255, 0.9);

    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 1.5;
    }

    @media (max-width: 480px) {
        font-size: 13px;
        line-height: 1.4;
    }
`;

const InfoDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);

    @media (max-width: 768px) {
        gap: 15px;
        padding-left: 15px;
    }

    @media (max-width: 480px) {
        gap: 10px;
        padding-left: 0;
        border-left: none;
        padding-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
`;

const DetailItem = styled.div`
    text-align: left;
`;

const DetailLabel = styled.div`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 5px;
`;

const DetailValue = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: white;
`;

const FooterControls = styled.div`
    position: absolute;
    right: 0;
    top: -60px;
    display: flex;
    gap: 15px;
    pointer-events: all;

    @media (max-width: 768px) {
        top: -50px;
        gap: 10px;
    }

    @media (max-width: 480px) {
        position: relative;
        top: 15px;
        right: auto;
        justify-content: center;
        margin-top: 15px;
        gap: 8px;
    }
`;

const NavigationContainer = styled.div`
    display: flex;
    gap: 15px;
`;

const NavButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }

    @media (max-width: 768px) {
        width: 44px;
        height: 44px;
        font-size: 16px;
    }

    @media (max-width: 480px) {
        width: 40px;
        height: 40px;
        font-size: 14px;
    }
`;

const HelpButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        width: 44px;
        height: 44px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
`;

const Island3 = ({ onNavigate, onBack }) => {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const audioRef = useRef(null);
    const [currentLocation, setCurrentLocation] = useState(0);
    const [showFooter, setShowFooter] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [audioLoaded, setAudioLoaded] = useState(false);

    const islandData = {
        title: "Arctic Seabirds",
        description: "Isokari serves as a crucial nesting ground for countless seabirds migrating through the Baltic Sea. The island's protected status ensures these magnificent creatures have a safe haven to rest, breed, and continue their ancient journeys across the northern waters.",
        date: "22/08/2025",
        time: "09:15",
        coordinates: "60.7089°N, 21.0241°E"
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
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

    const goBack = () => {
        if (onBack) {
            onBack();
        } else {
            navigate('/IslandExp');
        }
    };

    const toggleFooter = () => {
        setShowFooter(!showFooter);
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

    const nextLocation = () => {
        if (onNavigate) {
            onNavigate('next');
        }
    };

    const prevLocation = () => {
        if (onNavigate) {
            onNavigate('prev');
        }
    };

    return (
        <IslandContainer>
            <VideoBackground
                ref={videoRef}
                src={video3}
                autoPlay
                loop
                muted
                playsInline
            />

            <UIOverlay>
                <BackButton onClick={goBack}>
                    ←
                </BackButton>

                <InfoButton onClick={toggleFooter}>
                    ≡
                </InfoButton>

                <MuteButton onClick={toggleMute}>
                    {isMuted ? '🔇' : '🔊'}
                </MuteButton>

                <MapContainer footerVisible={showFooter}>
                    <MapSVG viewBox="0 0 280 160">
                        {/* Finland Map Outline */}
                        <g fill="#E8F4F8" stroke="#B0D4E3" strokeWidth="1">
                            <path d="M50 20 L50 120 L80 140 L120 130 L150 110 L180 100 L200 80 L210 60 L200 40 L180 30 L160 25 L140 20 L120 15 L100 10 L80 15 Z" />
                            <path d="M90 25 L95 35 L100 30 L105 40 L110 35 L115 45 L120 40 L125 50 L130 45 L135 55 L140 50 L145 60 L150 55 L155 65 L160 60 L165 70 L170 65 L175 75 L180 70 L185 80 L190 75 L195 85 L200 80" />
                        </g>

                        {/* Location Marker - Different position for Island 3 */}
                        <circle cx="110" cy="60" r="4" fill="#FF6B35" stroke="white" strokeWidth="2" />
                        <circle cx="110" cy="60" r="8" fill="rgba(255, 107, 53, 0.3)" />

                        {/* Marker dot animation */}
                        <circle cx="110" cy="60" r="2" fill="#FF6B35">
                            <animate attributeName="r" values="2;6;2" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                        </circle>
                    </MapSVG>
                </MapContainer>

                <InfoPanel show={showFooter}>
                    <InfoContent>
                        <InfoTextSection>
                            <InfoTitle>{islandData.title}</InfoTitle>
                            <InfoDescription>{islandData.description}</InfoDescription>
                        </InfoTextSection>
                        <InfoDetails>
                            <DetailItem>
                                <DetailLabel>DATE</DetailLabel>
                                <DetailValue>{islandData.date}</DetailValue>
                            </DetailItem>
                            <DetailItem>
                                <DetailLabel>TIME</DetailLabel>
                                <DetailValue>{islandData.time}</DetailValue>
                            </DetailItem>
                            <DetailItem>
                                <DetailLabel>LOCATION</DetailLabel>
                                <DetailValue>{islandData.coordinates}</DetailValue>
                            </DetailItem>
                        </InfoDetails>

                        <FooterControls>
                            <HelpButton>
                                ?
                            </HelpButton>
                            <NavigationContainer>
                                <NavButton onClick={prevLocation}>
                                    ←
                                </NavButton>
                                <NavButton onClick={nextLocation}>
                                    →
                                </NavButton>
                            </NavigationContainer>
                        </FooterControls>
                    </InfoContent>
                </InfoPanel>
            </UIOverlay>
        </IslandContainer>
    );
};

export default Island3; 
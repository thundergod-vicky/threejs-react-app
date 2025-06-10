import React, { useState } from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  background-color: #0a0a0a;
  padding: 10px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: white;
  text-align: center;
  font-weight: 400;
  margin-bottom: 80px;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 60px;
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FAQIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 300;
  color: ${props => props.isOpen ? '#fbbf24' : 'rgba(255, 255, 255, 0.6)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
`;

const FAQItem = styled.div`
  background: rgba(15, 15, 15, 0.6);
  border: 1px solid ${props => props.isOpen ? '#fbbf24' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
  &:hover {
    border-color: ${props => props.isOpen ? '#fbbf24' : 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    
    .faq-icon {
      color: #fbbf24 !important;
      transform: ${props => props.isOpen ? 'rotate(45deg) scale(1.1)' : 'rotate(0deg) scale(1.1)'} !important;
    }
  }
`;

const FAQHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  background: ${props => props.isOpen ? 'rgba(251, 191, 36, 0.05)' : 'transparent'};
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 25px 30px;
  }
`;

const FAQQuestion = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
  margin: 0;
  transition: color 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding-right: 20px;
  }
`;

const FAQContent = styled.div`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.isOpen ? 1 : 0};
  transform: translateY(${props => props.isOpen ? '0' : '-10px'});
`;

const FAQAnswer = styled.div`
  padding: 0 40px 40px 40px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.7;
  
  p {
    margin: 0 0 20px 0;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0 30px 30px 30px;
    font-size: 0.95rem;
  }
`;

const faqData = [
    {
        id: 1,
        question: "What is a 360° Virtual Tour?",
        answer: `A 360° virtual tour allows potential guests to explore your spaces from every angle, just as if they were physically there.

Unlike traditional photos, our tours let users look up, down, and all around, giving them a genuine sense of your space's dimensions, lighting, and atmosphere.

Each tour works seamlessly on mobile, desktop, and even VR headsets.`
    },
    {
        id: 2,
        question: "How does this increase bookings?",
        answer: `Virtual tours significantly reduce booking uncertainty by giving guests complete transparency about your space. Studies show they can increase direct bookings by up to 67% while reducing cancellations and disappointment.

Guests who view a virtual tour are more likely to book and become repeat customers because they know exactly what to expect. This builds trust and confidence in your property before they arrive.`
    },
    {
        id: 3,
        question: "How disruptive is the process?",
        answer: `Our process is designed to be minimally disruptive to your operations. The entire capture process typically takes 2-4 hours depending on your space size.

We work around your schedule and can often capture during off-peak hours or between bookings. No special preparation is needed beyond ensuring the space is clean and well-lit.

The final product is delivered within 14 days with zero additional effort required from you.`
    },
    {
        id: 4,
        question: "How do we integrate this into our website?",
        answer: `Integration is simple and works with any website platform. We provide you with a simple embed code that works just like adding a YouTube video.

Our tours are responsive and work perfectly on all devices without requiring any special plugins or downloads. We also provide technical support and can assist with the integration process if needed.

The tours load quickly and are optimized for SEO, helping improve your website's search rankings.`
    }
];

const FAQ = () => {
    const [openItems, setOpenItems] = useState(new Set([1])); // First item open by default

    const toggleItem = (id) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    return (
        <Section>
            <Container>
                <Title>Frequently Asked Questions</Title>

                <FAQList>
                    {faqData.map((item) => {
                        const isOpen = openItems.has(item.id);
                        return (
                            <FAQItem
                                key={item.id}
                                isOpen={isOpen}
                                onClick={() => toggleItem(item.id)}
                            >
                                <FAQHeader isOpen={isOpen}>
                                    <FAQQuestion isOpen={isOpen}>
                                        {item.question}
                                    </FAQQuestion>
                                    <FAQIcon isOpen={isOpen} className="faq-icon">
                                        +
                                    </FAQIcon>
                                </FAQHeader>

                                <FAQContent isOpen={isOpen}>
                                    <FAQAnswer>
                                        {item.answer.split('\n\n').map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                    </FAQAnswer>
                                </FAQContent>
                            </FAQItem>
                        );
                    })}
                </FAQList>
            </Container>
        </Section>
    );
};

export default FAQ; 
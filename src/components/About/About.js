import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../styles/typography';
import { baseSize } from '../../styles/constants';
import media from '../../styles/break-points';

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    ${media.maxWidth.mobile`
        padding-top: ${baseSize * 1}px;
    `};
`;
const AboutContentContainer = styled.div`
    width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-bottom: ${baseSize * 4}px;

    ${media.maxWidth.tablet`width: 65%;`};
    ${media.maxWidth.mobile`
        width: 80%;
        margin-bottom: ${baseSize * 2}px;
    `};
`;
const ImgContainer = styled.div`
    width: 100%;
    padding-bottom: ${baseSize * 2}px;
`;
const Img = styled.img`
    display: block;
    height: auto;
    max-width: 100%;
`;
const ParagraphWithPadding = styled(Paragraph)`padding-bottom: ${baseSize * 2}px;`;

const About = () => (
    <AboutContainer>
        <AboutContentContainer>
            <ParagraphWithPadding>.</ParagraphWithPadding>
            <ImgContainer>
                <Img src="static/raw-media/waltz.jpg" alt="waltz" />
            </ImgContainer>
        </AboutContentContainer>
    </AboutContainer>
);

export default About;

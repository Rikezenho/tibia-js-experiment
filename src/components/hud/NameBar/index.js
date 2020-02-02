import React from 'react';
import borderedText from '../../../styles/borderedText';
import styled from 'styled-components';

const Container = styled.div`
    width: 64px;
    position: absolute;
    bottom: 115%;
    left: -60%;
    text-align: center;
`;

const Name = styled(borderedText)`
    color: ${({ color }) => color};
    text-align: center;
    font-weight: bold;
    padding-bottom: 3px;
`;

const LifeBar = styled.div`
    width: 40px;
    background: #000;
    border: 1px solid #000;
    position: relative;
    display: inline-block;
`;

const LifeBarColor = styled.div`
    background: ${({ color }) => color};
    height: 4px;
    width: ${({ calculatedSize }) => calculatedSize ? `${calculatedSize}%` : '100%'};
`;

export default (props) => {
    const {
        name,
        currentHealth,
        health
    } = props;

    const percentage = currentHealth / health * 100;
    let lifeBarColor = '#00C103';
    if (percentage <= 90 && percentage >= 70) {
        lifeBarColor = '#89a17f';
    }
    if (percentage < 70 && percentage >= 20) {
        lifeBarColor = '#c4c400';
    }
    if (percentage < 20 && percentage >= 10) {
        lifeBarColor = '#8a463b';
    }
    if (percentage < 10) {
        lifeBarColor = '#230e0b';
    }

    return <Container>
        <Name { ...{ color: lifeBarColor }}>{ name }</Name>
        <LifeBar>
            <LifeBarColor {...{ color: lifeBarColor, calculatedSize: percentage }} />
        </LifeBar>
    </Container>;
};
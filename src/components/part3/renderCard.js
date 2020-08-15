import React from 'react';
import { CardPortLocation } from '../../components/icons/index';
import { FakeData } from './fakeData/fakeData';
import { ConverData } from './convertData';
import styled, { css } from 'styled-components';
import { flexCenter } from '../../styles/styles';
export default function RenderCard({ data = FakeData }) {
  const result = ConverData(data);

  const StyledPortCardsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 4rem;
    width: 65rem;
  `;
  const StyledRenderPorts = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: flex-end;
    align-items: flex-start;
    width: 20rem;
    cursor: pointer;
    height: 25.5rem;
    transition: ease-out 0.2s;
    ${(props) =>
      props.type === 'other-ports'
        ? css`
            margin-bottom: 0rem;
          `
        : css`
            margin-bottom: 5rem;
          `}
    &:hover {
      transform: scale(1.02);
    }
  `;
  const StyledPortImageFilter = styled.div`
    width: 100%;
    position: absolute;
    height: 100%;
    border-radius: 8px;
    background: linear-gradient(178.07deg, #ffffff 2.08%, #000000 68.44%);
    opacity: 0.48;
  `;

  const StyledPortImageDiv = styled.div`
    width: 20rem;
    position: absolute;
    z-index: -1;
    overflow: hidden;
    border-radius: 8px;
    height: 25.5rem;
  `;
  const StyledPortImage = styled.img`
    border-radius: 8px;
    width: 100%;
    background-image: ${(props) => props.image};
  `;

  const StyledFirstPorts = styled.div``;

  const StyledPortOrder = styled.div`
    font-weight: 600;
    color: #ffffff;
    font-size: 56px;
    opacity: 0.53;
    margin-left: 1rem;
    margin-bottom: 1rem;
  `;
  const StyledPortLocation = styled.div`
    ${flexCenter}
    color: white;
    font-size: 14px;
    line-height: 0px;
    opacity: 0.85;
    margin-left: 1rem;
  `;

  const StyledPortName = styled.div`
    font-weight: 600;
    color: white;
    z-index: 1;
    font-size: 2rem;
    margin-left: 1rem;
  `;
  const StyledPortDescription = styled.div`
    color: white;
    z-index: 1;
    width: 70%;
    margin: 0 0 1rem 1rem;
  `;

  //TODO POPULAR PORTS PART ISN'T FINISHED YET

  return (
    <StyledPortCardsContainer>
      {result.map((item) => {
        console.log(item.type);
        return (
          <StyledRenderPorts type={item.type}>
            <StyledPortImageFilter />

            <StyledPortImageDiv>
              <StyledPortImage src={item.image} />
            </StyledPortImageDiv>

            <StyledPortOrder>#{item.order}</StyledPortOrder>

            <StyledPortLocation>
              <CardPortLocation />
              {item.location}
            </StyledPortLocation>

            <StyledPortName>{item.port}</StyledPortName>

            <StyledPortDescription>{item.description}</StyledPortDescription>
          </StyledRenderPorts>
        );
      })}
    </StyledPortCardsContainer>
  );
}

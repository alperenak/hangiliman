import React, { useState, useEffect } from 'react';
import Background from '../../assets/images/part3.png';
import Captain from '../../assets/images/captain.png';
import MobilePortCard from './mobilPostCard';
import RenderCard from './renderCard';
import {
  SmallSizes,
  MediumSizes,
  RegularSizes,
  LargeSizes,
  LightSizes,
  LovelySizes,
} from '../../helpers/mediaQueries';
import styled from 'styled-components';
import { flexCenter, flexColumn } from '../../styles/styles';
export default function Part3() {
  // if we are have data from database. I gonna use this.

  const portData = useState([]);

  useEffect(() => {
    // TODO
    // ---> onscroll olduğunda kaptanlı gemi hareket edecek
    // const container = document.getElementById("container")
    // container.addEventListener("scroll", () => {
    // });
  }, []);

  const StyledPart3 = styled.div`
    position: relative;
  `;

  const StyledCaptainShip = styled.div`
    position: absolute;
    z-index: 1;
    width: 25rem;
  `;

  const StyledCaptainShipImage = styled.img.attrs({ src: Captain })`
    position: absolute;
    z-index: 1;
    width: 100%;
    ${LovelySizes} {
      position: absolute;
      z-index: 1;
      width: 25rem;
      left: -7rem;
    }
  `;

  const StyledBackgroundDiv = styled.div`
    position: absolute;
    z-index: -1;
    min-width: 1500px;
    ${RegularSizes} {
      margin-left: -14rem;
    }
    ${LightSizes} {
      margin-left: -25rem;
    }
    ${SmallSizes} {
      margin-left: -35rem;
    }
  `;
  const StyledBackgroundImage = styled.img.attrs({ src: Background })`
    width: 100%;
    min-height: 1290px;
  `;

  const StyledPart3Main = styled.div`
    ${flexCenter}
    width: 100%;
    height: 1200px;
  `;
  const StyledPopularPorts = styled.div`
    ${flexColumn}
    justify-content: center;
    align-items: center;
    z-index: 2;
  `;
  const StyledPopularPortsTitle = styled.h1`
    font-weight: 600;
    color: white;
  `;
  const StyledPopularWord = styled.a`
    font-weight: 900;
  `;
  const StyledMoreButton = styled.div`
    ${flexCenter}
    color: black;
    width: 12rem;
    height: 3.5rem;
    cursor: pointer;
    background-color: white;
    font-weight: bold;
    border-radius: 8px;
    z-index: 55;
    transition: 0.5s;
    &:hover {
      -webkit-box-shadow: 0px 8px 31px -3px rgba(0, 0, 0, 0.23);
      -moz-box-shadow: 0px 8px 31px -3px rgba(0, 0, 0, 0.23);
      box-shadow: 0px 8px 31px -3px rgba(0, 0, 0, 0.23);
    }
  `;

  // TODO POPULAR PORTS ISN'T FINISHED YET
  return (
    <StyledPart3>
      {/* captain with ship */}

      <StyledCaptainShip>
        <StyledCaptainShipImage />
      </StyledCaptainShip>

      <StyledBackgroundDiv>
        <StyledBackgroundImage />
      </StyledBackgroundDiv>

      <StyledPart3Main>
        <StyledPopularPorts>
          <StyledPopularPortsTitle>
            <StyledPopularWord>Popüler</StyledPopularWord> Limanlar
          </StyledPopularPortsTitle>

          {/* The component have prop (name:data) but we can't use it because we haven't any data from database yet. */}

          {/* <MobilePortCard  /> */}
          <RenderCard />
          <StyledMoreButton>Daha fazla</StyledMoreButton>
        </StyledPopularPorts>
      </StyledPart3Main>
    </StyledPart3>
  );
}

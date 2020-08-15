import {
  LargeSizes,
  MediumSizes,
  SmallSizes,
  RegularSizes,
  LightSizes,
} from '../../helpers/mediaQueries';
import styled from 'styled-components';
import { flexCenter } from '../../styles/styles';
import HeaderPNG from '../../assets/images/header1.png';
import Logo from '../../assets/images/logo.png';

export const StyledHeader = styled.header`
  position: relative;
  height: 100%;
  width: 100%;
  ${LightSizes} {
    height: 125vh;
  }
`;

export const StyledHeaderImageFilter = styled.div`
  position: absolute;
  z-index: -15;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.45;
`;

export const StyledHeaderBackground = styled.div`
  position: absolute;
  z-index: -55;
  display: flex;
  overflow: hidden;
  min-width: 1000px;
  width: 100%;
  height: 100vh;

  ${LightSizes} {
    height: 125vh;
  }
  ${SmallSizes} {
    width: 100%;
    margin-left: -5rem;
  }
`;

export const StyledHeaderBackgroundImage = styled.img.attrs({ src: HeaderPNG })`
  width: 100%;
  ${RegularSizes} {
    width: 100%;
    margin-left: -14rem;
  }

  ${LightSizes} {
    width: 100%;
    height: 125vh;
    margin-left: -40%;
  }
`;

export const StyledLogo = styled.div`
  position: absolute;
  left: 25px;
  top: 25px;
`;

export const StyledLogoImage = styled.img.attrs({ src: Logo })`
  width: 200px;
`;

export const StyledHeroTitle = styled.div`
  z-index: 55;
  padding: 14rem 0px 0px 7rem;
  ${RegularSizes} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10rem 0px 0px 0rem;
  }
`;
export const StyledHeroTitleH1 = styled.h1`
  font-weight: 700;
  font-size: 32px;
  color: white;
  ${RegularSizes} {
    width: 80%;
    text-align: center;
  }
`;

export const StyledHeroTitleHangiliman = styled.a`
  font-weight: 700;
  font-size: 32px;
  color: #6c92fd;
`;

export const StyledHeroTitleYatTekne = styled.p`
  font-weight: 300;
  font-size: 28px;
  color: white;
  opacity: 0.7;
`;

export const StyledListingShipsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  max-width: 75rem;
  width: 100%;
  ${LargeSizes} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 20rem;
  }

  ${MediumSizes} {
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 20rem;
  }
  ${RegularSizes} {
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20rem;
  }
`;
export const StyledSelectBoxes = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0rem 0px 0px 7rem;
  max-width: 49rem;
  width: 95%;
  height: 7rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.498039);
  z-index: 78;
  ${MediumSizes} {
    margin: 0;
  }
  ${RegularSizes} {
    width: 300px;
  }
`;

export const StyledResultButton = styled.div`
  ${flexCenter}
  color: white;
  width: 14rem;
  height: 4rem;
  border-radius: 8px;
  background-color: #6c92fd;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #7597f7;
  }
  ${LargeSizes} {
    margin: 2rem 0 0 42rem;
  }

  ${MediumSizes} {
    position: absolute;
    top: 7rem;
    right: 2.5%;
  }
  ${RegularSizes} {
    position: relative;
    top: 0;
    right: 0;
    margin: 2rem 0;
  }
`;

export const StyledAnchorIconDiv = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  bottom: 0;
`;
export const StyledAnchorIconImage = styled.div`
  ${flexCenter}
  bottom: 1rem;
  width: 60px;
  height: 60px;
  cursor: pointer;
  &:hover {
    -webkit-animation: shake 4s linear infinite;
    -moz-animation: shake 4s linear infinite;
    animation: shake 1s ease-in infinite;
  }
  @-moz-keyframes shake {
    0% {
      -webkit-transform: rotate(90deg);
      transform: rotate(20deg);
    }
    50% {
      -webkit-transform: rotate(-90deg);
      transform: rotate(-20deg);
    }
    100% {
      transform: rotate(20deg);
    }
  }

  @-webkit-keyframes shake {
    0% {
      -webkit-transform: rotate(90deg);
      transform: rotate(20deg);
    }
    50% {
      -webkit-transform: rotate(-90deg);
      transform: rotate(-20deg);
    }
    100% {
      transform: rotate(20deg);
    }
  }

  @keyframes shake {
    0% {
      -webkit-transform: rotate(90deg);
      transform: rotate(20deg);
    }
    50% {
      -webkit-transform: rotate(-90deg);
      transform: rotate(-20deg);
    }
    100% {
      transform: rotate(20deg);
    }
  }
`;
export const StyledHrefPart2 = styled.a``;

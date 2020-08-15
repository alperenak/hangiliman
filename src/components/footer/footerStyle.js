import styled from 'styled-components';
import { flexColumn, flexCenter } from '../../styles/styles';
import FooterImage from '../../assets/images/footer.png';
import Logo from '../../assets/images/logo.png';

export const StyledFooter = styled.div`
  ${flexColumn}
  position: relative;
  display: flex;
  height: 600px;
`;
export const StyledFooterBackground = styled.div`
  display: flex;
`;
export const StyledFooterBackgroundImage = styled.img.attrs({ src: FooterImage })`
  position: absolute;
  height: 100%;
  z-index: -1;
`;

export const StyledFooterMain = styled.div`
  ${flexCenter}
  padding-top: 10rem;
  display: flex;
  height: 500px;
  width: 100%;
`;
export const StyledFooterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 900px;
  justify-content: space-between;
`;

export const StyledFooterSocialMedias = styled.div`
  ${flexCenter}
  height: 50px;
  width: 100%;
`;

export const StyledSocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;
export const StyledFooterCopyright = styled.div`
  ${flexCenter}
  height: 50px;
  margin-top: 1rem;
  width: 100%;
  opacity: 0.48;
  color: white;
  font-weight: 400;
`;
export const StyledFooterCopyrightBolder = styled.a`
  font-weight: bold;
`;

export const StyledFooterLogo = styled.div`
  position: absolute;
  left: 2rem;
  bottom: 2rem;
`;
export const StyledFooterLogoImage = styled.img.attrs({ src: Logo })`
  width: 200px;
`;

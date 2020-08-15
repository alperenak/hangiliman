import React from 'react';
import FooterTitle from './footerTitle';
import { Facebook } from '../../components/icons/index';
import { Instagram } from '../../components/icons/index';
import { Twitter } from '../../components/icons/index';
import { PhoneFooter } from '../../components/icons/index';
import { Mail } from '../../components/icons/index';
import styled from 'styled-components';
import {
  StyledFooter,
  StyledFooterBackground,
  StyledFooterBackgroundImage,
  StyledFooterLogo,
  StyledSocialLinks,
  StyledFooterLogoImage,
  StyledFooterMain,
  StyledFooterContainer,
  StyledFooterSocialMedias,
  StyledFooterCopyright,
  StyledFooterCopyrightBolder,
} from './footerStyle';
export default function Footer() {
  return (
    <StyledFooter>
      {/* background */}

      <StyledFooterBackground>
        <StyledFooterBackgroundImage />
      </StyledFooterBackground>

      {/* footer main */}

      <StyledFooterMain>
        {/* footer container */}

        <StyledFooterContainer>
          {/* footer title Hangi Liman */}

          <FooterTitle
            title={'Hangiliman'}
            subtitles={['Hakkında', 'Sitemap', 'Üyelikler', 'Ürün Hizmetleri']}
          />

          {/* footer title Şirket */}

          <FooterTitle
            title={'Şirket'}
            subtitles={['Hakkında', 'Bizimle Çalış', 'Website', 'Marka']}
          />

          {/* footer title Politika */}

          <FooterTitle
            title={'Politika'}
            subtitles={['Gizlilik ve Güvenlik', 'Politikalar', 'Şartlar', 'Lisanslama']}
          />
        </StyledFooterContainer>
      </StyledFooterMain>

      {/* footer social platforms */}

      <StyledFooterSocialMedias>
        {/* Footer social links */}

        <StyledSocialLinks>
          {/* Mail icon */}

          <Mail />

          {/* Phone icon */}

          <PhoneFooter />

          {/* facebook icon */}

          <Facebook />

          {/* instagram icon */}

          <Instagram />

          {/* twitter icon */}

          <Twitter />
        </StyledSocialLinks>
      </StyledFooterSocialMedias>

      {/* footer copyright */}

      <StyledFooterCopyright>
        <StyledFooterCopyrightBolder>hangiliman</StyledFooterCopyrightBolder>• Tüm hakları saklıdır
        2020 ©
      </StyledFooterCopyright>

      {/* footer logo */}

      <StyledFooterLogo>
        <StyledFooterLogoImage />
      </StyledFooterLogo>
    </StyledFooter>
  );
}

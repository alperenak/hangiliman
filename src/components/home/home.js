import React, { useEffect, useState } from 'react';
import SelectBoxesBar from './header/selectboxes';
import { Anchor } from '../../components/icons/index';
import '../../App.css';
import {
  StyledHeader,
  StyledHeaderImageFilter,
  StyledHeaderBackground,
  StyledHeaderBackgroundImage,
  StyledLogo,
  StyledLogoImage,
  StyledHeroTitle,
  StyledHeroTitleH1,
  StyledHeroTitleHangiliman,
  StyledHeroTitleYatTekne,
  StyledListingShipsContainer,
  StyledSelectBoxes,
  StyledResultButton,
  StyledAnchorIconDiv,
  StyledHrefPart2,
} from './homeStyle';

export default function Home() {
  return (
    <StyledHeader>
      {/* filter */}

      <StyledHeaderImageFilter />

      {/* background */}

      <StyledHeaderBackground>
        <StyledHeaderBackgroundImage />
      </StyledHeaderBackground>

      {/* logo */}

      <StyledLogo>
        <StyledLogoImage />
      </StyledLogo>

      {/* titles */}

      <StyledHeroTitle>
        {/* Eşsiz denizler... Titles */}

        <StyledHeroTitleH1>
          Eşsiz denizlere
          <StyledHeroTitleHangiliman> hangiliman</StyledHeroTitleHangiliman>
          'dan çıkacaksınız?
        </StyledHeroTitleH1>

        {/* Yat,tekne... Titles */}

        <StyledHeroTitleYatTekne>Yat, tekne bizi bekle.</StyledHeroTitleYatTekne>
      </StyledHeroTitle>
      <StyledListingShipsContainer>
        {/* select boxes */}

        <StyledSelectBoxes>
          <SelectBoxesBar type="location" />
          <SelectBoxesBar type="rudder" />
          <SelectBoxesBar type="calendar" />
        </StyledSelectBoxes>

        {/* result button */}

        <StyledResultButton>Sonuçları Listele</StyledResultButton>
      </StyledListingShipsContainer>

      {/* anchor icon */}

      <StyledAnchorIconDiv>
        <StyledHrefPart2 href="#part2">
          <Anchor />
        </StyledHrefPart2>
      </StyledAnchorIconDiv>
    </StyledHeader>
  );
}

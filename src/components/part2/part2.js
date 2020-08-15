import React from 'react';
import Ship from '../../assets/images/ship.png';
import styled from 'styled-components';
import { LargeSizes, MediumSizes, LightSizes, RegularSizes } from '../../helpers/mediaQueries';

export default function Part2() {
  const StyledPart2 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    ${MediumSizes} {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 150vh;
    }
    ${RegularSizes} {
      flex-direction: column;
      height: 125vh;
    }
    ${LightSizes} {
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 160vh;
    }
  `;
  const StyledPart2ParagraphDiv = styled.div`
    width: 600px;
    ${MediumSizes} {
      order: 2;
      max-width: 600px;
      width: 80%;
    }
  `;
  const StyledPart2ParagraphH1 = styled.h1`
    font-weight: bold;
    margin: 2rem 0;
    ${MediumSizes} {
      font-weight: bold;
      font-size: 26px;
      margin: 2rem 0;
    }
  `;
  const StyledPart2Hangiliman = styled.a`
    color: #6c92fd;
  `;
  const StyledPart2Paragraph = styled.div`
    color: rgba(0, 0, 0, 0.6);
  `;
  const StyledPart2ShipImageDiv = styled.div`
    ${MediumSizes} {
      order: 1;
    }
  `;
  const StyledPart2ShipImageImage = styled.img.attrs({ src: Ship })`
    width: 507px;
    height: 500px;
    ${MediumSizes} {
      width: 450px;
      height: 450px;
    }
  `;
  return (
    <StyledPart2>
      {/* What is HangiLiman */}

      <StyledPart2ParagraphDiv>
        <StyledPart2ParagraphH1>
          <StyledPart2Hangiliman>HANGİLİMAN</StyledPart2Hangiliman> Nedir?
        </StyledPart2ParagraphH1>
        <StyledPart2Paragraph>
          Though, the objectives of discussions of the referential arguments can be neglected in
          most cases, it should be realized that the matter of the formal action is of a great
          interest. To be quite frank, the influence of the relation between the structure
          absorption and the productivity boost results Though, the objectives of discussions of the
          referential arguments can be neglected in most cases, it should be realized that the
          matter of the formal action is of a great interest. To be quite frank, the influence of
          the relation between the structure absorption and the productivity boost results Though,
          the objectives of discussions of the referential arguments can be neglected in most cases,
          it should be realized that the matter of the formal action is of a great interest. To be
          quite frank, the influence of the relation between the structure absorption and the
          productivity boost results
        </StyledPart2Paragraph>
      </StyledPart2ParagraphDiv>

      {/* Ship Illustiration */}

      <StyledPart2ShipImageDiv>
        <StyledPart2ShipImageImage />
      </StyledPart2ShipImageDiv>
    </StyledPart2>
  );
}

import React from 'react';
import styled from 'styled-components';
import { flexColumn, flexCenter } from '../../styles/styles';

const StyledFooterTitlesCard = styled.div`
  ${flexCenter}
  ${flexColumn}
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const StyledFooterTitle = styled.div`
  color: white;
  cursor: pointer;
  font-size: 25px;
  font-weight: 600;
  padding-bottom: 1rem;

  /* footer titles when hover do opacity down */
  &:hover {
    opacity: 0.8;
  }
`;
const StyledFooterSubtitles = styled.div`
  font-weight: 400;
  color: white;
  cursor: pointer;
  font-size: 18px;
  line-height: 36px;
  &:hover {
    opacity: 0.8;
  }
`;

// title contains String subtitles contains Array

export default function FooterTitle({ title, subtitles }) {
  return (
    // footer titles card

    <StyledFooterTitlesCard>
      {/* footer titles map  */}

      <StyledFooterTitle>{title}</StyledFooterTitle>
      {
        // subtitles Arrays mapping

        subtitles.map((item, index) => {
          return <StyledFooterSubtitles key={index}>{item}</StyledFooterSubtitles>;
        })
      }
    </StyledFooterTitlesCard>
  );
}

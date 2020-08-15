import React, { useState, Component } from 'react';
import { Location } from '../../../components/icons/index';
import { Calendar } from '../../../components/icons/index';
import { Calendar1 } from '../../../components/icons/index';
import { Rudder } from '../../../components/icons/index';
import { Dropdown } from '../../../components/icons/index';
import styled, { css } from 'styled-components';
import { RegularSizes } from '../../../helpers/mediaQueries';

const StyledLocationBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 14rem;
  height: 5rem;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.498039);
  ${RegularSizes} {
    width: 80%;
    ${(props) =>
      props.rudder || props.calendar
        ? css`
            display: none;
          `
        : css`
            display: flex;
          `}
  }
`;
const StyledBoxHead = styled.div`
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 14px;
  color: black;
  opacity: 0.48;
  flex: 4;
  background: rgba(196, 196, 196, 0.25);
`;
const StyledBoxMain = styled.div`
  flex: 7;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  font-weight: 600;
  position: relative;
`;
export default function SelectBoxesBar({ type }) {
  return (
    // get type homejs and I give prop of TypeButton Component
    <TypeButton typeButton={type} />
  );
}
function TypeButton({ typeButton }) {
  // if type button Location render some

  if (typeButton === 'location') {
    return (
      <StyledLocationBox>
        <StyledBoxHead>
          <Location />
          Konum
        </StyledBoxHead>
        <StyledBoxMain>Manavgat, Antalya</StyledBoxMain>
      </StyledLocationBox>
    );
  }

  // if type button Rudder  render some
  else if (typeButton === 'rudder') {
    return (
      <StyledLocationBox rudder>
        <StyledBoxHead>
          <Rudder />
          Liman
        </StyledBoxHead>
        <StyledBoxMain>
          Side, A. Kent Limanı <Dropdown />
        </StyledBoxMain>
      </StyledLocationBox>
    );
  }

  // if type button Calendar render some
  else if (typeButton === 'calendar') {
    return (
      <StyledLocationBox calendar>
        <StyledBoxHead>
          <Calendar />
          Tarih
        </StyledBoxHead>
        <StyledBoxMain>
          19 Tem - 2 Ağu <Calendar1 />
        </StyledBoxMain>
      </StyledLocationBox>
    );
  }
}

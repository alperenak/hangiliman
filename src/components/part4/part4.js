import React, { useState } from 'react';
import Phone from '../../components/icons/Phone';
import styled from 'styled-components';
import { flexCenter, flexColumn } from '../../styles/styles';

const StyledPart4 = styled.div`
  ${flexCenter}
  ${flexColumn}
  height: 120vh;
  width: 100%;
`;
const StyledContactTitleDiv = styled.div``;
const StyledContactTitle = styled.div`
  font-weight: 600;
  font-size: 32px;
  width: 25rem;
  line-height: 48px;
  text-align: center;
  color: #2b2b2b;
`;
const StyledContactParagraphDiv = styled.div`
  font-weight: 500;
  font-size: 18px;
  padding: 1rem 0;
  color: #727272;
`;
const StyledContactParagraph = styled.p``;
const StyledContactPhoneInputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 2rem 0;
  width: 27rem;
`;
const StyledContactInput = styled.input`
  width: 15rem;
  height: 3rem;
  border-radius: 8px;
  padding-left: 2rem;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.17);
  position: absolute;
`;
const StyledContactFormSubmit = styled.div`
  ${flexCenter}
  width: 10rem;
  color: white;
  font-weight: 600;
  height: 3rem;
  position: absolute;
  right: 0;
  border-radius: 8px;
  cursor: pointer;
  background-color: #6c92fd;
  &:hover {
    background-color: #7597f7;
  }
`;
export default function Part4() {
  const [value, setValue] = useState('');

  function onSubmit() {
    alert('its work');
  }

  return (
    <StyledPart4>
      {/* Yüzdün yüzdün...  titles*/}

      <StyledContactTitleDiv>
        <StyledContactTitle>Yüzdün yüzdün kuyruğuna geldin.</StyledContactTitle>
      </StyledContactTitleDiv>

      {/* Sana ulaşabilmemiz için... titles */}

      <StyledContactParagraphDiv>
        <StyledContactParagraph>
          Sana ulaşabilmemiz için alta bir numara bırak.
        </StyledContactParagraph>
      </StyledContactParagraphDiv>

      {/* Contact Form */}

      <StyledContactPhoneInputDiv>
        {/* Phone icon */}

        <Phone />

        {/* Input for Number */}

        <StyledContactInput
          placeholder="+90"
          pattern="[A-Za-z]{3}"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {/* Submit button  */}

        <StyledContactFormSubmit onClick={() => onSubmit()}>Gönder</StyledContactFormSubmit>
      </StyledContactPhoneInputDiv>
    </StyledPart4>
  );
}

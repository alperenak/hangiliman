import React from 'react';
import Home from './home/home';
import Part2 from './part2/part2';
import Part3 from './part3/part3';
import Part4 from './part4/part4';
import Footer from './footer/footer';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  max-width: 2000px;
`;
export default function Index() {
  return (
    <StyledContainer>
      {/* Home rendered */}

      <Home />

      {/* Part 2 rendered */}

      <Part2 />

      {/* Part3 rendered */}

      <Part3 />

      {/* Part 4 rendered */}

      <Part4 />

      {/* Footer rendered */}

      <Footer />
    </StyledContainer>
  );
}

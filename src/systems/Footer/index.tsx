import React from 'react';
import { Container, Root, TitleTypo } from './styled';

const Footer = () => {
  return (
    <Root>
      <Container>
        <TitleTypo level={4}>&copy; 니르바나</TitleTypo>
      </Container>
    </Root>
  );
};

export default Footer;

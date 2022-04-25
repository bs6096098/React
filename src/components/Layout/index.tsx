
import { ReactNode } from 'react';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

import Product from '../Product'
import { Container, Wrapper } from './styles';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC = () => {
  return (
    <Container>

      <Header></Header>

      <Wrapper>
       <Product>

       </Product>
      </Wrapper>

      <Footer></Footer>

    </Container>
  );
};

export default Layout;

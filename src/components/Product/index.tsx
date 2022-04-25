import { ReactNode } from "react";
import React from "react";
import tshirtImage from "../../assets/tshirt.png";
import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";
import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

interface ProductProps {
  children: ReactNode;
}

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>
          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="tittle">Compra garantida!</p>
        <p className="description">
          Receba o produto que voce está esperando ou devolvemos o seu dinhero
        </p>
      </span>
      <span>
        <p className="tittle">Garantia do vendedor</p>
        <p className="description">1 ano</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>

      <br />
      <br />
      Cores disponíveis: <br />
      - Azul<br />
      - Verde <br />
      - Vermelho <br />
      - Rosa <br />
      - Preto <br />
      <br />
      Para devoluções nos mande uma mensagem
    </p>
  </Description>
);

export default Product;

/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactNode } from "react";
import React from "react";

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstalmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from "./styles";


const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo | 90 vendidos </Condition>

      <Row>
        <h1>Kit Camisetas Lisas Simples</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando Normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstalmentsInfo>em 3x de R$ 11,67 </InstalmentsInfo>
      </PriceCard>

      <StockStatus>Estoque disponível!</StockStatus>

      <MethodCard>
        <CheckIcon />
        <div>
          <span className="title">Frete grátis</span>
          <span className="title">Beneficio</span>
          <a href="#" className="more">
            Ver mais opções
          </a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Comprar Agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>Compra garantida, receba o produto ou peça devolução</p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;

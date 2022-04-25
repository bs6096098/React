import { ReactNode } from 'react';
import React from 'react';

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More
} from './styles';

interface SellerInfoProps {
  children: ReactNode;
}

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o vendedor </Title>

      <LocationCard>
        <LocationIcon />

        <div>
          <p>Localização</p>
          <strong>São Paulo, São Paulo</strong>
        </div>

      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li/>
          <li/>
          <li/>
          <li/>
          <li className="active"/>
        </ReputationThermometer>

        <ReputationRow>
          <div>
           <strong>547</strong>
           <span>Vendas nos ultimos 2 anos</span>
          </div>
          <div>
           <strong>
             <SupportIcon/>
           </strong>
           <span>Presta um bom atendimento</span>
          </div>
          <div>
           <strong>
             <ClockIcon/>
           </strong>
           <span>Vendas nos ultimos 2 anos</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais informações sobre o vendedor</More>


    </Container>
  );
};

export default SellerInfo;

import React from 'react';
import { Title } from '../../../components/ui/title.style';
import { Div } from './homeAbout.style';
import { offersArr } from './homeAbout.config';
import { IOffers } from './homeAbout.type';

const HomeAbout: React.FC = () => {
  return (
    <Div>
      <Title gray bold section>What we offer</Title>
      <p>You are about to explore an inventory of over 700,000 active rental listings, so you can bet that wherever you want to live, we can find a place for you.</p>
      <Div offersContainer>
        {
          offersArr.map((el: IOffers,index: number) =>
            <Div offers key={index}>
              <Title sub primary bold>{el.title}</Title>
              <img src={el.icon} alt={el.altText}/>
            </Div>
          )
        }
      </Div>
    </Div>
  );
}

export default HomeAbout;

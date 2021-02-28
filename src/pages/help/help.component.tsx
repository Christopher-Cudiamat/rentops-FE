import React, { useState } from 'react';
import { 
  Accordion,
  AccordionButton,
  AccordionPanel } from '../../components/ui/accordion.style';
import { Paragraph } from '../../components/ui/p.style';
import { Title } from '../../components/ui/title.style';
import { helpFaqsArray } from './help.config';


const Help = () => {

  const [selected, setSelected] = useState(-1);
  console.log(selected);
  return (
    <div>
      <Title page bold>
        How can we help you?
      </Title>
      {
        helpFaqsArray.map((el: any, index: number) => 
          <Accordion key={`${index}-${el.title}`}>
            <AccordionButton   onClick={() => setSelected(index)}>
              {el.title}
            </AccordionButton>
            <AccordionPanel showPanel={index === selected}>
              <Paragraph>{el.text}</Paragraph>
            </AccordionPanel>
          </Accordion>
        )
      }
      
    </div>
  );
}

export default Help;

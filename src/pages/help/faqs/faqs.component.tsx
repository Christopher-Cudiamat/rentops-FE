import React, { useState } from 'react';
import { 
  Accordion, 
  AccordionButton, 
  AccordionPanel } from '../../../components/ui/accordion.style';
import { Paragraph } from '../../../components/ui/p.style';
import { faqsArray } from './faqs.config';
import { DivFaqs } from './faqs.style';
import { IFaqsObj } from './faqs.type';


const Faqs: React.FC = () => {

  const [selected, setSelected] = useState(-1);
 
  return (
    <DivFaqs>
      {
        faqsArray.map((el: IFaqsObj, index: number) => 
          <Accordion key={`${index}-${el.title}`}>
            <AccordionButton  
              rotateArrow={index === selected}
              onClick={() => setSelected(index)}
            >
              {el.title}
            </AccordionButton>
            <AccordionPanel 
              showPanel={index === selected}>
              <Paragraph>{el.text}</Paragraph>
            </AccordionPanel>
          </Accordion>
        )
      }
    </DivFaqs>
  );
}

export default Faqs;

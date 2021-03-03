import React from 'react';
import { 
  TabListStyled, 
  TabPanelStyled, 
  TabsStyled, 
  TabStyled 
} from '../../../components/ui/tabs.style';
import useSelectedIndex from '../../../hooks/useSelectedIndex';
import Faqs from '../faqs/faqs.component';
import Privacy from '../privacy/privacy.component';
import TermsAndConditions from '../termsAndConditions/termsAndConditions.component';
import { helpTabsArr } from './halpTabs.config';



const HelpTabs: React.FC = () => {

  const [selected,setSelected] = useSelectedIndex();

  return (
    <TabsStyled>
      <TabListStyled>
        {
          helpTabsArr.map((el:string, index: number) =>
            <TabStyled
              active={selected === index} 
              onClick={() => setSelected(index)}>
              {el}
            </TabStyled>
          )
        }
      </TabListStyled>

      <TabPanelStyled>
        <Faqs />
      </TabPanelStyled>
      <TabPanelStyled>
        <TermsAndConditions />
      </TabPanelStyled>
      <TabPanelStyled>
        <Privacy />
      </TabPanelStyled>
    </TabsStyled>
  );
}

export default HelpTabs;

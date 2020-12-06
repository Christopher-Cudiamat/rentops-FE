import React from 'react';
import banner from '../../../../assets/images/header-hero-image.jpg';
import { Button } from '../../../../styledComponents/button.style';
import { Select, Option } from '../../../../styledComponents/select.style';

import { Div } from './headerForm.style';

const HeaderForm = () => {
  return (
    <Div>
      <form>
        <h1>We'll guide you home</h1>
        <h2>Apartments, condos and more...</h2>
        <Select>
          <Option>Where do oyu want to live</Option>
          <Option>dasd</Option>
          <Option>dasd</Option>
          <Option>dsadas</Option>
        </Select>
        <Select>
          <Option>Any price</Option>
          <Option>324234</Option>
          <Option>dasd</Option>
          <Option>dsadas</Option>
        </Select>
        <Select>
          <Option>1 bedroom</Option>
          <Option>dasd</Option>
          <Option>dasd</Option>
          <Option>dsadas</Option>
        </Select>
        <Button primary>Search</Button>
      </form>
    </Div>
  );
}

export default HeaderForm;

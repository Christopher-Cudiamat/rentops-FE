import React from 'react';
import { Button } from "../../../components/ui/button.style"
import { Form } from '../../../components/ui/form.style';
import { Select } from '../../../components/ui/select.style';
import { Option } from '../../../components/ui/option.style';
import { Div } from './homeSearchForm.style';

const HeaderForm: React.FC = () => {
  return (
    <Div>
      <Form>
        <h1>We'll guide you home</h1>
        <h2>Apartments, condos and more...</h2>
        <Select>
          <Option selected>Where do you want to live</Option>
          <Option>dasd</Option>
          <Option>dasd</Option>
          <Option>dsadas</Option>
        </Select>
        <Select>
          <Option selected>Any price</Option>
          <Option>324234</Option>
          <Option>dasd</Option>
          <Option>dsadas</Option>
        </Select>
        <Select>
          <Option selected>1 bedroom</Option>
          <Option>dasd</Option>
          <Option>dasd</Option>
          <Option>dsadas</Option>
        </Select>
        <Button 
        secondary 
        widthMobile={"100%"}
        widthTablet={"90%"}
        widthLaptop={"50%"}>Search</Button>
      </Form>
    </Div>
  );
}

export default HeaderForm;

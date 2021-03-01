import React from 'react';
import renter from "../../../assets/icon/renter.svg";
import phone from "../../../assets/icon/phone.svg"
;import email from "../../../assets/icon/email.svg"
import { Container } from './propertyContactPerson.style';
import { IPropertyContactPersonProps } from './PropertyContactPerson.type';


const PropertyContactPerson: React.FC<IPropertyContactPersonProps> = ({
  contactInfo
}) => {


  return (
    <Container>
      <div>
        <img src={renter} alt="user icon"/>
        <div>
          <p>Owner/Agent</p>
          <p>{contactInfo.firstName} {contactInfo.lastName}</p>
        </div>
      </div>
      <div>
        <div>
          <img src={email} alt="contact icon"/>
          <a href={`mailto:${contactInfo.email}`}>
            Email
          </a>
        </div>
        <div>
          <img src={phone} alt="contact icon"/>
          <a href={`tel:${contactInfo.phoneNumber}`}>
            Call
          </a>
        </div>
      </div>
    </Container>
  );
}

export default PropertyContactPerson;

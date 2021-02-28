import React from 'react';
import { 
  Modal,
  ModalCloseIcon,
  ModalsContainer,
  ModalsUnderlay
} from './modals.style';
import { IModalProps } from './modals.type';
import closeIcon from '../../assets/icon/close.svg';


const Modals: React.FC<IModalProps> = ({
  isOpen,
  children,
  setCloseModal
}) => {



  return (
    <ModalsContainer isOpen={isOpen}>
      <ModalsUnderlay  onClick={() => setCloseModal(false)}>
      </ModalsUnderlay>
      <Modal>
        <ModalCloseIcon 
          src={closeIcon} 
          alt="close icon" 
          onClick={() => setCloseModal(false)}
        />
        {children}
      </Modal>
    </ModalsContainer>
  );
}

export default Modals;

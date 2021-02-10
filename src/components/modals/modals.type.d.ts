export interface IModalProps {
  isOpen: boolean,
  children: any,
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>
}
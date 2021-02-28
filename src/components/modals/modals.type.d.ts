export interface IModalProps {
  isOpen: boolean,
  children: React.ReactNode,
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>
}
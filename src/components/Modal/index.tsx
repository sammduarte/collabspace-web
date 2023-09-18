import { ReactNode } from "react";
import { X } from "phosphor-react";

import { Container, Content } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose(): void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const id = "modal";

  function handleOutsideClick(e: any) {
    if (e.target.id === id) onClose();
  }

  return (
    isOpen && (
      <Container id={id} onClick={handleOutsideClick}>
        <Content>
          <X size={20} weight="bold" onClick={onClose} />
          {children}
        </Content>
      </Container>
    )
  );
};

export default Modal;

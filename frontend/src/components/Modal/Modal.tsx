import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  ModalCloseBtn,
  ModalContainer,
  ModalHeader,
  Overlay,
} from "./Modal.styled";
import { closeModal } from "../../redux/modal/modalSlice";
import { selectIsModalOpen, selectModalContent } from "../../redux/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IoClose } from "react-icons/io5";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

export default function Modal() {
  const isOpen = useAppSelector(selectIsModalOpen);
  const modalContent = useAppSelector(selectModalContent);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        dispatch(closeModal());
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      dispatch(closeModal());
    }
  };
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer>
        <ModalHeader></ModalHeader>
        <ModalCloseBtn type="button" onClick={() => dispatch(closeModal())}>
          <IoClose size={24} />
        </ModalCloseBtn>
        {modalContent}
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
}

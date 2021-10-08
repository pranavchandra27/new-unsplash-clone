import { FC } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface ModalProps {
  open: boolean;
  onClose: VoidFunction;
}

const PhotoModal: FC<ModalProps> = (props) => {
  const { open, onClose, children } = props;
  return (
    <div className="modal" style={{ display: open ? "block" : "none" }}>
      {/*  Modal content */}
      <div className="overlay" onClick={onClose}></div>
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <div className="left-icon">
        <span className="icon">
          <BsChevronLeft />
        </span>
      </div>
      <div className="modal-content">
        {children}
      </div>
      <div className="right-icon">
        <span className="icon">
          <BsChevronRight />
        </span>
      </div>
    </div>
  );
};

export default PhotoModal;

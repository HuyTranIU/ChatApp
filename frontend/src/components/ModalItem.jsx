import { Modal } from "antd";
import React from "react";
import DetailItem from "./DetailItem";

const ModalItem = ({
  children,
  icon,
  title,
  showModal,
  handleCancel,
  open,
  isLeave,
}) => {
  return (
    <div>
      <div onClick={showModal}>
        <DetailItem icon={icon} title={title} isLeave />
      </div>
      <Modal
        style={{ top: 200 }}
        open={open}
        onCancel={handleCancel}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
      >
        {children}
      </Modal>
    </div>
  );
};

export default ModalItem;

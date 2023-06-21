import dynamic from "next/dynamic";
import Modal from "@/components/UI/modal/modal";
import { useModalAction, useModalState } from "./modal.context";
const ContactForm = dynamic(() => import("@/components/Contact/Form"));

const ManagedModal = () => {
  const { isOpen, view, data } = useModalState();
  const { closeModal } = useModalAction();

  return (
    <Modal open={isOpen} onClose={closeModal}>
      {view === "CONTACT_FORM" && <ContactForm />}
    </Modal>
  );
};

export default ManagedModal;

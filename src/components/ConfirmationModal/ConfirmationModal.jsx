import css from "./ConfirmationModal.module.css";

export default function ConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <p className={css.text}>
          Are you sure you want to delete this contact?
        </p>
        <div className={css.btn}>
          <button className={css.button} onClick={handleConfirm}>
            Confirm
          </button>
          <button className={css.button} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

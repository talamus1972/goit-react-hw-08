import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success('Contact deleted successfully!!!');
      })
      .catch(() => {
        toast.error('Error deleting contact!');
      });
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <div className={css.text}>
          <span>
            <IoPersonSharp />
          </span>
          <p>{name}</p>
        </div>
        <div className={css.text}>
          <span>
            <FaPhone />
          </span>
          <p>{number}</p>
        </div>
      </div>

      <button className={css.btn} onClick={() => setIsModalOpen(true)}>
        Delete
      </button>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />

    </>
  );
}
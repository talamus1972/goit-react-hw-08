import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps"

export default function Contact({ data: { id, name, number } }) {

  const dispatch = useDispatch()
 
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

      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </>
  );
}

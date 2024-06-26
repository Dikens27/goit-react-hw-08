import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import ContactEditor from '../contactEditor/ContactEditor';
import { AiFillDelete } from 'react-icons/ai';

export default function Contact({ contacts: { id, name, number } }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    return dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success('Contact deleted');
      })
      .cathe(() => {
        toast.error('Sorry, something went wrong.');
      });
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.miniContainer}>
          <div className={css.iconText}>
            <div className={css.icons}>
              <FaUser />
              <FaPhoneAlt />
            </div>
            {isEditing ? (
              <ContactEditor
                initialValueName={name}
                initialValueNumber={number}
                contactId={id}
                onClose={() => setIsEditing(false)}
              />
            ) : (
              <div onClick={() => setIsEditing(true)}>
                <p>{name}</p>
                <p>{number}</p>
              </div>
            )}
          </div>
          <div className={css.iconText}></div>
        </div>
        <button className={css.button} onClick={() => handleDelete()}>
          <AiFillDelete className={css.icon} />
        </button>
      </div>
      <Toaster />
    </>
  );
}

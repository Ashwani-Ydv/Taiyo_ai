
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../utils/store';
import { deleteContact } from '../utils/contactsSlice';

const ContactsList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();

  return (
    <div className="mt-4">
    {contacts.map((contact, index) => (
      <div key={contact.id} className="flex justify-between items-center border border-gray-300 rounded p-4 mb-4 bg-white shadow">
        <li className="text-gray-700 font-medium">
          {contact.firstname}&nbsp;{contact.lastname}&nbsp;
          <span className={`inline-block px-2 py-1 text-xs ${contact.status === 'active' ? 'bg-red-200 text-green-800' : 'bg-green-200 text-red-800'}`}>
            {contact.status}
          </span>
        </li>
        <button 
          onClick={() => dispatch(deleteContact(contact.id))}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
        >
          Delete
        </button>
      </div>
    ))}
  </div>
  );
}

export default ContactsList;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addContact } from '../utils/contactsSlice';

const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstname && lastname && status) {
      dispatch(addContact({
        id: uuidv4(),
        firstname,
        lastname,
        status,
      }));
      setFirstName('');
      setLastName('');
      setStatus('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="inline-grid w-full max-w-md mx-auto">
    <input className="border border-gray-300 p-2 m-2 rounded shadow" value={firstname} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />
    <input className="border border-gray-300 p-2 m-2 rounded shadow" value={lastname} onChange={e => setLastName(e.target.value)} placeholder="Last Name" />
    <div className="flex gap-4 m-2">
      <h1>Status</h1>
      <label className="flex items-center">
        <input type="radio" name="status" value="active" className="mr-2" checked={status === 'active'} onChange={() => setStatus('active')} />
        Active
      </label>
      <label className="flex items-center">
        <input placeholder='Status' type="radio" name="status" value="inactive" className="mr-2" checked={status === 'inactive'} onChange={() => setStatus('inactive')} />
        Inactive
      </label>
    </div>
    <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 m-2 rounded shadow" type="submit">Add Contact</button>
  </form>
  );
}

export default ContactForm;
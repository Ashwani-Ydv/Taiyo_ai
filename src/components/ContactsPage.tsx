import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactsList from '../components/ContactsList';

const ContactsPage: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
    <div className="mb-6 border-b pb-2">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Add New Contact</h1>
      <ContactForm />
    </div>
    <div className="mt-6">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">All Contacts</h1>
      <ContactsList />
    </div>
  </div>
  );
}

export default ContactsPage;

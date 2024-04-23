// This file can contain the implementation to interact with a backend API or a database
// For simplicity, we'll use a mock implementation

// const contacts = [];

const addContact = (contact) => {
  contacts.push(contact);
  return true;
};

const getContacts = () => contacts;

const ContactRepository = {
  addContact,
  getContacts,
};

export default ContactRepository;
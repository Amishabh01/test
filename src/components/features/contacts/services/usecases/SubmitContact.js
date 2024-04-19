

import Contact from '../../data/model/Contact';
import ContactRepository from '../../data/repository/ContactRepository';

export const SubmitContact = async (formData) => {
  try {
    const { name, email,phoneNo, message } = formData;
    const contact = new Contact(name, email,phoneNo, message);
    const success = ContactRepository.addContact(contact);
    return { success };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// export default SubmitContact;
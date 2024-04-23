// import Contact from '../../data/model/Contact';
// import ContactRepository from '../../data/repository/ContactRepository';

// const SubmitContact = async (formData) => {
//   try {
//     const { name, email,phoneNo, message } = formData;
//     const contact = new Contact(name, email,phoneNo, message);
//     const success = ContactRepository.addContact(contact);
//     return { success };
//   } catch (error) {
//     return { success: false, error: error.message };
//   }
// };

// export default SubmitContact;

// src/components/core/Feature-contacts/services/usecases/SubmitContact.js

import React, { useState } from "react";
import { useContactForm } from "../../views/state/useContactForm.js";

const SubmitContact = () => {
  const { formData, isSubmitted, formErrors, handleInputChange, handleSubmit } =
    useContactForm();
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-grey-800 mb-4">
          Connect with our support Team!
        </h2>
        <p className="text-gray-600">
          Fill out your information and an OSSTF representative will reach out
          to you. Have a simple question?
        </p>
      </div>
      <div className="w-full md:w-1/2 p-6 bg-gray-50">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {isSubmitted && (
            <div className="bg-green-100 text-green-800 font-bold p-4 rounded-lg mb-6">
              Form submitted successfully!
            </div>
          )}
          {!isSubmitted && (
            <form className="flex flex-col" onsubmit={handleSubmit}>
              <div className="flex-1 overflow-y-auto">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 md-2"
                />
                {formErrors.name && (
                  <p className="text-red-500 mb-2">{formErrors.name}</p>
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 md-2"
                />
                {formErrors.email && (
                  <p className="text-red-500 mb-2">{formErrors.email}</p>
                )}
                <input
                  type="text"
                  name="phoneNo"
                  placeholder="Phone No"
                  value={formData.phoneNo}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 md-2"
                />
                {formErrors.phoneNo && (
                  <p className="text-red-500 mb-2">{formErrors.phoneNo}</p>
                )}
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 md-2"
                />
                {formErrors.message && (
                  <p className="text-red-500 mb-2">{formErrors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg transition duration-300 mt-4 font-semibold"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmitContact;

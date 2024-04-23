// // src/components/core/Feature-contacts/state/useContactForm.js
// import { FormStore } from '../state/FormStore';
// import { useState } from 'react';

// // Custom hook to manage contact form state and logic
// export const useContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNo: '',
//     message: '',
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // Function to handle input changes in the form fields
//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errors = validateForm(formData);
//     if (Object.keys(errors).length === 0) {
//       try {
//         const { success, error } = await submitContact(formData);
//         if (success) {
//           console.log('Contact submitted successfully');
//           setFormData({ name: '', email: '', phoneNo: '', message: '' });
//           setIsSubmitted(true);
//           setFormErrors({}); // Reset form errors
//         } else {
//           console.error('Error submitting contact:', error);
//         }
//       } catch (error) {
//         console.error('Error submitting contact:', error);
//       }
//     } else {
//       setFormErrors(errors);
//     }
//   };

//   const validateForm = (data) => {
//     const errors = {};
//     if (!data.name) errors.name = 'Name is required';
//     if (!data.email) errors.email = 'Email is required';
//     if (!data.phoneNo) errors.phoneNo = 'Phone number is required';
//     if (!data.message) errors.message = 'Message is required';
//     return errors;
//   };

//   const resetForm = () => {
//     setFormData({ name: '', email: '', phoneNo: '', message: '' });
//     setFormErrors({});
//     setIsSubmitted(false);
//   };

//   // Export all functions and variables
//   return { formData, formErrors, isSubmitted, handleInputChange, handleSubmit, resetForm };
// };


// src/components/core/Feature-contacts/state/useContactForm.js
import { useState } from 'react';

// Custom hook to manage contact form state and logic
export const useContactForm = () => {
  // Initialize the form data, form errors, and isSubmitted
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle input changes in the form fields
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      try {
        const { success, error } = await submitContact(formData);
        if (success) {
          console.log('Contact submitted successfully');
          setFormData({ name: '', email: '', phoneNo: '', message: '' });
          setIsSubmitted(true);
          setFormErrors({}); // Reset form errors
        } else {
          console.error('Error submitting contact:', error);
        }
      } catch (error) {
        console.error('Error submitting contact:', error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name) errors.name = 'Name is required';
    if (!data.email) errors.email = 'Email is required';
    if (!data.phoneNo) errors.phoneNo = 'Phone number is required';
    if (!data.message) errors.message = 'Message is required';
    return errors;
  };

  // Function to reset the form
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phoneNo: '',
      message: '',
    });
    setFormErrors({});
    setIsSubmitted(false);
  };

  // Export all functions and variables
  return { formData, formErrors, isSubmitted, handleInputChange, handleSubmit, resetForm };
};

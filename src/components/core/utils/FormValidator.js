

 const FormValidator = (data) => {
    const errors = {};
    if (!data.name) errors.name = 'Name is required';
    if (!data.email) errors.email = 'Email is required';
    if (!data.phoneNo) errors.phoneNo = 'Phone number is required';
    if (!data.message) errors.message = 'Message is required';
    return errors;
  };
  export default FormValidator;
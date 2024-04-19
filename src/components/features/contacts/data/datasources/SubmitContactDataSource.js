// This is a mock data source for demonstration purposes
// Replace this with your actual implementation for submitting the contact form

const submitContact = async (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const success = Math.random() > 0.5; // Simulating a random success or failure
        if (success) {
          resolve({ success: true });
        } else {
          resolve({ success: false, error: 'Failed to submit contact form' });
        }
      }, 1000);
    });
  };
  
  export default submitContact;
// This file can contain the state management logic for the contact form
// For simplicity, we'll leave it empty for now

// import { atom } from 'nanostores';
// import { validateForm } from '../../../core/utils/FormValidator';
// import { submitContactUseCase } from '../../service/use-case/SubmitContactUseCase';

// const formStore = atom({
//   formData: {
//     name: '',
//     email: '',
//     phoneNo: '',
//     message: '',
//   },
//   formErrors: {},
//   isSubmitted: false,
//   handleInputChange: (e) => {
//     formStore.set((prev) => ({
//       ...prev,
//       formData: {
//         ...prev.formData,
//         [e.target.name]: e.target.value,
//       },
//     }));
//   },
//   handleSubmit: async (e) => {
//     e.preventDefault();
//     const errors = validateForm(formStore.get().formData);
//     if (Object.keys(errors).length === 0) {
//       const { success, error } = await submitContactUseCase(formStore.get().formData);
//       if (success) {
//         formStore.set({
//           formData: {
//             name: '',
//             email: '',
//             phoneNo: '',
//             message: '',
//           },
//           formErrors: {},
//           isSubmitted: true,
//         });
//       } else {
//         console.error('Error submitting contact:', error);
//       }
//     } else {
//       formStore.set((prev) => ({
//         ...prev,
//         formErrors: errors,
//       }));
//     }
//   },
//   resetForm: () => {
//     formStore.set({
//       formData: {
//         name: '',
//         email: '',
//         phoneNo: '',
//         message: '',
//       },
//       formErrors: {},
//       isSubmitted: false,
//     });
//   },
// });

// export { formStore };


import { atom } from 'nanostores';
//import { FormValidator } from '../../../core/utils/FormValidator';
import { SubmitContact } from '../../services/usecases/SubmitContact';

const formStore = atom({
  formData: {
    name: '',
    email: '',
    phoneNo: '',
    message: '',
  },
  formErrors: {},
  isSubmitted: false,
  handleInputChange: (e) => {
    formStore.set((prev) => ({
      ...prev,
      formData: {
        ...prev.formData,
        [e.target.name]: e.target.value,
      },
    }));
  },
  handleSubmit: async (e) => {
    e.preventDefault();
    const errors = validateForm(formStore.get().formData);
    if (Object.keys(errors).length === 0) {
      const { success, error } = await submitContactUseCase(formStore.get().formData);
      if (success) {
        formStore.set({
          formData: {
            name: '',
            email: '',
            phoneNo: '',
            message: '',
          },
          formErrors: {},
          isSubmitted: true,
        });
      } else {
        console.error('Error submitting contact:', error);
      }
    } else {
      formStore.set((prev) => ({
        ...prev,
        formErrors: errors,
      }));
    }
  },
  resetForm: () => {
    formStore.set({
      formData: {
        name: '',
        email: '',
        phoneNo: '',
        message: '',
      },
      formErrors: {},
      isSubmitted: false,
    });
  },
});

export { formStore };
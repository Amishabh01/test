// contactFormStore.js (or contactFormStore.ts)
import { atom } from 'nanostores';

export const formDataStore = atom({
  name: '',
  email: '',
  phoneNo: '',
  message: '',
});

export const formErrorsStore = atom({});
export const isSubmittedStore = atom(false);
export const showPopupStore = atom(false);
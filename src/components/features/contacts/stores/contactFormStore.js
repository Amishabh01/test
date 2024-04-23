//contactFormStore.js (or contactFormStore.ts)
import { useStore } from 'nanostores';

export const contactFormStore = useStore({
  name: '',
  email: '',
  phoneNo: '',
  message: '',
});

export const formErrorsStore = useStore({});
export const isSubmittedStore = useStore(false);
export const showPopupStore = useStore(false);
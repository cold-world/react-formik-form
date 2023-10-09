import { StarterState } from './store/mainScreenSlice';
import { Step1State } from './store/step1Slice';
import { Step2State } from './store/step2Slice';
import { Step3State } from './store/step3Slice';

export type IFormData = {
  mainScreenData: StarterState;
  step1Data: Step1State;
  step2Data: Step2State;
  step3Data: Step3State;
};

export const submitFormData = async (formData: IFormData) => {
  try {
    const response = await fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form data');
    }

    console.log('Form data submitted successfully!', formData);
  } catch (error) {
    console.error('Error submitting form data:', error);
  }
};

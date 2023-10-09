import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { decrementStep } from '../store/stepSlice';
import { updateStep3 } from '../store/step3Slice';
import { IRootState } from '../store/store';
import { IFormData, submitFormData } from '../api';
import { Frame, Label, Stepper } from '../components/layout';
import { Button, Modal } from '../components/ui';

import styles from '../components/ui/input/input.module.css';
import { useState } from 'react';

const Step3 = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state: IRootState) => state.stepReducer.currentStep);
  const completedStep = useSelector((state: IRootState) => state.stepReducer.completedStep);
  const mainScreenData = useSelector((state: IRootState) => state.mainScreen);
  const step1Data = useSelector((state: IRootState) => state.step1);
  const step2Data = useSelector((state: IRootState) => state.step2);
  const step3Data = useSelector((state: IRootState) => state.step3);

  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const textAreaStyles = `${styles.input} ${styles.textarea}`;

  const handleBack = () => {
    dispatch(decrementStep());
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    dispatch(updateStep3({ textarea: value }));
  };

  const handleSubmit = async () => {
    const formData: IFormData = {
      mainScreenData,
      step1Data,
      step2Data,
      step3Data,
    };
    try {
      await submitFormData(formData);
      setSubmissionSuccess(true);
      setIsModalOpen(true);
    } catch (error) {
      setSubmissionSuccess(false);
      setIsModalOpen(true);
    }
  };

  const letterCount = step3Data.textarea.length;

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Frame>
      <div className='container'>
        <Stepper
          currentStep={currentStep}
          completedStep={completedStep - 1}
          disableNavigation={false}
        />
      </div>
      <Formik
        key={3}
        enableReinitialize
        initialValues={step3Data}
        validationSchema={Yup.object({
          textarea: Yup.string().required('Required'),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label htmlFor='textarea'>About</Label>
          <textarea
            id='textarea'
            name='textarea'
            className={textAreaStyles}
            placeholder='textarea'
            value={step3Data.textarea}
            onChange={handleChange}
          />
          <div style={{ textAlign: 'right' }}>Letter Count: {letterCount}</div>
          <ErrorMessage name='textarea' component='div' className='tip' />

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6.7rem' }}>
            <Button name='Back' type='button' onClick={handleBack} />
            <Button name='Submit' type='submit' />
          </div>
        </Form>
      </Formik>

      <Modal
        isOpen={isModalOpen}
        message={submissionSuccess ? 'Success' : 'Failure'}
        onClose={closeModal}
      />
    </Frame>
  );
};

export default Step3;

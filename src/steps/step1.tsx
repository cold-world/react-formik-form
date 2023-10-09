import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { incrementStep, decrementStep } from '../store/stepSlice';
import { Step1State, updateStep1 } from '../store/step1Slice';
import { Frame, Label, Stepper } from '../components/layout';
import { Button } from '../components/ui';
import { IRootState } from '../store/store';

import styles from '../components/ui/input/input.module.css';

const StepOne = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state: IRootState) => state.stepReducer.currentStep);
  const completedStep = useSelector((state: IRootState) => state.stepReducer.completedStep);
  const step1Data = useSelector((state: IRootState) => state.step1);

  const handleBack = () => {
    dispatch(decrementStep());
    window.history.pushState(null, '', '/');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedStep1Data: Step1State = {
      ...step1Data,
      [name]: value,
    };
    dispatch(updateStep1(updatedStep1Data));
  };

  const handleSubmit = (values: Step1State) => {
    dispatch(incrementStep());
    dispatch(updateStep1(values));
  };

  return (
    <Frame>
      <div className='container'>
        <Stepper currentStep={currentStep - 1} completedStep={completedStep - 1} />
      </div>
      <Formik
        key={1}
        enableReinitialize
        initialValues={step1Data}
        validationSchema={Yup.object({
          nickname: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .matches(/^[a-zA-Z0-9]*$/, 'Only alphanumeric characters are allowed')
            .required('Required'),
          name: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .matches(/^[a-zA-Z]*$/, 'Only alphabetic characters are allowed')
            .required('Required'),
          surname: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .matches(/^[a-zA-Z]*$/, 'Only alphabetic characters are allowed')
            .required('Required'),
          sex: Yup.string().oneOf(['man', 'woman'], 'Invalid sex').required('Required'),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label htmlFor='nickname'>Nickname</Label>
          <Field
            id='nickname'
            name='nickname'
            type='text'
            className={styles.input}
            placeholder='Nickname'
            onChange={handleChange}
          />
          <ErrorMessage name='nickname' component='div' className='tip' />

          <Label htmlFor='name'>Name</Label>
          <Field
            id='name'
            name='name'
            type='text'
            className={styles.input}
            placeholder='Igor'
            onChange={handleChange}
          />
          <ErrorMessage name='name' component='div' className='tip' />

          <Label htmlFor='surname'>Surname</Label>
          <Field
            id='surname'
            name='surname'
            type='text'
            className={styles.input}
            placeholder='Andreev'
            onChange={handleChange}
          />
          <ErrorMessage name='surname' component='div' className='tip' />

          <Label htmlFor='sex'>Sex</Label>
          <Field id='sex' name='sex' as='select' className={styles.input} onChange={handleChange}>
            <option value='' disabled hidden>
              Choose please
            </option>
            <option value='man'>Man</option>
            <option value='woman'>Woman</option>
          </Field>
          <ErrorMessage name='sex' component='div' className='tip' />

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6.7rem' }}>
            <Button name='Back' type='button' onClick={handleBack} />
            <Button type='submit' name='Next' />
          </div>
        </Form>
      </Formik>
    </Frame>
  );
};

export default StepOne;

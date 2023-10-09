import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import { incrementStep } from '../../store/stepSlice';
import { Frame, MainHeading, Label } from '../../components/layout';
import { Button } from '../../components/ui';
import { StarterState, updateStarter } from '../../store/mainScreenSlice';
import { IRootState } from '../../store/store';

import styles from '../../components/ui/input/input.module.css';

const MainScreen = () => {
  const dispatch = useDispatch();
  const mainScreenData = useSelector((state: IRootState) => state.mainScreen);

  const handleSubmit = (values: StarterState) => {
    dispatch(updateStarter(values));
    dispatch(incrementStep());
    window.history.pushState(null, '', '/form');
  };

  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Invalid phone number')
      .required('Required'),
    email: Yup.string()
      .email()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format')
      .required('Required'),
  });

  const mainScreenInputStyle = `${styles.input} ${
    window.location.pathname === '/' ? styles.homeInput : ''
  }`;

  return (
    <Frame>
      <MainHeading />
      <Formik
        enableReinitialize
        initialValues={mainScreenData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label htmlFor='phone'>Phone</Label>
          <Field name='phone' id='phone'>
            {({ field }: { field: any }) => (
              <InputMask
                {...field}
                mask='+7 (999) 999-99-99'
                placeholder='+7 (999) 999-99-99'
                className={mainScreenInputStyle}
                id='phone'
                onch
              />
            )}
          </Field>
          <ErrorMessage name='phone' component='div' className='tip' />

          <Label htmlFor='email'>Email</Label>
          <Field
            id='email'
            name='email'
            type='email'
            className={mainScreenInputStyle}
            placeholder='youremail@gmail.com'
          />
          <ErrorMessage name='email' component='div' className='tip' />

          <div style={{ marginTop: '6.7rem' }}>
            <Button type='submit' name='Next' />
          </div>
        </Form>
      </Formik>
    </Frame>
  );
};

export default MainScreen;

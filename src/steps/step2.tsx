import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { incrementStep, decrementStep } from '../store/stepSlice';
import { Step2State, updateStep2, removeAdvantage, toggleCheckbox } from '../store/step2Slice';
import { Frame, Label, Stepper } from '../components/layout';
import { Button } from '../components/ui';
import icon from '../assets/remove-button.png';
import { IRootState } from '../store/store';

import styles from '../components/ui/input/input.module.css';

const Step2 = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state: IRootState) => state.stepReducer.currentStep);
  const completedStep = useSelector((state: IRootState) => state.stepReducer.completedStep);
  const step2Data = useSelector((state: IRootState) => state.step2);

  const handleBack = () => {
    dispatch(decrementStep());
  };

  const handleSubmit = (values: Step2State) => {
    dispatch(updateStep2(values));
    dispatch(incrementStep());
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      const checkboxValue = Number(value);
      let updatedCheckboxes: number[];

      if (checked) {
        updatedCheckboxes = [...step2Data.checkboxes, checkboxValue];
      } else {
        updatedCheckboxes = step2Data.checkboxes.filter((cb) => cb !== checkboxValue);
      }

      dispatch(updateStep2({ ...step2Data, checkboxes: updatedCheckboxes }));
    } else if (name.startsWith('advantages')) {
      const index = Number(name.split('[')[1].split(']')[0]);
      const updatedAdvantages = [...step2Data.advantages];
      updatedAdvantages[index] = value;
      dispatch(updateStep2({ ...step2Data, advantages: updatedAdvantages }));
    } else {
      dispatch(updateStep2({ ...step2Data, [name]: value }));
    }
  };

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleRemoveAdvantage = (index: number, remove: Function) => {
    dispatch(removeAdvantage(index));
    remove(index);
  };

  return (
    <Frame>
      <div className='container'>
        <Stepper currentStep={currentStep} completedStep={completedStep - 1} />
      </div>
      <Formik
        key={2}
        enableReinitialize
        initialValues={step2Data}
        validationSchema={Yup.object({
          advantages: Yup.array()
            .of(Yup.string().required('Enter something'))
            .min(1, 'Add at least one'),
          checkboxes: Yup.array().min(1, 'Select at least one checkbox').required('Required'),
          radio: Yup.string().required('Required'),
        })}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <FieldArray name='advantages'>
              {({ push, remove, form }) => (
                <div>
                  <Label htmlFor='advantages'>Advantages</Label>
                  {form.values.advantages.map((value: string, index: number) => (
                    <div style={{ display: 'flex', gap: '1.8rem' }} key={index}>
                      <Field
                        name={`advantages[${index}]`}
                        type='text'
                        className={styles.input}
                        placeholder='Advantages'
                        onChange={handleChange}
                      />
                      <button
                        name='Remove'
                        type='button'
                        onClick={() => handleRemoveAdvantage(index, remove)}
                      >
                        <img src={icon} alt='remove' />
                      </button>
                    </div>
                  ))}
                  <Button name='Add' type='button' onClick={() => push('')} />
                  <ErrorMessage name='advantages' component='div' className='tip' />
                </div>
              )}
            </FieldArray>

            <Label htmlFor='checkboxes'>Checkbox group</Label>
            <div>
              <Label isCheckBox={true}>
                <Field
                  type='checkbox'
                  name='checkboxes'
                  value='1'
                  onChange={handleChange}
                  checked={step2Data.checkboxes.includes(1)}
                />
                1
              </Label>
              <Label isCheckBox={true}>
                <Field
                  type='checkbox'
                  name='checkboxes'
                  value='2'
                  onChange={handleChange}
                  checked={step2Data.checkboxes.includes(2)}
                />
                2
              </Label>
              <Label isCheckBox={true}>
                <Field
                  type='checkbox'
                  name='checkboxes'
                  value='3'
                  onChange={handleChange}
                  checked={step2Data.checkboxes.includes(3)}
                />
                3
              </Label>
              <ErrorMessage name='checkboxes' component='div' className='tip' />
            </div>

            <Label htmlFor='radio'>Radio group</Label>
            <div>
              <Label isCheckBox={true}>
                <Field type='radio' name='radio' value='1' onChange={handleChange} />1
              </Label>
              <Label isCheckBox={true}>
                <Field type='radio' name='radio' value='2' onChange={handleChange} />2
              </Label>
              <Label isCheckBox={true}>
                <Field type='radio' name='radio' value='3' onChange={handleChange} />3
              </Label>
              <ErrorMessage name='radio' component='div' className='tip' />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6.7rem' }}>
              <Button name='Back' type='button' onClick={handleBack} />
              <Button name='Next' type='submit' />
            </div>
          </Form>
        )}
      </Formik>
    </Frame>
  );
};

export default Step2;

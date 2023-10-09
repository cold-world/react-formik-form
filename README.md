React formik form.
=======================================

React,Redux, formik, yup, typescript.

Main goal -> Create multipage form.


* * *
### [Demo](https://cold-world.github.io/react-formik-form/)

![Alt Text](https://ibb.co/JnW8pfZ)
![Alt Text](https://ibb.co/n6nhhhK)
![Alt Text](https://ibb.co/JFxs9Kw)
![Alt Text](https://ibb.co/N7Nv9zW)

* * *



### A piece of code

```
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
```

### Download & Installation

```shell 
git clone https://github.com/cold-world/react-formik-form.git
cd <project-dir>
npm install
npm start
```

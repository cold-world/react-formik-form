import Main from './steps/main/main';
import { useSelector } from 'react-redux';
import { IRootState } from './store/store';
import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';

import './App.css';

const App = () => {
  const { currentStep } = useSelector((state: IRootState) => state.stepReducer);

  return (
    <div className='App'>
      {currentStep === 0 && <Main />}
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
    </div>
  );
};

export default App;

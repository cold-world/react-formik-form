import './stepper.css';

export const steps = [
  { id: 'step01', label: '1' },
  { id: 'step02', label: '2' },
  { id: 'step03', label: '3' },
];

interface StepProgressBarProps {
  currentStep: number;
  completedStep: number;
  disableNavigation?: boolean;
  handleStepClicked?: (value: number) => void;
}

export const Stepper: React.FC<StepProgressBarProps> = ({
  currentStep,
  completedStep,
}) => {
  const isStepCurrent = (index: number) => index + 1 === currentStep;
  const isStepCompleted = (index: number) =>
    index + 1 !== currentStep && completedStep! >= index + 1;
  const isStepNavigable = (index: number) => completedStep! >= index;

  const getStepClassNames = (index: number) => {
    let result = 'stepProgressBar__step';
    if (isStepCurrent(index)) {
      result = `${result} stepProgressBar__step--current`;
    }
    if (isStepCompleted(index)) {
      result = `${result} stepProgressBar__step--completed`;
    }
    if (isStepNavigable(index)) {
      result = `${result} stepProgressBar__step--navigable`;
    }
    return result;
  };

  return (
    <ol className='stepProgressBar'>
      {steps.map((step, index) => (
        <li key={step.id} className={getStepClassNames(index)}>
          {index > 0 && <div className='stepProgressBar__step__line'></div>}
          <div
            className='stepProgressBar__step__button'
          >
            <span className='stepProgressBar__step__button__indicator'>
              {isStepCompleted(index) && (
                <svg
                  className='stepProgressBar__step__button__indicator__icon-completed'
                  width='10'
                  height='7'
                  viewBox='0 0 12 9'
                  fill='currentColor'
                >
                  <path d='M1.05025 3.70714C1.44077 3.31661 2.07394 3.31661 2.46446 3.70714L5.29289 6.53556C5.68341 6.92609 5.68341 7.55925 5.29289 7.94978C4.90236 8.3403 4.2692 8.3403 3.87867 7.94978L1.05025 5.12135C0.659724 4.73083 0.659724 4.09766 1.05025 3.70714Z' />
                  <path d='M10.9498 0.878709C11.3403 1.26923 11.3403 1.9024 10.9498 2.29292L5.29289 7.94978C4.90236 8.3403 4.2692 8.3403 3.87867 7.94978C3.48815 7.55925 3.48816 6.92609 3.87869 6.53556L9.53554 0.878709C9.92606 0.488184 10.5592 0.488184 10.9498 0.878709Z' />
                </svg>
              )}
            </span>
            <span className='stepProgressBar__step__button__label'>{step.label}</span>
          </div>
        </li>
      ))}
    </ol>
  );
};

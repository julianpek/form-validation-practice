import { useState } from 'react';

const useInputNew = validateValue => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !validateValue(enteredValue) && isTouched;

  const onChangeHandler = e => {
    setEnteredValue(e.target.value);
  };

  const onBlurHandler = e => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    valueIsValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInputNew;

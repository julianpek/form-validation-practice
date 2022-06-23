import useInputNew from '../hooks/use-input-new';

const BasicForm = props => {
  const {
    value: enteredName,
    hasError: nameHasError,
    valueIsValid: nameIsValid,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInputNew(value => value.trim() !== '');

  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    valueIsValid: lastNameValid,
    onChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInputNew(value => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailHasError,
    valueIsValid: emailIsValid,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInputNew(value => {
    const regex = /\S+@\S+\.\S+/;
    const result = regex.test(value);
    return result;
  });

  let isFormValid = false;

  if (nameIsValid && lastNameValid && emailIsValid) {
    isFormValid = true;
  }

  const onSubmitFormHandler = e => {
    e.preventDefault();

    nameReset();
    lastNameReset();
    emailReset();
  };

  const nameClasses = nameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className='control-group'>
        <div className={nameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameHasError && (
            <p className='error-text'>Please enter a valid name.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && (
            <p className='error-text'>Please enter a valid name.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

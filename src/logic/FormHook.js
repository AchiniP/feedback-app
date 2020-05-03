import { useState } from 'react';

const FormHook = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs(input => ({ ...input, [event.target.name]: event.target.value }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};
export default FormHook;

import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormBuilder } from '../.';
import { useForm } from 'react-hook-form';

const App = () => {
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log('data', data);
  };

  return (
    <div>
      <h1>Submit user details below</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            {
              type: 'email',
              name: 'email',
              label: 'Email',
              rules: {
                required: {
                  value: true,
                  message: 'Email is required',
                },
              },
            },
            {
              type: 'password',
              name: 'password',
              label: 'Password',
              rules: {
                required: {
                  value: true,
                  message: 'Password is required',
                },
              },
            },
          ]}
        />
        <button onClick={handleSubmit(onSubmit)}>Submit</button>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

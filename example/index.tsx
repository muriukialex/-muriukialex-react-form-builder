import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormBuilder } from '../.';
import { useForm } from 'react-hook-form';

const App = () => {
  const { control, handleSubmit, setFocus } = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  const {
    control: control2,
    handleSubmit: handleSubmit2,
    setFocus: setFocus2,
  } = useForm();

  const onSubmit2 = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="p-10">
      <h1>Submit user details below</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          className={
            'border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          }
          formConfigArray={[
            {
              type: 'email',
              name: 'email',
              label: 'Email',
              rules: {
                required: {
                  message: 'Email is required',
                  value: true,
                },
              },
            },
            {
              type: 'password',
              name: 'password',
              label: 'Password',
              rules: {
                required: {
                  message: 'Password is required',
                  value: true,
                },
              },
            },
          ]}
        />
        <button onClick={handleSubmit(onSubmit)}>Submit</button>
      </form>

      <h1>Submit user details below - using tailwind</h1>
      <form onSubmit={handleSubmit2(onSubmit2)}>
        <FormBuilder
          control={control2}
          setFocus={setFocus2}
          className={
            'border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          }
          formConfigArray={[
            {
              type: 'text',
              name: 'phone_number',
              label: 'Phone number',
              rules: {
                required: {
                  message: 'Phone number is required',
                  value: true,
                },
              },
            },
            {
              type: 'text',
              name: 'address',
              label: 'Address',
            },
          ]}
        />
        <button onClick={handleSubmit2(onSubmit2)}>Submit</button>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

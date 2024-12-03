import React from 'react';
import { render, screen, getByLabelText } from '@testing-library/react';
import { FormBuilder } from '../.';
import { useForm } from 'react-hook-form';

test('it mounts the component successfully', () => {
  const { control, setFocus, formState } = useForm();

  render(
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
      ]}
    />
  );

  const emailField = screen.getByLabelText('Email');
  expect(emailField).toHaveTextContent('Email');
});

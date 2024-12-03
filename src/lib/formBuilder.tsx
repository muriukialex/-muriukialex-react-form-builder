import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  Control,
  Controller,
  FieldValues,
  UseFormSetFocus,
} from 'react-hook-form';
import { EyeFill, EyeOffFill } from '../assets';

interface FormBuilderProps<T extends FieldValues> {
  control: Control<T, any>;
  setFocus: UseFormSetFocus<T>;
  formConfigArray: any;
  className: string;
}

export default function FormBuilder<T extends FieldValues>({
  control,
  setFocus,
  formConfigArray,
  className,
  ...props
}: FormBuilderProps<T>) {
  const [showPassword, setShowPassword] = useState(true);

  const mergedClass = twMerge(className);
  return (
    <div>
      {formConfigArray.map((fieldConfig: any, index: any) => {
        const {
          type,
          name,
          label,
          rules,
          description,
          className,
          ...textInputProps
        } = fieldConfig;

        return (
          <div key={index} className="relative">
            <label htmlFor={name}>{label}</label>
            <Controller
              control={control}
              name={name}
              rules={rules}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <>
                  <input
                    id={name}
                    className={mergedClass}
                    onChange={onChange}
                    type={
                      type === 'password'
                        ? showPassword
                          ? 'text'
                          : 'password'
                        : type
                    }
                    onBlur={onBlur}
                    value={value || ''}
                    {...textInputProps}
                  />
                  {type === 'password' && showPassword && (
                    <EyeFill
                      className="absolute right-4 top-9"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                  {type === 'password' && !showPassword && (
                    <EyeOffFill
                      className="absolute right-4 top-9"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                  {error?.message ? <div>{error.message}</div> : null}
                  {description && !error?.message ? (
                    <div>{description}</div>
                  ) : null}
                </>
              )}
              {...props}
            />
          </div>
        );
      })}
    </div>
  );
}

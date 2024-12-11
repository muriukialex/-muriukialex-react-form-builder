# FormBuilder Component

The `FormBuilder` component is a versatile and reusable utility for dynamically generating forms using the `react-hook-form` library. It simplifies form management by automating validation and rendering for various input types, including password visibility toggles.

---

## Features

- Dynamically renders form fields based on configuration.
- Built-in support for form validation with `react-hook-form`.
- Toggles password visibility with intuitive icons.
- Accepts custom styles using TailwindCSS.
- Easily extensible to support additional input types or custom behavior.

---

## Installation

**Install required dependencies**:

```bash
npm install @muriukialex/react-form-builder react-hook-form tailwind-merge
```

---

## Props

### `FormBuilder` Props

| Prop              | Type                 | Description                                                      |
| ----------------- | -------------------- | ---------------------------------------------------------------- |
| `control`         | `Control<T>`         | Control object from `react-hook-form` to manage the form state.  |
| `setFocus`        | `UseFormSetFocus<T>` | Function from `react-hook-form` to set focus on specific fields. |
| `formConfigArray` | `Array<any>`         | Array defining the configuration for each field (see below).     |
| `className`       | `string`             | Additional TailwindCSS classes for the input fields.             |

### `formConfigArray` Configuration

Each field configuration in the `formConfigArray` should have the following properties:

| Property      | Type     | Description                                                                               |
| ------------- | -------- | ----------------------------------------------------------------------------------------- |
| `type`        | `string` | The input type (e.g., `text`, `email`, `password`).                                       |
| `name`        | `string` | The unique identifier for the input field.                                                |
| `label`       | `string` | The label displayed for the input field.                                                  |
| `rules`       | `object` | Validation rules as per `react-hook-form` (e.g., `required`, `minLength`, etc.).          |
| `description` | `string` | Optional description text displayed below the input field when there is no error.         |
| `className`   | `string` | Additional TailwindCSS classes for this specific input field.                             |
| `...props`    | `any`    | Additional props passed to the `<input>` element (e.g., `placeholder`, `disabled`, etc.). |

---

## Example Usage

### Basic Example

```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormBuilder } from '@muriukialex/react-form-builder';

export default function App() {
  const { control, handleSubmit, setFocus } = useForm();

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormBuilder
        control={control}
        setFocus={setFocus}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
      >
        Submit
      </button>
    </form>
  );
}
```

---

## Customization

### Password Visibility Toggle

The `FormBuilder` automatically includes password visibility toggles using the `EyeFill` and `EyeOffFill` icons. These icons are positioned using TailwindCSS classes (`absolute`, `right-4`, `top-9`) and can be customized as needed.

---

## Styling

The component uses `tailwind-merge` to allow easy combination of default and custom styles. Use the `className` prop in `FormBuilder` or individual fields to define specific styles.

---

## Validation

Leverage `react-hook-form`'s `rules` to define validation for each field:

- **Required**:
  ```js
  rules: {
    required: { value: true, message: 'Field is required' },
  }
  ```
- **Custom Validation**:
  ```js
  rules: {
    validate: value => value.length > 5 || 'Minimum length is 6 characters',
  }
  ```

---

## License

This component is open-source and can be freely modified to suit your application's needs.

---

Feel free to reach out with any questions or suggestions!

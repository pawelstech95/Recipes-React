import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useYupValidationResolver } from '../utils';

const validationSchema = yup.object({
  title: yup.string().required('Required'),
  ingredients: yup
    .array()
    .of(yup.string())
    .min(1, 'Min 1 ingredient')
    .required('Required'),
  description: yup.string().required('Required'),
});

const Form = ({
  onSubmit,
  defaultValues = { title: '', ingredients: [], description: '' },
}) => {
  const resolver = useYupValidationResolver(validationSchema);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver,
  });

  console.log(errors);

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title: <br />
          <input
            name="title"
            {...register('title')}
            type="text"
            // value={''}
            placeholder=" e.g. pizza"
          />
        </label>
        {errors.title?.message}
        <label>
          Ingredients: <br />
          <select {...register('ingredients')} multiple>
            <option>chease</option>
            <option>milk</option>
            <option>other</option>
          </select>
        </label>
        {errors.ingredients?.message}
        <label>
          Description <br />
          <textarea
            {...register('description')}
            type="text"
            placeholder="Description..."
          />
        </label>
        {errors.description?.message}
        <button className="btn btn__add" type="submit">
          Add
        </button>
        <button
          className="btn btn__remove"
          type="button"
          onClick={() => reset()}
        >
          Clear
        </button>
      </form>
    </>
  );
};

export default Form;

import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({
  onSubmit,
  defaultValues = { title: '', ingredients: [], description: '' },
}) => {
  const { register, handleSubmit, reset } = useForm({ defaultValues });

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
        <label>
          Ingredients: <br />
          <select {...register('ingredients')} multiple>
            <option>chease</option>
            <option>milk</option>
            <option>other</option>
          </select>
        </label>
        <label>
          Description <br />
          <textarea
            {...register('description')}
            type="text"
            placeholder="Description..."
          />
        </label>
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

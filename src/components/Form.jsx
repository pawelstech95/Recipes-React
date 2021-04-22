import React from 'react';
import { useForm } from 'react-hook-form';
import Recipe from './Recipe';
const Form = () => {
  // useForm
  const defaultState = { title: '', ingredients: [], description: '' };
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm(defaultState);
  const onSubmit = (values) => {
    console.log(values);
  };
  const handleAddRecipe = () => {
    console.log();
  };
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
        <button
          className="btn btn__add"
          type="submit"
          onClick={handleAddRecipe}
        >
          Add
        </button>
        <button className="btn btn__remove" type="reset" onClick={() => {}}>
          Clear
        </button>
      </form>
    </>
  );
};

export default Form;

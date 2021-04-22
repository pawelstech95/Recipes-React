import React from 'react';
import { useForm } from 'react-hook-form';
const AddRecipe = () => {
  // useForm
  const defaultState = { title: '', ingredients: [], description: '' };
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm(defaultState);
  const onSubmit = (values) => console.log(values);

  //   console.log(errors, 'errors');

  // Clean button
  const handleClear = (e) => {
    e.preventDefault();
    const clear = HTMLFormElement.reset(defaultState);
    clear()
  };
  return (
    <>
      <h2>Create recipe</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button className="btn btn__remove" onClick={handleClear}>
          Clear
        </button>
      </form>
    </>
  );
};

export default AddRecipe;

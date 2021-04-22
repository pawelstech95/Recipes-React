import React from 'react';
import { useForm } from 'react-hook-form';
const AddRecipe = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values); // w dokumentacji - data
  console.log(errors, 'errors');
  return (
    console.log('render'),
    (
      <>
        <h2>Create recipe</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Title: <br />
            <input
              name="title"
              {...register('Title')}
              type="text"
              // value={''}
              placeholder=" e.g. pizza"
            />
          </label>
          <label>
            Ingredients: <br />
            <select {...register('Ingredients')} multiple>
              <option value="chease">chease</option>
              <option value="milk">milk</option>
              <option value="other">other</option>
            </select>
          </label>
          <label>
            Description <br />
            <textarea
              {...register('Description')}
              type="text"
              placeholder="Description..."
            />
          </label>
          <button className="btn btn__add" type="submit">
            Add
          </button>
          <button className="btn btn__remove">Clear</button>
        </form>
      </>
    )
  );
};

export default AddRecipe;

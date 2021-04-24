import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';
import { useYupValidationResolver } from '../utils';

import Button from '../components/Button';
import FormError from '../components/FormError';
import FormGroup from '../components/FormGroup';
import Input, { Textarea } from '../components/Input';
import Label from '../components/Label';

const Wrapper = styled.form`
  margin-top: 2rem;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  & > * {
    margin-right: 0.5rem;
  }
`;

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

  return (
    <>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            {...register('title')}
            type="text"
            id="title"
            placeholder="e.g. pizza"
          />
          <FormError>{errors.title?.message}</FormError>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="ingredients">Ingredients</Label>
          <Input
            as="select"
            {...register('ingredients')}
            id="ingredients"
            multiple
          >
            <option>chease</option>
            <option>milk</option>
            <option>other</option>
          </Input>
          <FormError>{errors.ingredients?.message}</FormError>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <Textarea
            {...register('description')}
            id="description"
            placeholder="Description..."
          />
          <FormError>{errors.description?.message}</FormError>
        </FormGroup>
        <Footer>
          <Button $variant="brand" type="submit">
            Save
          </Button>
          <Button $variant="light" type="button" onClick={() => reset()}>
            Clear
          </Button>
        </Footer>
      </Wrapper>
    </>
  );
};

export default Form;

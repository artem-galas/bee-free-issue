import { CardCmp } from '../Card';
import { InputCmp } from '../Input';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../store';
import { setTemplate } from '../store/actions';

export const Main = () => {
  const {name} = useSelector((state: State) => state.template);
  const dispatch = useDispatch();

  const nameChange = (name: string) => {
    dispatch(setTemplate({name}));
  }

  return (
    <>
      <CardCmp templateName={name}/>
      <InputCmp templateName={name} onNameChange={nameChange}/>
    </>
  )
}

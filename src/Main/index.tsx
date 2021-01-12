import { CardCmp } from '../Card';
import { InputCmp } from '../Input';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../store';
import { setTemplate } from '../store/actions';
import Editor from '../Editor';

export const Main = () => {
  const {name} = useSelector((state: State) => state.template);
  const dispatch = useDispatch();

  const nameChange = (name: string) => {
    dispatch(setTemplate({name}));
  }

  const onSave = ({jsonContent, htmlContent}: { jsonContent: string; htmlContent: string }) => {
    console.log(name);
  }

  return (
    <>
      <CardCmp templateName={name}/>
      <InputCmp templateName={name} onNameChange={nameChange}/>
      <Editor templateName={name} onSaveHandler={onSave}/>
    </>
  )
}

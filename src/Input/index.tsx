import React, { useState } from 'react';
import { TextField  } from '@rmwc/textfield'
import { Button } from '@rmwc/button';

type InputCmpProp = {
  templateName: string
  onNameChange: (name: string) => void;
}

export const InputCmp = ({ templateName, onNameChange }: InputCmpProp) => {
  const [name, setName] = useState(templateName);

  const change = (ev: any) => {
    setName(ev.target.value);
  }

  const triggerChange = () => {
    onNameChange(name);
  }

  return (
    <>
      <TextField outlined label="Placeholder" onChange={change} value={name} />
      <Button label="Save" raised onClick={triggerChange} />
    </>
  )
}

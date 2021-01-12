import { createAction } from '@reduxjs/toolkit';

export type TemplateData = {
  name: string;
  value: number;
}

export const [ getTemplate, setTemplate] = [
  createAction<TemplateData>('GET_TEMPLATE'),
  createAction<Partial<TemplateData>>('SET_TEMPLATE'),
]

